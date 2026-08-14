# Portfolio Modernization Plan — Dark Cyberpunk Theme

## Overview
Modernize the existing Next.js portfolio with a dark cyberpunk aesthetic, replace all placeholder data with real resume info, and add GitHub projects.

---

## 1. Theme & Global Styles (`app/globals.css`)

**Force dark mode as default** — update `layout.tsx` `defaultTheme` to `"dark"`.

**Overhaul CSS variables** for cyberpunk palette:
- Background: deep navy/black (`oklch(0.10 0.02 260)`)
- Primary: neon cyan (`#00f6ff`)
- Accent: fuchsia/magenta (`#ff00ff`)
- Cards: dark with subtle cyan border glow
- Text: light gray on dark

**Add new CSS animations** (already partially defined):
- `glitch` — exists, keep
- `sweep` — exists, keep
- Add `neon-pulse` — pulsing glow effect for headings
- Add `float` — subtle floating animation for hero portrait
- Add `typewriter` — typing cursor effect

**Add utility classes**:
- `.neon-text` — text with cyan glow shadow
- `.neon-border` — border with cyan glow
- `.glass` — glassmorphism backdrop-blur effect

---

## 2. Layout (`app/layout.tsx`)

- Update `metadata.title` → `"Rihards Ādminis | Full-Stack Developer"`
- Update `metadata.description` → real description from resume
- Set `defaultTheme="dark"` on ThemeProvider

---

## 3. Navbar (`components/sections/navbar-section.tsx`)

**Uncomment the cyberpunk navbar** (lines 1-176) and remove the minimal version (lines 178-223).

The commented-out code already has:
- Fixed floating pill navbar with `bg-black/50 backdrop-blur-lg`
- Cyan neon border + sweep animation
- Scroll spy with IntersectionObserver
- Glitch animation on active link
- Neon text-shadow on hover/active
- Progress bar at bottom
- Mobile drawer with full-screen overlay

**Minor fixes needed**:
- Add "About" to navItems (currently missing from the commented version — it starts at `#about` but let me verify)
- Actually navItems already has About, Skills, Projects, Experience, Contact — looks good

---

## 4. Hero Section (`components/sections/hero-section.tsx`)

Replace content with real data:
- **Name**: "Rihards Ādminis"
- **Title**: "Full-Stack Developer"
- **Tagline**: "Building modern web applications with React, Next.js & TypeScript"
- **Subtitle**: "~3 years of professional experience across frontend and backend"
- **Portrait**: Keep `/portrait.png` but add neon glow ring (cyan shadow)
- **Buttons**: 
  - "View Projects" → `#projects` (anchor link)
  - "Contact Me" → `#contact` (anchor link)
- **Remove ModeToggle** from hero (move to navbar or keep minimal)
- Add decorative elements: horizontal neon line, tech stack icons or terminal-style prompt

---

## 5. About Section (`components/sections/about-section.tsx`)

Update with real bio:
- "Full-Stack Developer with ~3 years of professional experience building web applications across frontend and backend development."
- Mention: React, Next.js, TypeScript, Laravel, Vue.js, REST APIs, responsive UI, database integration
- Languages: English, Russian, Latvian, Spanish
- Interests: Automotive, Electronics, Robotics, Technology

---

## 6. Skills Section (`components/sections/skills-section.tsx`)

Replace with real skills from resume, reorganize into 4 categories:

**Frontend**: React, Next.js, TypeScript, JavaScript, Angular, HTML5, CSS3, Tailwind CSS, Sass, Shadcn

**Backend**: Node.js, Laravel, Vue.js, REST APIs, GraphQL

**Databases**: PostgreSQL, Supabase, SQL

**Tools & Platforms**: Git, Docker, Linux, Figma, npm

**Other**: SSR/CSR, API Integration, XML, SEO

Style each category card with neon border on hover, cyberpunk icon or label.

---

## 7. Projects Section (`components/sections/projects-section.tsx`)

Replace the 6 duplicate cards with **real GitHub projects** (top 6):

