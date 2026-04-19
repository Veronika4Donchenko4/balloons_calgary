import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'
import { girlsPackages } from '@/lib/packages'

const gradients = ['linear-gradient(135deg, #FDE4F0, #F8BBD9)', 'linear-gradient(135deg, #FCE4EC, #F48FB1)', 'linear-gradient(135deg, #FFF0F5, #FFB6C1)']

export default async function GirlsPackage({ params }) {
  const { id } = await params
  const idx = parseInt(id) - 1
  const pkg = girlsPackages[idx] || { id: `girls-${id}`, name: `Package ${id}`, price: 0, category: 'girls', description: 'Beautiful balloon arrangement from our Girls Collection.' }

  return (
    <>
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; <Link href="/catalog#girls">Girls</Link> &rsaquo; {pkg.name}
          </div>
          <div className="package-detail-inner">
            <div className="package-detail-img" style={{ background: gradients[idx % gradients.length] }} />
            <div className="package-detail-info">
              <h1>Girls Collection — {pkg.name}</h1>
              <div className="price">${pkg.price} CAD</div>
              <p>{pkg.description}</p>
              <div className="package-detail-actions">
                <AddToCartButton item={pkg} />
                <Link href="/catalog#girls" className="btn btn-outline">Back to Collections</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
