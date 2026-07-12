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
          Lago Arenile, Carignano (TO), Piedmont
        </p>
      </div>

      <Button label="How to get there" variant="accent-secondary" href="#" />
    </section>
  )
}
