interface PlayPauseProps {
  /**
   * Playback state driving which glyph shows (mirrors the Figma `Variant`):
   * - `true`  → "in play": media is playing, so the button shows a **Pause** icon
   * - `false` → "in pause": media is paused, so the button shows a **Play** icon
   */
  isPlaying: boolean
  onClick?: () => void
  className?: string
  /** Accessible label; defaults describe the action the click performs. */
  ariaLabel?: string
}

// PlayPause — circular accent control (UI Kit "PlayPause").
// Figma tracks 4 variants = Variant(in play | in pause) × State(Default | hover).
// In code the two `State`s are the CSS resting/`:hover` styles (same approach as
// Button), and the two `Variant`s are the `isPlaying` prop → 4 combinations covered:
//   in play  / Default → Pause glyph, bg accent
//   in play  / hover   → Pause glyph, bg accent-hover
//   in pause / Default → Play glyph,  bg accent
//   in pause / hover   → Play glyph,  bg accent-hover
export function PlayPause({ isPlaying, onClick, className = '', ariaLabel }: PlayPauseProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (isPlaying ? 'Pause' : 'Play')}
      aria-pressed={isPlaying}
      className={[
        'inline-flex items-center justify-center shrink-0',
        'size-[40px] rounded-[var(--radius-full)] border-0 cursor-pointer',
        'bg-[var(--color-action-accent)] hover:bg-[var(--color-action-accent-hover)]',
        'text-[var(--color-action-accent-content)]',
        'transition-[background-color,transform] duration-150 ease-[var(--ease-out)]',
        'active:scale-[0.97]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {isPlaying ? (
        // Pause — two rounded bars
        <svg viewBox="0 0 24 24" className="size-[24px]" fill="currentColor" aria-hidden="true">
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        // Play — triangle
        <svg viewBox="0 0 24 24" className="size-[24px]" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  )
}
