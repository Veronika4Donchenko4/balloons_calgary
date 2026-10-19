// Personalized bubble balloon: geometry of the balloon inside bubble-blank.jpg
// (measured from the 1200x1200 image, as % of image size) and shared constants.
export const BUBBLE = {
  id: 'personalized-bubble',
  name: 'Personalized Bubble Balloon',
  price: null, // TODO: owner to confirm the price before "Add to Cart" is enabled
  description: 'A large clear bubble balloon with your message in elegant lettering.',
  blank: '/assets/images/products/bubble/bubble-blank.jpg',
  examples: [1, 2, 3, 4].map((n) => `/assets/images/products/bubble/bubble-example-${n}.jpg`),
  // balloon circle in bubble-blank.jpg
  cx: 50.4, // centre x, % of image width
  cy: 40.3, // centre y, % of image height
  r: 37.2, // radius, % of image width
  textWidth: 0.65, // text block width as a fraction of the balloon diameter
  textHeight: 0.5, // text block height as a fraction of the balloon diameter
  maxChars: 40,
  maxLines: 3,
}

export const TEXT_COLOURS = [
  { name: 'Black', colors: ['#1A1A1A'] },
  { name: 'White', colors: ['#FFFFFF'] },
  { name: 'Gold', colors: ['#C9A24B'] },
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
