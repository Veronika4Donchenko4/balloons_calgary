import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories } from '@/lib/packages'

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
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.isContactOnly ? '/contact' : `/category/${cat.slug}`}
                className="category-card"
              >
                <div className="category-card-img">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="category-card-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.description.length > 100 ? cat.description.slice(0, 100) + '...' : cat.description}</p>
                  {cat.packages.length > 0 && (
                    <span className="category-card-badge">
                      {cat.packages.length} package{cat.packages.length > 1 ? 's' : ''}
                    </span>
                  )}
                  {cat.isContactOnly && (
                    <span className="category-card-badge">Contact Us</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
