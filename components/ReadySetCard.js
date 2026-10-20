'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { priceLabel } from '@/lib/readySets'

// Listing card. Shows the cover photo (or a video's poster); if the set has a video it
// plays muted on hover on desktop.
export default function ReadySetCard({ item }) {
  const video = item.videos?.[0]
  const cover = item.images[0] || video?.poster
  const [hover, setHover] = useState(false)
  const ref = useRef(null)
  const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches

  return (
    <Link
      href={`/product/${item.id}`}
      className="lux-product"
      onMouseEnter={() => video && canHover() && setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="lux-product-img" style={{ position: 'relative' }}>
        <Image src={cover} alt={item.name} fill sizes="(max-width: 600px) 50vw, 280px" style={{ objectFit: 'cover' }} />
        {video && hover && (
          <video ref={ref} src={video.src} poster={video.poster} autoPlay muted loop playsInline preload="none" className="rs-card-video" />
        )}
      </div>
      <h3>{item.name}</h3>
      <span>{priceLabel(item)}</span>
    </Link>
  )
}
