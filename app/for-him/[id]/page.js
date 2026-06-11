import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BalloonCustomizer from '@/components/BalloonCustomizer'
import { forHimPackages, getDefaultBalloons } from '@/lib/packages'
import { accentE } from '@/lib/accentE'

export default async function ForHimPackage({ params }) {
  const { id } = await params
  const idx = parseInt(id) - 1
  const pkg = forHimPackages[idx] || { id: `him-${id}`, name: `Package ${id}`, price: 0, category: 'celebration-balloon-sets', image: '/assets/images/for-him/120_cad.png', description: 'Stylish balloon arrangement from our For Him collection.' }

  return (
    <>
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; <Link href="/category/celebration-balloon-sets">{accentE('Celebration Balloon Sets')}</Link> &rsaquo; {accentE(pkg.name)}
          </div>
          <BalloonCustomizer pkg={pkg} defaultBalloons={getDefaultBalloons(pkg)} />
        </div>
      </section>

      <Footer />
    </>
  )
}
