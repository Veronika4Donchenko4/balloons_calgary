'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

// Photo + video gallery. Videos behave like live photos: autoplay, muted, loop, no controls;
// tap the picture to pause/resume. Swipe left/right to change picture on touch screens.
export default function MediaGallery({ images, videos = [], name }) {
  const media = [...images.map((src) => ({ type: 'image', src })), ...videos.map((v) => ({ type: 'video', ...v }))]
  const [cur, setCur] = useState(0)
  const [touchX, setTouchX] = useState(null)
  const refs = useRef([])
  const n = media.length

  const go = (i) => {
    refs.current.forEach((v) => v && v.pause())
    setCur(i)
    const next = refs.current[i]
    if (next) next.play().catch(() => {})
  }
  const onTouchEnd = (e) => {
    if (touchX == null || n < 2) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 40) go((cur + (dx < 0 ? 1 : n - 1)) % n)
    setTouchX(null)
  }
  const toggle = () => {
    const v = refs.current[cur]
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  return (
    <>
      <div
        className="trio-photo portrait"
        role="img"
        aria-label={name}
        onClick={toggle}
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        {media.map((m, i) =>
          m.type === 'image' ? (
            <Image key={m.src} src={m.src} alt="" fill priority={i === 0} sizes="(max-width: 800px) 100vw, 560px" className={`trio-img${i === cur ? ' active' : ''}`} />
          ) : (
            <video
              key={m.src}
              ref={(el) => { refs.current[i] = el }}
              className={`trio-img${i === cur ? ' active' : ''}`}
              src={m.src}
              poster={m.poster}
              autoPlay={i === cur}
              muted
              loop
              playsInline
              preload="metadata"
            />
          )
        )}
      </div>
      {n > 1 && (
        <div className="coll-thumbs">
          {media.map((m, i) => (
            <button key={m.src} type="button" className={`coll-thumb${i === cur ? ' selected' : ''}`} onClick={() => go(i)} aria-label={`${m.type === 'video' ? 'Video' : 'Photo'} ${i + 1}`}>
              <Image src={m.type === 'video' ? m.poster : m.src} alt="" fill sizes="80px" />
              {m.type === 'video' && <span className="coll-thumb-play" aria-hidden="true">▶</span>}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
