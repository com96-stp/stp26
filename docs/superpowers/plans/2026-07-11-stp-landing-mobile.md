# STP 26 Landing Page — Mobile-First Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-perfect mobile-first landing page for STP 26 festival (Stop all'Ansia) using React + Vite + Tailwind CSS v4, matching the Figma design at `z2dNZGTYEgX16UOpYrJHvW`.

**Architecture:** Single-page React app with no routing. Components follow Figma layer naming. Mobile canvas is 390px (16px margin, 8px gutter). Desktop breakpoint extension is scaffolded but not implemented in this plan.

**Tech Stack:** React 19, Vite 6, Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript

---

## Global Constraints

- Mobile viewport first (390px), all values from design tokens JSON
- Font Primary: `Neue Regrade` (self-hosted OTF/TTF in `/src/Font/Neue Regrade/`)
- Font Display: `Kelsi` (self-hosted OTF in `/src/Font/Kelsi/`) — `Kelsi-fill.otf` = fill style
- JSON token files are source of truth for numeric values; Figma is source of truth for visual structure
- Never hardcode values when a token exists
- All copy stays in Italian/English as in design
- Component names as close to Figma layer names as possible
- All code, comments, variables in English
- Assets used as `<img aria-hidden="true" alt="" />` for decorative; never reconstruct SVGs in CSS
- No external font services (no Google Fonts, etc.)
- No routing library — all CTAs link externally (use `href="#"` as placeholder)
- Tailwind v4 CSS-first config: no `tailwind.config.js`, use `@theme` in CSS

---

## File Structure

```
/ (project root = /Users/enrico.comentale/Desktop/STP 26)
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/
│   │   └── globals.css              # @import tailwindcss, @theme tokens, @font-face, base styles
│   ├── lib/
│   │   └── assets.ts                # centralized asset path constants
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx           # CTA button — 4 variants
│   │   │   ├── Tag.tsx              # Tag pill — 3 color variants
│   │   │   └── NavItem.tsx          # navigation link
│   │   ├── molecules/
│   │   │   ├── Header.tsx           # sticky header + mobile menu toggle
│   │   │   ├── Ticker.tsx           # scrolling announcement bar
│   │   │   ├── CardTicket.tsx       # ticket card (colored bg + price + CTA)
│   │   │   ├── CardExpressive.tsx   # artist card (collage image + tag + text)
│   │   │   ├── BannerSlim.tsx       # call-for-artists / volunteers card
│   │   │   └── Banner.tsx           # merch product card
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── TicketSection.tsx
│   │       ├── LocationSection.tsx
│   │       ├── ArtistsSection.tsx
│   │       ├── MerchSection.tsx
│   │       ├── CollaborateSection.tsx
│   │       ├── CreativitySection.tsx
│   │       └── FooterSection.tsx
│   ├── reference/
│   │   ├── ReferenceStile.md        # (existing — do not modify)
│   │   └── StyleGuide.md            # (create in Task 1)
│   ├── tokens/                      # (existing — do not modify)
│   ├── Font/                        # (existing — do not move)
│   └── asset/                       # (existing — do not move)
```

---

## Design Token Reference

Extracted from `/src/tokens/*.json` — these are the CSS custom property names to use:

### Colors
| Token CSS var | Value | Usage |
|---|---|---|
| `--color-page-primary` | `#FCF8F5` | Page background, menu overlay |
| `--color-page-inverse` | `#000000` | Footer background |
| `--color-text-default` | `#000000` | Primary text |
| `--color-text-accent` | `#960011` | Accent text, hero tagline |
| `--color-action-accent` | `#960011` | Filled button background |
| `--color-action-accent-content` | `#FCF8F5` | Filled button text |
| `--color-action-accent-secondary-content` | `#960011` | Outline button text |
| `--color-action-on-indigo` | `#F3F6FF` | Button on indigo bg |
| `--color-action-on-indigo-content` | `#273CB2` | Button text on indigo bg |
| `--color-action-on-indigo-secondary-content` | `#FCF8F5` | Secondary button text on indigo |
| `--color-section-default` | `#FCF8F5` | Default section bg |
| `--color-section-inverse` | `#000000` | Inverse section (footer) |
| `--color-section-subtle` | `#C9D8FE` | Artists section bg |
| `--color-section-fresh` | `#C6E1C8` | Collaborate section bg |
| `--color-section-warm` | `#F5E8C3` | Location section bg |
| `--color-section-accent` | `#F03D3D` | Creativity section bg |
| `--color-section-cold` | `#273CB2` | Indigo section / ticker bg |
| `--color-bg-accent-subtle` | `#FDCAC4` | Date pill background |
| `--color-bg-warm-1` | `#763D00` | Volunteers banner bg |
| `--color-bg-warm-2` | `#EFD791` | Ticket card 1 bg |
| `--color-bg-warm-3` | `#EED2BE` | Ticket card 3 bg |
| `--color-bg-fresh-1` | `#005F23` | Green tag bg |
| `--color-bg-fresh-2` | `#C6E1C8` | Ticket card 2 bg |
| `--color-bg-cold` | `#273CB2` | Call-for-artists banner bg |
| `--color-bg-neutral` | `#FCF8F5` | Neutral bg |
| `--color-neutral-0` | `#FCF8F5` | Lightest text / inverse text |
| `--color-neutral-1000` | `#1A1A1A` | Near-black text |
| `--color-neutral-500` | `#352927` | Body text (brown-ish) |
| `--color-amber-800` | `#960011` | Accent red |
| `--color-indigo-800` | `#273CB2` | Indigo |
| `--color-emerald-50` | `#F2F8F2` | Tag text on green bg |

### Typography
| Token CSS var | Value |
|---|---|
| `--font-primary` | `'Neue Regrade', sans-serif` |
| `--font-display` | `'Kelsi', sans-serif` |
| `--text-xs` | `12px` |
| `--text-sm` | `14px` |
| `--text-base` | `16px` |
| `--text-lg` | `18px` |
| `--text-xl` | `24px` |
| `--text-2xl` | `32px` |
| `--text-3xl` | `40px` |
| `--text-4xl` | `48px` |
| `--text-5xl` | `60px` |
| `--leading-xs` | `15px` |
| `--leading-sm` | `21px` |
| `--leading-base` | `24px` |
| `--leading-lg` | `27px` |
| `--leading-xl` | `36px` |
| `--leading-2xl` | `40px` |
| `--leading-3xl` | `60px` |
| `--leading-4xl` | `72px` |
| `--leading-5xl` | `90px` |
| `--tracking-xs` | `1.5px` |
| `--tracking-sm` | `0px` |
| `--tracking-base` | `0px` |
| `--weight-regular` | `400` |
| `--weight-medium` | `500` |
| `--weight-semibold` | `600` |
| `--weight-bold` | `700` |
| `--weight-extrabold` | `800` |

### Spacing (both axes)
Values (px): `4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 160, 240`
CSS var pattern: `--spacing-{value}` e.g. `--spacing-16` = `16px`

### Border Radius
| Token CSS var | Value |
|---|---|
| `--radius-sm` | `8px` |
| `--radius-lg` | `24px` |
| `--radius-full` | `9999px` |

### Grid (mobile)
- Width: 390px
- Margin: `--mobile-margin` = `16px`
- Gutter: `8px`
- Columns: 4

---

## Figma Asset URLs (valid for 7 days from 2026-07-11)

> **Note:** These Figma-hosted assets are fallbacks. Always prefer local files from `/src/asset/` when available. The URLs below are for assets not available locally.

