import { Container } from '../layout/Container'
import { BannerSlim } from '../molecules/BannerSlim'
import { HART } from '../../lib/assets'

export function CollaborateSection() {
  return (
    <section
      id="collaborate"
      className="relative py-[var(--spacing-40)] xl:py-[var(--spacing-80)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-fresh)' }}
    >
      {/* Hart decorative */}
      <img
        src={HART}
        aria-hidden="true"
        alt=""
        data-parallax="0.08"
        data-pbase=""
        className="absolute pointer-events-none select-none"
        style={{ top: '80px', right: '-40px', width: '214px', height: '234px', zIndex: 0 }}
      />

      <Container data-reveal className="relative z-10 flex flex-col gap-[var(--spacing-40)]">
        {/* Section header */}
        <div
          className="flex flex-col gap-[var(--spacing-16)] items-start w-full"
          style={{ color: 'var(--color-neutral-1000)' }}
        >
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-bold)' as unknown as number,
              fontSize: 'var(--text-3xl)',
              lineHeight: 'var(--leading-3xl)',
            }}
          >
            Be part of STP
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-lg)',
            }}
          >
            There are two ways to join the project: bring a project, idea, sound, or workshop, or be part of the team that holds everything together as a volunteer.
          </p>
        </div>

        {/* Banner cards — stacked on mobile; two size-s banners inline (2 cols) from xl */}
        <div className="flex flex-col gap-[var(--spacing-24)] w-full xl:flex-row xl:gap-[var(--desktop-gutter)] xl:items-stretch">
          <div className="w-full xl:flex-1">
            <BannerSlim
              eyebrow="CALL FOR ARTISTS"
              title="Do you have a project to share?"
              description="Music, visual art, performance, workshops, lectures. Whatever form art takes, it matters to us."
              ctaLabel="Submit your project"
              bg="cold"
              ctaHref="#"
            />
          </div>
          <div className="w-full xl:flex-1">
            <BannerSlim
              eyebrow="CALL FOR VOLUNTEERS"
              title="Want to lend a hand?"
              description="Entrance checks, bar service, order and cleaning, or simply answering participants' questions."
              ctaLabel="Submit your project"
              bg="warm-1"
              ctaHref="#"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
