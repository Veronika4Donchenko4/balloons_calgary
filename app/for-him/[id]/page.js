import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'
import { forHimPackages } from '@/lib/packages'

const gradients = ['linear-gradient(135deg, #DBEAFE, #93C5FD)', 'linear-gradient(135deg, #E0E7FF, #A5B4FC)']

export default async function ForHimPackage({ params }) {
  const { id } = await params
  const idx = parseInt(id) - 1
  const pkg = forHimPackages[idx] || { id: `him-${id}`, name: `Package ${id}`, price: 0, category: 'for-him', description: 'Stylish balloon arrangement from our For Him collection.' }

  return (
    <>
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; <Link href="/catalog#for-him">For Him</Link> &rsaquo; {pkg.name}
          </div>
          <div className="package-detail-inner">
            <div className="package-detail-img" style={{ background: gradients[idx % gradients.length] }} />
            <div className="package-detail-info">
              <h1>For Him — {pkg.name}</h1>
              <div className="price">${pkg.price} CAD</div>
              <p>{pkg.description}</p>
              <div className="package-detail-actions">
                <AddToCartButton item={pkg} />
                <Link href="/catalog#for-him" className="btn btn-outline">Back to Collections</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
