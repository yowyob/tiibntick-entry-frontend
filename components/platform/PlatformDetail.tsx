'use client'

import PlatformLandingDetail from './PlatformLandingDetail'
import type { PlatformSlug } from '@/lib/platforms'

export default function PlatformDetail({ slug }: { slug: PlatformSlug }) {
  return <PlatformLandingDetail slug={slug} />
}
