import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialsSlider from '@/components/TestimonialsSlider'

const categories = [
  { name: 'Girls Collection', desc: '10 packages available', badge: 'From $70', href: '/catalog#girls', bg: 'linear-gradient(135deg, #FDE4F0, #F8BBD9)' },
  { name: 'For Him', desc: '2 packages available', badge: 'From $120', href: '/catalog#for-him', bg: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)' },
  { name: 'Birthday Sets', desc: 'Party bundles for all ages', badge: '', href: '/catalog#classic', bg: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' },
  { name: 'Number Balloons', desc: 'Age balloons for milestones', badge: '$120', href: '/classic/numbers', bg: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' },
  { name: 'Baby Shower', desc: 'Boy & girl themes', badge: '', href: '/catalog', bg: 'linear-gradient(135deg, #E8D5F5, #DDD6FE)' },
  { name: 'Romantic & Love', desc: 'Heart balloons & arrangements', badge: '', href: '/catalog', bg: 'linear-gradient(135deg, #FECDD3, #FDA4AF)' },
]

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Beautiful Balloon Arrangements for Every <span>Celebration</span></h1>
            <p>Handcrafted balloon compositions for birthdays, baby showers, romantic surprises & special events in Calgary.</p>
            <div className="hero-btns">
              <Link href="/catalog" className="btn btn-primary btn-lg">Browse Collections</Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Collections</span></h2>
            <p>Find the perfect balloon arrangement for any occasion</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="category-card">
                <div className="category-card-img" style={{ background: cat.bg }}>
                </div>
                <div className="category-card-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  {cat.badge && <span className="category-card-badge">{cat.badge}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>How It <span>Works</span></h2>
            <p>Three simple steps to your perfect balloon arrangement</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose Your Package</h3>
              <p>Browse our curated collections and pick the balloon arrangement that matches your celebration perfectly.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Add to Cart & Order</h3>
              <p>Add items to your cart, fill in your delivery details, and choose your preferred date and time.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>We Deliver</h3>
              <p>We handcraft and deliver your balloon set right to your door in Calgary, ready to make your event magical.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <h2>About <span>Balloons Calgary</span></h2>
            <p>We believe every celebration deserves a touch of magic. Our team handcrafts each balloon arrangement with care and attention to detail, using premium materials to create stunning compositions that transform any space.</p>
            <p>Based in Calgary, Alberta, we specialize in ready-made and custom balloon sets for birthdays, baby showers, romantic surprises, corporate events, and every special moment in between.</p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">&#10024;</div>
                <span>Handcrafted</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">&#128666;</div>
                <span>Local Delivery</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">&#127880;</div>
                <span>Premium Quality</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">&#128150;</div>
                <span>Made with Love</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Customers <span>Say</span></h2>
            <p>Real experiences from happy customers</p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Contact Strip */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Get in <span>Touch</span></h2>
            <p>We would love to hear from you</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-card-icon">&#9993;</div>
              <h3>Email</h3>
              <a href="mailto:balloonscalgary@gmail.com">balloonscalgary@gmail.com</a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">&#128222;</div>
              <h3>Phone</h3>
              <a href="tel:+14030000000">(403) 000-0000</a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">&#128205;</div>
              <h3>Location</h3>
              <p>Calgary, Alberta, Canada</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
