import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'
import { getCollectionBySlug, getProductsForCollection } from '@/lib/packages'
import { accentE } from '@/lib/accentE'

function PackageCard({ pkg, categorySlug }) {
  const detailHref = `/product/${pkg.id}`

  return (
    <div className="package-card">
      <div className="package-card-img">
        <img src={pkg.image} alt={pkg.name} />
      </div>
      <div className="package-card-body">
        <h3>{accentE(pkg.name)}</h3>
        <div className="price">${pkg.price} CAD</div>
        <p>{accentE(pkg.description)}</p>
        <div className="package-card-actions">
          <Link href={detailHref} className="btn btn-outline btn-sm">View Details</Link>
          <AddToCartButton item={{ ...pkg, category: categorySlug }} className="btn-sm" />
        </div>
      </div>
    </div>
  )
}

export default async function CategoryPage({ params }) {
  const { slug } = await params

  const category = getCollectionBySlug(slug)
  if (!category) notFound()

  const packages = getProductsForCollection(slug)

  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>{accentE(category.name)}</h1>
          <p>{accentE(category.description)}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="breadcrumb-nav" style={{ marginBottom: '32px' }}>
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; {accentE(category.name)}
          </div>

          {packages.length === 0 ? (
            <div className="cart-empty">
              <h2>{accentE('Coming Soon')}</h2>
              <p>{accentE('Packages for this category are being prepared. Contact us for a custom order.')}</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px' }}>Contact Us</Link>
            </div>
          ) : (
            <div className="packages-grid">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  categorySlug={slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
