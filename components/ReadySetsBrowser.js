'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { READY_SETS, OCCASIONS, FILTER_COLOURS, PRICE_RANGES, filterSets } from '@/lib/readySets'
import ReadySetCard from '@/components/ReadySetCard'

const csv = (v) => (v ? v.split(',').filter(Boolean) : [])

// Ready Sets listing with Colour / Price / Occasion filters. State lives in the URL
// (?colour=gold,silver&price=under-50&occasion=for-him) so filtered pages can be shared.
export default function ReadySetsBrowser() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const [open, setOpen] = useState(false)
  const sel = { colour: csv(params.get('colour')), price: csv(params.get('price')), occasion: csv(params.get('occasion')) }

  const results = useMemo(
    () => filterSets(READY_SETS, { colours: sel.colour, prices: sel.price, occasions: sel.occasion }),
    [params] // eslint-disable-line react-hooks/exhaustive-deps
  )
  const active = sel.colour.length + sel.price.length + sel.occasion.length

  const push = (next) => {
    const q = new URLSearchParams()
    Object.entries(next).forEach(([k, v]) => v.length && q.set(k, v.join(',')))
    const s = q.toString()
    router.replace(s ? `${pathname}?${s}` : pathname, { scroll: false })
  }
  const toggle = (group, slug) => {
    const cur = sel[group]
    push({ ...sel, [group]: cur.includes(slug) ? cur.filter((x) => x !== slug) : [...cur, slug] })
  }
  const clear = () => push({ colour: [], price: [], occasion: [] })

  // how many sets each option would show given the OTHER groups' selections (shown as a count)
  const countFor = (group, slug) => {
    const base = { colours: sel.colour, prices: sel.price, occasions: sel.occasion }
    const key = { colour: 'colours', price: 'prices', occasion: 'occasions' }[group]
    return filterSets(READY_SETS, { ...base, [key]: [slug] }).length
  }

  const Group = ({ title, group, options, swatch }) => (
    <fieldset className="rs-group">
      <legend>{title}</legend>
      <div className="rs-options">
        {options.map((o) => {
          const on = sel[group].includes(o.slug)
          const n = countFor(group, o.slug)
          return (
            <button
              key={o.slug}
              type="button"
              className={`rs-chip${on ? ' on' : ''}`}
              aria-pressed={on}
              disabled={!on && n === 0}
              onClick={() => toggle(group, o.slug)}
            >
              {swatch && <i style={{ background: o.hex }} />}
              {o.name}
            </button>
          )
        })}
      </div>
    </fieldset>
  )

  return (
    <div className="rs-layout">
      <div className="rs-toolbar">
        <button type="button" className="btn btn-outline rs-open" onClick={() => setOpen(true)}>
          Filters{active ? ` (${active})` : ''}
        </button>
        <span className="rs-count" aria-live="polite">{results.length} {results.length === 1 ? 'set' : 'sets'}</span>
        {active > 0 && <button type="button" className="rs-clear" onClick={clear}>Clear filters</button>}
      </div>

      {open && <div className="rs-backdrop" onClick={() => setOpen(false)} />}
      <aside className={`rs-filters${open ? ' open' : ''}`} aria-label="Filters">
        <div className="rs-filters-head">
          <strong>Filters</strong>
          <button type="button" className="rs-close" onClick={() => setOpen(false)} aria-label="Close filters">✕</button>
        </div>
        <Group title="Occasion" group="occasion" options={OCCASIONS} />
        <Group title="Colour" group="colour" options={FILTER_COLOURS} swatch />
        <Group title="Price" group="price" options={PRICE_RANGES} />
        <div className="rs-filters-foot">
          <button type="button" className="btn btn-primary" onClick={() => setOpen(false)}>Show {results.length} {results.length === 1 ? 'set' : 'sets'}</button>
          {active > 0 && <button type="button" className="rs-clear" onClick={clear}>Clear filters</button>}
        </div>
      </aside>

      <div className="rs-results">
        <div className="rs-count-desktop" aria-live="polite">
          {results.length} {results.length === 1 ? 'set' : 'sets'}
          {active > 0 && <button type="button" className="rs-clear" onClick={clear}>Clear filters</button>}
        </div>
        {results.length === 0 ? (
          <div className="lux-empty">
            <p>No sets match those filters.</p>
            <button type="button" className="btn btn-primary" onClick={clear}>Clear filters</button>
            <p style={{ marginTop: 24 }}>Looking for something specific? <Link href="/custom-order" style={{ textDecoration: 'underline' }}>Request a custom design</Link>.</p>
          </div>
        ) : (
          <div className="lux-products rs-grid">
            {results.map((i) => <ReadySetCard key={i.id} item={i} />)}
          </div>
        )}
      </div>
    </div>
  )
}
