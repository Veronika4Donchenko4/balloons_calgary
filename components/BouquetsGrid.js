'use client'
import { useState } from 'react'
import Link from 'next/link'
import Placeholder from '@/components/Placeholder'
import ColourChips from '@/components/ColourChips'
import { TRIO_COLOURWAYS, SIGNATURE_TRIO, productGradient } from '@/lib/premium'

// Bouquets collection: chips choose the Signature Trio colourway; the card's
// placeholder follows the selection and the link carries it to the product page.
export default function BouquetsGrid({ items }) {
  const [sel, setSel] = useState(0)
  return (
    <>
      <p className="chips-title">Choose your colours</p>
      <ColourChips selected={sel} onSelect={setSel} />
      <div className="lux-products">
        {items.map((p) => {
          const trio = p.id === SIGNATURE_TRIO.id
          return (
            <Link key={p.id} href={trio ? `/product/${p.id}?c=${sel}` : `/product/${p.id}`} className="lux-product">
              <Placeholder gradient={trio ? TRIO_COLOURWAYS[sel].gradient : productGradient(p)} label={p.name} />
              <h3>{p.name}</h3>
              <span>{trio ? `${TRIO_COLOURWAYS[sel].name} · From ` : ''}${p.price} CAD</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
