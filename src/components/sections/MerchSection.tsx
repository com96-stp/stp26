import { Container } from '../layout/Container'
import { Banner } from '../molecules/Banner'
import { MERCH_TEE, MERCH_BAG } from '../../lib/assets'

export function MerchSection() {
  return (
    <section
      id="merch"
      className="py-[var(--spacing-40)] xl:py-[var(--spacing-80)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      <Container data-reveal className="flex flex-col gap-[var(--spacing-40)] items-center">
        {/* Section header — centered (text + block) */}
        <div
          className="flex flex-col gap-[var(--spacing-16)] items-center text-center w-full"
          style={{ color: 'var(--color-text-accent)' }}
        >
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-sm)',
            }}
          >
            STP ON YOUR SKIN
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-bold)' as unknown as number,
              fontSize: 'var(--text-3xl)',
              lineHeight: 'var(--leading-3xl)',
            }}
          >
            Merch 2026
          </p>
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-lg)',
            }}
          >
            Take STP with you to work, on vacation, anywhere you need. To reduce waste, pre-order in advance.
          </p>
        </div>

        {/* STP Tee — xl variant (horizontal on desktop) */}
        <Banner
          imageSrc={MERCH_TEE}
          heading="STP Tee"
          description={`This shirt is made entirely from GOTS-certified sustainable organic cotton.\n\nShirt: Stanley Stella Sparker - Relaxed/Over fit - 100% spun and combed organic cotton, 220 GSM - 1x1 rib crew neck. Printed front and back.`}
          price="30 €"
          originalPrice="40 €"
          ctaLabel="Pre-order your tee"
          ctaHref="#"
          size="desktop"
        />

        {/* STP Bag — xl variant */}
        <Banner
          imageSrc={MERCH_BAG}
          heading="STP Bag"
          description={`This bag is made entirely from GOTS-certified sustainable organic cotton.\n\nMaterial: 100% spun and combed organic cotton, durable and eco-friendly.`}
          price="15 €"
          originalPrice="20 €"
          ctaLabel="Pre-order your bag"
          ctaHref="#"
          size="desktop"
          reverse
        />
      </Container>
    </section>
  )
}
