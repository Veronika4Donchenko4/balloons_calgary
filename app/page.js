import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import { collections } from '@/lib/packages'
import { accentE } from '@/lib/accentE'

// Derived from the single collections source of truth (lib/packages)
const homeCategories = collections.map((c) => ({
  name: c.name,
  desc: c.description.length > 60 ? c.description.slice(0, 60).trim() + '…' : c.description,
  href: `/category/${c.slug}`,
  image: c.image,
}))

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="hero-bleed">
      <section className="hero has-balloons">
        <div className="floating-balloon float-a delay-1 balloon-xl" style={{ top: '8%', right: -30 }}>
          <img src="/assets/images/balloons/balloon-1.png" alt="" />
        </div>
        <div className="floating-balloon float-b delay-3 balloon-lg balloon-hide-mobile" style={{ bottom: '5%', right: 80 }}>
          <img src="/assets/images/balloons/balloon-2.png" alt="" />
        </div>
        <div className="floating-balloon float-c delay-5 balloon-lg" style={{ top: '20%', left: -40 }}>
          <img src="/assets/images/balloons/balloon-3.png" alt="" />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Beautiful Balloon Arrangements for {accentE('Every')} <span>Celebration</span></h1>
            <p>Handcrafted balloon compositions for birthdays, baby showers, romantic surprises & special events in Calgary.</p>
            <div className="hero-btns">
              <Link href="/catalog" className="btn btn-primary btn-lg">Browse Collections</Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
        {/* Grey balloon straddling the hero → collections boundary (escapes the
            hero's overflow:hidden as a sibling, painted above both sections) */}
        <div className="balloon-straddle balloon-lg balloon-hide-mobile" aria-hidden="true">
          <div className="balloon-straddle-inner">
            <img src="/assets/images/balloons/balloon-4.png" alt="" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="section has-balloons">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Collections</span></h2>
            <p>Find the perfect balloon arrangement for any occasion</p>
          </div>
          <div className="categories-grid">
            {homeCategories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="category-card">
                <div className="category-card-img">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="category-card-body">
                  <h3>{accentE(cat.name)}</h3>
                  <p>{accentE(cat.desc)}</p>
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
      <section className="section about-section has-balloons">
        <div className="floating-balloon float-a delay-4 balloon-xl" style={{ top: '5%', right: -30 }}>
          <img src="/assets/images/balloons/balloon-5.png" alt="" />
        </div>
        <div className="floating-balloon float-c delay-7 balloon-lg balloon-hide-mobile" style={{ bottom: '5%', left: -50 }}>
          <img src="/assets/images/balloons/balloon-1.png" alt="" />
        </div>
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
            <p>{accentE('Real experiences from happy customers')}</p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Delivery */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Free <span>Delivery</span></h2>
            <p>We bring the celebration to you</p>
          </div>
          <div className="delivery-info">
            <div className="delivery-card">
              <div className="delivery-icon">&#128666;</div>
              <h3>{accentE('Free Delivery Within Calgary')}</h3>
              <p>Free delivery within Calgary urban area*</p>
              <p>We deliver within Calgary city limits. For deliveries outside the city, a $40 fee applies.</p>
              <p className="delivery-note">*Minimum order: 3 standard balloons or 1 large balloon. Delivery outside the urban area — $40</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Get in <span>Touch</span></h2>
            <p>We would love to hear from you</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-card-icon">&#9993;</div>
              <h3>{accentE('Email')}</h3>
              <a href="mailto:ballooncalgary@gmail.com">ballooncalgary@gmail.com</a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">&#128222;</div>
              <h3>Phone</h3>
              <a href="tel:+18252886133">+1 (825) 288-6133</a>
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
