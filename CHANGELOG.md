# Changelog

All notable changes to **Vivek's Portfolio** (`v2-portfolio`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v2.5.0] - 2026-08-23 (Executive Release Suite)

### 🌟 Added & Refined
- **Executive Experience Timeline Architecture (`ExperienceSkills.tsx`):** Implemented exact ASCII schematic layout for MotionCut, Digihero, and BodhAI cards with 100% full-width single-line titles and direct verification certificate links.
- **Full-Site Smooth Anchor Scroll Engine (`Navbar.tsx` & `globals.css`):** Configured global smooth scrolling with interceptors routing `/#hero`, `/#about`, `/#experience`, `/#projects`, and `/#blog` seamlessly.
- **GitHub-Style Engineering Release Log (`/changelog`):** Redesigned `/changelog` with structured change cards, collapsible open/close details, metric badges, releases index sidebar, and direct GitHub commit links.
- **Responsive Development Notice Banner (`NoticeBanner.tsx`):** Re-engineered top notice banner with mobile-optimized text and icon-only GitHub link for zero line wrapping on small screens.
- **Dedicated `/whats-new` Live Status Stream:** Launched real-time release status page showcasing feature rollouts, active project highlights, and direct GitHub verification links.
- **Global Subpage Footer Integration (`Footer.tsx`):** Mounted standard portfolio footer with marquee text strip, brand wordmark, quick links, and smooth back-to-top controls across all subpages.

---

## [v2.4.0] - 2026-08-22 (Latest Major Enhancement Suite)

### 🌟 Added
- **6.0 Explore Dropdown Navigation:** Integrated a floating desktop navigation pill (`6.0 EXPLORE ▾`) with Framer Motion animations and an interactive mobile drawer accordion featuring quick links to Case Studies, Gallery, Timeline, About Presentation, and Projects Archive.
- **Featured Homepage Blog Section (`WritingsSection.tsx`):** Mounted a high-contrast blog cards grid (04 / BLOG & WRITINGS) directly before the Contact section on the homepage.
- **Interactive Changelog Page (`/changelog`):** Built a dedicated version history route documenting release notes, system metrics, version quick-jump pills, and feature evolution.
- **Notice Banner Component:** Integrated a dismissible top status bar informing users of live portfolio updates.
- **Executive README Documentation:** Created a badge-rich technical `README.md` featuring Shields badges, system architecture, and local development instructions.

### 🎨 Fixed & Refined
- **Theme Adaptability (Light & Dark Mode):** Configured Tailwind CSS v4 `@custom-variant dark (&:where(.dark, .dark *));` for 100% theme synchronization across all 17 static and dynamic routes.
- **Form Label Collision:** Resolved label/placeholder text overlap in `Contact.tsx` using `placeholder-transparent` and `peer-[:not(:placeholder-shown)]:-top-3`.
- **Button Contrast:** Set explicit `text-white font-bold` on all primary orange (`#FF7029`) buttons (`Navbar`, `Contact`, `Services`, `Hero`).
- **Single-Line Button Layout:** Ensured the "HIRE ME" button in the Navbar renders icon and text on one single horizontal line (`flex-row whitespace-nowrap`).
- **PageLoader Optimization:** Reduced terminal boot screen duration from 18 seconds to 10 seconds, adding `sessionStorage` caching to prevent duplicate loading screens per session.
- **/me Presentation Deck UX:** Replaced circular menu icon with explicit `← BACK TO PORTFOLIO` pill button and added a floating Light/Dark mode switcher.

---

## [v2.3.0] - 2026-08-18 (Interactive Cursor & Pitch Deck)

### 🚀 Added
- **Spring Cursor Physics:** Dual-ring custom mouse cursor with Framer Motion spring physics and interactive element scaling.
- **Pitch Deck Light/Dark Themes:** Converted `/me` presentation cards to support clean theme switching.

---

## [v2.2.0] - 2026-08-12 (3D Gyroscope & Submenu Systems)

### 🛠️ Added
- **TiltCard 3D Gyroscope Spotlight:** Hardware-accelerated mouse position spotlight sheen and perspective tilt.
- **Explore Submenu Architecture:** Modular submenus for Case Studies, Gallery, Timeline, About, and Archive.

---

## [v2.1.0] - 2026-08-05 (Theme Engine & Design Tokens)

### 🎨 Added
- **next-themes Provider:** Persistent theme provider supporting system preferences and local storage.
- **Glassmorphism Design Systems:** HSL tailored colors, subtle micro-animations, and glass card borders.

---

## [v2.0.0] - 2026-08-01 (Next.js 16 & React 19 Upgrade)

### 🚀 Added
- **Framework Upgrade:** Migrated core application framework to Next.js 16 (App Router & Turbopack) and React 19.
- **Tailwind CSS v4 Integration:** Upgraded styling directives to Tailwind CSS v4.
- **Interactive Pitch Deck (`/me`):** Created a keyboard (`↑` / `↓`) and mouse wheel driven presentation deck.
- **Engineering Case Studies (`/case-studies`):** Added detailed architectural breakdown router.
- **Visual Design Gallery (`/gallery`):** Added visual UI artifact showcase grid.
- **Career Timeline (`/timeline`):** Built an interactive chronological milestone track.

---

## [v1.5.0] - 2026-05-14 (Experience & Filter Expansion)

### 📈 Added
- **Experience Timeline Tracks:** Career track milestone component showcasing professional growth.
- **Project Filter System:** Category tab filtering across AI, Full Stack, and Mobile project archives.

---

## [v1.0.0] - 2026-01-10 (Initial Release)

### 📦 Initial Features
- Core portfolio landing page with Hero section, Projects showcase, Disciplines, and Contact form.
- Initial Dark Mode UI design system.
