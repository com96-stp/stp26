// Centralized asset references — always import from here, never inline in components.
// Local assets are imported so Vite bundles + hashes them (works in dev AND in the
// production build). Referencing them as plain "/src/..." strings would 404 in the
// build because Vite does not copy src/ files that aren't imported as modules.

// Logos
import logoExtended from '../asset/Loghi/STP_Logo_Extended.svg'
import logoExtendedWhite from '../asset/Loghi/STP_Logo_Extended_W.svg'
import logoCondensed from '../asset/Loghi/STP_Logo Condensed.svg'
import laMarinaLogo from '../asset/Loghi/La marina logo.svg'

// Decorative
import decorativeStripe from '../asset/decorative/variant=Stripe.png'
import decorativeSpiral from '../asset/decorative/variant=Spiral.png'
import decorativeSegment from '../asset/decorative/variant=Segment.png'
import filRougeBlu from '../asset/Fil Rouge blu mobile.png'
import filRougeRed from '../asset/Fil Rouge red 2 mobile.png'
import filRougeRedHero from '../asset/Fil Rouge Red hero mobile.png'
// Desktop (xl) decorative variants
import filRougeBluDesk from '../asset/Fil Rouge blu desk.svg'
import filRougeRedDesk from '../asset/Fil Rouge red 2 desk.png'
import filRougeRedHeroDesk from '../asset/Fil Rouge Red hero desk.svg'
import pinLocation from '../asset/Pin Location.svg'
import hart from '../asset/Hart Collab.svg'

// Merch
import merchTee from '../asset/MerchSection/media 1 stp tee.png'
import merchBag from '../asset/MerchSection/media 2 stp bag.png'

// Collage (Artists section)
import collageMusic from '../asset/collage/variant=music cover.png'
import collageWorkshop from '../asset/collage/variant=workshop cover.png'

// Menu icons — Figma variant names: state=close = hamburger (menu closed), state=open = X (menu open)
import iconHamburger from '../asset/icons/state=close.svg'
import iconClose from '../asset/icons/state=open.svg'

// Logos
export const LOGO_EXTENDED = logoExtended
export const LOGO_EXTENDED_WHITE = logoExtendedWhite
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
