# Aaron Lee Engineering Portfolio — AI Handoff Document

**Document purpose:** Structured review of all user requests, changes made, current project state, and operational commands. Intended for another AI model to resume work without prior conversation context.

**Generated:** 2026-05-30  
**Repository:** `/Users/alee/Desktop/Website0.1`  
**GitHub remote:** `https://github.com/aaronlee5702-dot/Website0.1.git`  
**Live domain (per user):** `aaronwlee.com` (Vercel deployment)  
**Latest commit at generation:** `3dca109` — "Add profile photo to hero section"

---

## 1. Project Overview

| Field | Value |
|-------|-------|
| **Project name** | Aaron Lee Engineering Portfolio |
| **Framework** | Next.js 16.x (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Icons** | lucide-react |
| **Analytics** | @vercel/analytics (enabled on Vercel dashboard) |
| **Hosting** | Vercel |
| **Dev command** | `npm run dev` (uses Turbopack) |
| **Build command** | `npm run build` |
| **Lint command** | `npm run lint` |

### Primary data source
All portfolio content lives in **`src/data/portfolio.ts`**. Components read from this file; most content edits should happen there.

### Key routes
| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home (Hero, About, Skills, Projects, Experience, Contact) |
| `/all-projects` | `src/app/all-projects/page.tsx` | Full project grid with category filters |
| `/projects/[id]` | `src/app/projects/[id]/page.tsx` | Individual project detail pages |
| `/soldering-projects` | `src/app/soldering-projects/page.tsx` | Subfolder for soldering projects |
| `/resume.pdf` | `public/resume.pdf` | Resume (linked from Header) |

---

## 2. Architecture Notes for AI Assistants

### Content model (`portfolio.ts`)
- **`projects[]`** — Main project cards (ids `'1'`–`'9'` currently)
- **`solderingProjects[]`** — Separate array for Bonus Soldering Projects subfolder (currently empty)
- **`experience[]`**, **`education[]`**, **`skills[]`**, **`personalInfo`**

### UI patterns established by user
1. **Aurora borealis gradient** — CSS classes `aurora-bg` and `aurora-content` in `globals.css`; used on project card headers and page headers.
2. **Home Featured Projects** — Shows only first 4 projects (`projects.slice(0, 4)`). No category filter bar on home; replaced with Soldering bonus card linking to `/soldering-projects`.
3. **All Projects page** — Keeps category filters (All / Design / Analysis / Manufacturing / Research) plus a special "Bonus Soldering Projects" card.
4. **Skills section** — Category tabs show 2 related project cards (not percentage bars). "Skills Overview" at bottom shows skill names as pills when category clicked. Manufacturing & Processes includes Bonus → Soldering link.
5. **Project detail pages** — Description from `detailedDescription`; gallery from `images`, `videos`, `pdfs` arrays. "View Source Code" button was removed per user request.
6. **Contact section** — Form and "Current Availability" removed; only contact info remains.
7. **Header** — Logo text: "Aaron Lee Portfolio". Resume opens `/resume.pdf` in new tab.
8. **Hero profile photo** — `public/profile.png` with CSS background positioning in `Hero.tsx` (`backgroundSize: '211%'`, `backgroundPosition: '45% 55%'`).

### Files most frequently edited
```
src/data/portfolio.ts
src/components/Hero.tsx
src/components/About.tsx
src/components/Projects.tsx
src/components/Skills.tsx
src/components/Contact.tsx
src/components/Header.tsx
src/components/Experience.tsx
src/app/all-projects/page.tsx
src/app/projects/[id]/page.tsx
src/app/soldering-projects/page.tsx
src/app/layout.tsx
```

---

## 3. Complete Chronological User Request Log

Each entry: **User request** → **Action taken** → **Status**

### Phase A — Initial setup & About/Skills/Contact
| # | User request | Implementation | Status |
|---|--------------|----------------|--------|
| 1 | Run on local dev server | `npm install`, `npm run dev` | Done |
| 2 | About education: replace achievements with NT@B, SEB, Jacob's Design Innovation, brain cell research | Updated `education` in portfolio.ts | Done |
| 3 | Remove "Renewable Energy Research" from Beyond Engineering | Updated `About.tsx` | Done |
| 4 | Skills: PLC Programming → Java, LabVIEW → Javascript | Updated `skills` in portfolio.ts | Done |
| 5 | Contact: remove "Send a Message" and "Current Availability" | Updated `Contact.tsx` | Done |
| 6 | Remove "Get In Touch" header/subtitle from Contact | Updated `Contact.tsx` | Done |

### Phase B — Project descriptions & content
| # | User request | Implementation | Status |
|---|--------------|----------------|--------|
| 7 | Add Description section on project detail pages for all 4 projects | Added `detailedDescription` field + UI in project page | Done |
| 8 | 6-axis arm: remove testing sentence; add 3D printing / motor housing sentences | Updated project id `'1'` | Done (later replaced with resume text) |
| 9 | Automated Lab System: remove ANSYS Fluent sentence & technology | Updated project id `'2'` | Done |
| 10 | Add bullet points for incubator project | Updated `detailedDescription` for id `'2'` | Done |
| 11 | Replace heat exchanger sentence with incubator description | Updated brief `description` | Done |
| 12 | Add SolidWorks FEA and CAD to incubator technologies | Updated technologies array | Done |
| 13 | Prusa MK3s: change brief description | Updated project id `'3'` | Done |
| 14 | Prusa MK3s: bullet points in description | Updated `detailedDescription` | Done |
| 15 | Wind Turbine: remove patent, change noise bullet to Solidworks FEA practice | Updated highlights | Done |
| 16 | Prusa: add enclosure & smaller nozzle sentence | Updated `detailedDescription` | Done |
| 17 | Wind Turbine: replace final sentence with 3D printing / ASA testing text | Updated `detailedDescription` | Done |
| 18 | Wind Turbine: add SolidWorks FEA and CAD to technologies | Updated technologies | Done |
| 19 | Hero: "3 Patents Filed" → "2 Research Projects" | Updated `Hero.tsx` | Done |
| 20 | Update LinkedIn link | Updated `personalInfo.linkedin` | Done |
| 21 | Fix GitHub link (was wrong URL) | Updated `personalInfo.github` to `aaronlee5702-dot` | Done |

### Phase C — About, branding, deployment
| # | User request | Implementation | Status |
|---|--------------|----------------|--------|
| 22 | About: replace mentoring/open-source paragraph with CAD/circuit/tennis/hiking | Updated `About.tsx` | Done |
| 23 | About: 6 years mechanical → 6 years CAD; renewable → medical technologies | Updated `About.tsx` | Done |
| 24 | About: "business value" → "advancement" | Updated `About.tsx` | Done |
| 25 | Deploy with Vercel | Vercel CLI login & deploy | Done |
| 26 | TSMC title → full company name | Updated experience entry | Done |
| 27 | TSMC location → Phoenix, AZ; dates May 2025 - Aug 2025 | Updated experience | Done |
| 28 | AleePort → Aaron Lee Portfolio | Updated `Header.tsx` | Done |
| 29 | Site title → Aaron Lee Engineering Portfolio | Updated `layout.tsx` metadata | Done |
| 30 | Add iRhythm Technologies experience | Added as experience id `'1'`, shifted others | Done |
| 31 | iRhythm description update & location San Francisco, CA | Updated experience | Done |
| 32 | Replace browser favicon with UC Berkeley logo | Attempted; corrupted favicon removed | Reverted/failed — favicon removed |
| 33 | Fix resume access | Resume at `public/resume.pdf`, Header links to it | Done |
| 34 | Hero: "15+ Technologies" → "15+ Engineering Skills" | Updated `Hero.tsx` | Done |
| 35 | Contact intro text edit (remove consulting services) | Updated `Contact.tsx` | Done |

### Phase D — Projects UI & new pages
| # | User request | Implementation | Status |
|---|--------------|----------------|--------|
| 36 | "More Projects" button → All Projects page | Created `src/app/all-projects/page.tsx` | Done |
| 37 | Aurora animation on All Projects header | Applied aurora-bg classes | Done |
| 38 | Move "All Projects" button below subtitle on home | Updated `Projects.tsx` | Done |
| 39 | Aurora effect on all project cards (home + all-projects) | Updated card headers | Done |
| 40 | Home page: only first 4 projects | `projects.slice(0, 4)` | Done |
| 41 | Add SEB: Tracking Project | Added project id `'5'` | Done |
| 42 | Trim SEB description (remove last 2 sentences) | Updated `detailedDescription` | Done |
| 43 | Push to GitHub | Committed & pushed | Done |
| 44 | Next.js security vulnerability (Vercel deploy fail) | `npm install next@latest`, audit fix | Done |
| 45 | 6-axis arm description from resume PDF | Replaced `detailedDescription` | Done |
| 46 | Automated lab description from resume PDF | Replaced `detailedDescription` | Done |
| 47 | Display incubator pictures on project page | Added `images`/`videos` arrays | Done |

### Phase E — Skills redesign & new projects
| # | User request | Implementation | Status |
|---|--------------|----------------|--------|
| 48 | Skills: show 2 related project cards instead of % bars | Redesigned `Skills.tsx` | Done |
| 49 | Skills Overview: clickable categories, show skill names only | Updated `Skills.tsx` | Done |
| 50 | Add Soldering to Manufacturing skills | Added to skills array | Done |
| 51 | Add Self Balancing Cube & DIY Gimbal (empty details) | Projects id `'7'`, `'8'` | Done — awaiting content |
| 52 | Bonus Soldering Projects subfolder card | `solderingProjects` array + `/soldering-projects` page | Done |
| 53 | Manufacturing skills: Bonus Soldering link | Added in `Skills.tsx` | Done |
| 54 | Home Featured Projects: replace filter bar with Soldering card | Updated `Projects.tsx` | Done |
| 55 | Add Plant Growing Hydroponic System | Project id `'9'` (empty details) | Done — awaiting content |

### Phase F — Analytics, git, profile photo
| # | User request | Implementation | Status |
|---|--------------|----------------|--------|
| 56 | Implement Vercel Web Analytics | `npm install @vercel/analytics`, `<Analytics />` in layout | Done |
| 57 | Explain git push commands | Provided `git add`, `commit`, `push` instructions | Done |
| 58 | Terminal: how to exit dev server | Explained Ctrl+C or new terminal tab | Done |
| 59 | Analytics already working on Vercel | Confirmed enabled (1 visitor, 2 page views seen) | Done |
| 60 | Explain Visitors / Page Views / Bounce Rate | Provided definitions | Done |
| 61 | Upload profile photo to Hero circle | `public/profile.png`, updated `Hero.tsx` | Done |
| 62 | Fix photo framing (LinkedIn reference) | CSS background-size/position tuning | Done |
| 63 | Zoom adjustments (5%, 10%, 2%, revert) | Final: `backgroundSize: '211%'` | Done |
| 64 | Push profile photo to GitHub | Commit `3dca109` pushed to main | Done |

---

## 4. Current Project Inventory

### Main projects (`projects[]`)
| ID | Title | Category | Content status |
|----|-------|----------|----------------|
| 1 | 6-axis Robotic Arm | design | Complete |
| 2 | Automated Lab System Incubator | research | Complete + gallery |
| 3 | Additive Manufacturing: Prusa MK3s Construction | manufacturing | Complete |
| 4 | Wind Turbine Blade Aerodynamics Generator | analysis | Complete |
| 5 | SEB: Tracking Project | analysis | Complete + gallery |
| 6 | Portable Microscope | manufacturing | Complete + gallery |
| 7 | Self Balancing Cube | design | **Empty — user will fill later** |
| 8 | DIY Gimbal | design | **Empty — user will fill later** |
| 9 | Plant Growing Hydroponic System | design | **Empty — user will fill later** |

### Soldering subfolder (`solderingProjects[]`)
- **Currently empty.** Add entries here; they appear on `/soldering-projects` only.

### Professional experience (order matters — most recent first)
1. **iRhythm Technologies** — Tools & Fixtures System Engineer — Jan 2026 - Present — San Francisco, CA
2. **Tsao Lab: NeuroVision** — Mechanical Design Engineer — 2025 - Present — Berkeley, CA
3. **TSMC** — Epitaxy Equipment Engineer Intern — May 2025 - Aug 2025 — Phoenix, AZ

### Personal info
- **Name:** Aaron Lee
- **Title:** B.S. Mechanical Engineer
- **Email:** oisaaronlee@gmail.com
- **Phone:** +1 (925) 885-9137
- **Location:** San Francisco, CA
- **LinkedIn:** https://www.linkedin.com/in/aaronlee5702/
- **GitHub:** https://github.com/aaronlee5702-dot

### Hero statistics (hardcoded in Hero.tsx)
- 4+ Years CAD Experience
- 10+ Projects Completed
- 15+ Engineering Skills
- 2 Research Projects

---

## 5. Git Commit History (Reference)

```
3dca109  2026-05-30  Add profile photo to hero section
4e64703  2026-05-30  update projects and soldering systems
0bbecaa  2026-01-31  Update 6-axis robotic arm and automated lab system descriptions
46638b2  2026-01-31  Update Next.js to fix security vulnerability
ff1ff1b  2026-01-31  Add iRhythm Technologies experience and update location
6a5e66e  2025-11-12  resume changes
646b5f6  2025-11-10  Fix: Remove unused ArrowLeft import causing Vercel build error
464f2a0  2025-11-10  detail changes
7e70e7e  2025-11-10  changed the icon
a0a6a31  2025-11-10  added project photos and a new card
3339bd4  2025-10-17  SEB tracking
c2709c8  2025-10-15  Add SEB Tracking Project and limit home page to 4 featured projects
0dc381c  2025-10-12  Add aurora borealis effects and All Projects page
2d70717  2025-10-02  Tsao Lab, TSMC, About, project descriptions
54b6921  2025-09-03  first commit
```

---

## 6. Shell Commands Reference (User & Assistant)

### Development
```bash
cd /Users/alee/Desktop/Website0.1
npm install          # Install dependencies
npm run dev          # Start dev server (Turbopack) — blocks terminal
npm run build        # Production build
npm run lint         # ESLint
```

### Git workflow (user standard)
```bash
git add .
git commit -m "Your message here"
git push
```

### Stop dev server
- Press **Ctrl + C** in the terminal running `npm run dev`
- Or open a **new terminal tab** (Ctrl + Shift + `) to run git commands while server runs

### Vercel deployment
- Push to `main` triggers automatic Vercel deploy
- Manual: `npx vercel --prod` (requires `vercel login`)

### Analytics setup (already done)
```bash
npm install @vercel/analytics
```
Component in `src/app/layout.tsx`:
```tsx
import { Analytics } from "@vercel/analytics/next";
// Inside <body>: <Analytics />
```

---

## 7. Known Issues & Pending Items

| Item | Notes |
|------|-------|
| **Favicon** | Removed due to corrupted 0-byte file. User may want to add valid `.ico` manually. |
| **Projects 7, 8, 9** | Placeholder cards with empty description, technologies, highlights, gallery |
| **solderingProjects[]** | Empty — subfolder shows "coming soon" empty state |
| **Education data** | May still contain placeholder MIT/MS entries — verify with user if updating |
| **npm audit** | 8 vulnerabilities reported at last install — not addressed unless user requests |
| **Profile photo framing** | Tuned to user preference at `211%` zoom — may need further adjustment |

---

## 8. How to Continue Work (AI Instructions)

### Adding a new main project
1. Add object to `projects[]` in `src/data/portfolio.ts` with next sequential `id`.
2. Optionally map to a skill category in `Skills.tsx` `categoryProjects` object.
3. Add assets under `public/projects/<project-name>/`.
4. Project auto-appears on `/all-projects` and gets detail page at `/projects/<id>`.

### Adding a soldering project
1. Add to `solderingProjects[]` (NOT `projects[]`).
2. Appears on `/soldering-projects` only.

### Updating hero profile photo
- Replace `public/profile.png`
- Adjust in `Hero.tsx`: `backgroundSize` and `backgroundPosition`

### User preferences observed
- Do **not** commit unless explicitly asked
- Do **not** push unless explicitly asked
- Match existing code style; minimal diffs
- Use resume PDF as source of truth for project descriptions when requested
- Keep home page to 4 featured projects only
- Preserve aurora styling on cards and headers

---

## 9. JSON Machine-Readable Summary

```json
{
  "project": {
    "name": "Aaron Lee Engineering Portfolio",
    "repo_path": "/Users/alee/Desktop/Website0.1",
    "github": "https://github.com/aaronlee5702-dot/Website0.1.git",
    "domain": "aaronwlee.com",
    "stack": ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Vercel"],
    "primary_data_file": "src/data/portfolio.ts"
  },
  "latest_commit": "3dca109",
  "pending_content": {
    "projects_awaiting_details": ["7", "8", "9"],
    "soldering_projects_empty": true,
    "favicon_missing": true
  },
  "key_routes": ["/", "/all-projects", "/projects/[id]", "/soldering-projects"],
  "total_user_requests_logged": 64,
  "analytics": {
    "provider": "vercel",
    "package": "@vercel/analytics",
    "enabled_on_vercel": true
  }
}
```

---

*End of AI Handoff Document*
