'use client'
import { useState, useEffect } from 'react'
import { useCartStore } from '@/lib/cartStore'
import { VARIANT_PRODUCTS, variantImage } from '@/lib/premium'
import ColourChips from '@/components/ColourChips'
import VariantPhoto from '@/components/VariantPhoto'

const slugify = (s) => s.replace(/\W+/g, '-').toLowerCase()

// Photo-per-colour product (Signature Trio, Number Balloons). Everything
// product-specific comes from VARIANT_PRODUCTS[slug].
export default function VariantProduct({ slug }) {
  const { product, variants, blurb, addon, numberField } = VARIANT_PRODUCTS[slug]
  const addItem = useCartStore((s) => s.addItem)
  const [selected, setSelected] = useState(0)
  const [addonOn, setAddonOn] = useState(false)
  const [digits, setDigits] = useState('25')
  const [toast, setToast] = useState(false)
  const [hint, setHint] = useState(false)
  const way = variants[selected]
  const digitCount = numberField ? Math.max(digits.length, 1) : 1
  const total = product.price * digitCount + (addonOn ? addon.price : 0)

  // Preselect the colour chosen on the collection page (?c=index)
  useEffect(() => {
    const c = Number(new URLSearchParams(window.location.search).get('c'))
    if (Number.isInteger(c) && c >= 0 && c < variants.length) setSelected(c)
  }, [variants.length])

  const add = () => {
    let name = `${product.name} — ${way.name}`
    let balloons
    if (numberField) {
      name += ` (${digits || '—'})`
      balloons = digits.split('').map((d) => ({ size: `Number ${d}`, color: way.name }))
    } else {
      const [a, b] = way.name.split(' & ')
      balloons = [a, a, a, b, b].map((color) => ({ size: '10"', color }))
    }
    addItem({
      id: `${product.id}-${slugify(way.name)}${numberField ? `-${digits}` : ''}${addonOn ? '-animal' : ''}`,
      name,
      price: total,
      image: variantImage(way, digitCount),
      gradient: way.gradient,
      category: product.id,
      customizations: {
        basePrice: product.price * digitCount,
        balloons,
        extraBalloons: addonOn ? [{ type: 'animal', color: 'Choose with us' }] : [],
        extraBalloonsCost: addonOn ? addon.price : 0,
      },
    })
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className="trio-layout">
      <VariantPhoto variants={variants} selected={selected} digitCount={digitCount} label={`${product.name} — ${way.name}`} sizes="(max-width: 800px) 100vw, 560px" />
      <div className="trio-info">
        <h1>{product.name}</h1>
        <div className="trio-price">${product.price} CAD{numberField && ' per digit'}</div>
        <p>{blurb}</p>

        <div className="trio-label">Colour: <strong>{way.name}</strong></div>
        <ColourChips id="trio-colours" options={variants} selected={selected} onSelect={setSelected} highlight={hint} />

        {numberField && (
          <div className="form-group trio-number">
            <label htmlFor="digits">Your number</label>
            <input
              id="digits"
              inputMode="numeric"
              maxLength={3}
              value={digits}
              onChange={(e) => setDigits(e.target.value.replace(/\D/g, ''))}
              placeholder="25"
            />
          </div>
        )}

        {addon && (
          <label className="trio-addon">
            <input type="checkbox" checked={addonOn} onChange={(e) => setAddonOn(e.target.checked)} />
            <span>{addon.label} <em>{addon.hint}</em></span>
          </label>
        )}

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
          <button type="button" className="btn btn-primary btn-lg" onClick={add} disabled={numberField && !digits}>
            Add to Cart — ${total}
          </button>
        </div>

        <div className="trio-delivery">Same-day delivery available in Calgary. Free on orders $100+</div>
        {toast && <div className="toast">Added {product.name} to cart</div>}
      </div>
    </div>
  )
}
