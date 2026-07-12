const ITEMS = [
  "Stop all'Ansia 26",
  "11–13 Settembre",
  "LAGO ARENILE | PIEMONTE",
]

/**
 * Ticker — indigo announcement bar with a seamless horizontal marquee.
 *
 * Renders full-width, so it covers BOTH UI Kit sizes responsively
 * (size=s mobile 390px / size=Default desktop 1440px) — no size prop needed.
 *
 * Matches the UI Kit ticker (size=s):
 *   - items are UPPERCASE, separated by 80px (Spacing/Horizontal/80) — no dots/separators
 *   - color:          var(--color-text-inverse)  (#FCF8F5 — Figma "text/default-inverse")
 *   - size / leading: text-xs (12px) / leading-xs (15px)
 *   - weight:         bold (700)
 *   - tracking:       tracking-xs (1.5px)
 *   - background:     section-cold (Indigo/800)
 */
export function Ticker() {
  // Repeat the 3 items 8x. Each item carries a uniform 80px trailing space so the
  // -50% marquee loop is seamless and every inter-item gap is exactly 80px.
  const items = Array.from({ length: 8 }).flatMap((_, rep) =>
    ITEMS.map((item, i) => (
      <span key={`${rep}-${i}`} className="shrink-0 pr-[var(--spacing-80)]">
        {item}
      </span>
    ))
  )

  return (
    <div
      className="relative z-10 overflow-hidden w-full"
      style={{ backgroundColor: 'var(--color-section-cold)' }}
    >
      <div
        className="ticker-track flex whitespace-nowrap uppercase py-[var(--spacing-8)] font-[family-name:var(--font-primary)]"
        style={{
          width: 'max-content',
          color: 'var(--color-text-inverse)',
          fontWeight: 'var(--weight-bold)' as unknown as number,
          fontSize: 'var(--text-xs)',
          lineHeight: 'var(--leading-xs)',
          letterSpacing: 'var(--tracking-xs)',
        }}
      >
        {items}
      </div>
    </div>
  )
}

// Ticker marquee animation lives in globals.css: .ticker-track { animation: ticker-scroll 22s linear infinite }
