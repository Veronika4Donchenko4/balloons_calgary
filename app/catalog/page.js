import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CatalogFilters from '@/components/CatalogFilters'
import { accentE } from '@/lib/accentE'

export default function Catalog() {
  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <h1>{accentE('Our Balloons')}</h1>
          <p>{accentE('Filter by occasion, colour, and price to find the perfect arrangement')}</p>
        </div>
      </div>

      <section className="section">
        <CatalogFilters />
      </section>

      <Footer />
    </>
  )
}
