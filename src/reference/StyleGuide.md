# STP 26 — StyleGuide

## Brand Identity
Stop all'Ansia is a 3-day festival (11–13 September 2026) at Lago Arenile, Carignano (TO), Piedmont.
Warm, irreverent, creative. Not corporate. The palette is earthy, rich, handmade-feeling.
Typography is bold and confident — Neue Regrade (variable font) dominates; Kelsi fill is reserved for display moments only.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| page-primary | `#FCF8F5` | Page background, menu overlay, cards on dark sections |
| page-inverse | `#000000` | Footer background |
| text-default | `#000000` | Primary body text |
| text-accent | `#960011` | Accent text (hero tagline, merch headings) |
| action-accent | `#960011` | Filled CTA button background |
| action-accent-content | `#FCF8F5` | Filled CTA button text |
| action-accent-secondary-content | `#960011` | Outline CTA button text |
| action-on-indigo | `#F3F6FF` | Button background on indigo sections |
| action-on-indigo-content | `#273CB2` | Button text on indigo sections |
| action-on-indigo-secondary-content | `#FCF8F5` | Secondary button text on indigo |
| section-subtle | `#C9D8FE` | Artists section background |
| section-fresh | `#C6E1C8` | Collaborate section background |
| section-warm | `#F5E8C3` | Location section background |
| section-accent | `#F03D3D` | Creativity quote section background |
| section-cold | `#273CB2` | Ticker background |
| bg-accent-subtle | `#FDCAC4` | Date pill in hero |
| bg-warm-2 | `#EFD791` | Ticket card 1 (Day) |
| bg-fresh-2 | `#C6E1C8` | Ticket card 2 (Weekend) |
| bg-warm-3 | `#EED2BE` | Ticket card 3 (Full) |
| bg-fresh-1 | `#005F23` | Green tag background |
| bg-cold | `#273CB2` | Call-for-artists banner |
| bg-warm-1 | `#763D00` | Volunteers banner |

## Typography

**Fonts:**
- `Neue Regrade` — primary font, variable (100–900). Used for all UI text.
- `Kelsi` — display font (fill style). Used ONLY for merch product name headings.

**Type Scale (from tokens):**
| Name | Size | Line-height | Letter-spacing |
|------|------|-------------|----------------|
| xs | 12px | 15px | +1.5px |
| sm | 14px | 21px | 0 |
| base | 16px | 24px | 0 |
| lg | 18px | 27px | 0 |
| xl | 24px | 36px | 0 |
| 2xl | 32px | 40px | 0 |
| 3xl | 40px | 60px | 0 |
| 4xl | 48px | 72px | 0 |
| 5xl | 60px | 90px | 0 |

**Common text usages:**
- Eyebrow / label: xs (12px) extrabold uppercase +1.5px tracking
- Section sub-label: sm (14px) semibold uppercase
- Body copy: base (16px) medium or semibold
- Body large: lg (18px) semibold
- Card title: 2xl (32px) bold
- Section heading: 3xl (40px) bold or 4xl (48px) bold
- Display (Kelsi): 5xl (60px)

## Button System

All buttons: `border-radius: 9999px`, `padding: 20px 24px`, `font-size: 16px`, `font-weight: 600`, no underline.

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| `accent` | `#960011` | `#FCF8F5` | — |
| `accent-secondary` | transparent | `#960011` | 1px `#960011` |
| `on-indigo` | `#F3F6FF` | `#273CB2` | — |
| `on-indigo-secondary` | transparent | `#FCF8F5` | 1px `#F3F6FF` |

## Tag Pills

All tags: `border-radius: 9999px`, `padding: 4px 12px`, `font-size: 12px`, `font-weight: 800`, `text-transform: uppercase`, `letter-spacing: 1.5px`.

| Variant | Background | Text |
|---------|-----------|------|
| green | `#005F23` | `#F2F8F2` |
| blue | `#273CB2` | `#F2F8F2` |

## Border Radius
- Cards, map, collage images: `24px`
- Buttons, tags: `9999px`
- Date pill: `8px`

## Grid (mobile first)
- Canvas: 390px
- Horizontal margin: 16px (content width = 358px)
- Gutter: 8px
- Section vertical padding: 40px

## Section Anatomy (mobile, top → bottom)
1. **Header** (sticky, frosted glass) — 80px h + Ticker (31px)
2. **HeroSection** — page bg, logo + date pill + tagline + 2 CTAs
3. **TicketSection** — page bg, eyebrow + heading + 3 cards
4. **LocationSection** — warm `#F5E8C3`, map + heading + CTA
5. **ArtistsSection** — subtle `#C9D8FE`, heading + 2 artist cards + CTA + BannerSlim
6. **MerchSection** — page bg, heading + 2 product cards
7. **CollaborateSection** — fresh `#C6E1C8`, heading + 2 BannerSlim
8. **CreativitySection** — accent `#F03D3D`, mixed-weight quote
9. **Footer** — black, STP Extended logo (colored, not the white `_W` variant) + "A project of" + La Marina

## Decorative Assets
- `Fil Rouge blu mobile.png` — blue brush stroke, in ArtistsSection (absolute, right side)
- `Fil Rouge Red hero mobile.png` — red brush stroke, HeroSection only (absolute)
- `Fil Rouge red 2 mobile.png` — red brush stroke, CreativitySection (absolute, centered)
- `Hart Collab.svg` — heart, absolute top-right in CollaborateSection
- Decorative Stripe/Spiral/Segment PNGs — bottom-right corner of each ticket card

## Component Notes
- **Ticker** — text uses `text-inverse` (`#FCF8F5`) on `section-cold` bg; type is `text-xs` (12px) bold, tracking `1.5px`. Full-width → covers both UI Kit sizes (s / Default) responsively.
- **CTA (Button)** — variants: `accent`, `accent-secondary`, `on-indigo`, `on-indigo-secondary`. Sizes: default (`px 24 / py 20`, 64px), small (`px 16 / py 12`, 48px, used in Header). Hover: filled variants darken bg (`accent → #4D100F`, `on-indigo → #E0E8FE`); outline variants thicken an inset stroke 1px → 3px (inward, no layout shift).
- **NavItem** — hover raises weight Semibold → Extrabold.
- **Tag** — 3 variants: `green` (bg fresh-1 #005F23), `blue` (bg cold #273CB2), `orange` (bg warm-1 #763D00); text always emerald-50 #F2F8F2.
- **CardExpressive** — `tagVariant` supports green / blue / orange.
- **Banner / BannerSlim** — `size` prop: `mobile` (vertical stack, default) / `desktop` (horizontal layout, UI Kit `xl`).
- **Discount price** (CardTicket + Banner) — the original/pre-discount price is always strikethrough, type `lg-semibold` (text-lg 18px / leading-lg 27px / weight 600); the current price stays bold.

## Do's
- Use Neue Regrade Variable font — supports all weights 100–900 in one file
- Use Kelsi fill only for merch headings (STP Tee, stp bag)
- Match section backgrounds exactly from palette
- Keep all decorative assets as `<img aria-hidden="true" alt="" />`
- Full-width CTAs in hero and menu; inline CTAs in cards/banners

## Don'ts
- Don't use Google Fonts or external font services
- Don't reconstruct SVGs in CSS
- Don't use box shadows
- Don't use border-radius below 8px on interactive elements
