'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/lib/cartStore'
import { numberAddon, priceLabel } from '@/lib/readySets'
import ColourChips from '@/components/ColourChips'
import MediaGallery from '@/components/MediaGallery'

// Ready Set product page. Everything comes from the item's data entry: gallery, price,
// and (optionally) the number add-on — single or double, with its allowed colours.
export default function CollectionProduct({ item }) {
  const addBundle = useCartStore((s) => s.addBundle)
  const addItem = useCartStore((s) => s.addItem)
  const addon = numberAddon(item)
  const [numbersOn, setNumbersOn] = useState(false)
  const [colour, setColour] = useState(0)
  const [digits, setDigits] = useState('')
  const [toast, setToast] = useState(false)
  const buyable = item.price != null
  const chosen = addon?.options[colour]
  const digitsOk = !numbersOn || digits.length === addon.digits
  const total = (item.price ?? 0) + (numbersOn ? addon.price : 0)

  const flash = () => {
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }
  const add = () => {
    const parent = {
      id: numbersOn ? `${item.id}__${chosen.name.toLowerCase().replace(/\W+/g, '-')}-${digits}` : item.id,
      name: item.name,
      price: item.price,
      image: item.images[0],
      category: 'ready-set',
      customizations: {
        basePrice: item.price,
        lines: [item.count ? `Ready set — ${item.count} balloons` : 'Ready set'],
      },
    }
    if (!numbersOn) {
      addItem(parent)
      return flash()
    }
    addBundle(parent, {
      id: `${parent.id}__numbers`,
      name: `${addon.productName}: ${digits} in ${chosen.name}`,
      price: addon.price,
      image: chosen.image,
      category: addon.categoryId,
      customizations: {
        basePrice: addon.price,
        balloons: digits.split('').map((d) => ({ size: `Number ${d}`, color: chosen.name })),
      },
    })
    flash()
  }

  return (
    <div className="trio-layout">
      <div className="trio-media">
        <MediaGallery images={item.images} videos={item.videos} name={item.name} />
      </div>

      <div className="trio-info">
        <h1>{item.name}</h1>
        <div className="trio-price">
          {buyable ? `$${total} CAD` : priceLabel(item)}
          {buyable && numbersOn && <small className="trio-price-note"> ${item.price} + ${addon.price} number{addon.digits > 1 ? 's' : ''}</small>}
        </div>

        {addon && buyable && (
          <div className={`numbers-upsell${numbersOn ? ' on' : ''}`}>
            <label className="numbers-upsell-head">
              <input type="checkbox" checked={numbersOn} onChange={(e) => setNumbersOn(e.target.checked)} />
              <span>{addon.label}</span>
            </label>
            {numbersOn && (
              <div className="numbers-upsell-body">
                <div className="trio-label">Number colour: <strong>{chosen.name}</strong></div>
                <ColourChips options={addon.options} selected={colour} onSelect={setColour} label="Number colour" />
                <div className="numbers-upsell-row">
                  <div className="numbers-thumb">
                    <Image src={chosen.image} alt={`Giant number in ${chosen.name}`} fill sizes="96px" />
                  </div>
                  <div className="form-group trio-number">
                    <label htmlFor="coll-digits">Your number</label>
                    <input
                      id="coll-digits"
                      inputMode="numeric"
                      maxLength={addon.digits}
                      value={digits}
                      onChange={(e) => setDigits(e.target.value.replace(/\D/g, '').slice(0, addon.digits))}
                      placeholder={addon.placeholder}
                    />
                    <small className="trio-number-hint">{addon.hint}</small>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <p>{item.description}</p>
        {item.count && <p className="coll-count">{item.count} balloons</p>}

        <div className="trio-actions">
          <button type="button" className="btn btn-primary btn-lg" onClick={add} disabled={!buyable || !digitsOk}>
            {buyable ? `Add to Cart — $${total}` : 'Price coming soon'}
          </button>
        </div>
        <div className="trio-delivery">Same-day delivery available in Calgary. Free on orders $100+</div>
        {toast && <div className="toast">Added {item.name} to cart</div>}
      </div>
    </div>
  )
}
