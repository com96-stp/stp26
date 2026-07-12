import { Banner } from '../molecules/Banner'
import { MERCH_TEE, MERCH_BAG } from '../../lib/assets'

export function MerchSection() {
  return (
    <section
      id="merch"
      className="flex flex-col gap-[var(--spacing-40)] items-center justify-center px-[var(--mobile-margin)] py-[var(--spacing-40)]"
      style={{ backgroundColor: 'var(--color-page-primary)' }}
    >
      {/* Section header */}
      <div
        className="flex flex-col gap-[var(--spacing-16)] items-start w-full"
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
          Per portare STP a lavoro, in vacanza, ovunque ti serva.<br />
          To avoid unnecessary waste, we ask you to pre-order in advance.
        </p>
      </div>

      {/* STP Tee */}
      <Banner
        imageSrc={MERCH_TEE}
        heading="STP Tee"
        description={`The shirt is made entirely of GOTS-certified sustainable organic cotton.\n\nShirt: Stanley Stella Sparker - Relaxed/Over fit - 100% spun and combed organic cotton, 220 GSM - 1x1 rib crew neck. Printed back and front.`}
        price="30 €"
        originalPrice="40 €"
        ctaLabel="Pre-order your tee"
        ctaHref="#"
      />

      {/* STP Bag */}
      <Banner
        imageSrc={MERCH_BAG}
        heading="stp bag"
        description={`The bag is made entirely of GOTS-certified sustainable organic cotton.\n\nStanley Stella - Relaxed fit - 100% spun and combed organic cotton. Printed front.`}
        price="15 €"
        originalPrice="20 €"
        ctaLabel="Pre-order your bag"
        ctaHref="#"
      />
    </section>
  )
}
