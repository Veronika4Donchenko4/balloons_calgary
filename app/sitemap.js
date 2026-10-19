import { products } from '@/lib/catalog'
import { collections } from '@/lib/packages'
import { boutiqueCollections } from '@/lib/premium'
import { abs } from '@/lib/site'

// Generates /sitemap.xml (Next App Router convention).
export default function sitemap() {
  const now = new Date()

  const staticPages = [
    { url: abs('/'), changeFrequency: 'weekly', priority: 1.0 },
    { url: abs('/collections'), changeFrequency: 'weekly', priority: 0.9 },
    { url: abs('/custom-order'), changeFrequency: 'monthly', priority: 0.8 },
    { url: abs('/product/signature-trio'), changeFrequency: 'monthly', priority: 0.8 },
    { url: abs('/product/number-balloons'), changeFrequency: 'monthly', priority: 0.8 },
    { url: abs('/catalog'), changeFrequency: 'weekly', priority: 0.7 },
    { url: abs('/contact'), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const collectionPages = collections.map((c) => ({
    url: abs(`/category/${c.slug}`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const boutiquePages = boutiqueCollections.map((c) => ({
    url: abs(`/collections/${c.slug}`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const productPages = products.map((p) => ({
    url: abs(`/product/${p.id}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...boutiquePages, ...collectionPages, ...productPages].map((e) => ({
    ...e,
    lastModified: now,
  }))
}
