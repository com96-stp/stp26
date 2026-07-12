# STP 26 — Landing Page

Landing page for **Stop all'Ansia 26** (STP 26), a music festival held 11–13 September 2026 at Lago Arenile, Carignano (TO), Piedmont.

Built mobile-first (390px) with a responsive desktop layout (1440px reference). Pixel-mapped to the Figma design; design-token values are the single source of truth.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6** (build/dev)
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/styles/globals.css` (no `tailwind.config.js`)
- Self-hosted fonts: **Neue Regrade** (variable) + **Kelsi** (display)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # dev server with HMR → http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build → http://localhost:4173
```

Requires Node 18+.

## Project structure

```
src/
├─ main.tsx, App.tsx          # entry + page assembly
├─ styles/globals.css         # @theme design tokens, @font-face, base, motion
├─ lib/assets.ts              # centralized asset imports (import from here only)
├─ hooks/useLandingMotion.ts  # scroll-reveal + parallax + entrance microinteractions
├─ components/
│  ├─ atoms/                  # Button, Tag, NavItem
│  ├─ molecules/              # Header, Ticker, CardTicket, CardExpressive, Banner, BannerSlim
│  ├─ layout/Container.tsx    # grid container (max-width + responsive margins)
│  └─ sections/               # one file per page section (Hero, Ticket, Location, …)
├─ tokens/                    # design tokens exported from Figma (DTCG JSON — reference)
├─ asset/                     # images, decoratives, logos, icons
└─ fonts/                     # self-hosted webfonts
docs/
├─ STP_brief.md               # original project brief
└─ StyleGuide.md              # design-system reference (colors, type, components)
```

## Conventions

- **Mobile-first**: base styles target 390px; desktop overrides use the `xl:` breakpoint (1280px+), following the Desktop-xl grid (12 columns, 80px margin, 32px gutter, 1440 canvas).
- **Tokens are the source of truth** for values (color, type, spacing, radius). Component/section names mirror the Figma layers.
- **Code and comments in English; UI copy in Italian/English** as per the design.
- **Assets** are always imported through `src/lib/assets.ts` so Vite bundles + hashes them.

## Known follow-ups

- `MAP_IMAGE` in `src/lib/assets.ts` is still a Figma-hosted URL (expires 2026-07-18) — download it locally and import it like the other assets before launch.
- CTA links are placeholders (`href="#"`); wire real destinations before launch.
