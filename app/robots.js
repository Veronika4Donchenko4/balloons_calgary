import { abs } from '@/lib/site'

// Generates /robots.txt (Next App Router convention).
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The cart is user-specific and has no SEO value.
        disallow: ['/cart'],
      },
    ],
    sitemap: abs('/sitemap.xml'),
    host: abs('/'),
  }
}
