export type PlatformSlug =
  | 'link'
  | 'go'
  | 'agency'
  | 'point'
  | 'freelancer'
  | 'market'

export const PLATFORM_SLUGS: PlatformSlug[] = [
  'link',
  'go',
  'agency',
  'point',
  'freelancer',
  'market',
]

export type PlatformAccent = {
  border: string
  cardBorder: string
  bg: string
  text: string
  glow: string
  badge: string
}

export type PlatformLandingTheme = PlatformAccent & {
  gradient: string
  cardBorder: string
  cardShadow: string
  progress: string
  backHover: string
  blurOrb: string
  blurOrbSecondary: string
}

export const PLATFORM_ACCENTS: Record<PlatformSlug, PlatformAccent> = {
  link: {
    border: 'border-sky-500/30',
    cardBorder: '!border-sky-500/40 hover:!border-sky-500/60',
    bg: 'bg-sky-500/10',
    text: 'text-sky-600',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.2)]',
    badge: 'bg-sky-500/15 text-sky-700',
  },
  go: {
    border: 'border-emerald-500/30',
    cardBorder: '!border-emerald-500/40 hover:!border-emerald-500/60',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-600',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]',
    badge: 'bg-emerald-500/15 text-emerald-700',
  },
  agency: {
    border: 'border-brand-500/30',
    cardBorder: '!border-brand-500/40 hover:!border-brand-500/60',
    bg: 'bg-brand-500/10',
    text: 'text-brand-600',
    glow: 'hover:shadow-glow-sm',
    badge: 'bg-brand-500/15 text-brand-700',
  },
  point: {
    border: 'border-red-500/30',
    cardBorder: '!border-red-500/40 hover:!border-red-500/60',
    bg: 'bg-red-500/10',
    text: 'text-red-600',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)]',
    badge: 'bg-red-500/15 text-red-700',
  },
  freelancer: {
    border: 'border-violet-500/30',
    cardBorder: '!border-violet-500/40 hover:!border-violet-500/60',
    bg: 'bg-violet-500/10',
    text: 'text-violet-600',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)]',
    badge: 'bg-violet-500/15 text-violet-700',
  },
  market: {
    border: 'border-amber-500/30',
    cardBorder: '!border-amber-500/40 hover:!border-amber-500/60',
    bg: 'bg-amber-500/10',
    text: 'text-amber-600',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]',
    badge: 'bg-amber-500/15 text-amber-700',
  },
}

export type AccountTypeId =
  | 'particulier'
  | 'freelance'
  | 'pointRelais'
  | 'agence'
  | 'commercant'
  | 'entreprise'

export const ACCOUNT_TYPE_PLATFORM: Record<AccountTypeId, PlatformSlug> = {
  particulier: 'link',
  freelance: 'freelancer',
  pointRelais: 'point',
  agence: 'agency',
  commercant: 'go',
  entreprise: 'agency',
}

export const ACCOUNT_TYPE_IDS: AccountTypeId[] = [
  'particulier',
  'freelance',
  'pointRelais',
  'agence',
  'commercant',
  'entreprise',
]

export function isPlatformSlug(slug: string): slug is PlatformSlug {
  return PLATFORM_SLUGS.includes(slug as PlatformSlug)
}

export const PLATFORM_LANDING_THEMES: Record<PlatformSlug, PlatformLandingTheme> = {
  link: {
    ...PLATFORM_ACCENTS.link,
    gradient: 'from-sky-500 to-sky-400',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)]',
    progress: 'from-sky-500 to-sky-400',
    backHover: 'hover:text-sky-600',
    blurOrb: 'bg-sky-500/10',
    blurOrbSecondary: 'bg-sky-500/5',
  },
  go: {
    ...PLATFORM_ACCENTS.go,
    gradient: 'from-emerald-500 to-emerald-400',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]',
    progress: 'from-emerald-500 to-emerald-400',
    backHover: 'hover:text-emerald-600',
    blurOrb: 'bg-emerald-500/10',
    blurOrbSecondary: 'bg-emerald-500/5',
  },
  agency: {
    ...PLATFORM_ACCENTS.agency,
    gradient: 'from-brand-500 to-brand-400',
    cardShadow: 'hover:shadow-glow-sm',
    progress: 'from-brand-500 to-brand-400',
    backHover: 'hover:text-brand-600',
    blurOrb: 'bg-brand-500/10',
    blurOrbSecondary: 'bg-brand-500/5',
  },
  point: {
    ...PLATFORM_ACCENTS.point,
    gradient: 'from-red-500 to-red-400',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.15)]',
    progress: 'from-red-500 to-red-400',
    backHover: 'hover:text-red-600',
    blurOrb: 'bg-red-500/10',
    blurOrbSecondary: 'bg-red-500/5',
  },
  freelancer: {
    ...PLATFORM_ACCENTS.freelancer,
    gradient: 'from-violet-500 to-violet-400',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]',
    progress: 'from-violet-500 to-violet-400',
    backHover: 'hover:text-violet-600',
    blurOrb: 'bg-violet-500/10',
    blurOrbSecondary: 'bg-violet-500/5',
  },
  market: {
    ...PLATFORM_ACCENTS.market,
    gradient: 'from-amber-500 to-amber-400',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]',
    progress: 'from-amber-500 to-amber-400',
    backHover: 'hover:text-amber-600',
    blurOrb: 'bg-amber-500/10',
    blurOrbSecondary: 'bg-amber-500/5',
  },
}
