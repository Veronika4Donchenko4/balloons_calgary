import VariantProductPage, { variantMetadata } from '@/components/VariantProductPage'

export const metadata = variantMetadata('single-number')

export default function Page() {
  return <VariantProductPage slug="single-number" />
}
