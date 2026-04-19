import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
