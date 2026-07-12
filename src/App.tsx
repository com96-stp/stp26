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

export default function App() {
  useLandingMotion()

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