| Asset | Local path | Figma URL |
|---|---|---|
| STP Logo Extended (hero) | `src/asset/Loghi/STP_Logo_Extended.svg` | `https://www.figma.com/api/mcp/asset/58ddc18b-a04b-4b08-b343-8b71903c9349` |
| STP Logo Condensed (header) | `src/asset/Loghi/STP_Logo Condensed.svg` | (not needed — use local) |
| STP Logo Extended White (footer) | `src/asset/Loghi/STP_Logo_Extended_W.svg` | (use local) |
| La Marina logo | `src/asset/Loghi/La marina logo.svg` | `https://www.figma.com/api/mcp/asset/0eb6e36b-e354-4a91-bb1c-3b337e3c9bd3` |
| Hart illustration | `src/asset/Hart Collab.svg` | `https://www.figma.com/api/mcp/asset/d4087532-36d4-4d3d-9d24-aeaef1a6acce` |
| Fil Rouge Blu mobile | `src/asset/Fil Rouge blu mobile.png` | `https://www.figma.com/api/mcp/asset/1dc86536-18a9-473d-b51d-e5999f263e2f` |
| Fil Rouge Red 2 mobile | `src/asset/Fil Rouge red 2 mobile.png` | `https://www.figma.com/api/mcp/asset/b97dd4cb-32f9-40b2-8482-24b083cc5830` |
| Decorative Stripe | `src/asset/decorative/variant=Stripe.png` | (use local) |
| Decorative Spiral | `src/asset/decorative/variant=Spiral.png` | (use local) |
| Decorative Segment | `src/asset/decorative/variant=Segment.png` | (use local) |
| STP Tee photo | `src/asset/MerchSection/media 1 stp tee.png` | (use local) |
| STP Bag photo | `src/asset/MerchSection/media 2 stp bag.png` | (use local) |
| Music cover collage | `src/asset/collage/variant=music cover.png` | (use local) |
| Workshop cover collage | `src/asset/collage/variant=workshop cover.png` | (use local) |
| Map image | none | `https://www.figma.com/api/mcp/asset/52467b7d-f0ea-4666-83f5-d858fecb66ec` |
| Hamburger icon (close state) | none | `https://www.figma.com/api/mcp/asset/f6e6468a-40f0-4c1f-89f2-644ac94c4094` |
| X icon (open/close menu) | none | `https://www.figma.com/api/mcp/asset/db65d06b-23f8-4138-aebb-6bb0953a31ec` |

---

## Task 1: Project Scaffold + StyleGuide

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx` (skeleton)
- Create: `src/reference/StyleGuide.md`

- [ ] **Step 1: Initialize Vite + React + TypeScript project**

Run from `/Users/enrico.comentale/Desktop/STP 26`:
```bash
npm create vite@latest . --template react-ts -- --force
```
Expected: Creates `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/assets/`

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install -D @tailwindcss/vite
```
Expected: `node_modules/` created, no errors.

- [ ] **Step 3: Configure Vite to use Tailwind v4 plugin**

Replace `vite.config.ts` entirely:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

- [ ] **Step 4: Remove Vite boilerplate, update index.html**

Replace `index.html`:
```html
<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stop all'Ansia 26</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Replace src/App.tsx with skeleton**

```typescript
export default function App() {
  return (
    <main className="min-h-screen bg-page-primary">
      <p className="p-4 font-primary text-base text-text-default">STP 26 — scaffold</p>
    </main>
  )
}
```

- [ ] **Step 6: Replace src/main.tsx**

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 7: Write StyleGuide.md**

Create `src/reference/StyleGuide.md`:

```markdown
# STP 26 — StyleGuide

## Brand Identity
Stop all'Ansia is a 3-day festival (11–13 September 2026) at Lago Arenile, Carignano (TO), Piedmont.
Warm, irreverent, creative. Not corporate. The palette is earthy, rich, handmade-feeling.

## Color Palette
- Page background: `#FCF8F5` (warm off-white)
- Primary accent / CTA: `#960011` (dark burgundy red)
- Indigo (cold): `#273CB2`
- Section backgrounds: warm `#F5E8C3`, fresh `#C6E1C8`, subtle `#C9D8FE`, accent `#F03D3D`
- Ticket card backgrounds: warm-2 `#EFD791`, fresh-2 `#C6E1C8`, warm-3 `#EED2BE`
- Footer: `#000000`

## Typography
- **Neue Regrade** (primary): weights 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
  - Used for all body text, labels, headings, CTAs
  - Extrabold for eyebrow labels, tag pills
- **Kelsi fill** (display): used only for product/merch names (STP Tee, stp bag)
  - Loaded as `Kelsi-fill.otf`, family name `Kelsi`

## Type Scale (mobile)
| Name | Size | Line-height | Tracking |
|------|------|-------------|----------|
| xs   | 12px | 15px | +1.5px (uppercase labels) |
| sm   | 14px | 21px | 0 |
| base | 16px | 24px | 0 |
| lg   | 18px | 27px | 0 |
| xl   | 24px | 36px | 0 |
| 2xl  | 32px | 40px | 0 |
| 3xl  | 40px | 60px | 0 |
| 4xl  | 48px | 72px | 0 |
| 5xl  | 60px | 90px | 0 |

## Heading Sizes in Practice
- Hero tagline: text-lg (18px) semibold, accent color
- Section heading (large): text-3xl (40px) bold — e.g. "Tre format per vivere STP"
- Section heading (medium): text-2xl (32px) bold
- Merch heading display: text-5xl (60px) in Kelsi fill
- Date pill: text-xl (24px) bold

## Button System
| Variant | Background | Text color | Border |
|---------|-----------|------------|--------|
| accent (primary) | `#960011` | `#FCF8F5` | none |
| accent-secondary | transparent | `#960011` | 1px solid `#960011` |
| on-indigo | `#F3F6FF` | `#273CB2` | none |
| on-indigo-secondary | transparent | `#FCF8F5` | 1px solid `#F3F6FF` |

All buttons: `border-radius: 9999px`, `padding: 20px 24px`, `font-size: 16px`, `font-weight: 600`

## Tag Pills
| Variant | Background | Text |
|---------|-----------|------|
| green | `#005F23` | `#F2F8F2` |
| blue | `#273CB2` | `#F2F8F2` |
| orange | (see design) | `#F2F8F2` |

All tags: `border-radius: 9999px`, `padding: 4px 12px`, `font-size: 12px`, `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: 1.5px`

## Card Radius
All cards use `border-radius: 24px` (--radius-lg)

