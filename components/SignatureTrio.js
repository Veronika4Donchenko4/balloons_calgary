'use client'
import { useState, useEffect } from 'react'
import { useCartStore } from '@/lib/cartStore'
import { TRIO_COLOURWAYS, SIGNATURE_TRIO } from '@/lib/premium'
import Image from 'next/image'
import ColourChips from '@/components/ColourChips'

export default function SignatureTrioPurchase() {
  const addItem = useCartStore((s) => s.addItem)
  const [selected, setSelected] = useState(0)
  const [animal, setAnimal] = useState(false)
  const [toast, setToast] = useState(false)
  const [hint, setHint] = useState(false)
  const way = TRIO_COLOURWAYS[selected]
  const total = SIGNATURE_TRIO.price + (animal ? 25 : 0)

  // Preselect the colourway chosen on the bouquets page (?c=index)
  useEffect(() => {
    const c = Number(new URLSearchParams(window.location.search).get('c'))
    if (Number.isInteger(c) && c >= 0 && c < TRIO_COLOURWAYS.length) setSelected(c)
  }, [])

  const add = () => {
    const [a, b] = way.name.split(' & ')
    addItem({
      id: `${SIGNATURE_TRIO.id}-${way.name.replace(/\W+/g, '-').toLowerCase()}${animal ? '-animal' : ''}`,
      name: `${SIGNATURE_TRIO.name} — ${way.name}`,
      price: total,
      image: way.image,
      gradient: way.gradient,
      category: 'bouquets',
      customizations: {
        basePrice: SIGNATURE_TRIO.price,
        balloons: [a, a, a, b, b].map((color) => ({ size: '10"', color })),
        extraBalloons: animal ? [{ type: 'animal', color: 'Choose with us' }] : [],
        extraBalloonsCost: animal ? 25 : 0,
      },
    })
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className="trio-layout">
      <div className="trio-photo" role="img" aria-label={`${SIGNATURE_TRIO.name} — ${way.name}`}>
        {TRIO_COLOURWAYS.map((w, i) => (
          <Image
            key={w.name}
            src={w.image}
            alt=""
            fill
            priority={i === 0}
            sizes="(max-width: 800px) 100vw, 560px"
            className={`trio-img${i === selected ? ' active' : ''}`}
          />
        ))}
      </div>
      <div className="trio-info">
        <h1>{SIGNATURE_TRIO.name}</h1>
        <div className="trio-price">${SIGNATURE_TRIO.price} CAD</div>
        <p>5 premium latex helium balloons, 10 inches, in one of 10 curated colour combinations.</p>

        <div className="trio-label">Colours: <strong>{way.name}</strong></div>
        <ColourChips id="trio-colours" selected={selected} onSelect={setSelected} highlight={hint} />

        <label className="trio-addon">
          <input type="checkbox" checked={animal} onChange={(e) => setAnimal(e.target.checked)} />
          <span>Add an Animal Balloon <em>from $25</em></span>
        </label>

        <div className="trio-actions">
          <button
            type="button"
            className="btn btn-outline btn-lg"
            onClick={() => {
              document.getElementById('trio-colours')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              setHint(true)
              setTimeout(() => setHint(false), 1200)
            }}
          >
            Choose Colours
          </button>
          <button type="button" className="btn btn-primary btn-lg" onClick={add}>
            Add to Cart — ${total}
          </button>
        </div>

        <div className="trio-delivery">Same-day delivery available in Calgary. Free on orders $100+</div>
        {toast && <div className="toast">Added {SIGNATURE_TRIO.name} to cart</div>}
      </div>
    </div>
  )
}
