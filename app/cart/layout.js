export const metadata = {
  title: 'Your Cart',
  description: 'Review your balloon arrangement order before checkout.',
  // Cart is user-specific — keep it out of search results.
  robots: { index: false, follow: true },
  alternates: { canonical: '/cart' },
}

export default function CartLayout({ children }) {
  return children
}
