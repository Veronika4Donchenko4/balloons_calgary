// Personalized bubble balloon: geometry of the balloon inside bubble-blank.jpg
// (measured from the 1200x1200 image, as % of image size) and shared constants.
export const BUBBLE = {
  id: 'personalized-bubble',
  name: 'Personalized Bubble Balloon',
  description: 'A large clear bubble balloon with your message in elegant lettering.',
  blank: '/assets/images/products/bubble/bubble-blank.jpg',
  examples: [1, 2, 3, 4].map((n) => `/assets/images/products/bubble/bubble-example-${n}.jpg`),
  // Balloon circle in each finish's photo (1200x1200), measured per photo so the text sits on the balloon in both:
  // cx = centre x, cy = centre y (% of image), r = radius (% of image width)
  photos: {
    Glossy: { src: '/assets/images/products/bubble/bubble-blank.jpg', cx: 50.4, cy: 40.3, r: 37.2 },
    Matte: { src: '/assets/images/products/bubble/bubble-blank-matte.jpg', cx: 49.8, cy: 39.9, r: 37.1 },
  },
  textWidth: 0.65, // text block width as a fraction of the balloon diameter
  textHeight: 0.5, // text block height as a fraction of the balloon diameter
  maxChars: 40,
  maxLines: 3,
}

export const FINISHES = [
  { name: 'Glossy', price: 79 },
  { name: 'Matte', price: 69 },
]
export const BUBBLE_FROM_PRICE = Math.min(...FINISHES.map((f) => f.price))

// `fill` is the CSS background used for the text (and the chip swatch); metallic ones are gradients
// painted through the letters with background-clip: text.
const GOLD = 'linear-gradient(135deg, #B8862B 0%, #F3D98B 50%, #B8862B 100%)'
const CHROME = 'linear-gradient(135deg, #8E8E8E 0%, #F5F5F5 50%, #9A9A9A 100%)'
export const TEXT_COLOURS = [
  { name: 'Black', colors: ['#1A1A1A'], fill: '#1A1A1A' },
  { name: 'White', colors: ['#FFFFFF'], fill: '#FFFFFF', shadow: '0 1px 3px rgba(0,0,0,0.45), 0 0 2px rgba(0,0,0,0.3)' },
  { name: 'Gold', colors: [GOLD], fill: GOLD, metallic: true, shadow: 'drop-shadow(0 1px 1px rgba(0,0,0,0.55)) drop-shadow(0 0 2px rgba(0,0,0,0.25))' },
  { name: 'Chrome', colors: [CHROME], fill: CHROME, metallic: true, shadow: 'drop-shadow(0 1px 1px rgba(0,0,0,0.6)) drop-shadow(0 0 2px rgba(0,0,0,0.3))' },
]

// Keep at most maxLines lines and maxChars characters (newlines don't count).
export function clampMessage(value) {
  const lines = value.replace(/\r/g, '').split('\n').slice(0, BUBBLE.maxLines)
  let left = BUBBLE.maxChars
  return lines
    .map((l) => {
      const t = l.slice(0, Math.max(left, 0))
      left -= t.length
      return t
    })
    .join('\n')
}
