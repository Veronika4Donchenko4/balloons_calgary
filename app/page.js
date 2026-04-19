import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialsSlider from '@/components/TestimonialsSlider'

const homeCategories = [
  { name: 'Birthday Balloon Sets', desc: 'Elegant arrangements for every age', href: '/category/birthday-balloon-sets', image: '/assets/images/girl/girl5.png' },
  { name: 'Kids Birthday Balloons', desc: 'Fun and colourful party setups', href: '/category/kids-birthday-balloons', image: '/assets/images/girl/girl11.png' },
  { name: 'Baby Shower Balloon Sets', desc: 'Boy, girl, and neutral themes', href: '/category/baby-shower-balloon-sets', image: '/assets/images/girl/girl14.png' },
  { name: 'Gender Reveal', desc: 'Make the big reveal unforgettable', href: '/category/gender-reveal-balloon-sets', image: '/assets/images/girl/girl8.png' },
  { name: 'Graduation Balloons', desc: 'Celebrate academic milestones', href: '/category/graduation-balloons', image: '/assets/images/for-him/120_cad.png' },
  { name: 'Celebration Sets', desc: 'For every reason to celebrate', href: '/category/celebration-balloon-sets', image: '/assets/images/girl/girl10.png' },
  { name: 'Mini Arrangements', desc: 'Small surprises, big smiles', href: '/category/mini-balloon-arrangements', image: '/assets/images/60-cad/60_cad2.png' },
  { name: 'Themed Balloon Sets', desc: 'Tropical, princess, sports & more', href: '/category/themed-balloon-sets', image: '/assets/images/100-cad/100_cad1.png' },
  { name: 'Neutral Colours', desc: 'Sophisticated and timeless palettes', href: '/category/neutral-colour-balloon-sets', image: '/assets/images/girl/girl9.png' },
  { name: 'Seasonal Sets', desc: 'Holiday and seasonal themes', href: '/category/seasonal-balloon-sets', image: '/assets/images/girl/girl4.png' },
  { name: 'Ready-to-Go Sets', desc: 'Pre-made for same-day pickup', href: '/category/ready-to-go-balloon-sets', image: '/assets/images/60-cad/60_cad3.png' },
  { name: 'Simple Party Sets', desc: 'No theme needed — just great vibes', href: '/category/simple-party-balloon-sets', image: '/assets/images/60-cad/60_cad1.png' },
  { name: 'Custom Request', desc: 'Call us for a bespoke design', href: '/contact', image: '/assets/images/girl/girl1.png' },
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
            {homeCategories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="category-card">
                <div className="category-card-img">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="category-card-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
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