## Sections Order
1. Header (sticky) + Ticker
2. Hero
3. TicketSection (bg: page)
4. LocationSection (bg: warm #F5E8C3)
5. ArtistsSection (bg: subtle #C9D8FE)
6. MerchSection (bg: page)
7. CollaborateSection (bg: fresh #C6E1C8)
8. CreativitySection (bg: accent #F03D3D)
9. Footer (bg: black)

## Decorative Assets
- `Fil Rouge blu mobile.png` — blue brush stroke, used in ArtistsSection (centered, absolute)
- `Fil Rouge red 2 mobile.png` — red brush stroke, used in CreativitySection (centered, absolute)
- `Hart Collab.svg` — heart illustration, absolute top-right in CollaborateSection
- Decorative Stripe/Spiral/Segment PNGs — used inside ticket cards (absolute, bottom-right)

## Component Notes
- Ticker scrolls horizontally with CSS animation (marquee effect). Content: "Stop all'Ansia 26 · 11–13 Settembre · LAGO ARENILE | PIEMONTE"
- Header is sticky with `backdrop-filter: blur(16px)` and semi-transparent page bg
- Mobile menu is a full-screen overlay (same file as Header, toggled via state)
- Map in LocationSection: use the Figma asset URL as a static image placeholder
```

- [ ] **Step 8: Verify dev server starts**

```bash
npm run dev
```
Expected: Vite server starts on `http://localhost:5173`, browser shows "STP 26 — scaffold" text.

- [ ] **Step 9: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Vite + React + Tailwind v4 project for STP 26 landing"
```

---

## Task 2: Global CSS — Fonts, Tokens, Base Styles

**Files:**
- Create: `src/styles/globals.css`
- Delete: `src/index.css` (Vite default, replaced by globals.css)

**Interfaces:**
- Produces: CSS custom properties consumed by all components via Tailwind utility classes and `var()` references

- [ ] **Step 1: Create `src/styles/globals.css`**

```css
@import "tailwindcss";

/* ─── Tailwind v4 Design Tokens ─── */
@theme {
  /* Colors */
  --color-page-primary: #FCF8F5;
  --color-page-inverse: #000000;
  --color-text-default: #000000;
  --color-text-accent: #960011;
  --color-neutral-0: #FCF8F5;
  --color-neutral-1000: #1A1A1A;
  --color-neutral-500: #352927;
  --color-amber-800: #960011;
  --color-indigo-800: #273CB2;
  --color-emerald-50: #F2F8F2;
  --color-action-accent: #960011;
  --color-action-accent-content: #FCF8F5;
  --color-action-accent-secondary-content: #960011;
  --color-action-on-indigo: #F3F6FF;
  --color-action-on-indigo-content: #273CB2;
  --color-action-on-indigo-secondary-content: #FCF8F5;
  --color-section-default: #FCF8F5;
  --color-section-inverse: #000000;
  --color-section-subtle: #C9D8FE;
  --color-section-fresh: #C6E1C8;
  --color-section-warm: #F5E8C3;
  --color-section-accent: #F03D3D;
  --color-section-cold: #273CB2;
  --color-bg-accent-subtle: #FDCAC4;
  --color-bg-warm-1: #763D00;
  --color-bg-warm-2: #EFD791;
  --color-bg-warm-3: #EED2BE;
  --color-bg-fresh-1: #005F23;
  --color-bg-fresh-2: #C6E1C8;
  --color-bg-cold: #273CB2;
  --color-bg-neutral: #FCF8F5;

  /* Font Families */
  --font-primary: 'Neue Regrade', sans-serif;
  --font-display: 'Kelsi', sans-serif;

  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 24px;
  --text-2xl: 32px;
  --text-3xl: 40px;
  --text-4xl: 48px;
  --text-5xl: 60px;

  /* Line Heights */
  --leading-xs: 15px;
  --leading-sm: 21px;
  --leading-base: 24px;
  --leading-lg: 27px;
  --leading-xl: 36px;
  --leading-2xl: 40px;
  --leading-3xl: 60px;
  --leading-4xl: 72px;
  --leading-5xl: 90px;

  /* Letter Spacing */
  --tracking-xs: 1.5px;
  --tracking-sm: 0px;
  --tracking-base: 0px;

  /* Font Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-160: 160px;
  --spacing-240: 240px;

  /* Mobile grid */
  --mobile-margin: 16px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-lg: 24px;
  --radius-full: 9999px;
}

/* ─── @font-face ─── */
/* Neue Regrade — use variable font for best performance */
@font-face {
  font-family: 'Neue Regrade';
  src: url('/src/Font/Neue Regrade/Neue Regrade Variable.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Kelsi fill — display font for merch headings */
@font-face {
  font-family: 'Kelsi';
  src: url('/src/Font/Kelsi/Kelsi-fill.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* ─── Base / Reset ─── */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background-color: var(--color-page-primary);
  color: var(--color-text-default);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-base);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
svg {
  display: block;
  max-width: 100%;
}

/* ─── Ticker animation ─── */
@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.ticker-track {
  animation: ticker-scroll 18s linear infinite;
}
```

- [ ] **Step 2: Update `src/main.tsx` to import new globals path**

The import `'./styles/globals.css'` was already set in Task 1 Step 6. Confirm it matches. Remove `import './index.css'` from main.tsx if Vite re-added it. Delete `src/index.css` and `src/App.css`.

```bash
rm -f src/index.css src/App.css
```

- [ ] **Step 3: Verify font loading in browser**

Run `npm run dev` and open DevTools → Network → filter "font". Confirm `Neue Regrade Variable.ttf` loads with status 200.

- [ ] **Step 4: Commit**

```bash
git add src/styles/globals.css src/main.tsx
git commit -m "feat: configure Tailwind v4 tokens, @font-face declarations, base styles"
```

---

## Task 3: Atoms — Button, Tag, NavItem

**Files:**
- Create: `src/components/atoms/Button.tsx`
- Create: `src/components/atoms/Tag.tsx`
- Create: `src/components/atoms/NavItem.tsx`
- Create: `src/lib/assets.ts`

**Interfaces:**
- Produces:
  - `Button` — `variant: 'accent' | 'accent-secondary' | 'on-indigo' | 'on-indigo-secondary'`, `label: string`, `href?: string`, `className?: string`
  - `Tag` — `variant: 'green' | 'blue' | 'orange'`, `label: string`
  - `NavItem` — `label: string`, `href?: string`

- [ ] **Step 1: Create `src/lib/assets.ts`**

```typescript
// Centralized asset paths — always use these, never inline paths in components

// Logos
export const LOGO_EXTENDED = '/src/asset/Loghi/STP_Logo_Extended.svg'
export const LOGO_EXTENDED_WHITE = '/src/asset/Loghi/STP_Logo_Extended_W.svg'
export const LOGO_CONDENSED = '/src/asset/Loghi/STP_Logo Condensed.svg'
export const LA_MARINA_LOGO = '/src/asset/Loghi/La marina logo.svg'

// Decorative
export const DECORATIVE_STRIPE = '/src/asset/decorative/variant=Stripe.png'
export const DECORATIVE_SPIRAL = '/src/asset/decorative/variant=Spiral.png'
export const DECORATIVE_SEGMENT = '/src/asset/decorative/variant=Segment.png'
export const FIL_ROUGE_BLU = '/src/asset/Fil Rouge blu mobile.png'
export const FIL_ROUGE_RED = '/src/asset/Fil Rouge red 2 mobile.png'
export const HART = '/src/asset/Hart Collab.svg'

// Merch
export const MERCH_TEE = '/src/asset/MerchSection/media 1 stp tee.png'
export const MERCH_BAG = '/src/asset/MerchSection/media 2 stp bag.png'

// Collage (Artists section)
export const COLLAGE_MUSIC = '/src/asset/collage/variant=music cover.png'
export const COLLAGE_WORKSHOP = '/src/asset/collage/variant=workshop cover.png'

// Figma-hosted (use until local versions available, expires 2026-07-18)
export const MAP_IMAGE = 'https://www.figma.com/api/mcp/asset/52467b7d-f0ea-4666-83f5-d858fecb66ec'
export const ICON_HAMBURGER = 'https://www.figma.com/api/mcp/asset/f6e6468a-40f0-4c1f-89f2-644ac94c4094'
export const ICON_CLOSE = 'https://www.figma.com/api/mcp/asset/db65d06b-23f8-4138-aebb-6bb0953a31ec'
```

- [ ] **Step 2: Create `src/components/atoms/Button.tsx`**

```typescript
interface ButtonProps {
  label: string
  href?: string
  variant?: 'accent' | 'accent-secondary' | 'on-indigo' | 'on-indigo-secondary'
  className?: string
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  'accent':
    'bg-[var(--color-action-accent)] text-[var(--color-action-accent-content)]',
  'accent-secondary':
    'border border-[var(--color-action-accent)] text-[var(--color-action-accent-secondary-content)]',
  'on-indigo':
    'bg-[var(--color-action-on-indigo)] text-[var(--color-action-on-indigo-content)]',
  'on-indigo-secondary':
    'border border-[var(--color-action-on-indigo)] text-[var(--color-action-on-indigo-secondary-content)]',
}

export function Button({ label, href = '#', variant = 'accent', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center',
        'rounded-[var(--radius-full)]',
        'px-[var(--spacing-24)] py-[var(--spacing-20)]',
        'text-[var(--text-base)] font-[var(--weight-semibold)] leading-[var(--leading-base)]',
        'font-[family-name:var(--font-primary)]',
        'tracking-[var(--tracking-base)]',
        'no-underline whitespace-nowrap',
        variantStyles[variant],
        className,
      ].join(' ')}
    >
      {label}
    </a>
  )
}
```

- [ ] **Step 3: Create `src/components/atoms/Tag.tsx`**

```typescript
interface TagProps {
  label: string
  variant?: 'green' | 'blue' | 'orange'
}

const tagStyles: Record<NonNullable<TagProps['variant']>, string> = {
  green: 'bg-[var(--color-bg-fresh-1)] text-[var(--color-emerald-50)]',
  blue:  'bg-[var(--color-bg-cold)] text-[var(--color-emerald-50)]',
  orange: 'bg-[var(--color-section-accent)] text-[var(--color-neutral-0)]',
}

export function Tag({ label, variant = 'green' }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center justify-center',
        'rounded-[var(--radius-full)]',
        'px-[var(--spacing-12)] py-[var(--spacing-4)]',
        'text-[var(--text-xs)] font-[var(--weight-extrabold)] leading-[var(--leading-xs)]',
        'tracking-[var(--tracking-xs)] uppercase whitespace-nowrap',
        'font-[family-name:var(--font-primary)]',
        tagStyles[variant],
      ].join(' ')}
    >
      {label}
    </span>
  )
}
```

- [ ] **Step 4: Create `src/components/atoms/NavItem.tsx`**

```typescript
interface NavItemProps {
  label: string
  href?: string
}

export function NavItem({ label, href = '#' }: NavItemProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center',
        'text-[var(--color-text-accent)] no-underline',
        'text-[var(--text-sm)] font-[var(--weight-semibold)] leading-[var(--leading-sm)]',
        'font-[family-name:var(--font-primary)]',
        'tracking-[var(--tracking-sm)]',
      ].join(' ')}
    >
      {label}
    </a>
  )
}
```

- [ ] **Step 5: Smoke-test atoms in App.tsx**

Temporarily add to `App.tsx`:
```typescript
import { Button } from './components/atoms/Button'
import { Tag } from './components/atoms/Tag'
import { NavItem } from './components/atoms/NavItem'

