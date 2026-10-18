import Link from 'next/link'

export default function CollectionCard({ c }) {
  return (
    <Link href={`/collections/${c.slug}`} className="boutique-card">
      <div className="boutique-card-img">
        <img src={c.image} alt={c.name} loading="lazy" />
      </div>
      <div className="boutique-card-body">
        <h3>{c.name}</h3>
        <p>{c.blurb}</p>
        <span className="boutique-card-link">Explore</span>
      </div>
    </Link>
  )
}