1. **TurboCore** — E-Commerce web store for computer components and gamers | TypeScript | `https://github.com/hydratypelvl/TurboCore`
2. **Spellio** — Wordle-inspired web app built with Next.js | TypeScript | `https://spellio-omega.vercel.app` | `https://github.com/hydratypelvl/Spellio`
3. **DineQR** — Smart QR Ordering System for Restaurants | `https://github.com/hydratypelvl/DineQR`
4. **Checkmate** — Collaborative todo application built with Next.js | TypeScript | `https://github.com/hydratypelvl/Checkmate`
5. **r2todo** — Todo application | TypeScript | `https://r2todo.vercel.app` | `https://github.com/hydratypelvl/r2todo`
6. **Next.js Dashboard** — Admin dashboard | TypeScript | `https://github.com/hydratypelvl/nextjs-dashboard`

Each card should have:
- Neon border glow on hover
- Project name, description, tech tags
- "Live" link (if deployed) and "Code" link (GitHub)
- Use a placeholder gradient/abstract image since we don't have screenshots

---

## 8. Experience Section (`components/sections/experience-section.tsx`)

Replace with 3 real jobs from resume (chronological, newest first):

1. **Full-Stack Web Developer** | SIA "R1" | Apr 2022 – May 2023
   - Developed and modernized company website using Laravel and jQuery
   - Designed UI/UX prototypes in Figma, translated to responsive interfaces
   - Integrated REST APIs, XML and Google Maps

2. **Front-End Web Developer** | SIA "Bidstack" | Sep 2020 – Dec 2021
   - Developed frontend with TypeScript, Angular, Storybook, Sass
   - Built UIs for real-time data, integrated REST APIs
   - Used Git for version control

3. **Back-End Web Developer** | SIA "Apply" | Jul 2019 – Jun 2020
   - Backend with Laravel and Vue.js
   - Integrated external services through APIs
   - Developed internal tools, processed data for ML algorithms

**Education** (add below experience):
- Professional Secondary Education — Programmer | Rīgas Tehniskā Koledža | 2016–2020
- Secondary Education | Rīgas 64.vidusskola | 2007–2016

Style with neon timeline dots (cyan), glowing connecting line.

---

## 9. Contact Section (`components/sections/contact-section.tsx`)

Replace placeholder URLs with real data:
- Email: `mailto:rihards.adm@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/rihards-adminis`
- GitHub: `https://github.com/hydratypelvl`
- Phone: `+371 25156865`

Style with neon-bordered buttons, glassmorphism card.

---

## 10. Footer (`components/sections/footer-section.tsx`)

Update all links to match contact section real URLs.

---

## 11. Page Structure (`app/page.tsx`)

Keep the same section order:
```
ScrollProgress → Navbar → Hero → About → Skills → Projects → Experience → Contact → Footer
```

No structural changes needed.

---

## Files to Modify

| # | File | Change |
|---|------|--------|
| 1 | `app/layout.tsx` | Metadata + defaultTheme="dark" |
| 2 | `app/globals.css` | Cyberpunk color palette + animations + utility classes |
| 3 | `components/sections/navbar-section.tsx` | Uncomment cyberpunk navbar, remove minimal version |
| 4 | `components/sections/hero-section.tsx` | Real name, title, tagline, neon portrait, working buttons |
| 5 | `components/sections/about-section.tsx` | Real bio from resume |
| 6 | `components/sections/skills-section.tsx` | Real skills in 4-5 categories |
| 7 | `components/sections/projects-section.tsx` | 6 real GitHub projects |
| 8 | `components/sections/experience-section.tsx` | 3 real jobs + education |
| 9 | `components/sections/contact-section.tsx` | Real contact links |
| 10 | `components/sections/footer-section.tsx` | Real links |
| 11 | `components/dashed-center-grid.tsx` | Update to cyberpunk neon grid (or keep as-is with new colors) |

---

## Verification

1. Run `npm run build` to ensure no build errors
2. Run `npm run dev` and visually verify:
   - Dark theme loads by default
   - Navbar has neon glow, scroll spy works, mobile drawer works
   - Hero shows correct name/title with neon portrait
   - All sections show real data
   - Project cards link to real GitHub repos and live demos
   - Contact links work (mailto, github, linkedin)
   - Neon hover effects on cards and buttons
   - Responsive on mobile/tablet/desktop
