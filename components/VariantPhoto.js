'use client'
import Image from 'next/image'

// Stack of photos cross-faded by opacity; only the selected one is visible.
export default function VariantPhoto({ variants, selected, label, sizes, className = 'trio-photo' }) {
  return (
    <div className={className} role="img" aria-label={label}>
      {variants.map((w, i) => (
        <Image
          key={w.name}
          src={w.image}
          alt=""
          fill
          priority={i === 0}
          sizes={sizes}
          className={`trio-img${i === selected ? ' active' : ''}`}
        />
      ))}
    </div>
  )
}
