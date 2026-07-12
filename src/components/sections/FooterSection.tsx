import { LOGO_EXTENDED, LA_MARINA_LOGO } from '../../lib/assets'

export function FooterSection() {
  return (
    <footer
      className="flex flex-col gap-[var(--spacing-40)] items-center px-[var(--mobile-margin)] py-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-section-inverse)' }}
    >
      {/* STP Logo Extended */}
      <div style={{ width: '100%', aspectRatio: '359 / 157', maxWidth: '359px' }}>
        <img
          src={LOGO_EXTENDED}
          alt="Stop all'Ansia"
          className="w-full h-full object-contain"
        />
      </div>

      {/* "A project of" */}
      <p
        className="font-[family-name:var(--font-primary)] text-center"
        style={{
          fontWeight: 'var(--weight-semibold)' as unknown as number,
          fontSize: 'var(--text-sm)',
          lineHeight: 'var(--leading-sm)',
          color: 'var(--color-neutral-0)',
        }}
      >
        A project of
      </p>

      {/* La Marina logo */}
      <div style={{ width: '272px', height: '108px' }}>
        <img
          src={LA_MARINA_LOGO}
          alt="La Marina Collective"
          className="w-full h-full object-contain"
        />
      </div>
    </footer>
  )
}
