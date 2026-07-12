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
   * Layout size (UI Kit variant):
   * - 'mobile' (size=S): media stacked above content (vertical)
   * - 'desktop' (size=xl): media and content side-by-side (horizontal), content vertically centered
   */
  size?: 'mobile' | 'desktop'
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
}: BannerProps) {
  const isDesktop = size === 'desktop'

  return (
    <div
      className={
        isDesktop
          ? 'flex flex-row gap-[var(--spacing-32)] items-start w-full'
          : 'flex flex-col gap-[var(--spacing-24)] items-start w-full'
      }
    >
      {/* Square media */}
      <div
        className={[
          'relative rounded-[var(--radius-lg)] overflow-hidden',
          isDesktop ? 'flex-1' : 'w-full',
        ].join(' ')}
        style={{ aspectRatio: '1 / 1' }}
      >
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={[
          'flex flex-col gap-[var(--spacing-24)] items-start',
          isDesktop ? 'flex-1 justify-center self-stretch' : 'w-full',
        ].join(' ')}
      >
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
