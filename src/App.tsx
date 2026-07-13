import { useLandingMotion } from './hooks/useLandingMotion'
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
import { ComingSoonSection } from './components/sections/ComingSoonSection'
import { HIDDEN_SECTIONS } from './lib/sectionVisibility'

// Placeholder mode: shows only a minimal "coming soon" page while ticket
// info / content is still being finalized. Flip to 'false' in .env (or the
// hosting provider's env vars) to switch back to the full site — no code
// changes or content loss, the full site stays fully built underneath.
const COMING_SOON = import.meta.env.VITE_COMING_SOON !== 'false'

export default function App() {
  useLandingMotion()

  if (COMING_SOON) {
    return <ComingSoonSection />
  }

  return (
    <>
      <Header />
      <Ticker />
      <main>
        <HeroSection />
        <TicketSection />
        {!HIDDEN_SECTIONS.has('location') && <LocationSection />}
        <ArtistsSection />
        {!HIDDEN_SECTIONS.has('merch') && <MerchSection />}
        {!HIDDEN_SECTIONS.has('collaborate') && <CollaborateSection />}
        <CreativitySection />
      </main>
      <FooterSection />
    </>
  )
}
