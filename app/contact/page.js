'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { accentE } from '@/lib/accentE'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
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
          <h1>{accentE('Contact Us')}</h1>
          <p>{accentE('We would love to hear from you. Get in touch with us today.')}</p>
        </div>
      </div>

      <section className="section contact-page">
        <div className="container">
          <div className="contact-page-grid">

            <div className="contact-form-section">
              <h2>{accentE('Send Us a Message')}</h2>

              {status === 'success' && (
                <div className="contact-status contact-success">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="contact-status contact-error">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (825) 288-6133" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" placeholder="Tell us about your event and what you are looking for..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>{accentE('Contact Information')}</h2>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#9993;</div>
                  <div className="contact-info-text">
                    <h4>{accentE('Email')}</h4>
                    <a href="mailto:ballooncalgary@gmail.com">ballooncalgary@gmail.com</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#128222;</div>
                  <div className="contact-info-text">
                    <h4>{accentE('Phone')}</h4>
                    <a href="tel:+18252886133">+1 (825) 288-6133</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#128205;</div>
                  <div className="contact-info-text">
                    <h4>{accentE('Location')}</h4>
                    <p>Calgary, Alberta, Canada</p>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#128247;</div>
                  <div className="contact-info-text">
                    <h4>{accentE('Instagram')}</h4>
                    <a href="https://www.instagram.com/balloons_calgary_yyc?igsh=Y3RsN29jN3pkNXZw" target="_blank" rel="noopener noreferrer">@balloons_calgary_yyc</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#128666;</div>
                  <div className="contact-info-text">
                    <h4>{accentE('Delivery')}</h4>
                    <p>Free delivery within Calgary urban area*</p>
                    <p className="delivery-note" style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '4px' }}>*Minimum order: 3 standard balloons or 1 large balloon. Delivery outside the urban area — $40</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
