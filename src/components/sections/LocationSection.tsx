import { Container } from '../layout/Container'
import { Button } from '../atoms/Button'
import { MAP_IMAGE, PIN_LOCATION } from '../../lib/assets'

export function LocationSection() {
  return (
    <section
      id="location"
      className="relative overflow-hidden py-[var(--spacing-40)] xl:py-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-section-warm)' }}
    >
      {/* Pin Location decorative (like Hart in Collaborate) */}
      <img
        src={PIN_LOCATION}
        aria-hidden="true"
        alt=""
        data-parallax="0.1"
        data-pbase=""
        className="absolute pointer-events-none select-none"
        style={{ bottom: '32px', right: '-40px', width: '172px', height: '303px', zIndex: 0 }}
      />

      <Container data-reveal className="relative z-10 flex flex-col gap-[var(--spacing-24)] xl:grid xl:grid-cols-12 xl:gap-[var(--desktop-gutter)] xl:items-center">
        {/* Map — full width on mobile, 3 columns on desktop */}
        <div
          className="relative overflow-hidden rounded-[var(--radius-lg)] w-full xl:col-span-3"
          style={{ height: '326px' }}
        >
          <img
            src={MAP_IMAGE}
            alt="Map showing Lago Arenile, Carignano"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content (heading + CTA) — right of the map on desktop (9 columns) */}
        <div
          className="flex flex-col gap-[var(--spacing-24)] items-start xl:col-span-9"
          style={{ color: 'var(--color-neutral-1000)' }}
        >
          <div className="flex flex-col gap-[var(--spacing-16)] items-start w-full">
            <p
              className="font-[family-name:var(--font-primary)] w-full"
              style={{
                fontWeight: 'var(--weight-semibold)' as unknown as number,
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--leading-sm)',
              }}
            >
              LOCATION
            </p>
            <p
              className="font-[family-name:var(--font-primary)] w-full"
              style={{
                fontWeight: 'var(--weight-bold)' as unknown as number,
                fontSize: 'var(--text-2xl)',
                lineHeight: 'var(--leading-2xl)',
              }}
            >
              Carignano (TO), Piedmont
            </p>
          </div>

          <Button label="How to get there" variant="accent-secondary" href="#" />
        </div>
      </Container>
    </section>
  )
}
