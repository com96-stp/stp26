// Centralized asset references — always import from here, never inline in components.
// Local assets are imported so Vite bundles + hashes them (works in dev AND in the
// production build). Referencing them as plain "/src/..." strings would 404 in the build.

// Logos
import logoExtended from '../asset/logos/stp-logo-extended.svg'
import logoCondensed from '../asset/logos/stp-logo-condensed.svg'
import laMarinaLogo from '../asset/logos/la-marina-logo.svg'

// Decorative
import decorativeStripe from '../asset/decorative/stripe.png'
import decorativeSpiral from '../asset/decorative/spiral.png'
import decorativeSegment from '../asset/decorative/segment.png'
import filRougeBlu from '../asset/fil-rouge-blu-mobile.png'
import filRougeRed from '../asset/fil-rouge-red-2-mobile.png'
import filRougeRedHero from '../asset/fil-rouge-red-hero-mobile.png'
// Desktop (xl) decorative variants
import filRougeBluDesk from '../asset/fil-rouge-blu-desk.svg'
import filRougeRedDesk from '../asset/fil-rouge-red-2-desk.png'
import filRougeRedHeroDesk from '../asset/fil-rouge-red-hero-desk.svg'
import pinLocation from '../asset/pin-location.svg'
import hart from '../asset/hart-collab.svg'

// Merch
import merchTee from '../asset/merch/stp-tee.png'
import merchBag from '../asset/merch/stp-bag.png'

// Collage (Artists section)
import collageMusic from '../asset/collage/music-cover.png'
import collageWorkshop from '../asset/collage/workshop-cover.png'

// Menu icons — hamburger (menu closed) / X (menu open)
import iconHamburger from '../asset/icons/menu-hamburger.svg'
import iconClose from '../asset/icons/menu-close.svg'

// Logos
export const LOGO_EXTENDED = logoExtended
export const LOGO_CONDENSED = logoCondensed
export const LA_MARINA_LOGO = laMarinaLogo

// Decorative
export const DECORATIVE_STRIPE = decorativeStripe
export const DECORATIVE_SPIRAL = decorativeSpiral
export const DECORATIVE_SEGMENT = decorativeSegment
export const FIL_ROUGE_BLU = filRougeBlu
export const FIL_ROUGE_RED = filRougeRed
export const FIL_ROUGE_RED_HERO = filRougeRedHero
export const FIL_ROUGE_BLU_DESK = filRougeBluDesk
export const FIL_ROUGE_RED_DESK = filRougeRedDesk
export const FIL_ROUGE_RED_HERO_DESK = filRougeRedHeroDesk
export const PIN_LOCATION = pinLocation
export const HART = hart

// Merch
export const MERCH_TEE = merchTee
export const MERCH_BAG = merchBag

// Collage (Artists section)
export const COLLAGE_MUSIC = collageMusic
export const COLLAGE_WORKSHOP = collageWorkshop

// Menu icons (local, bundled)
export const ICON_HAMBURGER = iconHamburger
export const ICON_CLOSE = iconClose

// Map — still Figma-hosted (no local asset available); URL expires 2026-07-18.
// TODO: download into src/asset/ and import it like the rest before launch.
export const MAP_IMAGE = 'https://www.figma.com/api/mcp/asset/52467b7d-f0ea-4666-83f5-d858fecb66ec'
