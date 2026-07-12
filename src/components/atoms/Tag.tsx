interface TagProps {
  label: string
  variant?: 'green' | 'blue' | 'orange'
}

const tagStyles: Record<NonNullable<TagProps['variant']>, string> = {
  green: 'bg-[var(--color-bg-fresh-1)] text-[var(--color-emerald-50)]',
  blue: 'bg-[var(--color-bg-cold)] text-[var(--color-emerald-50)]',
  orange: 'bg-[var(--color-bg-warm-1)] text-[var(--color-emerald-50)]',
}

export function Tag({ label, variant = 'green' }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center justify-center shrink-0',
        'rounded-[var(--radius-full)]',
        'px-[var(--spacing-12)] py-[var(--spacing-4)]',
        'text-[length:var(--text-xs)] leading-[var(--leading-xs)]',
        'tracking-[var(--tracking-xs)] uppercase whitespace-nowrap',
        'font-[family-name:var(--font-primary)]',
        tagStyles[variant],
      ].join(' ')}
      style={{ fontWeight: 'var(--weight-extrabold)' as unknown as number }}
    >
      {label}
    </span>
  )
}
