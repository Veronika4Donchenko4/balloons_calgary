'use client'
import { useState, useEffect } from 'react'
import { useCartStore } from '@/lib/cartStore'
import { VARIANT_PRODUCTS } from '@/lib/premium'
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
  const [digits, setDigits] = useState(numberField?.initial ?? '')
  const [toast, setToast] = useState(false)
  const [hint, setHint] = useState(false)
  const way = variants[selected]
  const digitsOk = !numberField || digits.length === numberField.digits
  const total = product.price + (addonOn ? addon.price : 0)

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
      image: way.image,
      gradient: way.gradient,
      category: product.id,
      customizations: {
        basePrice: product.price,
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
      <div className="trio-media">
        <VariantPhoto variants={variants} selected={selected} label={`${product.name} — ${way.name}`} sizes="(max-width: 800px) 100vw, 560px" />
        <div className="trio-label">Colour: <strong>{way.name}</strong></div>
        <ColourChips id="trio-colours" options={variants} selected={selected} onSelect={setSelected} highlight={hint} />
      </div>
      <div className="trio-info">
        <h1>{product.name}</h1>
        <div className="trio-price">${product.price} CAD</div>
        <p>{blurb}</p>

        {numberField && (
          <div className="form-group trio-number">
            <label htmlFor="digits">Your number</label>
            <input
              id="digits"
              inputMode="numeric"
              maxLength={numberField.digits}
              value={digits}
              onChange={(e) => setDigits(e.target.value.replace(/\D/g, '').slice(0, numberField.digits))}
              placeholder={numberField.initial}
            />
            <small className="trio-number-hint">
              {numberField.digits === 1 ? 'One digit, 0–9' : 'Two digits, 00–99'}
            </small>
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
          <button type="button" className="btn btn-primary btn-lg" onClick={add} disabled={!digitsOk}>
            Add to Cart — ${total}
          </button>
        </div>

        <div className="trio-delivery">Same-day delivery available in Calgary. Free on orders $100+</div>
        {toast && <div className="toast">Added {product.name} to cart</div>}
      </div>
    </div>
  )
}