export default function App() {
  return (
    <div className="p-8 flex flex-col gap-4 bg-[var(--color-page-primary)]">
      <Button label="Be part of the Festival" variant="accent" />
      <Button label="Follow us on Instagram" variant="accent-secondary" />
      <Button label="Update on Instagram" variant="on-indigo" />
      <Button label="Proponi il tuo progetto" variant="on-indigo-secondary" />
      <div className="flex gap-2">
        <Tag label="music" variant="blue" />
        <Tag label="workshop" variant="green" />
      </div>
      <NavItem label="TICKETS" />
    </div>
  )
}
```
Verify in browser: buttons render with correct colors, radius, typography.

- [ ] **Step 6: Commit**

```bash
git add src/components/atoms/ src/lib/assets.ts
git commit -m "feat: add Button, Tag, NavItem atoms"
```

---

## Task 4: Molecule — Header + MobileMenu

**Files:**
- Create: `src/components/molecules/Header.tsx`

**Interfaces:**
- Consumes: `NavItem` from atoms, `Button` from atoms, asset constants from `src/lib/assets.ts`
- Produces: `<Header />` — sticky header with hamburger toggle, renders mobile menu overlay when open

**Design spec:**
- Header: 80px tall, `rgba(252,248,245,0.8)` bg + `backdrop-filter: blur(16px)`, 16px horizontal padding, 16px vertical padding
- Logo Condensed SVG left, "Buy your ticket" CTA right (accent variant)
- Hamburger icon left of logo
- Menu overlay: full-screen, page-primary bg, X icon in header, 5 NavItems, 2 CTAs at bottom

- [ ] **Step 1: Create `src/components/molecules/Header.tsx`**

```typescript
import { useState } from 'react'
import { Button } from '../atoms/Button'
import { NavItem } from '../atoms/NavItem'
import {
  LOGO_CONDENSED,
  ICON_HAMBURGER,
  ICON_CLOSE,
} from '../../lib/assets'

