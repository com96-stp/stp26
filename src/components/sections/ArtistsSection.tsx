import { Container } from '../layout/Container'
import { Button } from '../atoms/Button'
import { CardExpressive } from '../molecules/CardExpressive'
import { BannerSlim } from '../molecules/BannerSlim'
import { FIL_ROUGE_BLU, FIL_ROUGE_BLU_DESK, COLLAGE_MUSIC, COLLAGE_WORKSHOP } from '../../lib/assets'

export function ArtistsSection() {
  return (
    <section
      id="artists"
      className="relative py-[var(--spacing-40)] xl:py-[var(--spacing-80)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-subtle)' }}
    >
      {/* Fil Rouge Blu — decorative background (mobile) */}
      <img
        src={FIL_ROUGE_BLU}
        aria-hidden="true"
        alt=""
        data-parallax="0.05"
        data-pbase="translateY(-50%)"
        className="absolute pointer-events-none select-none xl:hidden"
        style={{
          top: '50%',
          right: '-17px',
          transform: 'translateY(-50%)',
          width: '425px',
          height: '2260px',
          zIndex: 0,
          opacity: 0.8,
        }}
      />
      {/* Fil Rouge Blu — decorative background (desktop xl) */}
      <img
        src={FIL_ROUGE_BLU_DESK}
        aria-hidden="true"
        alt=""
        data-parallax="0.05"
        data-pbase="translate(-50%, -50%)"
        className="absolute pointer-events-none select-none hidden xl:block"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1365px',
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      <Container data-reveal className="relative z-10 flex flex-col gap-[var(--spacing-40)] items-center">
        {/* Section header */}
        <div
          className="flex flex-col gap-[var(--spacing-16)] items-center text-center w-full"
          style={{ color: 'var(--color-neutral-1000)' }}
        >
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-sm)',
            }}
          >
            MOLTO PIÙ DI UN FESTIVAL
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-bold)' as unknown as number,
              fontSize: 'var(--text-3xl)',
              lineHeight: 'var(--leading-3xl)',
            }}
          >
            Musica, arte, performance
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-lg)',
            }}
          >
            Gli artisti che renderanno STP un'edizione fantastica
          </p>
        </div>

        {/* Card list — stacked on mobile; inline & centered (not fill) from xl */}
        <div className="flex flex-col gap-[var(--spacing-40)] w-full xl:flex-row xl:justify-center xl:gap-[var(--desktop-gutter)]">
          <div className="w-full xl:w-[358px]">
            <CardExpressive
              imageSrc={COLLAGE_MUSIC}
              tag="music"
              tagVariant="blue"
              heading="Generi diversi, stesso amore"
              description="Dal pomeriggio a tarda notte, per non perdere mai il ritmo giusto."
            />
          </div>
          <div className="w-full xl:w-[358px]">
            <CardExpressive
              imageSrc={COLLAGE_WORKSHOP}
              tag="workshop"
              tagVariant="green"
              heading="Arte è anche saper fare"
              description="Workshop didattici e pratici per conoscere cose nuove e non smettere mai di imparare."
            />
          </div>
        </div>

        {/* CTA */}
        <Button
          label="Update on Instagram"
          variant="on-indigo"
          href="#"
          className="w-full xl:w-auto"
        />

        {/* BannerSlim — full-width horizontal (xl) */}
        <BannerSlim
          title="Hai un progetto da proporci?"
          description={`Musica, arte visiva, performance, workshop, lecture. Qualunque forma abbia l'arte, per noi ha senso.`}
          ctaLabel="Proponi il tuo progetto"
          bg="cold"
          size="desktop"
          className="w-full"
        />
      </Container>
    </section>
  )
}
