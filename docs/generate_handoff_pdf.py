#!/usr/bin/env python3
"""Convert AI handoff markdown to PDF for another AI model."""

from fpdf import FPDF
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
MD_PATH = ROOT / "docs" / "AI_HANDOFF_PORTFOLIO_SESSION.md"
PDF_PATH = ROOT / "docs" / "AI_HANDOFF_PORTFOLIO_SESSION.pdf"


class HandoffPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=15)

    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 8)
            self.set_text_color(120, 120, 120)
            self.cell(0, 8, "Aaron Lee Portfolio - AI Handoff Document", align="C", new_x="LMARGIN", new_y="NEXT")
            self.ln(2)

    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, f"Page {self.page_no()}", align="C")

    def section_title(self, text: str, level: int = 1):
        self.ln(4)
        if level == 1:
            self.set_font("Helvetica", "B", 16)
            self.set_text_color(20, 60, 120)
        elif level == 2:
            self.set_font("Helvetica", "B", 13)
            self.set_text_color(30, 80, 140)
        else:
            self.set_font("Helvetica", "B", 11)
            self.set_text_color(40, 40, 40)
        self.multi_cell(0, 7, text)
        self.ln(2)

    def body_text(self, text: str, bold: bool = False):
        self.set_font("Helvetica", "B" if bold else "", 9)
        self.set_text_color(30, 30, 30)
        self.multi_cell(0, 5, text)
        self.ln(1)

    def code_block(self, text: str):
        self.set_fill_color(245, 245, 245)
        self.set_font("Courier", "", 8)
        self.set_text_color(20, 20, 20)
        for line in text.split("\n"):
            self.cell(0, 4.5, "  " + line, new_x="LMARGIN", new_y="NEXT", fill=True)
        self.ln(2)

    def table_row(self, cells: list[str], header: bool = False):
        col_width = 190 / max(len(cells), 1)
        self.set_font("Helvetica", "B" if header else "", 8)
        if header:
            self.set_fill_color(230, 240, 250)
        else:
            self.set_fill_color(255, 255, 255)
        self.set_text_color(30, 30, 30)
        for cell in cells:
            self.cell(col_width, 6, cell[:45], border=1, fill=True)
        self.ln()


def sanitize(text: str) -> str:
    replacements = {
        "\u2014": "-",
        "\u2013": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2022": "-",
        "`": "",
        "**": "",
        "→": "->",
        "—": "-",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text.encode("latin-1", errors="replace").decode("latin-1")


def main():
    content = MD_PATH.read_text(encoding="utf-8")
    pdf = HandoffPDF()
    pdf.set_margins(15, 15, 15)
    pdf.add_page()

    in_code = False
    code_lines: list[str] = []
    in_table = False

    for raw_line in content.split("\n"):
        line = raw_line.rstrip()

        if line.startswith("```"):
            if in_code:
                pdf.code_block(sanitize("\n".join(code_lines)))
                code_lines = []
                in_code = False
            else:
                in_code = True
            continue

        if in_code:
            code_lines.append(line)
            continue

        if line.startswith("# "):
            pdf.section_title(sanitize(line[2:]), 1)
            continue
        if line.startswith("## "):
            pdf.section_title(sanitize(line[3:]), 2)
            continue
        if line.startswith("### "):
            pdf.section_title(sanitize(line[4:]), 3)
            continue

        if line.startswith("|") and "|" in line[1:]:
            if re.match(r"^\|[-| :]+\|$", line):
                continue
            cells = [c.strip() for c in line.strip("|").split("|")]
            is_header = not in_table
            pdf.table_row([sanitize(c) for c in cells], header=is_header)
            in_table = True
            continue
        else:
            in_table = False

        if line.startswith("- "):
            pdf.body_text(sanitize("  • " + line[2:]))
            continue

        if line.startswith("---"):
            pdf.ln(2)
            continue

        if line.strip():
            pdf.body_text(sanitize(line))

    pdf.output(str(PDF_PATH))
    print(f"Generated: {PDF_PATH}")


if __name__ == "__main__":
    main()
