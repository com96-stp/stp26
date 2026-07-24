import { Button } from '../atoms/Button'
import { Tag } from '../atoms/Tag'

interface CardTicketProps {
  name: string
  description: string
  price: string
  originalPrice?: string
  href?: string
  bg: string
  decorative?: string
  showBestTag?: boolean
}

export function CardTicket({
  name,
  description,
  price,
  originalPrice,
  href = '#',
  bg,
  decorative,
  showBestTag = false,
}: CardTicketProps) {
  return (
    <div
      className="relative flex flex-col gap-[var(--spacing-16)] rounded-[var(--radius-lg)] px-[var(--spacing-24)] py-[var(--spacing-24)] overflow-hidden w-full xl:h-full"
      style={{ backgroundColor: bg }}
    >
      {/* Decorative — absolute bottom-right */}
      {decorative && (
        <img
          src={decorative}
          aria-hidden="true"
          alt=""
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{ height: '170px', width: '300px', objectFit: 'cover' }}
        />
      )}

      {/* Heading row */}
      <div className="relative z-10 flex items-center justify-between gap-[10px]">
        <p
          className="font-[family-name:var(--font-primary)]"
          style={{
            fontWeight: 'var(--weight-bold)' as unknown as number,
            fontSize: 'var(--text-2xl)',
            lineHeight: 'var(--leading-2xl)',
            color: 'var(--color-text-default)',
          }}
        >
          {name}
        </p>
        {showBestTag && <Tag label="EARLY BIRD" variant="green" />}
      </div>

      {/* Description */}
      <p
        className="relative z-10 font-[family-name:var(--font-primary)] w-full"
        style={{
          fontWeight: 'var(--weight-medium)' as unknown as number,
          fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-base)',
          color: 'var(--color-text-default)',
        }}
      >
        {description}
      </p>

      {/* Footer: price + CTA — pushed to the bottom on desktop (equal-height cards) */}
      <div className="relative z-10 flex flex-wrap items-center gap-[var(--spacing-8)] xl:mt-auto">
        {/* Price */}
        <div
          className="flex flex-1 items-center gap-[var(--spacing-8)] font-[family-name:var(--font-primary)]"
          style={{ color: 'var(--color-text-default)' }}
        >
          {/* Discount / original price — always strikethrough, type lg-semibold (per Figma) */}
          {originalPrice && (
            <span
              className="line-through"
              style={{
                fontWeight: 'var(--weight-semibold)' as unknown as number,
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-lg)',
              }}
            >
              {originalPrice}
            </span>
          )}
          <span
            style={{
              fontWeight: 'var(--weight-bold)' as unknown as number,
              fontSize: 'var(--text-4xl)',
              lineHeight: 'var(--leading-4xl)',
            }}
          >
            {price}
          </span>
        </div>
        <Button label="Join" variant="accent" href={href} />
      </div>
    </div>
  )
}
