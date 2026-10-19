'use client'
import Image from 'next/image'
import { variantImage } from '@/lib/premium'

// Stack of photos cross-faded by opacity; only the selected one is visible.
export default function VariantPhoto({ variants, selected, label, sizes, digitCount = 2, className = 'trio-photo' }) {
  return (
    <div className={className} role="img" aria-label={label}>
      {variants.map((w, i) => (
        <Image
          key={w.name}
          src={variantImage(w, digitCount)}
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
