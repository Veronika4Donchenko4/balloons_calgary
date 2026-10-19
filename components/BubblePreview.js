'use client'
import { useRef, useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import { BUBBLE, TEXT_COLOURS } from '@/lib/bubble'
import { bubbleFont } from '@/lib/bubbleFont'

const BASE = 9 // starting font size, in cqw (% of the preview's width)

// Blank bubble photo + HTML text overlay centred on the balloon. All sizes are
// container-relative (cqw / %), so it scales with its box. The font auto-shrinks
// so the text always stays inside ~65% of the balloon's width.
export default function BubblePreview({ message, textColor = 'Black', placeholder = false, sizes = '560px', priority = false }) {
  const boxRef = useRef(null)
  const textRef = useRef(null)
  const [size, setSize] = useState(BASE)
  const empty = !message.trim()
  const shown = empty && placeholder ? 'Your text here' : message
  const hex = (TEXT_COLOURS.find((c) => c.name === textColor) || TEXT_COLOURS[0]).colors[0]

  useLayoutEffect(() => {
    const box = boxRef.current
    const text = textRef.current
    if (!box || !text) return
    const fit = () => {
      const W = box.clientWidth
      if (!W) return
      const prev = text.style.fontSize
      text.style.fontSize = `${BASE}cqw`
      const allowedW = ((BUBBLE.r * 2 * BUBBLE.textWidth) / 100) * W
      const allowedH = ((BUBBLE.r * 2 * BUBBLE.textHeight) / 100) * W
      const scale = Math.min(1, allowedW / Math.max(text.scrollWidth, 1), allowedH / Math.max(text.scrollHeight, 1))
      text.style.fontSize = prev // restore so React's inline style stays in sync
      setSize(BASE * scale)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(box)
    document.fonts?.ready.then(fit)
    return () => ro.disconnect()
  }, [shown])

  return (
    <div ref={boxRef} className="bubble-preview">
      <Image src={BUBBLE.blank} alt="" fill sizes={sizes} priority={priority} />
      <div
        className="bubble-text-box"
        style={{
          left: `${BUBBLE.cx}%`,
          top: `${BUBBLE.cy}%`,
          width: `${BUBBLE.r * 2 * BUBBLE.textWidth}%`,
          height: `${BUBBLE.r * 2 * BUBBLE.textHeight}%`,
        }}
      >
        <div
          ref={textRef}
          className={`bubble-text${empty && placeholder ? ' is-placeholder' : ''}`}
          style={{ fontFamily: bubbleFont.style.fontFamily, fontSize: `${size}cqw`, color: hex }}
        >
          {shown}
        </div>
      </div>
    </div>
  )
}
