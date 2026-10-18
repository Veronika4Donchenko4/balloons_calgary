import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SignatureTrioPurchase from '@/components/SignatureTrio'
import { SIGNATURE_TRIO } from '@/lib/premium'
import { SITE_NAME, BUSINESS, abs } from '@/lib/site'

const description =
  'Three premium 12" latex helium balloons in a curated colour combination. $39 CAD — same-day delivery available in Calgary.'

export const metadata = {
  title: SIGNATURE_TRIO.name,
  description,
  alternates: { canonical: '/product/signature-trio' },
  openGraph: {
    title: `${SIGNATURE_TRIO.name} · ${SITE_NAME}`,
    description,
    url: '/product/signature-trio',
    images: [{ url: SIGNATURE_TRIO.image, alt: SIGNATURE_TRIO.name }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: SIGNATURE_TRIO.name,
  image: abs(SIGNATURE_TRIO.image),
  description,
  brand: { '@type': 'Brand', name: SITE_NAME },
  offers: {
    '@type': 'Offer',
    priceCurrency: BUSINESS.currency,
    price: SIGNATURE_TRIO.price,
    availability: 'https://schema.org/InStock',
    url: abs('/product/signature-trio'),
  },
}

export default function SignatureTrioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/collections">Collections</Link> &rsaquo;{' '}
            <Link href="/collections/bouquets">Balloon Bouquets</Link> &rsaquo; {SIGNATURE_TRIO.name}
          </div>
          <div className="trio-layout">
            <div className="trio-photo">
              <img src={SIGNATURE_TRIO.image} alt={SIGNATURE_TRIO.name} />
            </div>
            <div className="trio-info">
              <h1>{SIGNATURE_TRIO.name}</h1>
              <div className="trio-price">${SIGNATURE_TRIO.price} CAD</div>
              <p>3 premium latex helium balloons, 12 inches, in one of 10 curated colour combinations.</p>
              <SignatureTrioPurchase />
              <div className="trio-delivery">
                Same-day delivery available in Calgary. Free on orders $100+
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
