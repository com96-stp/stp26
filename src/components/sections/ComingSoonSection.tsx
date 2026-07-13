import { Button } from '../atoms/Button'
import { LOGO_EXTENDED, FIL_ROUGE_RED_HERO, FIL_ROUGE_RED_HERO_DESK } from '../../lib/assets'

// Standalone placeholder page shown while ticket info / content is still being
// finalized. No header/nav/other sections — just the brand + a single,
// low-commitment CTA. Swap back to <App> sections via VITE_COMING_SOON in .env.
export function ComingSoonSection() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      <img
        src={FIL_ROUGE_RED_HERO}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none xl:hidden"
        style={{ top: '50%', left: '50%', width: '425px', transform: 'translate(-50%, -50%)', zIndex: 0 }}
      />
      <img
        src={FIL_ROUGE_RED_HERO_DESK}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none hidden xl:block"
        style={{ top: '50%', left: '50%', width: '1365px', transform: 'translate(-50%, -50%)', zIndex: 0 }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[600px] flex-col items-center gap-[var(--spacing-40)] px-[var(--mobile-margin)] text-center">
        <div className="shrink-0" style={{ width: '357px', height: '156px' }}>
          <img src={LOGO_EXTENDED} alt="Stop all'Ansia" className="w-full h-full object-contain" />
        </div>

        <p
          className="font-[family-name:var(--font-primary)]"
          style={{
            fontWeight: 'var(--weight-semibold)' as unknown as number,
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
            color: 'var(--color-text-accent)',
          }}
        >
          Something is coming. Follow us to be the first to know.
        </p>

        <Button label="Follow us on Instagram" variant="accent" href="https://www.instagram.com/stop.all.ansia/" />
      </div>
    </section>
  )
}
