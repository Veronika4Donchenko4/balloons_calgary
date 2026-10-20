import { NUMBER_COLOURS, SINGLE_NUMBER_COLOURS, SINGLE_NUMBER, DOUBLE_NUMBER } from './premium'

const img = (name) => `/assets/images/products/collections/${name}.jpg`

// ---- Filters -------------------------------------------------------------
export const OCCASIONS = [
  { slug: 'for-him', name: 'For Him' },
  { slug: 'for-her', name: 'For Her' },
  { slug: 'for-kids', name: 'For Kids' },
  { slug: 'gender-reveal', name: 'Gender Reveal' },
  { slug: 'welcome-home', name: 'Welcome Home' },
  { slug: 'birthday', name: 'Birthday' },
]

export const FILTER_COLOURS = [
  { slug: 'gold', name: 'Gold', hex: '#D4A53A' },
  { slug: 'champagne', name: 'Champagne', hex: '#E2CF9A' },
  { slug: 'silver', name: 'Silver', hex: '#C0C0C0' },
  { slug: 'rose-gold', name: 'Rose Gold', hex: '#D4A69A' },
  { slug: 'pink', name: 'Pink', hex: '#F4C2C2' },
  { slug: 'blue', name: 'Blue', hex: '#A4C4D7' },
  { slug: 'sage-green', name: 'Sage Green', hex: '#B5C4A1' },
  { slug: 'brown', name: 'Brown', hex: '#8B5E3C' },
  { slug: 'grey-taupe', name: 'Grey/Taupe', hex: '#A89F94' },
  { slug: 'black', name: 'Black', hex: '#2D2D2D' },
  { slug: 'white', name: 'White', hex: '#F5F5F0' },
  { slug: 'navy', name: 'Navy', hex: '#1F2A4A' },
  { slug: 'pastel', name: 'Pastel', hex: 'linear-gradient(135deg, #F4C2C2, #CFE3F0, #E8DCC8)' },
]

export const PRICE_RANGES = [
  { slug: 'under-50', name: 'Under $50', test: (p) => p < 50 },
  { slug: '50-100', name: '$50–100', test: (p) => p >= 50 && p <= 100 },
  { slug: '100-150', name: '$100–150', test: (p) => p > 100 && p <= 150 },
  { slug: '150-plus', name: '$150+', test: (p) => p > 150 },
]

// Cards on /collections and the homepage: shortcuts to pre-filtered Ready Sets.
export const OCCASION_CARDS = [
  { slug: 'for-him', name: 'For Him', blurb: 'Bold ceiling balloon sets', image: img('black-gold') },
  { slug: 'for-her', name: 'For Her', blurb: 'Soft, elegant ceiling sets', image: img('rose-gold-pearl-1') },
  { slug: 'for-kids', name: 'For Kids', blurb: 'Playful balloons and foils', image: img('pink-bow-foil') },
]

