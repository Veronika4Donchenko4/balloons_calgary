'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/lib/cartStore'
import { BUBBLE, TEXT_COLOURS, clampMessage } from '@/lib/bubble'
import { BUBBLE_FONT_NAME } from '@/lib/bubbleFont'
import BubblePreview from '@/components/BubblePreview'
import ColourChips from '@/components/ColourChips'

export default function PersonalizedBubble() {
  const addItem = useCartStore((s) => s.addItem)
  const [message, setMessage] = useState('')
  const [colour, setColour] = useState(0)
  const [view, setView] = useState(-1) // -1 = live preview, 0.. = example photo
  const [toast, setToast] = useState(false)
  const textColor = TEXT_COLOURS[colour].name
  const hasPrice = BUBBLE.price != null
  const lines = message ? message.split('\n').length : 0

  const add = () => {
    addItem({
      id: `${BUBBLE.id}-${Date.now()}`,
      name: BUBBLE.name,
      price: BUBBLE.price,
      category: 'signature',
      customizations: {
        basePrice: BUBBLE.price,
        bubble: { message: message.trim(), font: BUBBLE_FONT_NAME, textColor },
      },
    })
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className="trio-layout">
      <div className="bubble-gallery">
        <div className="bubble-main">
          <div className={`bubble-slide${view === -1 ? ' active' : ''}`}>
            <BubblePreview message={message} textColor={textColor} placeholder priority sizes="(max-width: 800px) 100vw, 560px" />
          </div>
          {BUBBLE.examples.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Example ${i + 1} of our personalized balloons`}
              fill
              sizes="(max-width: 800px) 100vw, 560px"
              className={`trio-img${view === i ? ' active' : ''}`}
            />
          ))}
        </div>
        <p className="bubble-examples-title">Examples of our work</p>
        <div className="bubble-thumbs">
          <button type="button" className={`bubble-thumb${view === -1 ? ' selected' : ''}`} onClick={() => setView(-1)} aria-label="Your design">
            <span>Your design</span>
          </button>
          {BUBBLE.examples.map((src, i) => (
            <button key={src} type="button" className={`bubble-thumb${view === i ? ' selected' : ''}`} onClick={() => setView(i)} aria-label={`Example ${i + 1}`}>
              <Image src={src} alt="" fill sizes="120px" />
            </button>
          ))}
        </div>
      </div>

      <div className="trio-info">
        <h1>{BUBBLE.name}</h1>
        <div className="trio-price">{hasPrice ? `$${BUBBLE.price} CAD` : 'Price coming soon'}</div>
        <p>{BUBBLE.description} Type your message and watch it appear on the balloon.</p>

        <div className="form-group">
          <label htmlFor="bubble-message">Your message</label>
          <textarea
            id="bubble-message"
            rows={3}
            value={message}
            onChange={(e) => { setMessage(clampMessage(e.target.value)); setView(-1) }}
            placeholder={'Welcome\nHome'}
          />
          <small className="trio-number-hint">
            {message.replace(/\n/g, '').length}/{BUBBLE.maxChars} characters · {Math.max(lines, 1)}/{BUBBLE.maxLines} lines · Enter starts a new line
          </small>
        </div>

        <div className="trio-label">Text colour: <strong>{textColor}</strong></div>
        <ColourChips options={TEXT_COLOURS} selected={colour} onSelect={(i) => { setColour(i); setView(-1) }} label="Text colour" />

        <div className="trio-actions">
          <button type="button" className="btn btn-primary btn-lg" onClick={add} disabled={!hasPrice || !message.trim()}>
            {hasPrice ? `Add to Cart — $${BUBBLE.price}` : 'Price coming soon'}
          </button>
        </div>

        <div className="trio-delivery">Same-day delivery available in Calgary. Free on orders $100+</div>
        {toast && <div className="toast">Added {BUBBLE.name} to cart</div>}
      </div>
    </div>
  )
}
