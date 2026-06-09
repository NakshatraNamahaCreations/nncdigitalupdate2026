import MarketingPage from '@/components/marketing/MarketingPage'
import { FEATURES_OVERVIEW } from '@/data/pages'

export const metadata = {
  title: FEATURES_OVERVIEW.metaTitle,
  description: FEATURES_OVERVIEW.metaDescription,
}

export default function Page() {
  return <MarketingPage page={FEATURES_OVERVIEW} />
}
