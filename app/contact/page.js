import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Get in touch with us today.</p>
        </div>
      </div>

      <section className="section contact-page">
        <div className="container">
          <div className="contact-page-grid">

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form>
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
                  <input type="tel" id="phone" name="phone" placeholder="(403) 000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" placeholder="Tell us about your event and what you are looking for..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#9993;</div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <a href="mailto:balloonscalgary@gmail.com">balloonscalgary@gmail.com</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#128222;</div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <a href="tel:+14030000000">(403) 000-0000</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#128205;</div>
                  <div className="contact-info-text">
                    <h4>Location</h4>
                    <p>Calgary, Alberta, Canada</p>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">&#128247;</div>
                  <div className="contact-info-text">
                    <h4>Instagram</h4>
                    <a href="https://www.instagram.com/balloonscalgary" target="_blank" rel="noopener noreferrer">@balloonscalgary</a>
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
