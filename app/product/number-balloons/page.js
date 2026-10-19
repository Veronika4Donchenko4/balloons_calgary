import VariantProductPage, { variantMetadata } from '@/components/VariantProductPage'

export const metadata = variantMetadata('number-balloons')

export default function Page() {
  return <VariantProductPage slug="number-balloons" />
}