// ---- Products ------------------------------------------------------------
// One data entry per product (+ photos in public/assets/images/products/collections/).
//   price        number, or null = "Price coming soon" (page shows it, but it can't be bought)
//   count        number of balloons (optional)
//   images       gallery photos, first = cover
//   videos       [{ src, poster }] — optional, played inline after the photos (see scripts/process-video.sh)
//   colours      names from FILTER_COLOURS (drives the colour filter)
//   occasions    slugs from OCCASIONS (drives the occasion filter); [] = general
//   numberAddon  { mode: 'single' | 'double', colours: [number colour names], label? } or omitted for no add-on.
//                single = one digit, $SINGLE_NUMBER.price; double = two digits, $DOUBLE_NUMBER.price
//   bunch        configurable bunch (ribbon colour + quantity) instead of a fixed set — see BowBunch
export const READY_SETS = [
  {
    id: 'ceiling-black-gold',
    name: 'Black & Gold',
    price: 129,
    description: 'Black, gold and chrome ceiling balloons with trailing ribbons and a silver number, styled to make a statement.',
    images: [img('black-gold')],
    colours: ['Black', 'Gold', 'Silver'],
    occasions: ['for-him'],
    numberAddon: { mode: 'single', colours: ['Silver'], label: 'Add one more silver number' },
  },
  {
    id: 'black-gold-hanging',
    name: 'Black & Gold Hanging',
    price: 119,
    description: 'Black and gold chrome balloons hanging from the ceiling with gold streamers.',
    images: [img('black-gold-hanging')],
    colours: ['Black', 'Gold'],
    occasions: ['for-him'],
    numberAddon: { mode: 'double', colours: ['Gold', 'Black'] },
  },
  {
    id: 'ceiling-rose-gold-pearl',
    name: 'Rose Gold & Pearl',
    price: 119,
    count: 15,
    description: 'Fifteen ceiling balloons in rose gold chrome, silver and pearl white, with trailing ribbons.',
    images: [img('rose-gold-pearl-1'), img('rose-gold-pearl-2'), img('rose-gold-pearl-3')],
    colours: ['Rose Gold', 'Silver', 'White'],
    occasions: ['for-her'],
    numberAddon: { mode: 'double', colours: ['Rose Gold', 'Silver'] },
  },
  {
    id: 'pink-silver-ceiling',
    name: 'Pink & Silver Ceiling',
    price: 189,
    count: 27,
    description: 'Twenty-seven ceiling balloons in dusty pink and silver chrome with satin ribbons.',
    images: [img('pink-silver-ceiling-1'), img('pink-silver-ceiling-2')],
    colours: ['Pink', 'Silver'],
    occasions: ['for-her'],
    numberAddon: { mode: 'double', colours: ['Silver', 'Rose Gold'] },
  },
  {
    id: 'blush-gold',
    name: 'Blush & Gold',
    price: 129,
    count: 15,
    description: 'Fifteen balloons in blush, cream and gold chrome with gold ribbons.',
    images: [img('blush-gold-1'), img('blush-gold-2'), img('blush-gold-3'), img('blush-gold-4')],
    colours: ['Pink', 'Gold', 'Champagne'],
    occasions: ['for-her'],
    numberAddon: { mode: 'double', colours: ['Gold'] },
  },
  {
    id: 'coral-silver',
    name: 'Coral & Silver',
    price: 99,
    description: 'Coral pink and silver chrome balloons with silver confetti, tied with ribbons.',
    images: [img('coral-silver-1'), img('coral-silver-2')],
    colours: ['Pink', 'Silver'],
    occasions: ['for-her'],
    numberAddon: { mode: 'double', colours: ['Silver'] },
  },
  {
    id: 'silver-pearl',
    name: 'Silver & Pearl',
    price: 59,
    description: 'A hand-tied bouquet of silver chrome, pearl white and confetti balloons.',
    images: [img('silver-pearl')],
    colours: ['Silver', 'White'],
    occasions: [],
    numberAddon: { mode: 'double', colours: ['Silver', 'White'] },
  },
  {
    id: 'navy-gold',
    name: 'Navy & Gold',
    price: 75, // TBD
    description: 'Navy and gold chrome balloons tied with satin ribbons.',
    images: [img('navy-gold-1'), img('navy-gold-2')],
    colours: ['Navy', 'Gold'],
    occasions: ['for-him'],
    numberAddon: { mode: 'double', colours: ['Champagne'] },
  },
  {
    id: 'black-white-bows',
    name: 'Black & White Bows',
    price: 99,
    description: 'Black and white balloons finished with little bows, plus a confetti balloon.',
    images: [img('black-white-bows')],
    colours: ['Black', 'White'],
    occasions: ['for-him'],
    numberAddon: { mode: 'double', colours: ['Black', 'White'] },
  },
  {
    id: 'dusty-blue-sage',
    name: 'Dusty Blue & Sage',
    price: 129,
    count: 14,
    description: 'Fourteen balloons in two bunches — dusty blue, sage green and sand, with soft ribbons.',
    images: [img('dusty-blue-sage-1'), img('dusty-blue-sage-2')],
    colours: ['Blue', 'Sage Green', 'Champagne'],
    occasions: ['for-him'],
    numberAddon: { mode: 'double', colours: ['Champagne'] },
  },
  {
    id: 'ceiling-sage-green',
    name: 'Sage Green',
    price: 49,
    description: 'Oversized sage green balloons with gold ribbons.',
    images: [img('sage-green')],
    colours: ['Sage Green'],
    occasions: [], // TBD
  },
  {
    id: 'boy-or-girl',
    name: 'Boy or Girl',
    price: 139,
    description: 'A giant "Boy or Girl" balloon with pink and blue clear balloons and satin ribbons, ready for the big reveal.',
    images: [img('boy-or-girl-1'), img('boy-or-girl-2'), img('boy-or-girl-3')],
    colours: ['Pink', 'Blue', 'Champagne'],
    occasions: ['gender-reveal'],
  },
  {
    id: 'welcome-home-bubble',
    name: 'Welcome Home Bubble Set',
    price: 169,
    description: 'A giant personalized bubble balloon surrounded by sage, gold and cream balloons. Photo shows sample names.',
    images: [img('welcome-home-bubble')],
    colours: ['Sage Green', 'Gold', 'Champagne'],
    occasions: ['welcome-home'],
  },
  {
    id: 'ribbon-bow-bunch',
    name: 'Bow Balloon Bunch',
    price: null, // TBD — see bunch.perBalloon
    description: 'A bunch of white balloons, each tied with a ribbon bow in the colour you choose.',
    images: [img('bow-bunch-1'), img('bow-bunch-2'), img('bow-bunch-3')],
    colours: ['White'],
    occasions: [],
    bunch: {
      perBalloon: null, // TODO: price per balloon (CAD). Until it's set the product shows "Price coming soon" and can't be bought.
      min: 6,
      max: 30,
      default: 12,
      ribbonColours: [
        { name: 'Burgundy', colors: ['#6D1A2C'] },
        { name: 'Black', colors: ['#1A1A1A'] },
        { name: 'Light Blue', colors: ['#A9CDE8'] },
        { name: 'Navy', colors: ['#1F2A4A'] },
        { name: 'Pink', colors: ['#F0B6C4'] },
        { name: 'White', colors: ['#FFFFFF'] },
        { name: 'Gold', colors: ['#C9A24B'] },
      ],
    },
  },
  {
    id: 'pink-bow-foil',
    name: 'Pink Bow Foil Balloon',
    price: 39,
    description: 'A giant pink satin bow foil balloon.',
    images: [img('pink-bow-foil')],
    colours: ['Pink'],
    occasions: ['for-kids'],
  },
  {
    id: 'teddy-bear-foil',
    name: 'Teddy Bear Foil Balloon',
    price: 19,
    description: 'A sweet teddy bear foil balloon in a party hat.',
    images: [img('teddy-bear-foil')],
    colours: ['Pastel'],
    occasions: ['for-kids'],
  },
  {
    id: 'kitty-foil',
    name: 'Kitty Foil Balloon',
    price: 29,
    description: 'A pink kitty foil balloon with a golden crown.',
    images: [img('kitty-foil')],
    colours: ['Pink'],
    occasions: ['for-kids'],
  },
  {
    id: 'bear-head-foil',
    name: 'Bear Head Foil Balloon',
    price: 25,
    description: 'A cheerful bear head foil balloon with rosy cheeks.',
    images: [img('bear-head-foil')],
    colours: ['Brown'],
    occasions: ['for-kids'],
  },
  {
    id: 'bunny-foil',
    name: 'Bunny Foil Balloon',
    price: 29,
    description: 'A sweet bunny foil balloon in taupe and white.',
    images: [img('bunny-foil')],
    colours: ['Grey/Taupe', 'White'],
    occasions: ['for-kids'],
  },
  {
    id: 'whale-foil',
    name: 'Whale Foil Balloon',
    price: 19,
    description: 'A friendly whale foil balloon.',
    images: [img('whale-foil')],
    colours: ['Pastel'],
    occasions: ['for-kids'],
  },
]

