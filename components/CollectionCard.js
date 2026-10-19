import Link from 'next/link'
import Image from 'next/image'

export default function CollectionCard({ c }) {
  return (
    <Link href={`/collections/${c.slug}`} className="boutique-card">
      <div className="boutique-card-img">
        <Image src={c.image} alt={c.name} fill sizes="(max-width: 1024px) 50vw, 300px" />
      </div>
      <div className="boutique-card-body">
        <h3>{c.name}</h3>
        <p>{c.blurb}</p>
        <span className="boutique-card-link">Explore</span>
      </div>
    </Link>
  )
}
