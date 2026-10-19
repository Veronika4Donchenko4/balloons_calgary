import Link from 'next/link'
import Image from 'next/image'

// `c` needs name, blurb, and image (or gradient). `href` defaults to /collections/<slug>;
// `soon` marks a category with no products yet.
export default function CollectionCard({ c, href, soon = false }) {
  return (
    <Link href={href || `/collections/${c.slug}`} className="boutique-card">
      <div className="boutique-card-img" style={c.image ? undefined : { background: c.gradient }}>
        {c.image && <Image src={c.image} alt={c.name} fill sizes="(max-width: 1024px) 50vw, 300px" />}
        {soon && <span className="soon-badge">Coming soon</span>}
      </div>
      <div className="boutique-card-body">
        <h3>{c.name}</h3>
        <p>{c.blurb}</p>
        <span className="boutique-card-link">{soon ? 'Preview' : 'Explore'}</span>
      </div>
    </Link>
  )
}
