import { Button } from '../atoms/Button'
import { LOGO_EXTENDED, FIL_ROUGE_RED_HERO, FIL_ROUGE_RED_HERO_DESK } from '../../lib/assets'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-[var(--spacing-40)] xl:py-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      {/* Fil Rouge Red decorative — mobile (subtle scroll parallax); centered horizontally */}
      <img
        src={FIL_ROUGE_RED_HERO}
        aria-hidden="true"
        alt=""
        data-parallax="0.06"
        data-pbase="translate(-50%, -50%)"
        className="absolute pointer-events-none xl:hidden"
        style={{
          top: '50%',
          left: '50%',
          width: '425px',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      />
      {/* Fil Rouge Red decorative — desktop (xl) */}
      <img
        src={FIL_ROUGE_RED_HERO_DESK}
        aria-hidden="true"
        alt=""
        data-parallax="0.06"
        data-pbase="translate(-50%, -50%)"
        className="absolute pointer-events-none hidden xl:block fil-rouge-draw"
        style={{
          top: '50%',
          left: '50%',
          width: '1365px',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      />

      {/* Centered content column (narrow on desktop so CTAs don't stretch) */}
      <div className="relative z-10 mx-auto flex w-full max-w-[600px] flex-col items-center gap-[var(--spacing-40)] px-[var(--mobile-margin)]">
        {/* Logo w disclaimer */}
        <div className="flex flex-col items-center gap-[var(--spacing-8)] shrink-0 w-full" data-reveal>
          <div className="shrink-0" style={{ width: '357px', height: '156px' }}>
            <img
              src={LOGO_EXTENDED}
              alt="Stop all'Ansia"
              className="w-full h-full object-contain"
            />
          </div>
          <p
            className="font-[family-name:var(--font-primary)] text-center w-full"
            style={{
              fontWeight: 'var(--weight-regular)' as unknown as number,
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--leading-sm)',
              color: 'var(--color-text-default)',
            }}
          >
            Private event for members of the La Marina Collective Association
          </p>
        </div>

        {/* Date pill */}
        <div
          className="flex items-center justify-center px-[var(--spacing-16)] py-[var(--spacing-8)] shrink-0"
          style={{
            backgroundColor: 'var(--color-bg-accent-subtle)',
            borderRadius: 'var(--radius-sm)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
          data-reveal
          data-reveal-delay="180"
        >
          <p
            className="font-[family-name:var(--font-primary)] text-center whitespace-nowrap"
            style={{
              fontWeight: 'var(--weight-bold)' as unknown as number,
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--leading-xl)',
              color: 'var(--color-text-default)',
            }}
          >
            🗓️ September 11 - 13, 2026
          </p>
        </div>

        {/* Tagline */}
        <p
          className="font-[family-name:var(--font-primary)] text-center"
          style={{
            fontWeight: 'var(--weight-semibold)' as unknown as number,
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
            color: 'var(--color-text-accent)',
          }}
          data-reveal
          data-reveal-delay="360"
        >
          A weekend of music, art, good food, camping and great company worth your time.
        </p>

        {/* CTAs — mobile: stacked full-width · desktop (xl): hug + inline, 24px gap */}
        <div
          className="flex flex-col gap-[var(--spacing-16)] w-full xl:w-auto xl:flex-row xl:gap-[var(--spacing-24)]"
          data-reveal
          data-reveal-delay="540"
        >
          <Button label="Join the event" variant="accent" href="#tickets" className="w-full xl:w-auto" />
          <Button label="Follow us on Instagram" variant="accent-secondary" href="https://www.instagram.com/stop.all.ansia/" className="w-full xl:w-auto" />
        </div>
      </div>
    </section>
  )
}
