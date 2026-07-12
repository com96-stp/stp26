import { Button } from '../atoms/Button'

interface BannerSlimProps {
  eyebrow?: string
  title: string
  description: string
  ctaLabel: string
  ctaHref?: string
  bg?: 'cold' | 'warm-1'
  /**
   * Layout (UI Kit variant), responsive:
   * - 'mobile' (default): always stacked (content above CTA) — the "s" variant
   * - 'desktop' (size=xl): stacked on mobile, content+CTA side-by-side from `xl:` up
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
  const responsive = size === 'desktop'

  const rootCls = [
    'flex flex-col gap-[var(--spacing-40)] items-start justify-center',
    'p-[var(--spacing-40)] rounded-[var(--radius-lg)] w-full',
    responsive && 'xl:flex-row xl:items-center',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const contentCls = [
    'flex flex-col gap-[var(--spacing-16)] items-start w-full',
    responsive && 'xl:w-auto xl:flex-1',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootCls} style={{ backgroundColor: bgColors[bg] }}>
      {/* Text content */}
      <div className={contentCls} style={{ color: 'var(--color-neutral-0)' }}>
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
        className={responsive ? 'xl:shrink-0' : ''}
      />
    </div>
  )
}
