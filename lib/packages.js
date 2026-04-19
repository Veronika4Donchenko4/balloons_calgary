export const girlsPackages = [
  { id: 'girls-1', name: 'Package 1', price: 70, category: 'girls', description: 'Beautiful balloon arrangement from our Girls Collection. Perfect for birthdays, celebrations, and special events.' },
  { id: 'girls-2', name: 'Package 2', price: 80, category: 'girls', description: 'Elegant pastel balloon set with ribbon accents. Ideal for baby showers and birthday parties.' },
  { id: 'girls-3', name: 'Package 3', price: 90, category: 'girls', description: 'A charming mix of pink, gold, and white balloons. Perfect for any girly celebration.' },
  { id: 'girls-4', name: 'Package 4', price: 100, category: 'girls', description: 'Stunning balloon bouquet with rose gold accents. A showstopper for milestone birthdays.' },
  { id: 'girls-5', name: 'Package 5', price: 120, category: 'girls', description: 'Premium balloon arrangement with confetti-filled balloons and matching tassels.' },
  { id: 'girls-6', name: 'Package 6', price: 140, category: 'girls', description: 'Large-scale balloon display with arch elements. Perfect for photo backdrops.' },
  { id: 'girls-7', name: 'Package 7', price: 150, category: 'girls', description: 'Deluxe floral-themed balloon composition with mixed sizes and textures.' },
  { id: 'girls-8', name: 'Package 8', price: 160, category: 'girls', description: 'Grand balloon garland arrangement. Makes any space feel magical and festive.' },
  { id: 'girls-9', name: 'Package 9', price: 180, category: 'girls', description: 'Our premium collection with oversized balloons, metallic accents, and custom lettering.' },
  { id: 'girls-10', name: 'Package 10', price: 200, category: 'girls', description: 'The ultimate celebration package. Full room balloon transformation with premium materials.' },
]

export const forHimPackages = [
  { id: 'him-1', name: 'Package 1', price: 120, category: 'for-him', description: 'Stylish balloon arrangement from our For Him collection. Great for birthdays, milestones, and celebrations.' },
  { id: 'him-2', name: 'Package 2', price: 160, category: 'for-him', description: 'Premium masculine-themed balloon set with bold colors. Perfect for milestone events.' },
]

export const classicCollections = [
  { id: 'classic-numbers', slug: 'numbers', name: 'Number Balloons', price: 120, category: 'classic', description: 'Age and milestone number balloons perfect for birthdays and anniversaries. Available in a variety of colors and sizes.' },
  { id: 'classic-sets', slug: 'sets', name: 'Classic Sets', price: 160, category: 'classic', description: 'Timeless balloon sets for any celebration. Elegant arrangements that fit every occasion.' },
]

export function getPackageById(category, id) {
  if (category === 'girls') return girlsPackages.find(p => p.id === `girls-${id}`)
  if (category === 'for-him') return forHimPackages.find(p => p.id === `him-${id}`)
  return null
}

export function getClassicBySlug(slug) {
  return classicCollections.find(c => c.slug === slug)
}
