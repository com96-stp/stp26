import { Container } from '../layout/Container'
import { FIL_ROUGE_RED, FIL_ROUGE_RED_DESK } from '../../lib/assets'

export function CreativitySection() {
  return (
    <section
      className="relative py-[var(--spacing-64)] xl:py-[var(--spacing-96)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-accent)' }}
    >
      {/* Fil Rouge Red decorative — mobile */}
      <img
        src={FIL_ROUGE_RED}
        aria-hidden="true"
        alt=""
        data-parallax="0.05"
        data-pbase="translate(-50%, -50%)"
        className="absolute pointer-events-none select-none xl:hidden"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '390px',
          height: '544px',
          zIndex: 0,
        }}
      />
      {/* Fil Rouge Red decorative — desktop (xl) */}
      <img
        src={FIL_ROUGE_RED_DESK}
        aria-hidden="true"
        alt=""
        data-parallax="0.05"
        data-pbase="translate(-50%, -50%)"
        className="absolute pointer-events-none select-none hidden xl:block"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1440px',
          zIndex: 0,
        }}
      />

      <Container data-reveal className="relative z-10 flex flex-col items-center">
        {/* Quote with mixed weights */}
        <p
          className="font-[family-name:var(--font-primary)] text-center xl:max-w-[900px]"
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
      </Container>
    </section>
  )
}
