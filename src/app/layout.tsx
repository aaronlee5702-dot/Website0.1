import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AleePort - Aaron Lee | Mechanical Engineer Portfolio",
  description: "AleePort - Professional portfolio of Aaron Lee, experienced mechanical engineer specializing in robotics, renewable energy, and advanced manufacturing. View innovative engineering solutions and projects.",
  keywords: ["AleePort", "Aaron Lee", "mechanical engineer", "robotics", "renewable energy", "manufacturing", "CAD", "ANSYS", "SolidWorks", "engineering portfolio"],
  authors: [{ name: "Aaron Lee" }],
  creator: "Aaron Lee",
  openGraph: {
    title: "AleePort - Aaron Lee | Mechanical Engineer",
    description: "Professional portfolio showcasing innovative mechanical engineering solutions in robotics, renewable energy, and manufacturing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AleePort - Aaron Lee | Mechanical Engineer",
    description: "Professional portfolio showcasing innovative mechanical engineering solutions in robotics, renewable energy, and manufacturing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
