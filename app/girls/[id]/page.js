import { redirect } from 'next/navigation'

// Legacy route retired in the catalog rebuild. The old index-based "girls"
// packages no longer exist; all products now live under /product/[id].
// No live links point here (only dead template code referenced it).
export default function GirlsPackageRedirect() {
  redirect('/catalog')
}
