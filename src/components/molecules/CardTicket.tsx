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
        {showBestTag && (
          <div className="flex flex-col items-end gap-[var(--spacing-4)]">
            <Tag label="Early bird" variant="muted" strikethrough />
            <Tag label="General release" variant="green" />
          </div>
        )}
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

      {/* Footer: CTA pinned bottom (equal-height cards). Price block removed per
          request; the flex-1 spacer keeps the button's position (right) and the
          min-height keeps the card height unchanged (reserves the price row). */}
      <div className="relative z-10 flex flex-wrap items-center gap-[var(--spacing-8)] xl:mt-auto">
        <div className="flex-1 min-h-[var(--leading-4xl)]" aria-hidden="true" />
        <Button label="Join" variant="accent" href={href} />
      </div>
    </div>
  )
}
