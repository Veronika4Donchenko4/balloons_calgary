'use client'
import { useState } from 'react'
import { useCartStore } from '@/lib/cartStore'
import { accentE } from '@/lib/accentE'

const BALLOON_COLORS = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Pink', hex: '#F9B4C2' },
  { name: 'Rose', hex: '#E8919B' },
  { name: 'Red', hex: '#E74C3C' },
  { name: 'Blue', hex: '#5DADE2' },
  { name: 'Green', hex: '#58D68D' },
  { name: 'Gold', hex: '#D4A853' },
  { name: 'Purple', hex: '#AF7AC5' },
  { name: 'Silver', hex: '#BDC3C7' },
]

const TEXT_COLORS = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#2D2D2D' },
  { name: 'Gold', hex: '#D4A853' },
  { name: 'Pink', hex: '#F9B4C2' },
  { name: 'Red', hex: '#E74C3C' },
]

const EXTRA_PRICES = { large: 8, small: 5, number: 15 }
const TEXT_PRICES = { large: 12, small: 8 }

function ColorPicker({ value, onChange, colors }) {
  const [open, setOpen] = useState(false)
  const selected = colors.find(c => c.name === value) || colors[0]

  return (
    <div className="cpicker">
      <button
        type="button"
        className="cpicker-trigger"
        onClick={() => setOpen(!open)}
      >
        <span className="cpicker-swatch" style={{ background: selected.hex }} />
        <span>{selected.name}</span>
        <span className="cpicker-arrow">{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <>
          <div className="cpicker-overlay" onClick={() => setOpen(false)} />
          <div className="cpicker-dropdown">
            {colors.map(c => (
              <button
                key={c.name}
                type="button"
                className={`cpicker-option${c.name === value ? ' selected' : ''}`}
                onClick={() => { onChange(c.name); setOpen(false) }}
              >
                <span className="cpicker-swatch" style={{ background: c.hex }} />
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function BalloonCustomizer({ pkg, defaultBalloons }) {
  const addItem = useCartStore(s => s.addItem)
  const [showToast, setShowToast] = useState(false)

  const [colors, setColors] = useState(defaultBalloons.map(b => b.defaultColor))
  const [texts, setTexts] = useState(defaultBalloons.map(() => ({
    enabled: false, text: '', textColor: 'White'
  })))
  const [extras, setExtras] = useState([])
  const [extraTexts, setExtraTexts] = useState([])

  const updateColor = (i, color) => {
    setColors(prev => prev.map((c, idx) => idx === i ? color : c))
  }

  const toggleText = (i, isExtra) => {
    const setter = isExtra ? setExtraTexts : setTexts
    setter(prev => prev.map((t, idx) => idx === i ? { ...t, enabled: !t.enabled } : t))
  }

  const updateText = (i, field, value, isExtra) => {
    const setter = isExtra ? setExtraTexts : setTexts
    setter(prev => prev.map((t, idx) => idx === i ? { ...t, [field]: value } : t))
  }

  const addExtra = (type) => {
    setExtras(prev => [...prev, { type, color: 'White', number: type === 'number' ? 0 : null }])
    setExtraTexts(prev => [...prev, { enabled: false, text: '', textColor: 'White' }])
  }

  const removeExtra = (i) => {
    setExtras(prev => prev.filter((_, idx) => idx !== i))
    setExtraTexts(prev => prev.filter((_, idx) => idx !== i))
  }

  const updateExtraColor = (i, color) => {
    setExtras(prev => prev.map((e, idx) => idx === i ? { ...e, color } : e))
  }

  const updateExtraNumber = (i, number) => {
    setExtras(prev => prev.map((e, idx) => idx === i ? { ...e, number: parseInt(number) } : e))
  }

  const extrasCost = extras.reduce((sum, e) => sum + EXTRA_PRICES[e.type], 0)
  const defaultTextCost = texts.reduce((sum, t, i) => {
    if (!t.enabled || !t.text) return sum
    return sum + TEXT_PRICES[defaultBalloons[i].size]
  }, 0)
  const extraTextCost = extraTexts.reduce((sum, t, i) => {
    if (!t.enabled || !t.text) return sum
    const size = extras[i]?.type === 'small' ? 'small' : 'large'
    return sum + TEXT_PRICES[size]
  }, 0)
  const total = pkg.price + extrasCost + defaultTextCost + extraTextCost

  const handleAddToCart = () => {
    addItem({
      id: `${pkg.id}-custom-${Date.now()}`,
      name: pkg.name,
      price: total,
      image: pkg.image,
      category: pkg.category,
      customizations: {
        basePrice: pkg.price,
        balloons: defaultBalloons.map((b, i) => ({
          size: b.size,
          color: colors[i],
          text: texts[i].enabled && texts[i].text ? texts[i].text : null,
          textColor: texts[i].enabled && texts[i].text ? texts[i].textColor : null,
        })),
        extraBalloons: extras.map((e, i) => ({
          type: e.type,
          color: e.color,
          number: e.number,
          text: extraTexts[i].enabled && extraTexts[i].text ? extraTexts[i].text : null,
          textColor: extraTexts[i].enabled && extraTexts[i].text ? extraTexts[i].textColor : null,
        })),
        extraBalloonsCost: extrasCost,
        textCost: defaultTextCost + extraTextCost,
      }
    })
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const extraLabel = (type) =>
    type === 'number' ? 'Number Balloon' : type === 'large' ? 'Large Balloon' : 'Small Balloon'

  return (
    <div className="customizer-layout">
      <div className="customizer-image">
        <img src={pkg.image} alt={pkg.name} />
      </div>

      <div className="customizer-panel">
        <h1>{accentE(pkg.name)}</h1>
        <div className="customizer-base-price">${pkg.price} CAD</div>
        <p className="customizer-desc">{accentE(pkg.description)}</p>

        <h2 className="cust-section-title">{accentE('Customize Your Set')}</h2>

        <div className="customizer-balloons">
          {defaultBalloons.map((balloon, i) => (
            <div key={i} className="cust-balloon-row">
              <div className="balloon-row-top">
                <span className="balloon-label">Balloon {i + 1} ({balloon.size})</span>
                <ColorPicker value={colors[i]} onChange={(c) => updateColor(i, c)} colors={BALLOON_COLORS} />
                <button type="button" className={`cust-text-toggle${texts[i].enabled ? ' active' : ''}`} onClick={() => toggleText(i, false)}>
                  {texts[i].enabled ? 'Remove Text' : 'Add Text'}
                </button>
              </div>
              {texts[i].enabled && (
                <div className="cust-text-options">
                  <input
                    type="text"
                    value={texts[i].text}
                    onChange={(e) => updateText(i, 'text', e.target.value.slice(0, 20), false)}
                    placeholder="Enter text (max 20 chars)"
                    maxLength={20}
                  />
                  <div className="cust-text-row">
                    <ColorPicker value={texts[i].textColor} onChange={(c) => updateText(i, 'textColor', c, false)} colors={TEXT_COLORS} />
                    <span className="cust-text-price">+${TEXT_PRICES[balloon.size]} CAD</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {extras.map((extra, i) => (
            <div key={`extra-${i}`} className="cust-balloon-row extra-row">
              <div className="balloon-row-top">
                <span className="balloon-label">
                  {extraLabel(extra.type)}
                  <span className="extra-badge">+${EXTRA_PRICES[extra.type]}</span>
                </span>
                <ColorPicker value={extra.color} onChange={(c) => updateExtraColor(i, c)} colors={BALLOON_COLORS} />
                {extra.type === 'number' && (
                  <select className="number-select" value={extra.number} onChange={(e) => updateExtraNumber(i, e.target.value)}>
                    {[0,1,2,3,4,5,6,7,8,9].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                )}
                <button type="button" className={`cust-text-toggle${extraTexts[i].enabled ? ' active' : ''}`} onClick={() => toggleText(i, true)}>
                  {extraTexts[i].enabled ? 'Remove Text' : 'Add Text'}
                </button>
                <button type="button" className="cust-remove-btn" onClick={() => removeExtra(i)} aria-label="Remove balloon">&#10005;</button>
              </div>
              {extraTexts[i].enabled && (
                <div className="cust-text-options">
                  <input
                    type="text"
                    value={extraTexts[i].text}
                    onChange={(e) => updateText(i, 'text', e.target.value.slice(0, 20), true)}
                    placeholder="Enter text (max 20 chars)"
                    maxLength={20}
                  />
                  <div className="cust-text-row">
                    <ColorPicker value={extraTexts[i].textColor} onChange={(c) => updateText(i, 'textColor', c, true)} colors={TEXT_COLORS} />
                    <span className="cust-text-price">+${TEXT_PRICES[extra.type === 'small' ? 'small' : 'large']} CAD</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cust-add-balloon">
          <h3 className="cust-section-title">{accentE('Add a Balloon')}</h3>
          <div className="cust-add-options">
            <button type="button" className="cust-add-btn" onClick={() => addExtra('large')}>+ Large Balloon — $8 CAD</button>
            <button type="button" className="cust-add-btn" onClick={() => addExtra('small')}>+ Small Balloon — $5 CAD</button>
            <button type="button" className="cust-add-btn" onClick={() => addExtra('number')}>+ Number Balloon (0-9) — $15 CAD</button>
          </div>
        </div>

        <div className="cust-summary">
          <div className="cust-summary-line">
            <span>Base package</span>
            <span>${pkg.price} CAD</span>
          </div>
          {extrasCost > 0 && (
            <div className="cust-summary-line">
              <span>Extra balloons ({extras.length})</span>
              <span>+${extrasCost} CAD</span>
            </div>
          )}
          {(defaultTextCost + extraTextCost) > 0 && (
            <div className="cust-summary-line">
              <span>Text add-ons</span>
              <span>+${defaultTextCost + extraTextCost} CAD</span>
            </div>
          )}
          <div className="cust-summary-total">
            <span>Total</span>
            <span>${total} CAD</span>
          </div>
        </div>

        <button type="button" onClick={handleAddToCart} className="btn btn-primary btn-lg cust-cart-btn">
          Add to Cart — ${total} CAD
        </button>
      </div>

      {showToast && <div className="toast">Added {pkg.name} to cart</div>}
    </div>
  )
}
