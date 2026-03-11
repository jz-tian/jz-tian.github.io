# Personal Website — Claude Context

## Project Overview
Personal portfolio website for **Jiazheng Tian** (JT).
Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **TypeScript**, **Framer Motion**.

The active, production-quality variant is **Variant C** (`src/app/variants/c/page.tsx`).
Variants A, B, C2, C3 exist as design explorations but are not the primary focus.

---

## Tech Stack
- **Framework**: Next.js 16.1.6 with App Router (`"use client"` pages)
- **Styling**: Tailwind CSS v4 — config is CSS-based via `@theme` in `globals.css`, NOT a `tailwind.config.ts`
- **Animations**: Framer Motion (`motion`, `useScroll`, `useTransform`, `AnimatePresence`)
- **Icons**: `react-icons` — use `fi` (Feather) and `si` (Simple Icons) packages
- **Gallery**: `yet-another-react-lightbox` with `yet-another-react-lightbox/styles.css`
- **Fonts**: Google Fonts via `next/font/google` — CSS variables: `--font-inter`, `--font-playfair`, `--font-space-grotesk`, `--font-jetbrains`
- **Language**: TypeScript strict mode

---

## Design System (Variant C)
- **Primary accent**: `#0066FF` (electric blue), stored as `const ACCENT`
- **Accent light**: `#EBF2FF`, stored as `const ACCENT_LIGHT`
- **Background**: White (`#FFFFFF`) and light gray (`#F9FAFB` / `bg-gray-50`) alternating sections
- **Typography**: Inter (body), JetBrains Mono (code/skill tags)
- **Style**: Editorial, clean, minimal decoration, strong typographic hierarchy
- **Cards**: `rounded-2xl`, `border border-gray-100`, hover → `hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50`
- **Section numbers**: `01` through `07` displayed in JetBrains Mono, blue
- **Skill tags**: rounded-full pills with JetBrains Mono font
- **Nav**: Sticky, pill-shaped language switcher + blue Resume button

---

## Content Source of Truth
All English content lives in **`src/lib/data.ts`**:
- `personal` — name, title, email, linkedin, github, location, cvFile
- `about` — paragraphs (5 total, includes languages + tennis/games paragraph)
- `workExperience` — 3 entries (Acxiom, Siemens, Fujitsu) — **separate from education**
- `education` — 2 entries (TUM M.Sc., CUC B.Sc.) — **separate from workExperience**
- `skills` — `{ data, ml, vibeCoding, tools }`
- `projects` — `{ data: [...], vibeCoding: [...] }`
- `photos` — 12 real photos from `/public/photos/` (all DSC*.JPG)
- `profilePhoto` — `/profile.JPG`

Translated content lives in **`src/lib/translations.ts`**:
- Supported languages: `"en" | "de"` (Lang type)
- Structure: `translations[lang]` returns a `T` object covering all UI strings + translated prose
- German paragraphs include full translations of all 5 about paragraphs, all job descriptions, education descriptions
- Language switcher is in the Nav, `EN | DE` pill toggle

---

## Key File Map
```
src/
  app/
    layout.tsx          — font setup (4 Google fonts as CSS vars)
    page.tsx            — variant selector index
    globals.css         — Tailwind v4 @import + @theme block
    icon.svg            — favicon (dark bg, white JT, blue dot)
    variants/
      c/page.tsx        — PRIMARY — Premium Editorial (EN/DE)
      a/page.tsx        — Gradient Flow (exploratory)
      b/page.tsx        — Card Grid (exploratory)
      c2/page.tsx       — Dark Editorial (exploratory)
      c3/page.tsx       — Warm/Red Editorial (exploratory)
  lib/
    data.ts             — all English content constants
    translations.ts     — EN + DE translations (T interface, Lang type)
public/
  profile.JPG           — profile photo (displayed object-top)
  photos/               — 12 landscape/portrait DSC*.JPG photos
  logo.svg              — standalone logo asset
  CV_Jiazheng_Tian.pdf  — linked as /CV_Jiazheng_Tian.pdf for download
```

---

## Variant C — Section Structure
| # | Section | ID | Background |
|---|---------|-----|-----------|
| — | Nav | — | transparent → white/blur on scroll |
| — | Hero | — | white + dot grid |
| 01 | About | `#about` | white |
| 02 | Skills | `#skills` | gray-50 |
| 03 | Work Experience | `#experience` | white |
| 04 | Education | `#education` | gray-50 |
| 05 | Projects | `#projects` | white |
| 06 | Photography | `#photography` | gray-50 |
| 07 | Contact | `#contact` | white |
| — | Footer | — | gray-50 |

---

## Component Pattern (Variant C)
All section components receive `t: T` (translation object) as a prop.
Language state lives at the top-level `VariantC` page component:
```tsx
const [lang, setLang] = useState<Lang>("en");
const t = translations[lang];
// passed as <Section t={t} /> to every section
```

Animation pattern:
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }),
};
// Usage: variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
```

---

## Personal Details
- **Name**: Jiazheng Tian
- **Title**: Data Scientist & Vibe Coder
- **Location**: Passau, Germany
- **Email**: jiazheng.tian@outlook.com
- **LinkedIn**: https://www.linkedin.com/in/jiazheng-tian-07a05a178/
- **GitHub**: https://github.com/jz-tian
- **Languages**: Chinese (native), English (fluent), German (fluent), Japanese (basic), French (basic)
- **Hobbies**: Photography, tennis, gaming

---

## Known Issues / Gotchas
- **Tailwind v4**: No `tailwind.config.ts` — all theme customization in `globals.css` `@theme {}` block
- **`SiClaude`**: The react-icons/si export is `SiClaude`, NOT `SiClaudeai`
- **German typographic quotes**: `„..."` — the closing `"` (U+201C) can break JS string parsing; use `\u201c` escape
- **Hydration warnings**: Ignored — caused by browser extensions (Grammarly etc.), not real code bugs
- **Photos**: Large JPEGs committed directly to git. If adding more, consider git-lfs for files over 50MB
- **`workExperience` vs `education`**: These are always **separate** exports — never merge them into a single `experience` array

---

## Git & Deployment
- **Remote**: https://github.com/jz-tian/personal_website.git (branch: master)
- **CV files** (`CV_Jiazheng_Tian.pdf`, `.docx`) are intentionally NOT committed (private)
- To deploy: connect repo to Vercel — zero config needed for Next.js
