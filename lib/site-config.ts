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

export function getSiteConfig(): SiteConfig {
  return {
    urls: {
      site: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
      tracking: process.env.NEXT_PUBLIC_TRACKING_URL ?? '#',
      sendParcel: process.env.NEXT_PUBLIC_SEND_PARCEL_URL ?? '#',
      search: process.env.NEXT_PUBLIC_SEARCH_URL ?? '#',
      coreDocs: process.env.NEXT_PUBLIC_CORE_DOCS_URL ?? '#',
      confidence: process.env.NEXT_PUBLIC_CONFIDENCE_URL ?? '#',
      legal: {
        mentions: process.env.NEXT_PUBLIC_LEGAL_MENTIONS_URL ?? '#',
        terms: process.env.NEXT_PUBLIC_TERMS_URL ?? '#',
        privacy: process.env.NEXT_PUBLIC_PRIVACY_URL ?? '#',
        cookies: process.env.NEXT_PUBLIC_COOKIES_URL ?? '#',
      },
      social: {
        facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '#',
        twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? '#',
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '#',
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#',
      },
    },
    platformUrls: {
      link: {
        landing: process.env.NEXT_PUBLIC_LINK_LANDING_URL ?? '#',
        register: process.env.NEXT_PUBLIC_LINK_REGISTER_URL ?? '#',
        login: process.env.NEXT_PUBLIC_LINK_LOGIN_URL ?? '#',
      },
      go: {
        landing: process.env.NEXT_PUBLIC_GO_LANDING_URL ?? '#',
        register: process.env.NEXT_PUBLIC_GO_REGISTER_URL ?? '#',
        login: process.env.NEXT_PUBLIC_GO_LOGIN_URL ?? '#',
      },
      agency: {
        landing: process.env.NEXT_PUBLIC_AGENCY_LANDING_URL ?? '#',
        register: process.env.NEXT_PUBLIC_AGENCY_REGISTER_URL ?? '#',
        login: process.env.NEXT_PUBLIC_AGENCY_LOGIN_URL ?? '#',
      },
      point: {
        landing: process.env.NEXT_PUBLIC_POINT_LANDING_URL ?? '#',
        register: process.env.NEXT_PUBLIC_POINT_REGISTER_URL ?? '#',
        login: process.env.NEXT_PUBLIC_POINT_LOGIN_URL ?? '#',
      },
      freelancer: {
        landing: process.env.NEXT_PUBLIC_FREELANCER_LANDING_URL ?? '#',
        register: process.env.NEXT_PUBLIC_FREELANCER_REGISTER_URL ?? '#',
        login: process.env.NEXT_PUBLIC_FREELANCER_LOGIN_URL ?? '#',
      },
      market: {
        landing: process.env.NEXT_PUBLIC_MARKET_LANDING_URL ?? '#',
        register: process.env.NEXT_PUBLIC_MARKET_REGISTER_URL ?? '#',
        login: process.env.NEXT_PUBLIC_MARKET_LOGIN_URL ?? '#',
      },
    },
    seasonalNoel: process.env.NEXT_PUBLIC_SEASONAL_THEME === 'noel',
  }
}
