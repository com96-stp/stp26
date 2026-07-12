import { BannerSlim } from '../molecules/BannerSlim'
import { HART } from '../../lib/assets'

export function CollaborateSection() {
  return (
    <section
      id="collaborate"
      className="relative flex flex-col gap-[var(--spacing-40)] items-center justify-center px-[var(--mobile-margin)] py-[var(--spacing-40)] overflow-hidden"
      style={{ backgroundColor: 'var(--color-section-fresh)' }}
    >
      {/* Hart decorative */}
      <img
        src={HART}
        aria-hidden="true"
        alt=""
        className="absolute pointer-events-none select-none"
        style={{ top: '80px', right: '-40px', width: '214px', height: '234px', zIndex: 0 }}
      />

      {/* Section header */}
      <div
        className="relative z-10 flex flex-col gap-[var(--spacing-16)] items-start w-full"
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
          Fai parte di STP
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)' as unknown as number,
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
          }}
        >
          Ci sono due modi per entrare nel progetto:<br />
          uno è portare un progetto, un'idea, un suono, un laboratorio.<br />
          l'altro è essere parte di quello che tiene tutto insieme, come volontario.
        </p>
      </div>

      {/* Banner cards */}
      <div className="relative z-10 flex flex-col gap-[var(--spacing-24)] w-full">
        <BannerSlim
          eyebrow="CALL FOR ARTISTS"
          title="Hai un progetto da proporci?"
          description={`Musica, arte visiva, performance, workshop, lecture. Qualunque forma abbia l'arte, per noi ha senso.`}
          ctaLabel="Proponi il tuo progetto"
          bg="cold"
          ctaHref="#"
        />
        <BannerSlim
          eyebrow="CALL FOR VOLUNTEERS"
          title="Vuoi darci una mano?"
          description="Controlli agli ingressi, servizio bar, ordine e pulizia o semplicemente rispondere alle domande dei partecipanti."
          ctaLabel="Iscriviti come volontario"
          bg="warm-1"
          ctaHref="#"
        />
      </div>
    </section>
  )
}
