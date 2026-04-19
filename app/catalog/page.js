import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'
import { girlsPackages, forHimPackages, classicCollections } from '@/lib/packages'

const gradients = {
  girls: ['linear-gradient(135deg, #FDE4F0, #F8BBD9)', 'linear-gradient(135deg, #FCE4EC, #F48FB1)', 'linear-gradient(135deg, #FFF0F5, #FFB6C1)'],
  him: ['linear-gradient(135deg, #DBEAFE, #93C5FD)', 'linear-gradient(135deg, #E0E7FF, #A5B4FC)'],
  classic: ['linear-gradient(135deg, #FEF3C7, #FDE68A)', 'linear-gradient(135deg, #D1FAE5, #A7F3D0)'],
}

function PackageCard({ pkg, href, gradient }) {
  return (
    <div className="package-card">
      <div className="package-card-img" style={{ background: gradient }} />
      <div className="package-card-body">
        <h3>{pkg.name}</h3>
        <div className="price">${pkg.price} CAD</div>
        <p>{pkg.description}</p>
        <div className="package-card-actions">
          <Link href={href} className="btn btn-outline btn-sm">View Details</Link>
          <AddToCartButton item={pkg} className="btn-sm" />
        </div>
      </div>
    </div>
  )
}

export default function Catalog() {
  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>Our Collections</h1>
          <p>Browse our full range of balloon arrangements for every occasion</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Girls Collection */}
          <div id="girls">
            <h2 className="catalog-section-title">Girls Collection</h2>
            <div className="packages-grid">
              {girlsPackages.map((pkg, i) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  href={`/girls/${i + 1}`}
                  gradient={gradients.girls[i % gradients.girls.length]}
                />
              ))}
            </div>
          </div>

          {/* For Him */}
          <div id="for-him">
            <h2 className="catalog-section-title">For Him</h2>
            <div className="packages-grid">
              {forHimPackages.map((pkg, i) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  href={`/for-him/${i + 1}`}
                  gradient={gradients.him[i % gradients.him.length]}
                />
              ))}
            </div>
          </div>

          {/* Classic Collections */}
          <div id="classic">
            <h2 className="catalog-section-title">Classic Collections</h2>
            <div className="packages-grid">
              {classicCollections.map((pkg, i) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  href={`/classic/${pkg.slug}`}
                  gradient={gradients.classic[i % gradients.classic.length]}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
