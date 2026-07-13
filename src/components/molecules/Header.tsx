import { useState } from 'react'
import { Button } from '../atoms/Button'
import { NavItem } from '../atoms/NavItem'
import { LOGO_CONDENSED, ICON_HAMBURGER, ICON_CLOSE } from '../../lib/assets'
import { HIDDEN_SECTIONS } from '../../lib/sectionVisibility'

const allNavLinks = [
  { label: 'TICKETS', href: '#tickets', key: 'tickets' },
  { label: 'LOCATION', href: '#location', key: 'location' },
  { label: 'ARTISTS', href: '#artists', key: 'artists' },
  { label: 'MERCH', href: '#merch', key: 'merch' },
  { label: 'COLLABORATE W US', href: '#collaborate', key: 'collaborate' },
]

const navLinks = allNavLinks.filter((link) => !HIDDEN_SECTIONS.has(link.key))

const frostedBg = {
  backgroundColor: 'rgba(252,248,245,0.8)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
} as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Sticky header bar (full-bleed frosted bg); content constrained to the grid */}
      <header className="sticky top-0 z-50 w-full" style={frostedBg}>
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-[var(--spacing-8)] px-[var(--mobile-margin)] xl:px-[var(--desktop-margin)] py-[var(--spacing-16)]">
          {/* Left: hamburger (mobile only) + logo */}
          <div className="flex flex-1 xl:flex-none items-center gap-[var(--spacing-16)] min-w-0">
            <button
              onClick={() => setMenuOpen(true)}
              className="xl:hidden shrink-0 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
              aria-label="Open menu"
              style={{ width: '24px', height: '24px' }}
            >
              <img src={ICON_HAMBURGER} alt="" aria-hidden="true" style={{ width: '24px', height: '24px' }} />
            </button>

            {/* Logo Condensed */}
            <img
              src={LOGO_CONDENSED}
              alt="Stop all'Ansia"
              className="shrink-0"
              style={{ height: '24px', width: 'auto' }}
            />
          </div>

          {/* Desktop inline nav (xl+) */}
          <nav className="hidden xl:flex items-center gap-[var(--spacing-40)]">
            {navLinks.map((link) => (
              <NavItem key={link.label} label={link.label} href={link.href} />
            ))}
          </nav>

          <Button label="Buy your ticket" variant="accent" size="small" href="#tickets" />
        </div>
      </header>

      {/* Mobile menu overlay (only reachable below xl, where the hamburger is shown) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: 'var(--color-page-primary)' }}
        >
          {/* Overlay header with X — same 80px height / padding as the sticky header
              so the X sits exactly where the hamburger was (no jump). */}
          <div
            className="flex items-center px-[var(--mobile-margin)] py-[var(--spacing-16)] shrink-0"
            style={{ height: '80px', ...frostedBg }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
              aria-label="Close menu"
              style={{ width: '24px', height: '24px' }}
            >
              <img src={ICON_CLOSE} alt="" aria-hidden="true" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>

          {/* Nav links + CTAs */}
          <div className="flex flex-col justify-between flex-1 px-[var(--mobile-margin)] py-[var(--spacing-40)]">
            <nav className="flex flex-col gap-[var(--spacing-40)]">
              {navLinks.map((link) => (
                <NavItem
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </nav>

            <div className="flex flex-col" style={{ gap: '10px' }}>
              <Button label="Be part of the Festival" variant="accent" href="#tickets" className="w-full" />
              <Button label="Follow us on Instagram" variant="accent-secondary" href="https://www.instagram.com/stop.all.ansia/" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
