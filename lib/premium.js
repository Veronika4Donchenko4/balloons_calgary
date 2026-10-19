import { products } from './catalog'

// The four boutique collections shown on the homepage and /collections.
// `match` picks products from the catalog; Signature Trio is injected into
// Bouquets as the lead product (it lives outside the catalog because it has
// its own colourway picker).
export const SIGNATURE_TRIO = {
  id: 'signature-trio',
  name: 'The Signature Trio',
  price: 39,
  description: 'Five premium 10-inch latex helium balloons in a curated colour palette.',
}

export const NUMBER_BALLOONS = {
  id: 'number-balloons',
  name: 'Number Balloons',
  price: 30, // per digit
  description: 'Giant foil number balloons, sold per digit — pick your colour and your number.',
}

export const boutiqueCollections = [
  {
    slug: 'signature',
    name: 'Signature Balloons',
    blurb: 'Large personalized balloons',
    description: 'Oversized balloons, personalized with your words and styled to make an entrance.',
    image: '/assets/images/products/bouquets/welcome-home.jpg',
    gradient: 'linear-gradient(135deg, #E8DCC8, #F4C2C2)',
    match: (p) => p.customText || /personalized|large/.test(p.id),
  },
  {
    slug: 'numbers',
    name: 'Number Collections',
    blurb: 'Compositions with number balloons',
    description: 'Number balloons composed with latex and confetti for birthdays and milestones.',
    image: '/assets/images/products/bouquets/number-25.jpg',
    gradient: 'linear-gradient(135deg, #D9CBB8, #C9A87C)',
    match: (p) => /number/.test(p.id),
  },
  {
    slug: 'bouquets',
    name: 'Balloon Bouquets',
    blurb: 'Sets of 3, 5, 7, 10 balloons — from $39',
    description: 'Hand-tied helium bouquets in curated palettes, in sets of 3, 5, 7 and 10.',
    image: '/assets/images/products/bouquets/beige-blush-pink-trio.jpg',
    gradient: 'linear-gradient(135deg, #E8DDD3, #B5C4A1)',
    match: (p) => /bouquet/.test(p.id),
  },
  {
    slug: 'ceiling',
    name: 'Ceiling Balloons',
    blurb: 'Ceiling balloons',
    description: 'Helium balloons floating at the ceiling with trailing ribbons, for rooms and venues.',
    image: '/assets/images/products/bouquets/pink-confetti-bubble.jpg',
    gradient: 'linear-gradient(135deg, #F5F5F0, #C9D3DC)',
    match: (p) => /ceiling/.test(p.id),
  },
]

export const getBoutiqueCollection = (slug) => boutiqueCollections.find((c) => c.slug === slug)

export function getBoutiqueProducts(slug) {
  const c = getBoutiqueCollection(slug)
  if (!c) return []
  const list = products.filter(c.match)
  if (slug === 'bouquets') return [SIGNATURE_TRIO, ...list]
  if (slug === 'numbers') return [NUMBER_BALLOONS, ...list]
  return list
}

// Each combo: two swatch colours + the placeholder gradient used for the product image.
const combo = (name, a, b, image) => ({ name, colors: [a, b], image: `/assets/images/products/bouquets/${image}.jpg`, gradient: `linear-gradient(135deg, ${a}, ${b})` })
export const TRIO_COLOURWAYS = [
  combo('Beige & Sage Green', '#E8DCC8', '#B5C4A1', 'combo-1-beige-sage-green'),
  combo('Beige & Blush Pink', '#E8DCC8', '#F4C2C2', 'combo-2-beige-blush-pink'),
  combo('Gold & Blush Pink', '#C9A87C', '#F4C2C2', 'combo-3-gold-blush-pink'),
  combo('Silver & Blush Pink', '#C0C0C0', '#F4C2C2', 'combo-4-silver-blush-pink'),
  combo('Gold & Black', '#C9A87C', '#2D2D2D', 'combo-5-gold-black'),
  combo('Silver & Black', '#C0C0C0', '#2D2D2D', 'combo-6-silver-black'),
  combo('White & Blue', '#F5F5F0', '#A4C4D7', 'combo-7-white-blue'),
  combo('Blush & Mauve', '#F4C2C2', '#B784A7', 'combo-8-blush-mauve'),
  combo('Sage Green & White', '#B5C4A1', '#F5F5F0', 'combo-9-sage-green-white'),
  combo('Pink & Rose Gold', '#F4C2C2', '#D4A69A', 'combo-10-pink-rose-gold'),
]

