import VariantProductPage, { variantMetadata } from '@/components/VariantProductPage'

export const metadata = variantMetadata('double-number')

export default function Page() {
  return <VariantProductPage slug="double-number" />
}
