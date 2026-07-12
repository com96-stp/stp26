import { Button } from '../atoms/Button'

interface BannerProps {
  imageSrc: string
  heading: string
  description: string
  price: string
  originalPrice?: string
  ctaLabel: string
  ctaHref?: string
  /**
   * Layout (UI Kit variant), responsive:
   * - 'mobile' (default): always stacked (media above content)
   * - 'desktop' (size=xl): stacked on mobile, media+content side-by-side from `xl:` up
   */
  size?: 'mobile' | 'desktop'
  /** Desktop (xl) only: swap sides — media on the right, content on the left. */
  reverse?: boolean
}

export function Banner({
  imageSrc,
  heading,
  description,
  price,
  originalPrice,
  ctaLabel,
  ctaHref = '#',
  size = 'mobile',
  reverse = false,
}: BannerProps) {
  const responsive = size === 'desktop'

  const rootCls = [
    'flex flex-col gap-[var(--spacing-24)] items-start w-full',
    responsive && `${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:gap-[var(--desktop-gutter)]`,
  ]
    .filter(Boolean)
    .join(' ')

  const mediaCls = [
    'relative rounded-[var(--radius-lg)] overflow-hidden w-full',
    responsive && 'xl:w-auto xl:flex-1',
  ]
    .filter(Boolean)
    .join(' ')

  const contentCls = [
    'flex flex-col gap-[var(--spacing-24)] items-start w-full',
    responsive && 'xl:w-auto xl:flex-1 xl:justify-center xl:self-stretch',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootCls}>
      {/* Square media */}
      <div className={mediaCls} style={{ aspectRatio: '1 / 1' }}>
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className={contentCls}>
        {/* Copy */}
        <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
          {/* Kelsi display heading */}
          <p
            className="font-[family-name:var(--font-display)] w-full"
            style={{
              fontWeight: 400,
              fontSize: 'var(--text-5xl)',
              lineHeight: 'var(--leading-4xl)',
              color: 'var(--color-text-accent)',
            }}
          >
            {heading}
          </p>

          <p
            className="font-[family-name:var(--font-primary)] w-full whitespace-pre-wrap"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-base)',
              lineHeight: 'normal',
              color: 'var(--color-text-default)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
          {/* Pricing */}
          <div
            className="flex items-center gap-[var(--spacing-8)] whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--weight-bold)' as unknown as number,
              color: 'var(--color-text-default)',
            }}
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
                fontSize: 'var(--text-4xl)',
                lineHeight: 'var(--leading-4xl)',
              }}
            >
              {price}
            </span>
          </div>

          <Button label={ctaLabel} variant="accent" href={ctaHref} />
        </div>
      </div>
    </div>
  )
}
