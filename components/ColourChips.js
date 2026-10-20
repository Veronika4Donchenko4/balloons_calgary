'use client'

// Selectable colour chips: one or two swatch circles + the option name.
export default function ColourChips({ options, selected, onSelect, id, highlight = false, label = 'Colour' }) {
  return (
    <div className={`chips${highlight ? ' hint' : ''}`} role="radiogroup" aria-label={label} id={id}>
      {options.map((w, i) => (
        <button
          key={w.name}
          type="button"
          role="radio"
          aria-checked={i === selected}
          className={`chip${i === selected ? ' selected' : ''}`}
          onClick={() => onSelect(i)}
        >
          {w.colors?.length > 0 && (
            <span className="chip-dots">
              {w.colors.map((c) => <i key={c} style={{ background: c }} />)}
            </span>
          )}
          {w.label || w.name}
        </button>
      ))}
    </div>
  )
}
