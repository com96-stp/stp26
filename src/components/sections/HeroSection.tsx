import { Button } from '../atoms/Button'
import { LOGO_EXTENDED, FIL_ROUGE_RED_HERO } from '../../lib/assets'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col gap-[var(--spacing-40)] items-center px-[var(--mobile-margin)] py-[var(--spacing-40)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      {/* Fil Rouge Red decorative — absolute, bleeds into next section */}
      <img
        src={FIL_ROUGE_RED_HERO}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '-18px',
          width: '425px',
          transform: 'translateY(-50%)',
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
            fontWeight: 'var(--weight-bold)' as unknown as number,
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
          fontWeight: 'var(--weight-semibold)' as unknown as number,
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
