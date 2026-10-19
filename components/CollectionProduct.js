'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/lib/cartStore'
import { NUMBERS_ADDON, numberOptions } from '@/lib/collections'
import ColourChips from '@/components/ColourChips'

// Ceiling collection product page. Everything comes from the item's data entry:
// gallery, price, and (optionally) the colours allowed for the two-giant-numbers add-on.
export default function CollectionProduct({ item }) {
  const addBundle = useCartStore((s) => s.addBundle)
  const addItem = useCartStore((s) => s.addItem)
  const colours = numberOptions(item)
  const [photo, setPhoto] = useState(0)
  const [numbersOn, setNumbersOn] = useState(false)
  const [colour, setColour] = useState(0)
  const [digits, setDigits] = useState('')
  const [toast, setToast] = useState(false)
  const chosen = colours[colour]
  const digitsOk = !numbersOn || digits.length === NUMBERS_ADDON.digits
  const total = item.price + (numbersOn ? NUMBERS_ADDON.price : 0)

  const add = () => {
    const parent = {
      id: numbersOn ? `${item.id}__${chosen.name.toLowerCase().replace(/\W+/g, '-')}-${digits}` : item.id,
      name: item.name,
      price: item.price,
      image: item.images[0],
      category: 'ceiling',
      customizations: {
        basePrice: item.price,
        lines: [`Ceiling collection${item.count ? ` — ${item.count} balloons` : ''}`],
      },
    }
    if (!numbersOn) return addItem(parent), flash()
    addBundle(parent, {
      id: `${parent.id}__numbers`,
      name: `Two giant numbers: ${digits} in ${chosen.name}`,
      price: NUMBERS_ADDON.price,
      image: chosen.image,
      category: 'double-number',
      customizations: {
        basePrice: NUMBERS_ADDON.price,
        balloons: digits.split('').map((d) => ({ size: `Number ${d}`, color: chosen.name })),
      },
    })
    flash()
  }
  const flash = () => {
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className="trio-layout">
      <div className="trio-media">
        <div className="trio-photo portrait" role="img" aria-label={item.name}>
          {item.images.map((src, i) => (
            <Image key={src} src={src} alt="" fill priority={i === 0} sizes="(max-width: 800px) 100vw, 560px" className={`trio-img${i === photo ? ' active' : ''}`} />
          ))}
        </div>
        {item.images.length > 1 && (
          <div className="coll-thumbs">
            {item.images.map((src, i) => (
              <button key={src} type="button" className={`coll-thumb${i === photo ? ' selected' : ''}`} onClick={() => setPhoto(i)} aria-label={`Photo ${i + 1}`}>
                <Image src={src} alt="" fill sizes="80px" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="trio-info">
        <h1>{item.name}</h1>
        <div className="trio-price">
          ${total} CAD
          {numbersOn && <small className="trio-price-note"> ${item.price} + ${NUMBERS_ADDON.price} numbers</small>}
        </div>

        {colours.length > 0 && (
          <div className={`numbers-upsell${numbersOn ? ' on' : ''}`}>
            <label className="numbers-upsell-head">
              <input type="checkbox" checked={numbersOn} onChange={(e) => setNumbersOn(e.target.checked)} />
              <span>Make it personal — add two giant numbers for ${NUMBERS_ADDON.price}</span>
            </label>
            {numbersOn && (
              <div className="numbers-upsell-body">
                <div className="trio-label">Number colour: <strong>{chosen.name}</strong></div>
                <ColourChips options={colours} selected={colour} onSelect={setColour} label="Number colour" />
                <div className="numbers-upsell-row">
                  <div className="numbers-thumb">
                    <Image src={chosen.image} alt={`Giant numbers in ${chosen.name}`} fill sizes="96px" />
                  </div>
                  <div className="form-group trio-number">
                    <label htmlFor="coll-digits">Your number</label>
                    <input
                      id="coll-digits"
                      inputMode="numeric"
                      maxLength={NUMBERS_ADDON.digits}
                      value={digits}
                      onChange={(e) => setDigits(e.target.value.replace(/\D/g, '').slice(0, NUMBERS_ADDON.digits))}
                      placeholder="25"
                    />
                    <small className="trio-number-hint">Two digits, 00–99</small>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <p>{item.description}</p>
        {item.count && <p className="coll-count">{item.count} balloons</p>}

        <div className="trio-actions">
          <button type="button" className="btn btn-primary btn-lg" onClick={add} disabled={!digitsOk}>
            Add to Cart — ${total}
          </button>
        </div>
        <div className="trio-delivery">Same-day delivery available in Calgary. Free on orders $100+</div>
        {toast && <div className="toast">Added {item.name} to cart</div>}
      </div>
    </div>
  )
}
