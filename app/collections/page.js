import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import CollectionCard from '@/components/CollectionCard'
import { boutiqueCollections } from '@/lib/premium'
import { OCCASION_CARDS } from '@/lib/readySets'

export const metadata = {
  title: 'Collections',
  description: 'Signature balloons, number collections, bouquets and ceiling balloons — crafted in Calgary.',
  alternates: { canonical: '/collections' },
}

export default function Collections() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Collections</h1>
          <p>Thoughtfully designed for life&rsquo;s most celebrated moments</p>
        </div>
      </div>
      <section className="section lux-section">
        <div className="container">
          <div className="boutique-grid">
            {boutiqueCollections.map((c) => <CollectionCard key={c.slug} c={c} />)}
          </div>
          <div className="section-title" style={{ marginTop: 96 }}>
            <h2>Ready Sets</h2>
            <p>Ready-made balloon sets, by occasion</p>
          </div>
          <div className="boutique-grid">
            {OCCASION_CARDS.map((c) => <CollectionCard key={c.slug} c={c} href={`/ready-sets?occasion=${c.slug}`} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}><Link href="/ready-sets" className="btn btn-outline btn-lg">Browse all Ready Sets</Link></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
