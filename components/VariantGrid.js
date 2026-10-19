'use client'
import { useState } from 'react'
import Link from 'next/link'
import Placeholder from '@/components/Placeholder'
import ColourChips from '@/components/ColourChips'
import VariantPhoto from '@/components/VariantPhoto'
import { VARIANT_PRODUCTS, productGradient } from '@/lib/premium'

// Collection grid with colour chips. `chipVariants` are the chips shown; each lead
// product (Signature Trio, Single/Double Number) follows the chosen colour by name
// (falling back to its first colour if it doesn't offer that one) and its link
// carries the choice to the product page.
export default function VariantGrid({ items, chipVariants }) {
  const [sel, setSel] = useState(0)
  const chosen = chipVariants[sel].name
  return (
    <>
      <p className="chips-title">Choose your colour</p>
      <ColourChips options={chipVariants} selected={sel} onSelect={setSel} />
      <div className="lux-products">
        {items.map((p) => {
          const cfg = VARIANT_PRODUCTS[p.id]
          if (!cfg) {
            return (
              <Link key={p.id} href={`/product/${p.id}`} className="lux-product">
                <Placeholder gradient={productGradient(p)} label={p.name} />
                <h3>{p.name}</h3>
                <span>${p.price} CAD</span>
              </Link>
            )
          }
          const found = cfg.variants.findIndex((v) => v.name === chosen)
          const idx = found === -1 ? 0 : found
          return (
            <Link key={p.id} href={`/product/${p.id}?c=${idx}`} className="lux-product">
              <VariantPhoto variants={cfg.variants} selected={idx} label={p.name} sizes="280px" className="lux-trio-photo" />
              <h3>{p.name}</h3>
              <span>{cfg.variants[idx].name} · {cfg.priceFrom ? 'From ' : ''}${p.price} CAD</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
