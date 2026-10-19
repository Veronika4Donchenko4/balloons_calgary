import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VariantProduct from '@/components/VariantProduct'
import { VARIANT_PRODUCTS } from '@/lib/premium'
import { SITE_NAME, BUSINESS, OG_IMAGE, abs } from '@/lib/site'

export function variantMetadata(slug) {
  const { product, seo } = VARIANT_PRODUCTS[slug]
  return {
    title: product.name,
    description: seo,
    alternates: { canonical: `/product/${slug}` },
    openGraph: {
      title: `${product.name} · ${SITE_NAME}`,
      description: seo,
      url: `/product/${slug}`,
      images: [{ url: OG_IMAGE }],
    },
  }
}

export default function VariantProductPage({ slug }) {
  const { product, collection, seo } = VARIANT_PRODUCTS[slug]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: abs(VARIANT_PRODUCTS[slug].variants[0].image),
    description: seo,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      priceCurrency: BUSINESS.currency,
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: abs(`/product/${slug}`),
    },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/collections">Collections</Link> &rsaquo;{' '}
            <Link href={`/collections/${collection.slug}`}>{collection.name}</Link> &rsaquo; {product.name}
          </div>
          <VariantProduct slug={slug} />
        </div>
      </section>
      <Footer />
    </>
  )
}
