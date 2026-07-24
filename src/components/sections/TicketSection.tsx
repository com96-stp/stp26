import { Container } from '../layout/Container'
import { CardTicket } from '../molecules/CardTicket'
import { DECORATIVE_STRIPE, DECORATIVE_SEGMENT } from '../../lib/assets'

// DOM order = mobile stack order (Full event first, as the featured tier).
// `xlOrder` re-sequences the row on desktop only so the featured "Full event"
// card sits in the center column for extra prominence.
const tickets = [
  {
    name: 'Full event',
    description: 'From Friday afternoon to Sunday morning, camping included. The ultimate way to enjoy the event.',
    price: '80 €',
    originalPrice: '90 €',
    bg: 'var(--color-bg-fresh-2)',
    showBestTag: true,
    xlOrder: 'xl:order-2',
  },
  {
    name: 'Friday only',
    description: 'Only entrance on Friday until next morning. Includes camping spot for your tent.',
    price: '40 €',
    bg: 'var(--color-bg-warm-2)',
    decorative: DECORATIVE_STRIPE,
    showBestTag: false,
    xlOrder: 'xl:order-1',
  },
  {
    name: 'Saturday only',
    description: 'Only entrance on Saturday until next morning. Includes camping spot for your tent.',
    price: '55 €',
    bg: 'var(--color-bg-warm-3)',
    decorative: DECORATIVE_SEGMENT,
    showBestTag: false,
    xlOrder: 'xl:order-3',
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
            CHOOSE HOW TO JOIN
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
            Three ways to experience STP
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-medium)' as unknown as number,
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-base)',
              color: 'var(--color-text-default)',
            }}
          >
            <span style={{ fontWeight: 'var(--weight-semibold)' as unknown as number }}>Participation fee</span> is required to secure your spot.
          </p>
        </div>

        {/* Card list — stacked on mobile, 3 inline filling width from xl */}
        <div className="flex flex-col gap-[var(--spacing-24)] w-full xl:flex-row xl:gap-[var(--desktop-gutter)] xl:items-stretch">
          {tickets.map(({ xlOrder, ...ticket }) => (
            <div key={ticket.name} className={`w-full xl:flex-1 ${xlOrder}`}>
              <CardTicket {...ticket} href="https://2026.stopallansia.com/cart-event/?ide=12692&idcal=1779625153" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
