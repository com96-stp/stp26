import { useEffect } from 'react'

/**
 * Landing microinteractions — additive motion only (never changes the resting visuals):
 *  - Scroll reveal: elements with `data-reveal` fade + rise once they enter the viewport
 *    (`data-reveal-delay="120"` staggers them). Above-the-fold elements reveal on load.
 *  - Parallax: elements with `data-parallax="0.08"` drift on scroll, composed onto their
 *    resting transform stored in `data-pbase` (so centering is preserved).
 *
 * Respects prefers-reduced-motion (reveals immediately, no parallax) and needs no library.
 */
export function useLandingMotion() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('reveal-ready')

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── Scroll reveal (once) ──
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    let io: IntersectionObserver | null = null

    if (reduce) {
      revealEls.forEach((el) => el.classList.add('is-visible'))
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            const el = entry.target as HTMLElement
            const delay = el.dataset.revealDelay
            if (delay) el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-visible')
            io?.unobserve(el)
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -80px 0px' },
      )
      revealEls.forEach((el) => io!.observe(el))
    }

    // ── Parallax on decoratives ──
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    let rafId = 0

    const applyParallax = () => {
      rafId = 0
      const vh = window.innerHeight
      for (const el of parallaxEls) {
        if (el.offsetParent === null) continue // hidden (display:none at this breakpoint)
        const base = el.dataset.pbase ?? ''
        const factor = parseFloat(el.dataset.parallax ?? '0')
        const rect = el.getBoundingClientRect()
        const fromCenter = rect.top + rect.height / 2 - vh / 2
        const offset = Math.round(fromCenter * factor)
        el.style.transform = `${base} translate3d(0px, ${offset}px, 0px)`.trim()
      }
    }

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(applyParallax)
    }

    if (!reduce && parallaxEls.length) {
      applyParallax()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
    }

    return () => {
      io?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])
}
