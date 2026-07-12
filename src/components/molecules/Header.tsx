import { useState } from 'react'
import { Button } from '../atoms/Button'
import { NavItem } from '../atoms/NavItem'
import { LOGO_CONDENSED, ICON_HAMBURGER, ICON_CLOSE } from '../../lib/assets'

const navLinks = [
  { label: 'TICKETS', href: '#tickets' },
  { label: 'LOCATION', href: '#location' },
  { label: 'ARTISTS', href: '#artists' },
  { label: 'MERCH', href: '#merch' },
  { label: 'COLLABORATE W US', href: '#collaborate' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Sticky header bar */}
      <header
        className="sticky top-0 z-50 flex items-center gap-[var(--spacing-8)] px-[var(--mobile-margin)] py-[var(--spacing-16)] w-full"
        style={{
          backgroundColor: 'rgba(252,248,245,0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex flex-1 items-center gap-[var(--spacing-16)] min-w-0">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="shrink-0 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
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

        <Button label="Buy your ticket" variant="accent" size="small" href="#tickets" />
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: 'var(--color-page-primary)' }}
        >
          {/* Overlay header with X — same 80px height / padding as the sticky header
              so the X sits exactly where the hamburger was (no jump). The Figma
              mock had this bar at a different height, which made the icon "dance". */}
          <div
            className="flex items-center px-[var(--mobile-margin)] py-[var(--spacing-16)] shrink-0"
            style={{
              height: '80px',
              backgroundColor: 'rgba(252,248,245,0.8)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
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
          <div
            className="flex flex-col justify-between flex-1 px-[var(--mobile-margin)] py-[var(--spacing-40)]"
          >
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
              <Button
                label="Be part of the Festival"
                variant="accent"
                href="#tickets"
                className="w-full"
              />
              <Button
                label="Follow us on Instagram"
                variant="accent-secondary"
                href="#"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
