import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'
import { classicCollections } from '@/lib/packages'

const gradients = { numbers: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', sets: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' }

export default async function ClassicCollection({ params }) {
  const { slug } = await params
  const collection = classicCollections.find(c => c.slug === slug) || { id: `classic-${slug}`, slug, name: 'Classic Collection', price: 0, category: 'classic', description: 'Beautiful classic balloon arrangements.' }

  return (
    <>
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; <Link href="/catalog#classic">Classic</Link> &rsaquo; {collection.name}
          </div>
          <div className="package-detail-inner">
            <div className="package-detail-img" style={{ background: gradients[slug] || 'linear-gradient(135deg, #E5E7EB, #D1D5DB)' }} />
            <div className="package-detail-info">
              <h1>{collection.name}</h1>
              <div className="price">${collection.price} CAD</div>
              <p>{collection.description}</p>
              <div className="package-detail-actions">
                <AddToCartButton item={collection} />
                <Link href="/catalog#classic" className="btn btn-outline">Back to Collections</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
