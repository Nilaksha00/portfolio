# Developer Portfolio

A modern, premium, highly animated personal portfolio for a Software Engineer.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion** and **Lucide React**. Ships with demo/placeholder content
that is trivial to swap for your own.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # production build
```

## Make it yours

All personal content lives in **one file**:

```
src/data/portfolio.ts
```

Update the exports there — `profile`, `developerCard`, `socials`, `navLinks`,
`about`, `skills`, `projects`, `experience`, `education`, `learning`,
`activity`, `services`, `contact`, `footer` — and the whole site updates. No
personal strings are hard-coded inside components.

Other things to replace:

| What | Where |
| --- | --- |
| Resume file | `public/resume.pdf` |
| Portrait image | `src/components/sections/About.tsx` (placeholder card) |
| Project mockups | `src/components/sections/Projects.tsx` (`ProjectMockup`) |
| Site URL / SEO | `src/app/layout.tsx`, `src/app/sitemap.ts` |
| Favicon | `src/app/icon.svg` |
| Contact form handler | `src/components/sections/Contact.tsx` (`handleSubmit`) |
| Accent color | `tailwind.config.ts` (`colors.accent`) + `globals.css` |

## Structure

```
src/
  app/            # layout, page, metadata, globals
  data/           # <- all editable content
  hooks/          # reduced-motion + media-query helpers
  lib/            # small utilities
  components/
    ui/           # reusable primitives (Reveal, MagneticButton, TiltCard, …)
    layout/       # Navbar, Footer, Background, ScrollProgress, CursorGlow, BackToTop
    sections/     # one component per page section
```

## Animation & accessibility

- Framer Motion for page-load stagger, scroll reveals, hover micro-interactions.
- Custom cursor glow + magnetic buttons on desktop only (pointer: fine).
- Scroll progress bar, animated counters, typing role cycle, animated timeline.
- **`prefers-reduced-motion` is fully respected** — animations degrade to simple
  fades or are removed, via `usePrefersReducedMotion` and a global CSS fallback.
- Keyboard navigable, visible focus rings, skip-to-content link, semantic
  landmarks, SEO metadata, sitemap.
- Fully responsive: mobile, tablet, laptop, desktop.
```
