interface NavItemProps {
  label: string
  href?: string
  onClick?: () => void
}

// Hover (from UI Kit, NavItem "Variant2"): weight goes Semibold (600) -> Extrabold (800).
// Items are left-aligned on their own row, so the slight width growth causes no sibling reflow.
export function NavItem({ label, href = '#', onClick }: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        'inline-flex items-center w-fit cursor-pointer',
        'text-[var(--color-text-accent)]',
        'text-[length:var(--text-sm)] leading-[var(--leading-sm)]',
        'tracking-[var(--tracking-sm)]',
        'font-[family-name:var(--font-primary)]',
        'font-semibold hover:font-extrabold',
      ].join(' ')}
    >
      {label}
    </a>
  )
}
