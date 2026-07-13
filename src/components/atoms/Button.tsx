interface ButtonProps {
  label: string
  href?: string
  variant?: 'accent' | 'accent-secondary' | 'on-indigo' | 'on-indigo-secondary'
  size?: 'default' | 'small'
  className?: string
}

// Hover behaviour (from UI Kit, CTA component):
// - filled variants (accent, on-indigo) darken the background on hover
// - outline variants (accent-secondary, on-indigo-secondary) thicken the stroke 1px -> 3px.
//   The stroke is an INSET box-shadow (not a border), so it grows inward and never changes
//   the element's width/height footprint — no layout shift on hover.
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  'accent':
    'bg-[var(--color-action-accent)] text-[var(--color-action-accent-content)] hover:bg-[var(--color-action-accent-hover)]',
  'accent-secondary':
    'text-[var(--color-action-accent-secondary-content)] [box-shadow:inset_0_0_0_1px_var(--color-action-accent)] hover:[box-shadow:inset_0_0_0_3px_var(--color-action-accent)]',
  'on-indigo':
    'bg-[var(--color-action-on-indigo)] text-[var(--color-action-on-indigo-content)] hover:bg-[var(--color-action-on-indigo-hover)]',
  'on-indigo-secondary':
    'text-[var(--color-action-on-indigo-secondary-content)] [box-shadow:inset_0_0_0_1px_var(--color-action-on-indigo)] hover:[box-shadow:inset_0_0_0_3px_var(--color-action-on-indigo)]',
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  default: 'px-[var(--spacing-24)] py-[var(--spacing-20)]',
  small: 'px-[var(--spacing-16)] py-[var(--spacing-12)]',
}

export function Button({
  label,
  href = '#',
  variant = 'accent',
  size = 'default',
  className = '',
}: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={[
        'inline-flex items-center justify-center',
        'min-w-[96px] rounded-[var(--radius-full)]',
        sizeStyles[size],
        'text-[length:var(--text-base)] leading-[var(--leading-base)]',
        'font-[family-name:var(--font-primary)]',
        'tracking-[var(--tracking-base)]',
        'whitespace-nowrap select-none cursor-pointer',
        // Hover (bg / inset stroke) + press feedback; only colour + transform, strong ease-out
        'transition-[background-color,box-shadow,transform] duration-150 ease-[var(--ease-out)]',
        'active:scale-[0.97]',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ fontWeight: 'var(--weight-semibold)' as unknown as number }}
    >
      {label}
    </a>
  )
}
