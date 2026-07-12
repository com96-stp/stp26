import { FIL_ROUGE_RED } from '../../lib/assets'

export function CreativitySection() {
  return (
    <section
      className="relative flex flex-col gap-[var(--spacing-40)] items-center px-[var(--mobile-margin)] py-[var(--spacing-64)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-accent)' }}
    >
      {/* Fil Rouge Red decorative */}
      <img
        src={FIL_ROUGE_RED}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '390px',
          height: '544px',
          zIndex: 0,
        }}
      />

      {/* Quote with mixed weights */}
      <p
        className="relative z-10 font-[family-name:var(--font-primary)] text-center"
        style={{
          fontSize: 'var(--text-4xl)',
          lineHeight: 'var(--leading-4xl)',
          color: 'var(--color-neutral-1000)',
        }}
      >
        <span style={{ fontWeight: 'var(--weight-regular)' as unknown as number }}>Creativity has not</span>
        {' '}
        <span style={{ fontWeight: 'var(--weight-bold)' as unknown as number }}>disappeared,</span>
        <br />
        <span style={{ fontWeight: 'var(--weight-regular)' as unknown as number }}>it just </span>
        <span style={{ fontWeight: 'var(--weight-bold)' as unknown as number }}>needs space</span>
      </p>
    </section>
  )
}
