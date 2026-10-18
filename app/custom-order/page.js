'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const EVENT_TYPES = ['Birthday', 'Baby Shower', 'Wedding', 'Gender Reveal', 'Graduation', 'Corporate Event', 'Anniversary', 'Other']
const BUDGETS = ['Under $50', '$50-$100', '$100-$200', '$200-$500', '$500+', 'Not sure yet']
const MAX_BYTES = 5 * 1024 * 1024

export default function CustomOrder() {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error'
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(null)

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview) }, [preview])

  const onFile = (e) => {
    const file = e.target.files?.[0]
    setError('')
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file.')
      e.target.value = ''
      return
    }
    if (file.size > MAX_BYTES) {
      setError('Image must be 5MB or smaller.')
      e.target.value = ''
      return
    }
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setSending(true)
    setStatus(null)
    try {
      const res = await fetch('/api/custom-order', { method: 'POST', body: new FormData(form) })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setPreview(null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setSending(false)
  }

  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Custom Order</h1>
          <p>Tell us about your vision and we&rsquo;ll bring it to life</p>
        </div>
      </div>

      <section className="section lux-section">
        <div className="container lux-form-wrap">
          {status === 'success' ? (
            <div className="lux-thanks">
              <h2>Thank you!</h2>
              <p>We&rsquo;ll contact you within 24 hours to discuss your custom arrangement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lux-form">
              {status === 'error' && (
                <div className="contact-status contact-error">
                  Something went wrong. Please try again or email ballooncalgary@gmail.com.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select id="eventType" name="eventType" defaultValue="">
                    <option value="" disabled>Select an event</option>
                    {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date *</label>
                  <input type="date" id="eventDate" name="eventDate" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" placeholder="Describe your dream balloon arrangement..." />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="colours">Preferred Colours</label>
                  <input type="text" id="colours" name="colours" placeholder="e.g. sage green, cream, gold" />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Approximate Budget</label>
                  <select id="budget" name="budget" defaultValue="">
                    <option value="" disabled>Select a range</option>
                    {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="photo">Reference Photo (optional)</label>
                <input type="file" id="photo" name="photo" accept="image/*" onChange={onFile} />
                {error && <p className="lux-field-error">{error}</p>}
                {preview && <img src={preview} alt="Reference preview" className="lux-preview" />}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                {sending ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
