import { Container } from '../layout/Container'

export function LocationSection() {
  return (
    <section
      id="location"
      className="py-[var(--spacing-40)] xl:py-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-section-warm)' }}
    >
      {/* Text-only "secret location" block — no map, no CTA (per Figma) */}
      <Container
        data-reveal
        className="flex flex-col gap-[var(--spacing-16)] items-start"
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
          SECRET LOCATION - SOUTH OF TURIN
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)' as unknown as number,
            fontSize: 'var(--text-2xl)',
            lineHeight: 'var(--leading-2xl)',
          }}
        >
          The exact spot is a secret. You'll find it printed on your pass, and nowhere else.<br /><br />
          Get the pass, unlock the place
        </p>
      </Container>
    </section>
  )
}
