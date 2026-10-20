import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionCard from '@/components/CollectionCard'
import { boutiqueCollections } from '@/lib/premium'
import { OCCASION_CARDS } from '@/lib/readySets'
import { SITE_NAME } from '@/lib/site'

export const metadata = {
  title: { absolute: `${SITE_NAME} — Premium Balloon Boutique in Calgary` },
  description:
    'Beautifully crafted balloon arrangements, thoughtfully designed for life’s most ' +
    'celebrated moments. Signature balloons, number collections, bouquets and custom designs in Calgary.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Header />

      <section className="lux-hero">
        <div className="lux-hero-photo" aria-hidden="true" />
        <div className="container">
          <div className="lux-hero-content">
            <h1>Beautifully Crafted Balloon Arrangements</h1>
            <p>Thoughtfully designed for life&rsquo;s most celebrated moments</p>
            <div className="hero-btns">
              <Link href="/collections" className="btn btn-primary btn-lg">Shop Collections</Link>
              <Link href="/custom-order" className="btn btn-outline btn-lg">Custom Order</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section lux-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Collections</h2>
            <p>Four ways to celebrate, each made by hand in Calgary</p>
          </div>
          <div className="boutique-grid">
            {boutiqueCollections.map((c) => <CollectionCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>

      <section className="section lux-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title">
            <h2>Ready Sets</h2>
            <p>Ready-made sets for him, for her and for kids</p>
          </div>
          <div className="boutique-grid boutique-grid-3">
            {OCCASION_CARDS.map((c) => <CollectionCard key={c.slug} c={c} href={`/ready-sets?occasion=${c.slug}`} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}><Link href="/ready-sets" className="btn btn-outline btn-lg">Browse all Ready Sets</Link></div>
        </div>
      </section>

      <section className="lux-custom">
        <div className="container">
          <h2>Have Something Special in Mind?</h2>
          <p>Let us create a one-of-a-kind balloon arrangement, designed just for you.</p>
          <Link href="/custom-order" className="btn btn-primary btn-lg">Request a Custom Design</Link>
        </div>
      </section>

      <section className="section lux-about">
        <div className="container">
          <h2>Balloons Calgary</h2>
          <p>
            A boutique studio crafting considered balloon arrangements with premium materials
            and an eye for detail. Same-day delivery available across Calgary.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
