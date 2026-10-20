import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionProduct from '@/components/CollectionProduct'
import BowBunch from '@/components/BowBunch'
import { SITE_NAME, BUSINESS, OG_IMAGE, abs } from '@/lib/site'

export function collectionItemMetadata(item) {
  const description = `${item.description}${item.price == null ? '' : ` $${item.price} CAD`} — same-day delivery available in Calgary.`
  return {
    title: item.name,
    description,
    alternates: { canonical: `/product/${item.id}` },
    openGraph: { title: `${item.name} · ${SITE_NAME}`, description, url: `/product/${item.id}`, images: [{ url: OG_IMAGE }] },
  }
}

export default function CollectionProductPage({ item }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.name,
    image: item.images.map(abs),
    description: item.description,
    brand: { '@type': 'Brand', name: SITE_NAME },
    ...(item.price != null && { offers: { '@type': 'Offer', priceCurrency: BUSINESS.currency, price: item.price, availability: 'https://schema.org/InStock', url: abs(`/product/${item.id}`) } }),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/ready-sets">Ready Sets</Link> &rsaquo; {item.name}
          </div>
          {item.bunch ? <BowBunch item={item} /> : <CollectionProduct item={item} />}
        </div>
      </section>
      <Footer />
    </>
  )
}
