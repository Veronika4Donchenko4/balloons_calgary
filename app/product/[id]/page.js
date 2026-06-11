import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BalloonCustomizer from '@/components/BalloonCustomizer'
import { getProductById, getCategoryBySlug, getDefaultBalloons } from '@/lib/packages'
import { accentE } from '@/lib/accentE'

export default async function ProductPage({ params }) {
  const { id } = await params
  const pkg = getProductById(id)
  if (!pkg) notFound()

  const category = getCategoryBySlug(pkg.category)
  const categoryName = category ? category.name : 'Products'

  return (
    <>
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link>
            {category && <> &rsaquo; <Link href={`/category/${pkg.category}`}>{accentE(categoryName)}</Link></>}
            &rsaquo; {accentE(pkg.name)}
          </div>
          <BalloonCustomizer pkg={pkg} defaultBalloons={getDefaultBalloons(pkg)} />
        </div>
      </section>

      <Footer />
    </>
  )
}
