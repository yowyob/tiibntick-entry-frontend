import type { PlatformSlug } from './platforms'
import { getSiteConfig } from './site-config'

export type { SiteUrls, PlatformUrlSet, SiteConfig } from './site-config'
export { getSiteConfig } from './site-config'

const config = getSiteConfig()

export const urls = config.urls

export function getPlatformUrls(slug: PlatformSlug) {
  return config.platformUrls[slug]
}

export function isSeasonalNoel(): boolean {
  return config.seasonalNoel
}
