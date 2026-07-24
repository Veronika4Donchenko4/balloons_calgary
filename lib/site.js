// Central site + business constants used for SEO, Open Graph, sitemap, robots,
// and structured data. Keep the canonical URL here (or in the env var) so every
// generated URL stays consistent.
//
// Canonical production domain. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. a staging/preview host) if needed.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.balloonscalgary.ca'
).replace(/\/$/, '')

export const SITE_NAME = 'Balloons Calgary'
export const SITE_TAGLINE = 'Handcrafted Balloon Arrangements'
export const SITE_DESCRIPTION =
  'Handcrafted balloon compositions for birthdays, baby showers, romantic ' +
  'surprises & special events in Calgary, Alberta. Free delivery within Calgary.'

export const OG_IMAGE = '/og-image.png' // 1200×630, resolved against SITE_URL

export const BUSINESS = {
  name: SITE_NAME,
  email: 'ballooncalgary@gmail.com',
  phone: '+1-825-288-6133',
  instagram: 'https://www.instagram.com/balloons_calgary_yyc',
  city: 'Calgary',
  region: 'AB',
  regionName: 'Alberta',
  country: 'CA',
  currency: 'CAD',
}

// Absolute URL helper for canonicals / structured data.
export const abs = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