// ---- Helpers -------------------------------------------------------------
export const getReadySet = (id) => READY_SETS.find((i) => i.id === id)

// Number add-on settings for a set: digits, price and the colour options (with photos).
export function numberAddon(item) {
  const a = item.numberAddon
  if (!a) return null
  const single = a.mode === 'single'
  const pool = single ? SINGLE_NUMBER_COLOURS : NUMBER_COLOURS
  const options = a.colours.map((n) => pool.find((c) => c.name === n)).filter(Boolean)
  if (options.length === 0) return null
  const price = (single ? SINGLE_NUMBER : DOUBLE_NUMBER).price
  const label = a.label
    ? `${a.label} — $${price}`
    : single ? `Add one more number — $${price}` : `Make it personal — add two giant numbers for $${price}`
  return {
    digits: single ? 1 : 2,
    price, options, label,
    productName: single ? 'One giant number' : 'Two giant numbers',
    hint: single ? 'One digit, 0–9' : 'Two digits, 00–99',
    placeholder: single ? '5' : '25',
    categoryId: single ? 'single-number' : 'double-number',
  }
}

// Filtering used by the Ready Sets page. Within a group = OR, across groups = AND.
export function filterSets(items, { colours = [], prices = [], occasions = [] }) {
  return items.filter((i) => {
    if (colours.length && !colours.some((c) => i.colours.includes(FILTER_COLOURS.find((f) => f.slug === c)?.name))) return false
    if (occasions.length && !occasions.some((o) => i.occasions.includes(o))) return false
    if (prices.length) {
      if (i.price == null) return false
      if (!prices.some((p) => PRICE_RANGES.find((r) => r.slug === p)?.test(i.price))) return false
    }
    return true
  })
}

// Price shown on cards/pages. Bunch and TBD products read "Price coming soon".
export const priceLabel = (item) => (item.price == null ? 'Price coming soon' : `$${item.price} CAD`)