// Placeholder gradient for catalog products, derived from their shade tags.
const SHADES = {
  pink: '#F4C2C2', 'rose-gold': '#D4A69A', gold: '#C9A87C', silver: '#C0C0C0',
  white: '#F5F5F0', cream: '#F1E8D8', beige: '#E8DCC8', nude: '#E3C4A8',
  blue: '#A4C4D7', green: '#B5C4A1', 'sage-green': '#B5C4A1', violet: '#B9A5D6',
  lilac: '#CDB8DA', mauve: '#B784A7', black: '#2D2D2D', red: '#C97B7B',
  peach: '#F2CBB1', coral: '#EFA798', brown: '#A88B6E', champagne: '#E6D3A3',
  copper: '#C68B62', navy: '#5A6A8C', teal: '#8CBDB5',
}
export function productGradient(p) {
  const hexes = (p.colors || []).map((c) => SHADES[c]).filter(Boolean)
  if (hexes.length === 0) return 'linear-gradient(135deg, #E8DDD3, #F5F5F0)'
  return `linear-gradient(135deg, ${hexes[0]}, ${hexes[1] || '#F5F5F0'})`
}

// Number-balloon colours: one swatch + one photo each.
const num = (name, hex, image) => ({
  name, colors: [hex], image: `/assets/images/products/numbers/number-${image}.jpg`, gradient: `linear-gradient(135deg, ${hex}, #F5F5F0)`,
})
export const NUMBER_COLOURS = [
  num('Gold', '#D4A53A', 'gold'),
  num('Champagne', '#E2CF9A', 'champagne'),
  num('Beige', '#D9C3A5', 'beige'),
  num('Rose Gold', '#D4A69A', 'rose-gold'),
  num('Blush Pink', '#D9AFBC', 'blush-pink'),
  num('Silver', '#C0C0C0', 'silver'),
  num('Blue', '#1E88D0', 'blue'),
  num('Light Blue', '#C9DDF0', 'light-blue'),
  num('Black', '#2D2D2D', 'black'),
  num('White', '#F5F5F0', 'white'),
  num('Red', '#D32F2F', 'red'),
]

// One config per photo-per-colour product. Pure data, shared by the product
// page, the collection grid and the VariantProduct client component.
export const VARIANT_PRODUCTS = {
  'signature-trio': {
    product: SIGNATURE_TRIO,
    variants: TRIO_COLOURWAYS,
    collection: { slug: 'bouquets', name: 'Balloon Bouquets' },
    blurb: '5 premium latex helium balloons, 10 inches, in one of 10 curated colour combinations.',
    seo: 'Five premium 10" latex helium balloons in a curated colour combination. $39 CAD — same-day delivery available in Calgary.',
    addon: { label: 'Add an Animal Balloon', hint: 'from $25', price: 25 },
  },
  'number-balloons': {
    product: NUMBER_BALLOONS,
    variants: NUMBER_COLOURS,
    collection: { slug: 'numbers', name: 'Number Collections' },
    blurb: 'Giant foil number balloons in 11 colours. $30 per digit — enter your number below.',
    seo: 'Giant foil number balloons in 11 colours, $30 CAD per digit. Same-day delivery available in Calgary.',
    numberField: true,
  },
}
