import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Placeholder from '@/components/Placeholder'
import VariantGrid from '@/components/VariantGrid'
import { COLLECTION_CATEGORIES, COLLECTION_ITEMS, getCollectionCategory, itemsInCategory } from '@/lib/collections'
import { TRIO_COLOURWAYS, NUMBER_COLOURS, productGradient, boutiqueCollections, getBoutiqueCollection, getBoutiqueProducts } from '@/lib/premium'

export function generateStaticParams() {
  return [...boutiqueCollections, ...COLLECTION_CATEGORIES].map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const c = getBoutiqueCollection(slug) || getCollectionCategory(slug)
  if (!c) return { title: 'Collection Not Found' }
  return {
    title: c.name,
    description: c.description || `${c.name} ceiling balloon collections, made in Calgary.`,
    alternates: { canonical: `/collections/${slug}` },
  }
}

export default async function CollectionPage({ params }) {
  const { slug } = await params
  const cat = getCollectionCategory(slug)
  const c = getBoutiqueCollection(slug) || cat
  if (!c) notFound()
  // Audience categories list their own items; /collections/ceiling lists every collection item too.
  const collItems = cat ? itemsInCategory(slug) : slug === 'ceiling' ? COLLECTION_ITEMS : []
  const items = cat ? [] : getBoutiqueProducts(slug)

  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>{c.name}</h1>
          <p>{c.description || c.blurb}</p>
        </div>
      </div>
      <section className="section lux-section">
        <div className="container">
          {collItems.length > 0 && (
            <div className="lux-products">
              {collItems.map((i) => (
                <Link key={i.id} href={`/product/${i.id}`} className="lux-product">
                  <div className="lux-product-img" style={{ position: 'relative' }}><Image src={i.images[0]} alt={i.name} fill sizes="280px" style={{ objectFit: 'cover' }} /></div>
                  <h3>{i.name}</h3>
                  <span>${i.price} CAD</span>
                </Link>
              ))}
            </div>
          )}
          {cat && collItems.length === 0 ? (
            <div className="lux-empty">
              <h2 style={{ marginBottom: 12 }}>Coming soon</h2>
              <p>We&rsquo;re putting the finishing touches on this collection. Want something now? We&rsquo;ll design it with you.</p>
              <Link href="/custom-order" className="btn btn-primary">Request a Custom Design</Link>
            </div>
          ) : collItems.length > 0 && items.length === 0 ? null : items.length === 0 ? (
            <div className="lux-empty">
              <p>This collection is made to order. Tell us what you have in mind.</p>
              <Link href="/custom-order" className="btn btn-primary">Request a Custom Design</Link>
            </div>
          ) : slug === 'bouquets' || slug === 'numbers' ? (
            <VariantGrid items={items} chipVariants={slug === 'bouquets' ? TRIO_COLOURWAYS : NUMBER_COLOURS} />
          ) : (
            <div className="lux-products">
              {items.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="lux-product">
                  {p.image ? (
                    <div className="lux-trio-photo"><Image src={p.image} alt={p.name} fill sizes="280px" className="trio-img active" /></div>
                  ) : (
                    <Placeholder gradient={productGradient(p)} label={p.name} />
                  )}
                  <h3>{p.name}</h3>
                  <span>{p.priceFrom ? 'From ' : ''}${p.price} CAD</span>
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
