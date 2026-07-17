'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import { products, allColors, allOccasions, priceBuckets, primaryCollection } from '@/lib/packages'
import { accentE } from '@/lib/accentE'

// approximate hex for each real shade (display swatches only)
const SHADE_HEX = {
  pink: '#F9B4C2', 'rose-gold': '#E0A899', gold: '#D4A853', silver: '#BDC3C7',
  white: '#FFFFFF', cream: '#F5EFE0', beige: '#E8DCC8', nude: '#E3C4A8',
  blue: '#5DADE2', navy: '#2C3E66', teal: '#4FB0A5', green: '#58D68D',
  'sage-green': '#B2AC88', violet: '#9B72CF', lilac: '#C8A2C8', mauve: '#B784A7',
  black: '#2D2D2D', red: '#E74C3C', peach: '#FFCBA4', coral: '#FF7F6B',
  brown: '#8B6B4A', champagne: '#E6D3A3', copper: '#B87333',
}
const swatch = (c) => SHADE_HEX[c] || '#ccc'
const label = (s) => s.replace(/-/g, ' ')

export default function CatalogFilters() {
  const [colorSel, setColorSel] = useState(() => new Set())
  const [occSel, setOccSel] = useState(() => new Set())
  const [bucketSel, setBucketSel] = useState(() => new Set())

  const counts = useMemo(() => {
    const c = { color: {}, occasion: {}, bucket: {} }
    for (const p of products) {
      p.colors.forEach((x) => (c.color[x] = (c.color[x] || 0) + 1))
      p.occasion.forEach((x) => (c.occasion[x] = (c.occasion[x] || 0) + 1))
      c.bucket[p.priceBucket] = (c.bucket[p.priceBucket] || 0) + 1
    }
    return c
  }, [])

  const toggle = (setter) => (val) =>
    setter((prev) => {
      const next = new Set(prev)
      next.has(val) ? next.delete(val) : next.add(val)
      return next
    })

  const clearAll = () => { setColorSel(new Set()); setOccSel(new Set()); setBucketSel(new Set()) }
  const activeCount = colorSel.size + occSel.size + bucketSel.size

  // OR within a facet, AND across facets
  const shown = useMemo(() => products.filter((p) => {
    if (colorSel.size && ![...colorSel].some((c) => p.colors.includes(c))) return false
    if (occSel.size && ![...occSel].some((o) => p.occasion.includes(o))) return false
    if (bucketSel.size && !bucketSel.has(p.priceBucket)) return false
    return true
  }), [colorSel, occSel, bucketSel])

  return (
    <div className="container">
      <div className="catalog-toolbar">
        <div className="filter-group">
          <span className="filter-group-label">Occasion</span>
          {allOccasions.map((o) => (
            <button key={o} type="button"
              className={`filter-chip${occSel.has(o) ? ' active' : ''}`}
              onClick={() => toggle(setOccSel)(o)}>
              {label(o)}<span className="filter-ct">{counts.occasion[o] || 0}</span>
            </button>
          ))}
        </div>

        <div className="filter-group">
          <span className="filter-group-label">Colour</span>
          {allColors.map((c) => (
            <button key={c} type="button"
              className={`filter-chip${colorSel.has(c) ? ' active' : ''}`}
              onClick={() => toggle(setColorSel)(c)}>
              <span className="filter-swatch" style={{ background: swatch(c) }} />
              {label(c)}<span className="filter-ct">{counts.color[c] || 0}</span>
            </button>
          ))}
        </div>

        <div className="filter-group">
          <span className="filter-group-label">Price</span>
          {priceBuckets.map((b) => (
            <button key={b} type="button"
              className={`filter-chip${bucketSel.has(b) ? ' active' : ''}`}
              onClick={() => toggle(setBucketSel)(b)}>
              {b === 'Above 160' || b === 'Under 65' ? b : `$${b}`}
              <span className="filter-ct">{counts.bucket[b] || 0}</span>
            </button>
          ))}
        </div>

        <div className="catalog-count">
          <strong>{shown.length}</strong> of {products.length} items
          {activeCount > 0 && (
            <button type="button" className="filter-clear" onClick={clearAll}>Clear all</button>
          )}
        </div>
      </div>

      {shown.length === 0 ? (
        <div className="cart-empty"><p>{accentE('No products match these filters.')}</p></div>
      ) : (
        <div className="packages-grid">
          {shown.map((p) => (
            <div key={p.id} className="package-card">
              <div className="package-card-img">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="package-card-body">
                <h3>{accentE(p.name)}</h3>
                <div className="price">${p.price} CAD</div>
                <div className="card-tags">
                  {p.occasion.map((o) => <span key={o} className="card-tag">{label(o)}</span>)}
                  {p.customText && <span className="card-tag card-tag-custom">✎ custom text</span>}
                </div>
                <div className="card-color-dots">
                  {p.colors.map((c) => (
                    <span key={c} className="color-dot" style={{ background: swatch(c) }} title={label(c)} />
                  ))}
                </div>
                <div className="package-card-actions">
                  <Link href={`/product/${p.id}`} className="btn btn-outline btn-sm">View Details</Link>
                  <AddToCartButton item={{ ...p, category: primaryCollection(p) }} className="btn-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
