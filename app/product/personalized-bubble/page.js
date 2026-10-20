import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PersonalizedBubble from '@/components/PersonalizedBubble'
import { BUBBLE } from '@/lib/bubble'
import { SITE_NAME, OG_IMAGE } from '@/lib/site'

const description =
  'A large clear bubble balloon personalized with your message in elegant lettering. Design it live and see it on the balloon. Calgary delivery.'

export const metadata = {
  title: BUBBLE.name,
  description,
  alternates: { canonical: `/product/${BUBBLE.id}` },
  openGraph: { title: `${BUBBLE.name} · ${SITE_NAME}`, description, url: `/product/${BUBBLE.id}`, images: [{ url: OG_IMAGE }] },
}

export default function Page() {
  const matteImage = fs.existsSync(path.join(process.cwd(), 'public', BUBBLE.blankMatte)) ? BUBBLE.blankMatte : null
  return (
    <>
      <Header />
      <section className="package-detail">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link> &rsaquo; <Link href="/collections">Collections</Link> &rsaquo;{' '}
            <Link href="/collections/signature">Signature Balloons</Link> &rsaquo; {BUBBLE.name}
          </div>
          <PersonalizedBubble matteImage={matteImage} />
        </div>
      </section>
      <Footer />
    </>
  )
}
