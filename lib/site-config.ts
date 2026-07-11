import type { PlatformSlug } from './platforms'

export type SiteUrls = {
  site: string
  tracking: string
  sendParcel: string
  search: string
  coreDocs: string
  confidence: string
  legal: {
    mentions: string
    terms: string
    privacy: string
    cookies: string
  }
  social: {
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
  }
}

export type PlatformUrlSet = {
  landing: string
  register: string
  login: string
}

export type SiteConfig = {
  urls: SiteUrls
  platformUrls: Record<PlatformSlug, PlatformUrlSet>
  seasonalNoel: boolean
}

/** Hosts prod — utilisés si la variable d’env est absente (ex. déploiement sans .env). */
const HOST = {
  agency: 'https://tiibntick-agency.yowyob.com',
  link: 'https://tiibntick-link.yowyob.com',
  go: 'https://tiibntick-go.yowyob.com',
  point: 'https://tiibntick-point.yowyob.com',
  market: 'https://tiibntick-market.yowyob.com',
} as const

function env(key: string, fallback: string): string {
  const value = process.env[key]?.trim()
  return value && value.length > 0 ? value : fallback
}

function platformUrls(
  prefix: 'LINK' | 'GO' | 'AGENCY' | 'POINT' | 'FREELANCER' | 'MARKET',
  base: string,
): PlatformUrlSet {
  return {
    landing: env(`NEXT_PUBLIC_${prefix}_LANDING_URL`, base),
    register: env(`NEXT_PUBLIC_${prefix}_REGISTER_URL`, `${base}/register`),
    login: env(`NEXT_PUBLIC_${prefix}_LOGIN_URL`, `${base}/login`),
  }
}

export function getSiteConfig(): SiteConfig {
  return {
    urls: {
      site: env('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000'),
      tracking: env('NEXT_PUBLIC_TRACKING_URL', `${HOST.agency}/track`),
      sendParcel: env('NEXT_PUBLIC_SEND_PARCEL_URL', `${HOST.agency}/track/deposit`),
      search: env('NEXT_PUBLIC_SEARCH_URL', 'https://search.tiibntick.cm'),
      coreDocs: env('NEXT_PUBLIC_CORE_DOCS_URL', 'https://docs.tiibntick.cm/core'),
      confidence: env('NEXT_PUBLIC_CONFIDENCE_URL', 'https://confidence.tiibntick.cm'),
      legal: {
        mentions: env('NEXT_PUBLIC_LEGAL_MENTIONS_URL', 'https://tiibntick.cm/mentions-legales'),
        terms: env('NEXT_PUBLIC_TERMS_URL', 'https://tiibntick.cm/cgu'),
        privacy: env('NEXT_PUBLIC_PRIVACY_URL', 'https://tiibntick.cm/confidentialite'),
        cookies: env('NEXT_PUBLIC_COOKIES_URL', 'https://tiibntick.cm/cookies'),
      },
      social: {
        facebook: env('NEXT_PUBLIC_FACEBOOK_URL', 'https://facebook.com/tiibntick'),
        twitter: env('NEXT_PUBLIC_TWITTER_URL', 'https://twitter.com/tiibntick'),
        linkedin: env('NEXT_PUBLIC_LINKEDIN_URL', 'https://linkedin.com/company/tiibntick'),
        instagram: env('NEXT_PUBLIC_INSTAGRAM_URL', 'https://instagram.com/tiibntick'),
      },
    },
    platformUrls: {
      link: platformUrls('LINK', HOST.link),
      go: platformUrls('GO', HOST.go),
      agency: platformUrls('AGENCY', HOST.agency),
      point: platformUrls('POINT', HOST.point),
      // Freelancer = même plateforme que Go
      freelancer: platformUrls('FREELANCER', HOST.go),
      market: platformUrls('MARKET', HOST.market),
    },
    seasonalNoel: process.env.NEXT_PUBLIC_SEASONAL_THEME === 'noel',
  }
}
