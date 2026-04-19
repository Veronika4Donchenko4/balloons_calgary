import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'
import { getCategoryBySlug, getAllPackagesForCategory } from '@/lib/packages'

function PackageCard({ pkg, categorySlug }) {
  const isGirls = pkg.id.startsWith('girls-')
  const isHim = pkg.id.startsWith('him-')
  let detailHref = null
  if (isGirls) detailHref = `/girls/${pkg.id.replace('girls-', '')}`
  if (isHim) detailHref = `/for-him/${pkg.id.replace('him-', '')}`

  return (
    <div className="package-card">
      <div className="package-card-img">
        <img src={pkg.image} alt={pkg.name} />
      </div>
      <div className="package-card-body">
        <h3>{pkg.name}</h3>
        <div className="price">${pkg.price} CAD</div>
        <p>{pkg.description}</p>
        <div className="package-card-actions">
          {detailHref && (
            <Link href={detailHref} className="btn btn-outline btn-sm">View Details</Link>
          )}
          <AddToCartButton item={{ ...pkg, category: categorySlug }} className="btn-sm" />
        </div>
      </div>
    </div>
  )
}

export default async function CategoryPage({ params }) {
  const { slug } = await params

  if (slug === 'custom-request') {
    redirect('/contact')
  }

  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const packages = getAllPackagesForCategory(slug)

  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="breadcrumb-nav" style={{ marginBottom: '32px' }}>
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; {category.name}
          </div>

          {packages.length === 0 ? (
            <div className="cart-empty">
              <h2>Coming Soon</h2>
              <p>Packages for this category are being prepared. Contact us for a custom order.</p>
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
