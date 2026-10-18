import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionCard from '@/components/CollectionCard'
import { boutiqueCollections } from '@/lib/premium'

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
        </div>
      </section>
      <Footer />
    </>
  )
}
