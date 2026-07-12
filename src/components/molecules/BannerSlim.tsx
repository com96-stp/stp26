import { Button } from '../atoms/Button'

interface BannerSlimProps {
  eyebrow?: string
  title: string
  description: string
  ctaLabel: string
  ctaHref?: string
  bg?: 'cold' | 'warm-1'
  /**
   * Layout size (UI Kit variant):
   * - 'mobile' (size=s): content stacked above the CTA (vertical)
   * - 'desktop' (size=xl): content and CTA side-by-side (horizontal), vertically centered
   */
  size?: 'mobile' | 'desktop'
  className?: string
}

const bgColors: Record<NonNullable<BannerSlimProps['bg']>, string> = {
  cold: 'var(--color-bg-cold)',
  'warm-1': 'var(--color-bg-warm-1)',
}

export function BannerSlim({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = '#',
  bg = 'cold',
  size = 'mobile',
  className = '',
}: BannerSlimProps) {
  const isDesktop = size === 'desktop'

  return (
    <div
      className={[
        isDesktop
          ? 'flex flex-row gap-[var(--spacing-40)] items-center'
          : 'flex flex-col gap-[var(--spacing-40)] items-start justify-center',
        'p-[var(--spacing-40)] rounded-[var(--radius-lg)] w-full',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ backgroundColor: bgColors[bg] }}
    >
      {/* Text content */}
      <div
        className={[
          'flex flex-col gap-[var(--spacing-16)] items-start',
          isDesktop ? 'flex-1' : 'w-full',
        ].join(' ')}
        style={{ color: 'var(--color-neutral-0)' }}
      >
        {eyebrow && (
          <p
            className="font-[family-name:var(--font-primary)] w-full"
            style={{
              fontWeight: 'var(--weight-extrabold)' as unknown as number,
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--leading-sm)',
            }}
          >
            {eyebrow}
          </p>
        )}
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)' as unknown as number,
            fontSize: 'var(--text-2xl)',
            lineHeight: 'var(--leading-2xl)',
          }}
        >
          {title}
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-semibold)' as unknown as number,
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-lg)',
          }}
        >
          {description}
        </p>
      </div>

      <Button
        label={ctaLabel}
        variant="on-indigo-secondary"
        href={ctaHref}
        className={isDesktop ? 'shrink-0' : ''}
      />
    </div>
  )
}
