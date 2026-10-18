import Link from 'next/link'
import Placeholder from '@/components/Placeholder'

export default function CollectionCard({ c }) {
  return (
    <Link href={`/collections/${c.slug}`} className="boutique-card">
      <div className="boutique-card-img">
        <Placeholder gradient={c.gradient} label={c.name} />
      </div>
      <div className="boutique-card-body">
        <h3>{c.name}</h3>
        <p>{c.blurb}</p>
        <span className="boutique-card-link">Explore</span>
      </div>
    </Link>
  )
}
