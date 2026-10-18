'use client'
import { useState } from 'react'
import { useCartStore } from '@/lib/cartStore'
import { TRIO_COLOURWAYS, SIGNATURE_TRIO } from '@/lib/premium'

export default function SignatureTrioPurchase() {
  const addItem = useCartStore((s) => s.addItem)
  const [selected, setSelected] = useState(0)
  const [animal, setAnimal] = useState(false)
  const [toast, setToast] = useState(false)
  const [hint, setHint] = useState(false)
  const way = TRIO_COLOURWAYS[selected]
  const total = SIGNATURE_TRIO.price + (animal ? 25 : 0)

  const add = () => {
    addItem({
      id: `${SIGNATURE_TRIO.id}-${way.name.replace(/\W+/g, '-').toLowerCase()}${animal ? '-animal' : ''}`,
      name: `${SIGNATURE_TRIO.name} — ${way.name}`,
      price: total,
      image: SIGNATURE_TRIO.image,
      category: 'bouquets',
      customizations: {
        basePrice: SIGNATURE_TRIO.price,
        balloons: way.name.split(' & ').flatMap((c, i) => (i === 0 ? [c, c] : [c])).map((color) => ({ size: '12"', color })),
        extraBalloons: animal ? [{ type: 'animal', color: 'Choose with us' }] : [],
        extraBalloonsCost: animal ? 25 : 0,
      },
    })
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className="trio-buy">
      <div className="trio-label">
        Colours: <strong>{way.name}</strong>
      </div>
      <div className={`trio-swatches${hint ? ' hint' : ''}`} role="radiogroup" aria-label="Colour combination" id="trio-colours">
        {TRIO_COLOURWAYS.map((w, i) => (
          <button
            key={w.name}
            type="button"
            role="radio"
            aria-checked={i === selected}
            aria-label={w.name}
            title={w.name}
            className={`trio-swatch${i === selected ? ' selected' : ''}`}
            onClick={() => setSelected(i)}
          >
            <span style={{ background: w.colors[0] }} />
            <span style={{ background: w.colors[1] }} />
          </button>
        ))}
      </div>

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

      {toast && <div className="toast">Added {SIGNATURE_TRIO.name} to cart</div>}
    </div>
  )
}
