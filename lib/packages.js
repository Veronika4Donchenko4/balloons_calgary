import { products } from './catalog'

export { products }

// ---------------------------------------------------------------------------
// Collections are DERIVED from tags (occasion), not hardcoded product arrays.
// A product can match several collections.
// ---------------------------------------------------------------------------
export const collections = [
  { slug: 'birthday-for-her', name: 'Birthday — For Her',
    description: 'Elegant birthday bouquets and number sets for her — pinks, rose-gold, and everything celebratory.',
    match: (p) => p.occasion.includes('For her') },
  { slug: 'mens-birthday', name: "Men's Birthday",
    description: 'Bold black, gold, navy and silver arrangements for the men in your life.',
    match: (p) => p.occasion.includes("Man's birthday") },
  { slug: 'baby-girl', name: 'Baby Girl',
    description: 'Sweet pink, cream and pastel sets to welcome or celebrate a little girl.',
    cover: '/assets/catalog/pink-cat-crown-set-baby-girl.jpg',
    match: (p) => p.occasion.includes('Baby girl') },
  { slug: 'baby-boy', name: 'Baby Boy',
    description: 'Blue, sage and neutral balloon sets for a baby boy.',
    cover: '/assets/catalog/blue-baby-set-baby-boy.jpg',
    match: (p) => p.occasion.includes('Baby boy') },
  { slug: 'baby-shower', name: 'Baby Shower',
    description: 'Soft, styled arrangements for welcoming a new arrival — boy, girl, and neutral themes.',
    cover: '/assets/catalog/beige-elephant-set.jpg',
    match: (p) => p.occasion.includes('Baby shower') },
  { slug: 'gender-reveal', name: 'Gender Reveal',
    description: 'Pinks, blues, and surprise-filled sets to make the big reveal unforgettable.',
    match: (p) => p.occasion.includes('Gender party') },
  { slug: 'graduation', name: 'Graduation',
    description: 'Celebrate the grad with classic gold-and-white balloon bouquets.',
    match: (p) => p.occasion.includes('Graduation') },
  { slug: 'simple-celebrations', name: 'Simple Celebrations',
    description: 'Clean, versatile balloon sets for any occasion — no theme required.',
    match: (p) => p.occasion.includes('Generic') },
]

// give each collection a representative cover image.
// Explicit `cover` wins (used where the positional first-match would collide);
// otherwise fall back to the first matching product's image.
collections.forEach((c) => {
  const first = products.find(c.match)
  c.image = c.cover || (first ? first.image : '/assets/images/favicon.png')
})

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------
export function getCollectionBySlug(slug) {
  return collections.find((c) => c.slug === slug)
}
// back-compat alias (pages still import getCategoryBySlug)
export const getCategoryBySlug = getCollectionBySlug

export function getProductsForCollection(slug) {
  const c = getCollectionBySlug(slug)
  return c ? products.filter(c.match) : []
}
// back-compat alias
export const getAllPackagesForCategory = getProductsForCollection

// primary collection = first collection a product matches (used for breadcrumb + cart category)
export function primaryCollection(product) {
  const c = collections.find((col) => col.match(product))
  return c ? c.slug : 'simple-celebrations'
}

export function getProductById(productId) {
  const p = products.find((x) => x.id === productId)
  if (!p) return null
  return { ...p, category: primaryCollection(p) }
}

// ---------------------------------------------------------------------------
// Facet vocabularies for the filterable catalog (Stage 3)
// ---------------------------------------------------------------------------
export const priceBuckets = [
  'Under 65', '70', '75–85', '95', '100', '110', '120–130', '140', '150', 'Above 160',
]

export const allOccasions = (() => {
  const seen = []
  products.forEach((p) => p.occasion.forEach((o) => { if (!seen.includes(o)) seen.push(o) }))
  return seen
})()

// colors sorted by frequency (most common first) so the filter reads naturally
export const allColors = (() => {
  const counts = {}
  products.forEach((p) => p.colors.forEach((c) => { counts[c] = (counts[c] || 0) + 1 }))
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a])
})()

// ---------------------------------------------------------------------------
// Customizer default balloons — palette now derived from the product's real
// colours + price band (no more id-prefix magic).
// ---------------------------------------------------------------------------
const SHADE_TO_SWATCH = {
  pink: 'Pink', 'rose-gold': 'Rose', rose: 'Rose', mauve: 'Rose', coral: 'Rose', peach: 'Rose',
  red: 'Red', blue: 'Blue', navy: 'Blue', teal: 'Blue',
  green: 'Green', 'sage-green': 'Green',
  gold: 'Gold', champagne: 'Gold', copper: 'Gold', brown: 'Gold',
  silver: 'Silver', grey: 'Silver', black: 'Silver',
  white: 'White', cream: 'White', ivory: 'White', beige: 'White', nude: 'White',
  violet: 'Purple', lilac: 'Purple',
}

export function getDefaultBalloons(pkg) {
  const price = pkg.price || 0
  const mapped = (pkg.colors || []).map((c) => SHADE_TO_SWATCH[c] || 'White')
  let palette = [...new Set(mapped)]
  if (palette.length === 0) palette = ['White', 'Pink', 'Gold']

  let standard, foil
  if (price <= 50) { standard = 2; foil = 1 }
  else if (price <= 75) { standard = 4; foil = 1 }
  else if (price <= 115) { standard = 6; foil = 2 }
  else if (price <= 140) { standard = 8; foil = 2 }
  else { standard = 10; foil = 3 }

  const balloons = []
  for (let i = 0; i < standard; i++) {
    balloons.push({ size: 'standard', defaultColor: palette[i % palette.length] })
  }
  for (let i = 0; i < foil; i++) {
    balloons.push({ size: 'foil', defaultColor: palette[(standard + i) % palette.length] })
  }
  return balloons
}
