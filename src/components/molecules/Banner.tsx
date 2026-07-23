import { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import { PlayPause } from '../atoms/PlayPause'

interface BannerProps {
  /** Static media image. Optional when a `reel` is provided (the reel replaces it). */
  imageSrc?: string
  heading: string
  description: string
  price: string
  originalPrice?: string
  ctaLabel: string
  ctaHref?: string
  /**
   * Layout (UI Kit variant), responsive:
   * - 'mobile' (default): always stacked (media above content)
   * - 'desktop' (size=xl): stacked on mobile, media+content side-by-side from `xl:` up
   */
  size?: 'mobile' | 'desktop'
  /** Desktop (xl) only: swap sides — media on the right, content on the left. */
  reverse?: boolean
  /**
   * Optional media show-reel. When provided, the media auto-crossfades (dissolve)
   * through the images, one every 3s, looping, controlled by a PlayPause button
   * (bottom-left of the media). Starts playing; clicking pauses and holds the
   * image currently in focus. Without a reel the media is the static `imageSrc`
   * and no PlayPause is rendered.
   */
  reel?: string[]
}

const SLIDE_MS = 3000

export function Banner({
  imageSrc,
  heading,
  description,
  price,
  originalPrice,
  ctaLabel,
  ctaHref = '#',
  size = 'mobile',
  reverse = false,
  reel,
}: BannerProps) {
  const responsive = size === 'desktop'
  const hasReel = !!reel && reel.length > 0

  const [isPlaying, setIsPlaying] = useState(true)
  const [index, setIndex] = useState(0)

  // Auto-advance the reel every 3s while playing (loops). Pausing stops the
  // timer and leaves `index` where it is → the focused image stays on screen.
  useEffect(() => {
    if (!hasReel || !isPlaying || reel!.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % reel!.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [hasReel, isPlaying, reel])

  const rootCls = [
    'flex flex-col gap-[var(--spacing-24)] items-start w-full',
    responsive && `${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:gap-[var(--desktop-gutter)]`,
  ]
    .filter(Boolean)
    .join(' ')

  const mediaCls = [
    'relative rounded-[var(--radius-lg)] overflow-hidden w-full',
    responsive && 'xl:w-auto xl:flex-1',
  ]
    .filter(Boolean)
    .join(' ')

  const contentCls = [
    'flex flex-col gap-[var(--spacing-24)] items-start w-full',
    responsive && 'xl:w-auto xl:flex-1 xl:justify-center xl:self-stretch',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootCls}>
      {/* Square media */}
      <div className={mediaCls} style={{ aspectRatio: '1 / 1' }}>
        {hasReel ? (
          // Show-reel: stacked images, crossfaded (dissolve) via opacity
          reel!.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-[var(--ease-out)] motion-reduce:transition-none"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))
        ) : (
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* PlayPause — only when there's a reel to control; bottom-left (24px mobile / 40px desktop) */}
        {hasReel && (
          <PlayPause
            isPlaying={isPlaying}
            onClick={() => setIsPlaying((p) => !p)}
            className="absolute z-10 bottom-[var(--spacing-24)] left-[var(--spacing-24)] xl:bottom-[var(--spacing-40)] xl:left-[var(--spacing-40)]"
          />
        )}
      </div>

      {/* Content */}
      <div className={contentCls}>
        {/* Copy */}
        <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
          {/* Kelsi display heading */}
          <p
            className="font-[family-name:var(--font-display)] w-full"
            style={{
              fontWeight: 400,
              fontSize: 'var(--text-5xl)',
              lineHeight: 'var(--leading-4xl)',
              color: 'var(--color-text-accent)',
            }}
          >
            {heading}
          </p>

          <p
            className="font-[family-name:var(--font-primary)] w-full whitespace-pre-wrap"
            style={{
              fontWeight: 'var(--weight-semibold)' as unknown as number,
              fontSize: 'var(--text-base)',
              lineHeight: 'normal',
              color: 'var(--color-text-default)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
          {/* Pricing */}
          <div
            className="flex items-center gap-[var(--spacing-8)] whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--weight-bold)' as unknown as number,
              color: 'var(--color-text-default)',
            }}
          >
            {/* Discount / original price — always strikethrough, type lg-semibold (per Figma) */}
            {originalPrice && (
              <span
                className="line-through"
                style={{
                  fontWeight: 'var(--weight-semibold)' as unknown as number,
                  fontSize: 'var(--text-lg)',
                  lineHeight: 'var(--leading-lg)',
                }}
              >
                {originalPrice}
              </span>
            )}
            <span
              style={{
                fontSize: 'var(--text-4xl)',
                lineHeight: 'var(--leading-4xl)',
              }}
            >
              {price}
            </span>
          </div>

          <Button label={ctaLabel} variant="accent" href={ctaHref} />
        </div>
      </div>
    </div>
  )
}
