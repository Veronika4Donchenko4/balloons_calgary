import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BalloonCustomizer from '@/components/BalloonCustomizer'
import { getProductById, getCategoryBySlug, getDefaultBalloons } from '@/lib/packages'
import { accentE } from '@/lib/accentE'
import CollectionProductPage, { collectionItemMetadata } from '@/components/CollectionProductPage'
import { getReadySet } from '@/lib/readySets'
import { SITE_NAME, BUSINESS, OG_IMAGE, abs } from '@/lib/site'

export async function generateMetadata({ params }) {
  const { id } = await params
  const coll = getReadySet(id)
  if (coll) return collectionItemMetadata(coll)
  const pkg = getProductById(id)
  if (!pkg) return { title: 'Product Not Found' }
  const description =
    `${pkg.description} $${pkg.price} CAD — handcrafted in Calgary with free local delivery.`
  return {
    title: pkg.name,
    description,
    alternates: { canonical: `/product/${id}` },
    openGraph: {
      title: `${pkg.name} · ${SITE_NAME}`,
      description,
      url: `/product/${id}`,
      images: [{ url: OG_IMAGE }],
    },
  }
}

export default async function ProductPage({ params }) {
  const { id } = await params
  const coll = getReadySet(id)
  if (coll) return <CollectionProductPage item={coll} />
  const pkg = getProductById(id)
  if (!pkg) notFound()

  const category = getCategoryBySlug(pkg.category)
  const categoryName = category ? category.name : 'Products'

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.name,
    description: pkg.description,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      priceCurrency: BUSINESS.currency,
      price: pkg.price,
      availability: 'https://schema.org/InStock',
      url: abs(`/product/${pkg.id}`),
      seller: { '@type': 'Organization', name: SITE_NAME },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link>
            {category && <> &rsaquo; <Link href={`/category/${pkg.category}`}>{accentE(categoryName)}</Link></>}
            &rsaquo; {accentE(pkg.name)}
          </div>
          <BalloonCustomizer pkg={pkg} defaultBalloons={getDefaultBalloons(pkg)} />
        </div>
      </section>

      <Footer />
    </>
  )
}
