'use client'
import { TRIO_COLOURWAYS } from '@/lib/premium'

// Selectable colour-combination chips: two swatch circles + the combo name.
export default function ColourChips({ selected, onSelect, id, highlight = false }) {
  return (
    <div className={`chips${highlight ? ' hint' : ''}`} role="radiogroup" aria-label="Colour combination" id={id}>
      {TRIO_COLOURWAYS.map((w, i) => (
        <button
          key={w.name}
          type="button"
          role="radio"
          aria-checked={i === selected}
          className={`chip${i === selected ? ' selected' : ''}`}
          onClick={() => onSelect(i)}
        >
          <span className="chip-dots">
            <i style={{ background: w.colors[0] }} />
            <i style={{ background: w.colors[1] }} />
          </span>
          {w.name}
        </button>
      ))}
    </div>
  )
}
