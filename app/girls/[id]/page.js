import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BalloonCustomizer from '@/components/BalloonCustomizer'
import { girlsPackages, getDefaultBalloons } from '@/lib/packages'
import { accentE } from '@/lib/accentE'

export default async function GirlsPackage({ params }) {
  const { id } = await params
  const idx = parseInt(id) - 1
  const pkg = girlsPackages[idx] || { id: `girls-${id}`, name: `Package ${id}`, price: 0, category: 'birthday-balloon-sets', image: '/assets/images/girl/girl1.png', description: 'Beautiful balloon arrangement from our Girls Collection.' }

  return (
    <>
      <Header />

      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/catalog">Collections</Link> &rsaquo; <Link href="/category/birthday-balloon-sets">{accentE('Birthday Balloon Sets')}</Link> &rsaquo; {accentE(pkg.name)}
          </div>
          <BalloonCustomizer pkg={pkg} defaultBalloons={getDefaultBalloons(pkg)} />
        </div>
      </section>

      <Footer />
    </>
  )
}
