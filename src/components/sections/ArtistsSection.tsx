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
            MORE THAN JUST A FESTIVAL
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-bold)' as unknown as number,
              fontSize: 'var(--text-3xl)',
              lineHeight: 'var(--leading-3xl)',
            }}
          >
            Music, art, performances
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-lg)',
            }}
          >
            Artists who will make STP an unforgettable edition
          </p>
        </div>

        {/* Card list — stacked on mobile; inline & centered (not fill) from xl */}
        <div className="flex flex-col gap-[var(--spacing-40)] w-full xl:flex-row xl:justify-center xl:gap-[var(--desktop-gutter)]">
          <div className="w-full xl:w-[358px]">
            <CardExpressive
              imageSrc={COLLAGE_MUSIC}
              tag="music"
              tagVariant="blue"
              heading="Different genres, same passion"
              description="From afternoon to late night, keeping the perfect rhythm all along."
            />
          </div>
          <div className="w-full xl:w-[358px]">
            <CardExpressive
              imageSrc={COLLAGE_WORKSHOP}
              tag="workshop"
              tagVariant="green"
              heading="Art is also about skill"
              description="Hands-on workshops to learn new things and keep growing."
            />
          </div>
        </div>

        {/* CTA */}
        <Button
          label="Updates on Instagram"
          variant="on-indigo"
          href="#"
          className="w-full xl:w-auto"
        />

        {/* BannerSlim — full-width horizontal (xl) */}
        <BannerSlim
          title="Do you have a project to share?"
          description="Music, visual art, performance, workshops, lectures. Whatever form art takes, it matters to us."
          ctaLabel="Submit your project"
          bg="cold"
          size="desktop"
          className="w-full"
        />
      </Container>
    </section>
  )
}
