import { products } from './catalog'

// The four boutique collections shown on the homepage and /collections.
// `match` picks products from the catalog; Signature Trio is injected into
// Bouquets as the lead product (it lives outside the catalog because it has
// its own colourway picker).
export const SIGNATURE_TRIO = {
  id: 'signature-trio',
  name: 'The Signature Trio',
  price: 39,
  image: '/assets/catalog/beige-cream-bouquet.jpg',
  description: 'Three premium latex helium balloons in a curated colour palette.',
}

export const boutiqueCollections = [
  {
    slug: 'signature',
    name: 'Signature Balloons',
    blurb: 'Large personalized balloons',
    description: 'Oversized balloons, personalized with your words and styled to make an entrance.',
    image: '/assets/catalog/personalized-welcome-home-set.jpg',
    match: (p) => p.customText || /personalized|large/.test(p.id),
  },
  {
    slug: 'numbers',
    name: 'Number Collections',
    blurb: 'Compositions with number balloons',
    description: 'Number balloons composed with latex and confetti for birthdays and milestones.',
    image: '/assets/catalog/beige-number-8-set.jpg',
    match: (p) => /number/.test(p.id),
  },
  {
    slug: 'bouquets',
    name: 'Balloon Bouquets',
    blurb: 'Sets of 3, 5, 7, 10 balloons — from $39',
    description: 'Hand-tied helium bouquets in curated palettes, in sets of 3, 5, 7 and 10.',
    image: '/assets/catalog/gold-silver-bouquet.jpg',
    match: (p) => /bouquet/.test(p.id),
  },
  {
    slug: 'ceiling',
    name: 'Ceiling Balloons',
    blurb: 'Ceiling balloons',
    description: 'Helium balloons floating at the ceiling with trailing ribbons, for rooms and venues.',
    image: '/assets/catalog/pink-cream-ceiling-set.jpg',
    match: (p) => /ceiling/.test(p.id),
  },
]

export const getBoutiqueCollection = (slug) => boutiqueCollections.find((c) => c.slug === slug)

export function getBoutiqueProducts(slug) {
  const c = getBoutiqueCollection(slug)
  if (!c) return []
  const list = products.filter(c.match)
  return slug === 'bouquets' ? [SIGNATURE_TRIO, ...list] : list
}

export const TRIO_COLOURWAYS = [
  { name: 'Beige & Sage Green', colors: ['#E3D5C0', '#A8B79A'] },
  { name: 'Beige & Blush Pink', colors: ['#E3D5C0', '#F0CFCB'] },
  { name: 'Gold & Blush Pink', colors: ['#C9A87C', '#F0CFCB'] },
  { name: 'Silver & Blush Pink', colors: ['#C4C7CB', '#F0CFCB'] },
  { name: 'Gold & Black', colors: ['#C9A87C', '#2D2D2D'] },
  { name: 'Silver & Black', colors: ['#C4C7CB', '#2D2D2D'] },
  { name: 'White & Blue', colors: ['#FFFFFF', '#8FB4D9'] },
  { name: 'Blush & Mauve', colors: ['#F0CFCB', '#B48A9F'] },
  { name: 'Sage Green & White', colors: ['#A8B79A', '#FFFFFF'] },
  { name: 'Pink & Rose Gold', colors: ['#F4A9BC', '#D9A18F'] },
]
