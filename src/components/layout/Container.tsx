import type { ReactNode, HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Layout/utility classes for the inner content wrapper (e.g. flex direction, gap, alignment). */
  className?: string
}

/**
 * Container — constrains content to the design grid and centers it, while the
 * parent section keeps its full-bleed background.
 * - horizontal margin: mobile 16px → desktop-xl 80px (`--desktop-margin`)
 * - max width: 1440 (desktop-xl canvas); below 1440 it's a no-op, so mobile is unaffected
 * Forwards extra props (e.g. `data-reveal`) to the wrapper.
 */
export function Container({ children, className = '', ...rest }: ContainerProps) {
  return (
    <div
      className={[
        'mx-auto w-full max-w-[1440px]',
        'px-[var(--mobile-margin)] xl:px-[var(--desktop-margin)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}
