import { Container } from '../layout/Container'
import { CardTicket } from '../molecules/CardTicket'
import { DECORATIVE_STRIPE, DECORATIVE_SPIRAL, DECORATIVE_SEGMENT } from '../../lib/assets'

const tickets = [
  {
    name: 'Day ticket',
    description: 'Accesso a una giornata del festival',
    price: '35 €',
    bg: 'var(--color-bg-warm-2)',
    decorative: DECORATIVE_STRIPE,
    showBestTag: false,
  },
  {
    name: 'Weekend',
    description: 'Accesso completo al weekend — la scelta giusta',
    price: '100 €',
    originalPrice: '120 €',
    bg: 'var(--color-bg-fresh-2)',
    decorative: DECORATIVE_SPIRAL,
    showBestTag: true,
  },
  {
    name: 'Full festival',
    description: 'Tre giorni interi di STP 26',
    price: '80 €',
    bg: 'var(--color-bg-warm-3)',
    decorative: DECORATIVE_SEGMENT,
    showBestTag: false,
  },
]

export function TicketSection() {
  return (
    <section
      id="tickets"
      className="py-[var(--spacing-40)] xl:py-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      <Container data-reveal className="flex flex-col gap-[var(--spacing-40)] items-center">
        {/* Section header */}
        <div className="flex flex-col gap-[var(--spacing-16)] items-center text-center w-full">
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--leading-sm)',
              color: 'var(--color-neutral-1000)',
            }}
          >
            SCEGLI IL TUO BIGLIETTO
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-bold)' as unknown as number,
              fontSize: 'var(--text-4xl)',
              lineHeight: 'var(--leading-4xl)',
              color: 'var(--color-neutral-1000)',
            }}
          >
            Tre format per vivere STP
          </p>
        </div>

        {/* Card list — stacked on mobile, 3 inline filling width from xl */}
        <div className="flex flex-col gap-[var(--spacing-24)] w-full xl:flex-row xl:gap-[var(--desktop-gutter)] xl:items-stretch">
          {tickets.map((ticket) => (
            <div key={ticket.name} className="w-full xl:flex-1">
              <CardTicket {...ticket} href="#" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
