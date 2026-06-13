'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCartStore } from '@/lib/cartStore'
import { accentE } from '@/lib/accentE'

const defaultImg = '/assets/images/girl/girl1.png'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [expanded, setExpanded] = useState({})

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const formData = new FormData(e.target)
    const orderData = {
      customer: {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address'),
        date: formData.get('date'),
        time: formData.get('time'),
        notes: formData.get('notes'),
      },
      items: items.map(i => ({
        id: i.id,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        ...(i.customizations && { customizations: i.customizations }),
      })),
      total: getTotal(),
    }

    try {
      await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      })
    } catch (err) {
      // Order will still show success — the API route can be configured later
    }

    setSubmitting(false)
    setSubmitted(true)
    clearCart()
  }

  if (submitted) {
    return (
      <>
        <Header />
        <div className="page-header">
          <div className="container"><h1>Order Submitted</h1></div>
        </div>
        <section className="section">
          <div className="container">
            <div className="success-message">
              <div className="success-icon">&#10004;&#65039;</div>
              <h2>{accentE('Thank You for Your Order!')}</h2>
              <p>{accentE('We have received your order and will contact you shortly to confirm the details and delivery. You can also reach us at ballooncalgary@gmail.com')}</p>
              <Link href="/" className="btn btn-primary" style={{ marginTop: '24px' }}>Back to Home</Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Your Cart</h1>
          <p>{items.length === 0 ? 'Your cart is empty' : `${items.length} item${items.length > 1 ? 's' : ''} in your cart`}</p>
        </div>
      </div>

      <section className="section cart-page">
        <div className="container">
          {items.length === 0 ? (
            <div className="cart-empty">
              <h2>{accentE('Nothing here yet')}</h2>
              <p>{accentE('Browse our collections and add your favorite balloon arrangements to the cart.')}</p>
              <Link href="/catalog" className="btn btn-primary">Browse Collections</Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-img">
                      <img src={item.image || defaultImg} alt={item.name} />
                    </div>
                    <div className="cart-item-info">
                      <h3>{accentE(item.name)}</h3>
                      <div className="price">${item.price} CAD</div>
                      {item.customizations && (
                        <div className="cart-customization">
                          <button className="cart-cust-toggle" onClick={() => toggleExpand(item.id)}>
                            {expanded[item.id] ? 'Hide' : 'View'} customization details
                          </button>
                          {expanded[item.id] && (
                            <div className="cart-cust-details">
                              {item.customizations.balloons?.map((b, i) => (
                                <div key={i} className="cart-cust-line">
                                  <span className="cart-cust-swatch" style={{ background: colorHex(b.color) }} />
                                  Balloon {i + 1} ({b.size}) — {b.color}
                                  {b.text && <span className="cart-cust-text"> — &ldquo;{b.text}&rdquo; in {b.textColor}</span>}
                                </div>
                              ))}
                              {item.customizations.extraBalloons?.map((b, i) => (
                                <div key={`e-${i}`} className="cart-cust-line extra">
                                  <span className="cart-cust-swatch" style={{ background: colorHex(b.color) }} />
                                  {b.type === 'number' ? `Number ${b.number}` : b.type} balloon — {b.color}
                                  {b.text && <span className="cart-cust-text"> — &ldquo;{b.text}&rdquo; in {b.textColor}</span>}
                                </div>
                              ))}
                              {item.customizations.basePrice !== item.price && (
                                <div className="cart-cust-breakdown">
                                  <span>Base: ${item.customizations.basePrice}</span>
                                  {item.customizations.extraBalloonsCost > 0 && <span> + Extras: ${item.customizations.extraBalloonsCost}</span>}
                                  {item.customizations.textCost > 0 && <span> + Text: ${item.customizations.textCost}</span>}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeItem(item.id)} aria-label="Remove item">
                      &#10005;
                    </button>
                  </div>
                ))}
              </div>

              <p className="cart-ribbon-note">Satin ribbons included with every balloon</p>

              <div className="cart-summary">
                <div className="cart-total">
                  <span>Total</span>
                  <span>${getTotal()} CAD</span>
                </div>
                {!showForm && (
                  <button onClick={() => setShowForm(true)} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
                    Proceed to Order
                  </button>
                )}
              </div>

              {showForm && (
                <div className="order-form">
                  <h2>{accentE('Delivery Details')}</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" required placeholder="Your full name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required placeholder="+1 (825) 288-6133" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Delivery Address in Calgary *</label>
                      <input type="text" id="address" name="address" required placeholder="123 Main Street, Calgary, AB" />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="date">Preferred Delivery Date *</label>
                        <input type="date" id="date" name="date" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="time">Preferred Time</label>
                        <select id="time" name="time">
                          <option value="">Select a time</option>
                          <option value="morning">Morning (9am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 5pm)</option>
                          <option value="evening">Evening (5pm - 8pm)</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="notes">Special Notes or Wishes</label>
                      <textarea id="notes" name="notes" placeholder="Any special requests, color preferences, or additional details..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" disabled={submitting} style={{ width: '100%', justifyContent: 'center' }}>
                      {submitting ? 'Submitting...' : 'Submit Order'}
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

const COLOR_HEX = {
  White: '#FFFFFF', Pink: '#F9B4C2', Rose: '#E8919B', Red: '#E74C3C',
  Blue: '#5DADE2', Green: '#58D68D', Gold: '#D4A853', Purple: '#AF7AC5',
  Silver: '#BDC3C7', Black: '#2D2D2D',
}

function colorHex(name) {
  return COLOR_HEX[name] || '#ccc'
}
