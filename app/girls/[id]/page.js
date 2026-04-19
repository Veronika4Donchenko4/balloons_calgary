import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'
import { girlsPackages } from '@/lib/packages'

export default async function GirlsPackage({ params }) {
  const { id } = await params
  const idx = parseInt(id) - 1
  const pkg = girlsPackages[idx] || { id: `girls-${id}`, name: `Package ${id}`, price: 0, category: 'birthday-balloon-sets', image: '/assets/images/girl/girl1.png', description: 'Beautiful balloon arrangement from our Girls Collection.' }

  return (
    <>
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; <Link href="/category/birthday-balloon-sets">Birthday Balloon Sets</Link> &rsaquo; {pkg.name}
          </div>
          <div className="package-detail-inner">
            <div className="package-detail-img">
              <img src={pkg.image} alt={pkg.name} />
            </div>
            <div className="package-detail-info">
              <h1>Girls Collection — {pkg.name}</h1>
              <div className="price">${pkg.price} CAD</div>
              <p>{pkg.description}</p>
              <div className="package-detail-actions">
                <AddToCartButton item={pkg} />
                <Link href="/category/birthday-balloon-sets" className="btn btn-outline">Back to Category</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
