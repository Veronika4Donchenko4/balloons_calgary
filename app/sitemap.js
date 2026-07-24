import { products } from '@/lib/catalog'
import { collections } from '@/lib/packages'
import { abs } from '@/lib/site'

// Generates /sitemap.xml (Next App Router convention).
export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { url: abs('/'), changeFrequency: 'weekly', priority: 1.0 },
    { url: abs('/catalog'), changeFrequency: 'weekly', priority: 0.9 },
    { url: abs('/contact'), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const collectionPages = collections.map((c) => ({
    url: abs(`/category/${c.slug}`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const productPages = products.map((p) => ({
    url: abs(`/product/${p.id}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...collectionPages, ...productPages].map((e) => ({
    ...e,
    lastModified: now,
  }))
}
