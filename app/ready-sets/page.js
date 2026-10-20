import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReadySetsBrowser from '@/components/ReadySetsBrowser'

export const metadata = {
  title: 'Ready Sets',
  description: 'Ready-made balloon sets for every occasion — filter by colour, price and occasion. Handmade in Calgary with same-day delivery.',
  alternates: { canonical: '/ready-sets' },
}

export default function ReadySetsPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Ready Sets</h1>
          <p>Ready-made balloon sets for every occasion</p>
        </div>
      </div>
      <section className="section lux-section rs-section">
        <div className="container">
          <Suspense fallback={null}>
            <ReadySetsBrowser />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  )
}
