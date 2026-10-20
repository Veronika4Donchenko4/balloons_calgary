'use client'
import { useState } from 'react'
import { useCartStore } from '@/lib/cartStore'
import ColourChips from '@/components/ColourChips'
import MediaGallery from '@/components/MediaGallery'

// Configurable bunch: ribbon/bow colour + quantity. Price = perBalloon × quantity; while
// perBalloon is null the product shows "Price coming soon" and can't be added to the cart.
export default function BowBunch({ item }) {
  const { bunch } = item
  const addItem = useCartStore((s) => s.addItem)
  const [ribbon, setRibbon] = useState(0)
  const [qty, setQty] = useState(bunch.default)
  const [toast, setToast] = useState(false)
  const buyable = bunch.perBalloon != null
  const total = buyable ? bunch.perBalloon * qty : null
  const colour = bunch.ribbonColours[ribbon].name
  const clamp = (n) => Math.min(bunch.max, Math.max(bunch.min, n))

  const add = () => {
    addItem({
      id: `${item.id}-${colour.toLowerCase().replace(/\W+/g, '-')}-${qty}`,
      name: `${item.name} — ${qty} balloons, ${colour} bows`,
      price: total,
      image: item.images[0],
      category: 'ready-set',
      customizations: {
        basePrice: total,
        lines: [`Ribbon / bow colour: ${colour}`, `Quantity: ${qty} balloons`],
      },
    })
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className="trio-layout">
      <div className="trio-media">
        <MediaGallery images={item.images} videos={item.videos} name={item.name} />
      </div>
      <div className="trio-info">
        <h1>{item.name}</h1>
        <div className="trio-price">
          {buyable ? `$${total} CAD` : 'Price coming soon'}
          {buyable && <small className="trio-price-note"> ${bunch.perBalloon} per balloon × {qty}</small>}
        </div>
        <p>{item.description}</p>

        <div className="trio-label">Ribbon / bow colour: <strong>{colour}</strong></div>
        <ColourChips options={bunch.ribbonColours} selected={ribbon} onSelect={setRibbon} label="Ribbon colour" />

        <div className="trio-label">Quantity</div>
        <div className="qty-stepper">
          <button type="button" onClick={() => setQty(clamp(qty - 1))} disabled={qty <= bunch.min} aria-label="Fewer balloons">−</button>
          <span aria-live="polite">{qty}</span>
          <button type="button" onClick={() => setQty(clamp(qty + 1))} disabled={qty >= bunch.max} aria-label="More balloons">+</button>
          <small>{bunch.min}–{bunch.max} balloons</small>
        </div>

        <div className="trio-actions">
          <button type="button" className="btn btn-primary btn-lg" onClick={add} disabled={!buyable}>
            {buyable ? `Add to Cart — $${total}` : 'Price coming soon'}
          </button>
        </div>
        <div className="trio-delivery">Same-day delivery available in Calgary. Free on orders $100+</div>
        {toast && <div className="toast">Added {item.name} to cart</div>}
      </div>
    </div>
  )
}