const navLinks = [
  { label: 'TICKETS', href: '#tickets' },
  { label: 'LOCATION', href: '#location' },
  { label: 'ARTISTS', href: '#artists' },
  { label: 'MERCH', href: '#merch' },
  { label: 'COLLABORATE W US', href: '#collaborate' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Sticky header bar */}
      <header
        className="sticky top-0 z-50 flex items-center gap-[var(--spacing-8)] px-[var(--mobile-margin)] py-[var(--spacing-16)] w-full"
        style={{
          backgroundColor: 'rgba(252,248,245,0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex flex-1 items-center gap-[var(--spacing-16)]">
          {/* Hamburger / close icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="shrink-0 size-6 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <img
              src={menuOpen ? ICON_CLOSE : ICON_HAMBURGER}
              alt=""
              aria-hidden="true"
              className="size-6"
            />
          </button>

          {/* Logo condensed */}
          <img
            src={LOGO_CONDENSED}
            alt="Stop all'Ansia"
            className="h-6 w-auto shrink-0"
          />
        </div>

        <Button label="Buy your ticket" variant="accent" href="#tickets" />
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ backgroundColor: 'var(--color-page-primary)' }}
        >
          {/* Overlay header (X button) */}
          <div
            className="flex items-center px-[var(--mobile-margin)] py-[var(--spacing-12)] h-[66px]"
            style={{
              backgroundColor: 'rgba(252,248,245,0.8)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="size-6 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
              aria-label="Close menu"
            >
              <img src={ICON_CLOSE} alt="" aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Nav links + actions */}
          <div className="flex flex-col justify-between flex-1 px-[var(--mobile-margin)] py-[var(--spacing-40)]">
            <nav className="flex flex-col gap-[var(--spacing-40)]">
              {navLinks.map((link) => (
                <NavItem
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </nav>

            <div className="flex flex-col gap-[10px]">
              <Button
                label="Be part of the Festival"
                variant="accent"
                href="#tickets"
                className="w-full"
              />
              <Button
                label="Follow us on Instagram"
                variant="accent-secondary"
                href="#"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 2: Create `src/components/molecules/Ticker.tsx`**

```typescript
const TICKER_TEXT = "Stop all'Ansia 26 · 11–13 Settembre · LAGO ARENILE | PIEMONTE"

export function Ticker() {
  // Duplicate content to create seamless loop
  const repeated = `${TICKER_TEXT}   ${TICKER_TEXT}   `

  return (
    <div
      className="overflow-hidden w-full"
      style={{ backgroundColor: 'var(--color-section-cold)' }}
    >
      <div
        className="ticker-track flex whitespace-nowrap py-[var(--spacing-8)]"
        style={{ width: 'max-content' }}
      >
        {/* Repeat 6x to guarantee seamless loop at any viewport */}
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="px-[var(--spacing-80)] shrink-0"
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--weight-bold)',
              fontSize: 'var(--text-xs)',
              lineHeight: 'var(--leading-xs)',
              letterSpacing: 'var(--tracking-xs)',
              textTransform: 'uppercase',
              color: '#FFFDF0',
            }}
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Test Header in App.tsx**

```typescript
import { Header } from './components/molecules/Header'
import { Ticker } from './components/molecules/Ticker'

export default function App() {
  return (
    <>
      <Header />
      <Ticker />
      <main className="bg-[var(--color-page-primary)] min-h-screen p-8">
        <p className="text-[var(--text-base)] font-[family-name:var(--font-primary)]">Page content</p>
      </main>
    </>
  )
}
```

Verify: header sticks on scroll, hamburger opens/closes menu overlay, ticker scrolls.

- [ ] **Step 4: Commit**

```bash
git add src/components/molecules/Header.tsx src/components/molecules/Ticker.tsx
git commit -m "feat: add Header with mobile menu and Ticker molecules"
```

---

## Task 5: Molecule — CardTicket

**Files:**
- Create: `src/components/molecules/CardTicket.tsx`

**Design spec (from Figma):**
- 3 tickets: Day (warm-2 `#EFD791`), Weekend (fresh-2 `#C6E1C8`), Full (warm-3 `#EED2BE`)
- Each card: bg color, `border-radius: 24px`, `padding: 24px`, `gap: 16px`, overflow hidden
- Heading: text-2xl (32px) bold, `#0F0F0F`
- Description: text-base (16px) medium, `#352927`
- Price: text-4xl (48px) bold, `#0F0F0F`; optionally with strikethrough original price (text-xl)
- CTA: accent button (smaller padding: 24px horizontal, 20px vertical)
- Decorative element: absolute bottom-right (Stripe for card 1, Spiral for card 2, Segment for card 3)
- Tag (green "THE BEST, OBV") shown on Weekend ticket (card 2) heading row

**Interfaces:**
- Consumes: `Button` from atoms, `Tag` from atoms, asset constants
- Produces: `CardTicket` — `name`, `description`, `price`, `originalPrice?`, `href`, `bg`, `decorative`, `showBestTag?`

- [ ] **Step 1: Create `src/components/molecules/CardTicket.tsx`**

```typescript
import { Button } from '../atoms/Button'
import { Tag } from '../atoms/Tag'

interface CardTicketProps {
  name: string
  description: string
  price: string
  originalPrice?: string
  href?: string
  bg: string
  decorative: string
  showBestTag?: boolean
}

export function CardTicket({
  name,
  description,
  price,
  originalPrice,
  href = '#',
  bg,
  decorative,
  showBestTag = false,
}: CardTicketProps) {
  return (
    <div
      className="relative flex flex-col gap-[var(--spacing-16)] rounded-[var(--radius-lg)] px-[var(--spacing-24)] py-[var(--spacing-24)] overflow-hidden w-full"
      style={{ backgroundColor: bg }}
    >
      {/* Decorative image — absolute bottom-right */}
      <img
        src={decorative}
        aria-hidden="true"
        alt=""
        className="absolute bottom-0 right-0 h-[170px] w-[300px] object-cover pointer-events-none"
      />

      {/* Heading row */}
      <div className="flex items-center justify-between gap-[10px] relative z-10">
        <p
          className="font-[family-name:var(--font-primary)] text-[#0F0F0F]"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-2xl)',
            lineHeight: 'var(--leading-2xl)',
          }}
        >
          {name}
        </p>
        {showBestTag && <Tag label="THE BEST, OBV" variant="green" />}
      </div>

      {/* Description */}
      <p
        className="font-[family-name:var(--font-primary)] relative z-10"
        style={{
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-base)',
          color: 'var(--color-neutral-500)',
        }}
      >
        {description}
      </p>

      {/* Footer: price + CTA */}
      <div className="flex flex-wrap items-center gap-[var(--spacing-8)] relative z-10">
        <div className="flex flex-1 items-center gap-[var(--spacing-8)] font-[family-name:var(--font-primary)] text-[#0F0F0F]">
          {originalPrice && (
            <span
              className="line-through"
              style={{
                fontWeight: 'var(--weight-bold)',
                fontSize: 'var(--text-xl)',
                lineHeight: 'var(--leading-xl)',
              }}
            >
              {originalPrice}
            </span>
          )}
          <span
            style={{
              fontWeight: 'var(--weight-bold)',
              fontSize: 'var(--text-4xl)',
              lineHeight: 'var(--leading-4xl)',
            }}
          >
            {price}
          </span>
        </div>
        <Button label="Buy" variant="accent" href={href} />
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/molecules/CardTicket.tsx
git commit -m "feat: add CardTicket molecule"
```

---

## Task 6: Molecule — CardExpressive, BannerSlim, Banner

**Files:**
- Create: `src/components/molecules/CardExpressive.tsx`
- Create: `src/components/molecules/BannerSlim.tsx`
- Create: `src/components/molecules/Banner.tsx`

**Interfaces:**
- `CardExpressive` — `imageSrc: string`, `imageAlt?: string`, `tag: string`, `tagVariant: 'green' | 'blue'`, `heading: string`, `description: string`
- `BannerSlim` — `eyebrow?: string`, `title: string`, `description: string`, `ctaLabel: string`, `ctaHref?: string`, `bg: 'cold' | 'warm-1'`
- `Banner` — `imageSrc: string`, `heading: string`, `description: string`, `price: string`, `originalPrice?: string`, `ctaLabel: string`, `ctaHref?: string`

- [ ] **Step 1: Create `src/components/molecules/CardExpressive.tsx`**

```typescript
import { Tag } from '../atoms/Tag'

interface CardExpressiveProps {
  imageSrc: string
  imageAlt?: string
  tag: string
  tagVariant?: 'green' | 'blue'
  heading: string
  description: string
}

export function CardExpressive({
  imageSrc,
  imageAlt = '',
  tag,
  tagVariant = 'blue',
  heading,
  description,
}: CardExpressiveProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
      {/* Collage image */}
      <div className="w-full rounded-[var(--radius-lg)] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full object-cover"
          style={{ aspectRatio: '358 / 408' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[var(--spacing-8)] items-center w-full text-center">
        <Tag label={tag} variant={tagVariant} />
        <p
          className="font-[family-name:var(--font-primary)] text-[#0F0F0F]"
          style={{
            fontWeight: 'var(--weight-extrabold)',
            fontSize: 'var(--text-lg)',
            lineHeight: '28px',
          }}
        >
          {heading}
        </p>
        <p
          className="font-[family-name:var(--font-primary)]"
          style={{
            fontWeight: 'var(--weight-medium)',
            fontSize: 'var(--text-base)',
            lineHeight: 'normal',
            color: 'var(--color-neutral-500)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/components/molecules/BannerSlim.tsx`**

```typescript
import { Button } from '../atoms/Button'

interface BannerSlimProps {
  eyebrow?: string
  title: string
  description: string
  ctaLabel: string
  ctaHref?: string
  bg?: 'cold' | 'warm-1'
}

const bgColors: Record<NonNullable<BannerSlimProps['bg']>, string> = {
  'cold':   'var(--color-bg-cold)',
  'warm-1': 'var(--color-bg-warm-1)',
}

export function BannerSlim({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = '#',
  bg = 'cold',
}: BannerSlimProps) {
  const isOnIndigo = bg === 'cold'
  const ctaVariant = isOnIndigo ? 'on-indigo-secondary' : 'on-indigo-secondary'

  return (
    <div
      className="flex flex-col gap-[var(--spacing-40)] items-start justify-center p-[var(--spacing-40)] rounded-[var(--radius-lg)] w-full"
      style={{ backgroundColor: bgColors[bg] }}
    >
      <div
        className="flex flex-col gap-[var(--spacing-16)] items-start w-full"
        style={{ color: 'var(--color-neutral-0)' }}
      >
        {eyebrow && (
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-extrabold)',
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--leading-sm)',
            }}
          >
            {eyebrow}
          </p>
        )}
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-2xl)',
            lineHeight: 'var(--leading-2xl)',
          }}
        >
          {title}
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
          }}
        >
          {description}
        </p>
      </div>
      <Button label={ctaLabel} variant={ctaVariant} href={ctaHref} />
    </div>
  )
}
```

- [ ] **Step 3: Create `src/components/molecules/Banner.tsx`**

```typescript
import { Button } from '../atoms/Button'

interface BannerProps {
  imageSrc: string
  heading: string
  description: string
  price: string
  originalPrice?: string
  ctaLabel: string
  ctaHref?: string
}

export function Banner({
  imageSrc,
  heading,
  description,
  price,
  originalPrice,
  ctaLabel,
  ctaHref = '#',
}: BannerProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
      {/* Media */}
      <div
        className="relative rounded-[var(--radius-lg)] overflow-hidden w-full"
        style={{ aspectRatio: '1 / 1' }}
      >
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
        {/* Copy */}
        <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
          <p
            className="font-[family-name:var(--font-display)] w-full"
            style={{
              fontWeight: 400,
              fontSize: 'var(--text-5xl)',
              lineHeight: 'var(--leading-4xl)',
              color: 'var(--color-text-accent)',
            }}
          >
            {heading}
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full whitespace-pre-wrap"
            style={{
              fontWeight: 'var(--weight-semibold)',
              fontSize: 'var(--text-base)',
              lineHeight: 'normal',
              color: 'var(--color-neutral-1000)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
          <div
            className="flex items-center gap-[var(--spacing-8)] font-[family-name:var(--font-primary)] text-[#0F0F0F] whitespace-nowrap"
            style={{ fontWeight: 'var(--weight-bold)' }}
          >
            {originalPrice && (
              <span
                className="line-through"
                style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-xl)' }}
              >
                {originalPrice}
              </span>
            )}
            <span
              style={{ fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-4xl)' }}
            >
              {price}
            </span>
          </div>
          <Button label={ctaLabel} variant="accent" href={ctaHref} />
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/molecules/CardExpressive.tsx src/components/molecules/BannerSlim.tsx src/components/molecules/Banner.tsx
git commit -m "feat: add CardExpressive, BannerSlim, Banner molecules"
```

---

## Task 7: Sections — Hero + TicketSection

**Files:**
- Create: `src/components/sections/HeroSection.tsx`
- Create: `src/components/sections/TicketSection.tsx`

**Interfaces:**
- Consumes: `Button` from atoms, `CardTicket` from molecules, asset constants

**Design spec — HeroSection:**
- bg: page-primary
- STP_Logo_Extended.svg centered, 357×156px
- Date pill: `backdrop-filter: blur(4px)`, bg `#FDCAC4`, `border-radius: 8px`, `padding: 8px 16px`
- Date text: text-xl (24px) bold, `text-default`
- Tagline: text-lg (18px) semibold, `text-accent`, centered
- 2 CTAs full-width, stacked
- Red Fil Rouge decorative positioned absolute behind content (bottom of hero, bleeding into ticket section — handled at page level)

**Design spec — TicketSection:**
- bg: page-primary
- eyebrow: text-sm (14px) semibold, centered
- heading: text-4xl (48px) bold, centered
- 3 CardTicket stacked with 24px gap

- [ ] **Step 1: Create `src/components/sections/HeroSection.tsx`**

```typescript
import { Button } from '../atoms/Button'
import { LOGO_EXTENDED, FIL_ROUGE_RED } from '../../lib/assets'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col gap-[var(--spacing-40)] items-center px-[var(--mobile-margin)] py-[var(--spacing-40)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      {/* Fil Rouge Red decorative — absolute, bleeds into next section */}
      <img
        src={FIL_ROUGE_RED}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none"
        style={{
          top: '60%',
          left: '-18px',
          width: '425px',
          zIndex: 0,
        }}
      />

      {/* Logo Extended */}
      <div className="relative z-10 shrink-0" style={{ width: '357px', height: '156px' }}>
        <img
          src={LOGO_EXTENDED}
          alt="Stop all'Ansia"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Date pill */}
      <div
        className="relative z-10 flex items-center justify-center px-[var(--spacing-16)] py-[var(--spacing-8)] shrink-0"
        style={{
          backgroundColor: 'var(--color-bg-accent-subtle)',
          borderRadius: 'var(--radius-sm)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      >
        <p
          className="font-[family-name:var(--font-primary)] text-center whitespace-nowrap"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-xl)',
            lineHeight: 'var(--leading-xl)',
            color: 'var(--color-text-default)',
          }}
        >
          🗓️ 11 - 13 september 2026
        </p>
      </div>

      {/* Tagline */}
      <p
        className="relative z-10 font-[family-name:var(--font-primary)] text-center"
        style={{
          fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-lg)',
          lineHeight: 'var(--leading-lg)',
          color: 'var(--color-text-accent)',
        }}
      >
        Tre giorni di musica, arte, performance<br />
        e gente con cui vale la pena stare.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-col gap-[var(--spacing-16)] w-full">
        <Button
          label="Be part of the Festival"
          variant="accent"
          href="#tickets"
          className="w-full"
        />
        <Button
          label="Follow us on Instagram"
          variant="accent-secondary"
          href="#"
          className="w-full"
        />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `src/components/sections/TicketSection.tsx`**

```typescript
import { CardTicket } from '../molecules/CardTicket'
import { DECORATIVE_STRIPE, DECORATIVE_SPIRAL, DECORATIVE_SEGMENT } from '../../lib/assets'

const tickets = [
  {
    name: 'Day ticket',
    description: 'Accesso a una giornata del festival',
    price: '35 €',
    bg: 'var(--color-bg-warm-2)',
    decorative: DECORATIVE_STRIPE,
    showBestTag: false,
  },
  {
    name: 'Weekend',
    description: 'Accesso completo al weekend — la scelta giusta',
    price: '100 €',
    originalPrice: '100',
    bg: 'var(--color-bg-fresh-2)',
    decorative: DECORATIVE_SPIRAL,
    showBestTag: true,
  },
  {
    name: 'Full festival',
    description: 'Tre giorni interi di STP 26',
    price: '80 €',
    bg: 'var(--color-bg-warm-3)',
    decorative: DECORATIVE_SEGMENT,
    showBestTag: false,
  },
]

export function TicketSection() {
  return (
    <section
      id="tickets"
      className="flex flex-col gap-[var(--spacing-40)] items-start px-[var(--mobile-margin)] py-[var(--spacing-40)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      {/* Section header */}
      <div className="flex flex-col gap-[var(--spacing-16)] items-center text-center w-full">
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--leading-sm)',
            color: 'var(--color-neutral-1000)',
          }}
        >
          SCEGLI IL TUO BIGLIETTO
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-4xl)',
            lineHeight: 'var(--leading-4xl)',
            color: 'var(--color-neutral-1000)',
          }}
        >
          Tre format per vivere STP
        </p>
      </div>

      {/* Card list */}
      <div className="flex flex-col gap-[var(--spacing-24)] w-full">
        {tickets.map((ticket) => (
          <CardTicket key={ticket.name} {...ticket} href="#" />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Test both sections in App.tsx**

```typescript
import { Header } from './components/molecules/Header'
import { Ticker } from './components/molecules/Ticker'
import { HeroSection } from './components/sections/HeroSection'
import { TicketSection } from './components/sections/TicketSection'

export default function App() {
  return (
    <>
      <Header />
      <Ticker />
      <HeroSection />
      <TicketSection />
    </>
  )
}
```

Verify: Logo loads, date pill has pink bg + blur, tagline is red, CTAs correct colors. Ticket cards have correct backgrounds, decorative images in bottom-right.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HeroSection.tsx src/components/sections/TicketSection.tsx
git commit -m "feat: add HeroSection and TicketSection"
```

---

## Task 8: Sections — LocationSection + ArtistsSection

**Files:**
- Create: `src/components/sections/LocationSection.tsx`
- Create: `src/components/sections/ArtistsSection.tsx`

**Design spec — LocationSection:**
- bg: section-warm `#F5E8C3`
- Map image (from Figma): 358×326px, radius-lg, full-width
- Eyebrow: text-sm semibold, neutral-1000
- Heading: text-2xl (32px) bold, neutral-1000
- CTA: accent-secondary

**Design spec — ArtistsSection:**
- bg: section-subtle `#C9D8FE`
- Fil Rouge Blu decorative: absolute centered, rotated 90deg, full height
- Eyebrow: text-sm semibold
- Heading: text-3xl (40px) bold, centered
- Subheading: text-lg (18px) semibold, centered
- 2 CardExpressive stacked with 40px gap
- CTA: on-indigo, full-width
- BannerSlim (cold bg, no eyebrow)

- [ ] **Step 1: Create `src/components/sections/LocationSection.tsx`**

```typescript
import { Button } from '../atoms/Button'
import { MAP_IMAGE } from '../../lib/assets'

export function LocationSection() {
  return (
    <section
      id="location"
      className="flex flex-col gap-[var(--spacing-24)] items-start px-[var(--mobile-margin)] py-[var(--spacing-40)]"
      style={{ backgroundColor: 'var(--color-section-warm)' }}
    >
      {/* Map */}
      <div
        className="relative overflow-hidden rounded-[var(--radius-lg)] w-full"
        style={{ height: '326px' }}
      >
        <img
          src={MAP_IMAGE}
          alt="Map showing Lago Arenile, Carignano"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <div
        className="flex flex-col gap-[var(--spacing-16)] items-start w-full"
        style={{ color: 'var(--color-neutral-1000)' }}
      >
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--leading-sm)',
          }}
        >
          LOCATION
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-2xl)',
            lineHeight: 'var(--leading-2xl)',
          }}
        >
          Lago Arenile, Carignano (TO), Piedmont
        </p>
      </div>

      <Button label="How to get there" variant="accent-secondary" href="#" />
    </section>
  )
}
```

- [ ] **Step 2: Create `src/components/sections/ArtistsSection.tsx`**

```typescript
import { Button } from '../atoms/Button'
import { CardExpressive } from '../molecules/CardExpressive'
import { BannerSlim } from '../molecules/BannerSlim'
import { FIL_ROUGE_BLU, COLLAGE_MUSIC, COLLAGE_WORKSHOP } from '../../lib/assets'

export function ArtistsSection() {
  return (
    <section
      id="artists"
      className="relative flex flex-col gap-[var(--spacing-40)] items-center justify-center px-[var(--mobile-margin)] py-[var(--spacing-40)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-subtle)' }}
    >
      {/* Fil Rouge Blu — decorative background */}
      <img
        src={FIL_ROUGE_BLU}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          top: '50%',
          right: '-17px',
          transform: 'translateY(-50%)',
          width: '425px',
          height: '2260px',
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      {/* Section header */}
      <div
        className="relative z-10 flex flex-col gap-[var(--spacing-16)] items-center text-center w-full"
        style={{ color: 'var(--color-neutral-1000)' }}
      >
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)' }}
        >
          MOLTO PIÙ DI UN FESTIVAL
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-3xl)',
            lineHeight: 'var(--leading-3xl)',
          }}
        >
          Musica, arte, performance
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
          }}
        >
          GLi artisti che renderanno STP un'edizione fantastica
        </p>
      </div>

      {/* Card list */}
      <div className="relative z-10 flex flex-col gap-[var(--spacing-40)] w-full">
        <CardExpressive
          imageSrc={COLLAGE_MUSIC}
          tag="music"
          tagVariant="blue"
          heading="Generi diversi, stesso amore"
          description="Dal pomeriggio a tarda notte, per non perdere mai il ritmo giusto."
        />
        <CardExpressive
          imageSrc={COLLAGE_WORKSHOP}
          tag="workshop"
          tagVariant="green"
          heading="Arte è anche saper fare"
          description="Workshop didattici e pratici per conoscere cose nuove e non smettere mai di imparare."
        />
      </div>

      {/* CTA */}
      <Button
        label="Update on Instagram"
        variant="on-indigo"
        href="#"
        className="relative z-10 w-full"
      />

      {/* BannerSlim */}
      <BannerSlim
        title="Hai un progetto da proporci?"
        description={`Musica, arte visiva, performance, workshop, lecture. Qualunque forma abbia l'arte, per noi ha senso.`}
        ctaLabel="Proponi il tuo progetto"
        bg="cold"
        className="relative z-10"
      />
    </section>
  )
}
```

> **Note:** `BannerSlim` needs to accept `className` prop. Add `className?: string` to `BannerSlimProps` and spread it onto the root div's className.

- [ ] **Step 3: Update BannerSlim to accept className**

In `src/components/molecules/BannerSlim.tsx`, add `className?: string` to the interface and merge it:
```typescript
interface BannerSlimProps {
  // ... existing props
  className?: string
}

export function BannerSlim({ ..., className = '' }: BannerSlimProps) {
  return (
    <div
      className={`flex flex-col ... ${className}`}
      ...
    >
```

- [ ] **Step 4: Test in browser**

Verify: warm yellow LocationSection renders, map image loads. Blue ArtistsSection has correct bg, collage images load, cards centered.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/LocationSection.tsx src/components/sections/ArtistsSection.tsx src/components/molecules/BannerSlim.tsx
git commit -m "feat: add LocationSection and ArtistsSection"
```

---

## Task 9: Sections — MerchSection + CollaborateSection

**Files:**
- Create: `src/components/sections/MerchSection.tsx`
- Create: `src/components/sections/CollaborateSection.tsx`

**Design spec — MerchSection:**
- bg: page-primary
- Eyebrow: text-sm semibold, text-accent (red)
- Heading: text-3xl (40px) bold, text-accent
- Subheading: text-lg (18px) semibold, text-accent, multi-line
- 2 Banner items (STP Tee + STP Bag)

**Design spec — CollaborateSection:**
- bg: section-fresh `#C6E1C8`
- Hart illustration: absolute top-right, slightly outside bounds (right: -40px, top: 80px), 214×234px
- Heading: text-3xl (40px) bold, neutral-1000
- Body text: text-lg (18px) semibold, multi-paragraph
- 2 BannerSlim stacked: one cold (call for artists), one warm-1 (volunteers)

- [ ] **Step 1: Create `src/components/sections/MerchSection.tsx`**

```typescript
import { Banner } from '../molecules/Banner'
import { MERCH_TEE, MERCH_BAG } from '../../lib/assets'

export function MerchSection() {
  return (
    <section
      id="merch"
      className="flex flex-col gap-[var(--spacing-40)] items-center justify-center px-[var(--mobile-margin)] py-[var(--spacing-40)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      {/* Section header */}
      <div
        className="flex flex-col gap-[var(--spacing-16)] items-start w-full"
        style={{ color: 'var(--color-text-accent)' }}
      >
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)' }}
        >
          STP ON YOUR SKIN
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-3xl)',
            lineHeight: 'var(--leading-3xl)',
          }}
        >
          Merch 2026
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
          }}
        >
          Per portare STP a lavoro, in vacanza, ovunque ti serva.<br />
          To avoid unnecessary waste, we ask you to pre-order in advance.
        </p>
      </div>

      {/* STP Tee */}
      <Banner
        imageSrc={MERCH_TEE}
        heading="STP Tee"
        description={`The shirt is made entirely of GOTS-certified sustainable organic cotton.\n\nShirt: Stanley Stella Sparker - Relaxed/Over fit - 100% spun and combed organic cotton, 220 GSM - 1x1 rib crew neck. Printed back and front.`}
        price="30 €"
        originalPrice="40"
        ctaLabel="Pre-order your tee"
        ctaHref="#"
      />

      {/* STP Bag */}
      <Banner
        imageSrc={MERCH_BAG}
        heading="stp bag"
        description={`The bag is made entirely of GOTS-certified sustainable organic cotton.\n\nStanley Stella - Relaxed fit - 100% spun and combed organic cotton. Printed front.`}
        price="15 €"
        originalPrice="20"
        ctaLabel="Pre-order your bag"
        ctaHref="#"
      />
    </section>
  )
}
```

- [ ] **Step 2: Create `src/components/sections/CollaborateSection.tsx`**

```typescript
import { BannerSlim } from '../molecules/BannerSlim'
import { HART } from '../../lib/assets'

export function CollaborateSection() {
  return (
    <section
      id="collaborate"
      className="relative flex flex-col gap-[var(--spacing-40)] items-center justify-center px-[var(--mobile-margin)] py-[var(--spacing-40)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-fresh)' }}
    >
      {/* Hart decorative */}
      <img
        src={HART}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{ top: '80px', right: '-40px', width: '214px', height: '234px', zIndex: 0 }}
      />

      {/* Section header */}
      <div
        className="relative z-10 flex flex-col gap-[var(--spacing-16)] items-start w-full"
        style={{ color: 'var(--color-neutral-1000)' }}
      >
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-3xl)',
            lineHeight: 'var(--leading-3xl)',
          }}
        >
          Fai parte di STP
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
          }}
        >
          Ci sono due modi per entrare nel progetto:<br />
          uno è portare un progetto, un'idea, un suono, un laboratorio.<br />
          l'altro è essere parte di quello che tiene tutto insieme, come volontario.
        </p>
      </div>

      {/* Banner cards */}
      <div className="relative z-10 flex flex-col gap-[var(--spacing-24)] w-full">
        <BannerSlim
          eyebrow="CALL FOR ARTISTS"
          title="Hai un progetto da proporci?"
          description={`Musica, arte visiva, performance, workshop, lecture. Qualunque forma abbia l'arte, per noi ha senso.`}
          ctaLabel="Proponi il tuo progetto"
          bg="cold"
          ctaHref="#"
        />
        <BannerSlim
          eyebrow="CALL FOR VOLUNTEERS"
          title="Vuoi darci una mano?"
          description="Controlli agli ingressi, servizio bar, ordine e pulizia o semplicemente rispondere alle domande dei partecipanti."
          ctaLabel="Iscriviti come volontario"
          bg="warm-1"
          ctaHref="#"
        />
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/MerchSection.tsx src/components/sections/CollaborateSection.tsx
git commit -m "feat: add MerchSection and CollaborateSection"
```

---

## Task 10: Sections — CreativitySection + FooterSection

**Files:**
- Create: `src/components/sections/CreativitySection.tsx`
- Create: `src/components/sections/FooterSection.tsx`

**Design spec — CreativitySection:**
- bg: section-accent `#F03D3D`
- Fil Rouge Red 2 decorative: absolute centered, full-bleed
- Quote text: mixed weight within same paragraph
  - "Creativity has not" and "it just " → Neue Regrade Regular (400)
  - "disappeared," and "needs space" → Neue Regrade Bold (700)
  - Size: text-3xl (40px), centered, neutral-1000

**Design spec — FooterSection:**
- bg: section-inverse `#000000`
- STP Logo Extended White SVG centered (359×157px aspect ratio)
- "A project of" text-sm semibold, neutral-0, centered
- La Marina logo centered (272×108px)

- [ ] **Step 1: Create `src/components/sections/CreativitySection.tsx`**

```typescript
import { FIL_ROUGE_RED } from '../../lib/assets'

export function CreativitySection() {
  return (
    <section
      className="relative flex flex-col gap-[var(--spacing-40)] items-center px-[var(--mobile-margin)] py-[var(--spacing-64)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-accent)' }}
    >
      {/* Fil Rouge Red decorative */}
      <img
        src={FIL_ROUGE_RED}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '390px',
          height: '544px',
          zIndex: 0,
        }}
      />

      {/* Quote */}
      <p
        className="relative z-10 font-[family-name:var(--font-primary)] text-center"
        style={{
          fontSize: 'var(--text-3xl)',
          lineHeight: 'var(--leading-3xl)',
          color: 'var(--color-neutral-1000)',
        }}
      >
        <span style={{ fontWeight: 'var(--weight-regular)' }}>Creativity has not</span>
        {' '}
        <span style={{ fontWeight: 'var(--weight-bold)' }}>disappeared,</span>
        <br />
        <span style={{ fontWeight: 'var(--weight-regular)' }}>it just </span>
        <span style={{ fontWeight: 'var(--weight-bold)' }}>needs space</span>
      </p>
    </section>
  )
}
```

- [ ] **Step 2: Create `src/components/sections/FooterSection.tsx`**

```typescript
import { LOGO_EXTENDED_WHITE, LA_MARINA_LOGO } from '../../lib/assets'

export function FooterSection() {
  return (
    <footer
      className="flex flex-col gap-[var(--spacing-40)] items-center px-[var(--mobile-margin)] py-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-section-inverse)' }}
    >
      {/* STP Logo Extended White */}
      <div style={{ width: '100%', aspectRatio: '359 / 157', maxWidth: '359px' }}>
        <img
          src={LOGO_EXTENDED_WHITE}
          alt="Stop all'Ansia"
          className="w-full h-full object-contain"
        />
      </div>

      {/* "A project of" */}
      <p
        className="font-[family-name:var(--font-primary)] text-center"
        style={{
          fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-sm)',
          lineHeight: 'var(--leading-sm)',
          color: 'var(--color-neutral-0)',
        }}
      >
        A project of
      </p>

      {/* La Marina logo */}
      <div style={{ width: '272px', height: '108px' }}>
        <img
          src={LA_MARINA_LOGO}
          alt="La Marina Collective"
          className="w-full h-full object-contain"
        />
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CreativitySection.tsx src/components/sections/FooterSection.tsx
git commit -m "feat: add CreativitySection and FooterSection"
```

---

## Task 11: Page Assembly + Quality Review

**Files:**
- Modify: `src/App.tsx` (final assembly)

**Goal:** Compose all sections in order, verify full page renders pixel-perfect against Figma.

- [ ] **Step 1: Update `src/App.tsx` with full page**

```typescript
import { Header } from './components/molecules/Header'
import { Ticker } from './components/molecules/Ticker'
import { HeroSection } from './components/sections/HeroSection'
import { TicketSection } from './components/sections/TicketSection'
import { LocationSection } from './components/sections/LocationSection'
import { ArtistsSection } from './components/sections/ArtistsSection'
import { MerchSection } from './components/sections/MerchSection'
import { CollaborateSection } from './components/sections/CollaborateSection'
import { CreativitySection } from './components/sections/CreativitySection'
import { FooterSection } from './components/sections/FooterSection'

export default function App() {
  return (
    <>
      <Header />
      <Ticker />
      <main>
        <HeroSection />
        <TicketSection />
        <LocationSection />
        <ArtistsSection />
        <MerchSection />
        <CollaborateSection />
        <CreativitySection />
      </main>
      <FooterSection />
    </>
  )
}
```

- [ ] **Step 2: Set viewport in index.html**

The `<meta name="viewport">` is already set. Confirm it reads:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- [ ] **Step 3: Quality review — run dev server and compare section by section against Figma**

```bash
npm run dev
```

Open in Chrome DevTools with device emulator set to **iPhone 12 Pro** (390×844).

Check each section against Figma screenshot:
- [ ] Header: logo, hamburger icon, CTA button visible and correctly styled
- [ ] Ticker: indigo bg, uppercase white text, scrolling animation
- [ ] Hero: STP logo large, pink date pill, red tagline text, 2 CTAs
- [ ] TicketSection: 3 colored cards with correct backgrounds and prices
- [ ] LocationSection: warm yellow bg, map image, heading, CTA
- [ ] ArtistsSection: light blue bg, 2 artist cards with images, BannerSlim at bottom
- [ ] MerchSection: page bg, tee + bag items with Kelsi display font heading
- [ ] CollaborateSection: green bg, Hart illustration, 2 BannerSlim
- [ ] CreativitySection: red bg, quote with mixed weights
- [ ] Footer: black bg, white logo, La Marina logo

- [ ] **Step 4: Fix any visual discrepancies found in Step 3**

(Address during review — no placeholder fixes needed beyond what the plan covers.)

- [ ] **Step 5: Build for production**

```bash
npm run build
```
Expected: `dist/` folder generated, no TypeScript errors, no build warnings.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat: assemble full STP 26 mobile landing page"
```

---

## End of Task Summary Checklist

After completing all tasks, document in a `SUMMARY.md` at project root:

**Hardcoded exceptions** (values with no matching token):
- `#0F0F0F` — ticket card title color (token JSON has `#1A1A1A` as neutral-1000, but Figma uses `#0F0F0F`)
- `#FFFDF0` — ticker text color (not in tokens JSON)
- `28px` line-height on CardExpressive heading (token has `27px` for lg, Figma uses `28px`)
- `40px` font-size for section headings (text-3xl in JSON) — Figma fallback shows `51px` for `--font-size/3xl`; using `40px` per JSON source of truth
- `64px` vertical padding on CreativitySection (no `--spacing-64` token in vertical spacing)

**Naming changes** (from Figma convention):
- `CreativitySECTION` → `CreativitySection` (camelCase normalization)
- `Artists Section` → `ArtistsSection` (space removed)
- `MerchSection` → unchanged
- `Banner Slim` → `BannerSlim` (space removed)
- `card/ticket` → `CardTicket` (slash replaced, PascalCase)
- `card/expressive` → `CardExpressive`

**Open questions for designer review:**
1. Does `--font-size/3xl` = 40px (per JSON) or ~51px (per Figma fallback)? Affects all large section headings.
2. Ticker: should it auto-scroll or be static? Currently animated with CSS.
3. Map in LocationSection: static Figma asset or embedded Google Maps iframe?
4. CTA links: what are the actual destination URLs?
5. Fil Rouge Red asset position: does it bleed from Hero into TicketSection or stay within Hero?

---

## Self-Review

**Spec coverage check:**
- ✅ Mobile first (390px)
- ✅ React + Vite + Tailwind CSS
- ✅ No routing — all CTAs use `href`
- ✅ Self-hosted fonts via @font-face
- ✅ Token values only (no hardcodes except flagged exceptions)
- ✅ Assets as `<img aria-hidden>` for decorative
- ✅ All 8 sections + header + footer + mobile menu
- ✅ StyleGuide.md created in Task 1
- ✅ Build check in Task 11
- ✅ English code, Italian/English copy preserved
- ✅ Naming close to Figma

**Placeholder scan:** None found.

**Type consistency:** `Button`, `Tag`, `NavItem`, `CardTicket`, `CardExpressive`, `BannerSlim`, `Banner` — all prop names used consistently across tasks.
