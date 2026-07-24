import './globals.css'
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, OG_IMAGE, BUSINESS, abs } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'balloons Calgary', 'balloon arrangements', 'balloon delivery Calgary',
    'birthday balloons', 'baby shower balloons', 'foil balloons', 'balloon bouquet',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: 'en_CA',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} logo` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  // Favicons come from the App Router file convention: app/favicon.ico,
  // app/icon.png, app/apple-icon.png — Next emits the correct <link> tags.
  manifest: '/site.webmanifest',
  themeColor: '#F88379',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': abs('/#business'),
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: abs(OG_IMAGE),
  logo: abs('/icon-512.png'),
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  priceRange: '$$',
  areaServed: { '@type': 'City', name: 'Calgary' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  sameAs: [BUSINESS.instagram],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  )
}
