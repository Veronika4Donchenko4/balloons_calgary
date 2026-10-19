import { NUMBER_COLOURS, DOUBLE_NUMBER } from './premium'

const img = (name) => `/assets/images/products/collections/${name}.jpg`

// Audience sub-categories under /collections. Add one here to get a new
// /collections/<slug> page; categories with no items show "Coming soon".
export const COLLECTION_CATEGORIES = [
  { slug: 'for-him', name: 'For Him', blurb: 'Bold ceiling balloon sets', image: img('black-gold'), gradient: 'linear-gradient(135deg, #2D2D2D, #C9A87C)' },
  { slug: 'for-her', name: 'For Her', blurb: 'Soft, elegant ceiling sets', image: img('rose-gold-pearl-1'), gradient: 'linear-gradient(135deg, #D4A69A, #F5F5F0)' },
  { slug: 'for-kids', name: 'For Kids', blurb: 'Playful ceiling sets', image: null, gradient: 'linear-gradient(135deg, #F4C2C2, #A4C4D7)' },
]

// Ceiling balloon collections. Adding a collection = adding one entry here
// plus its photos in public/assets/images/products/collections/.
//   category      slug from COLLECTION_CATEGORIES, or null (listed under /collections/ceiling only)
//   count         number of balloons, shown on the page (optional)
//   images        gallery, first one is the cover
//   numberColours names from NUMBER_COLOURS offered for the "two giant numbers" add-on;
//                 null/empty hides the add-on for this collection
export const COLLECTION_ITEMS = [
  {
    id: 'ceiling-black-gold',
    name: 'Black & Gold',
    category: 'for-him',
    price: 130,
    count: null,
    description: 'Black, gold and chrome ceiling balloons with trailing ribbons, styled to make a statement.',
    images: [img('black-gold')],
    numberColours: ['Gold', 'Black'],
  },
  {
    id: 'ceiling-rose-gold-pearl',
    name: 'Rose Gold & Pearl',
    category: 'for-her',
    price: 120,
    count: 15,
    description: 'Fifteen ceiling balloons in rose gold chrome, silver and pearl white, with trailing ribbons.',
    images: [img('rose-gold-pearl-1'), img('rose-gold-pearl-2'), img('rose-gold-pearl-3')],
    numberColours: ['Rose Gold', 'Silver'],
  },
  {
    id: 'ceiling-sage-green',
    name: 'Sage Green',
    category: null, // TBD
    price: 49,
    count: null,
    description: 'Oversized sage green balloons with gold ribbons.',
    images: [img('sage-green')],
    numberColours: null, // TBD — add-on hidden until set
  },
]

export const NUMBERS_ADDON = { price: DOUBLE_NUMBER.price, digits: 2 }

export const getCollectionCategory = (slug) => COLLECTION_CATEGORIES.find((c) => c.slug === slug)
export const getCollectionItem = (id) => COLLECTION_ITEMS.find((i) => i.id === id)
export const itemsInCategory = (slug) => COLLECTION_ITEMS.filter((i) => i.category === slug)
export const numberOptions = (item) => (item.numberColours || []).map((n) => NUMBER_COLOURS.find((c) => c.name === n)).filter(Boolean)
