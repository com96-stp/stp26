import { Tag } from '../atoms/Tag'

interface CardExpressiveProps {
  imageSrc: string
  imageAlt?: string
  tag: string
  tagVariant?: 'green' | 'blue' | 'orange'
  heading: string
  description: string
}

export function CardExpressive({
  imageSrc,
  imageAlt = '',
  tag,
  tagVariant = 'blue',
  heading,
  description,
}: CardExpressiveProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-24)] items-start w-full">
      {/* Collage image */}
      <div
        className="w-full rounded-[var(--radius-lg)] overflow-hidden"
        style={{ aspectRatio: '358 / 408' }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[var(--spacing-8)] items-center w-full text-center">
        <Tag label={tag} variant={tagVariant} />
        {/* Heading — per Figma: text-xl (24) / leading-xl (36) / bold / text-default */}
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-bold)' as unknown as number,
            fontSize: 'var(--text-xl)',
            lineHeight: 'var(--leading-xl)',
            color: 'var(--color-text-default)',
          }}
        >
          {heading}
        </p>
        <p
          className="font-[family-name:var(--font-primary)] w-full"
          style={{
            fontWeight: 'var(--weight-medium)' as unknown as number,
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-base)',
            color: 'var(--color-text-default)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
