import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Placeholder from '@/components/Placeholder'
import VariantGrid from '@/components/VariantGrid'
import { productGradient, boutiqueCollections, getBoutiqueCollection, getBoutiqueProducts } from '@/lib/premium'

export function generateStaticParams() {
  return boutiqueCollections.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const c = getBoutiqueCollection(slug)
  if (!c) return { title: 'Collection Not Found' }
  return {
    title: c.name,
    description: c.description,
    alternates: { canonical: `/collections/${slug}` },
  }
}

export default async function CollectionPage({ params }) {
  const { slug } = await params
  const c = getBoutiqueCollection(slug)
  if (!c) notFound()
  const items = getBoutiqueProducts(slug)

  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>{c.name}</h1>
          <p>{c.description}</p>
        </div>
      </div>
      <section className="section lux-section">
        <div className="container">
          {items.length === 0 ? (
            <div className="lux-empty">
              <p>This collection is made to order. Tell us what you have in mind.</p>
              <Link href="/custom-order" className="btn btn-primary">Request a Custom Design</Link>
            </div>
          ) : slug === 'bouquets' || slug === 'numbers' ? (
            <VariantGrid items={items} leadId={slug === 'bouquets' ? 'signature-trio' : 'number-balloons'} />
          ) : (
            <div className="lux-products">
              {items.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="lux-product">
                  <Placeholder gradient={productGradient(p)} label={p.name} />
                  <h3>{p.name}</h3>
                  <span>${p.price} CAD</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
