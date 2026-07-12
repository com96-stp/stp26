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
      className="flex flex-col gap-[var(--spacing-40)] items-start px-[var(--mobile-margin)] py-[var(--spacing-40)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
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

      {/* Card list */}
      <div className="flex flex-col gap-[var(--spacing-24)] w-full">
        {tickets.map((ticket) => (
          <CardTicket key={ticket.name} {...ticket} href="#" />
        ))}
      </div>
    </section>
  )
}
