'use client'
import { useState } from 'react'
import Link from 'next/link'
import Placeholder from '@/components/Placeholder'
import ColourChips from '@/components/ColourChips'
import VariantPhoto from '@/components/VariantPhoto'
import { VARIANT_PRODUCTS, productGradient } from '@/lib/premium'

// Collection grid with colour chips. The chips recolour the lead product
// (Signature Trio / Number Balloons); its link carries the choice to the product page.
export default function VariantGrid({ items, leadId }) {
  const [sel, setSel] = useState(0)
  const { variants } = VARIANT_PRODUCTS[leadId]
  return (
    <>
      <p className="chips-title">Choose your colour</p>
      <ColourChips options={variants} selected={sel} onSelect={setSel} />
      <div className="lux-products">
        {items.map((p) => {
          const lead = p.id === leadId
          return (
            <Link key={p.id} href={lead ? `/product/${p.id}?c=${sel}` : `/product/${p.id}`} className="lux-product">
              {lead ? (
                <VariantPhoto variants={variants} selected={sel} label={p.name} sizes="280px" className="lux-trio-photo" />
              ) : (
                <Placeholder gradient={productGradient(p)} label={p.name} />
              )}
              <h3>{p.name}</h3>
              <span>{lead ? `${variants[sel].name} · From ` : ''}${p.price} CAD</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
