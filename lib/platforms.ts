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
    cardBorder: '!border-sky-500/50 hover:!border-sky-500/70',
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]',
    badge: 'bg-sky-500/20 text-sky-300',
  },
  go: {
    border: 'border-emerald-500/30',
    cardBorder: '!border-emerald-500/50 hover:!border-emerald-500/70',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
    badge: 'bg-emerald-500/20 text-emerald-300',
  },
  agency: {
    border: 'border-brand-500/30',
    cardBorder: '!border-brand-500/50 hover:!border-brand-500/70',
    bg: 'bg-brand-500/10',
    text: 'text-brand-400',
    glow: 'hover:shadow-glow-sm',
    badge: 'bg-brand-500/20 text-brand-300',
  },
  point: {
    border: 'border-red-500/30',
    cardBorder: '!border-red-500/50 hover:!border-red-500/70',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]',
    badge: 'bg-red-500/20 text-red-300',
  },
  freelancer: {
    border: 'border-violet-500/30',
    cardBorder: '!border-violet-500/50 hover:!border-violet-500/70',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]',
    badge: 'bg-violet-500/20 text-violet-300',
  },
  market: {
    border: 'border-amber-500/30',
    cardBorder: '!border-amber-500/50 hover:!border-amber-500/70',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]',
    badge: 'bg-amber-500/20 text-amber-300',
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
    gradient: 'from-sky-400 to-sky-300',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.2)]',
    progress: 'from-sky-500 to-sky-400',
    backHover: 'hover:text-sky-400',
    blurOrb: 'bg-sky-500/10',
    blurOrbSecondary: 'bg-sky-500/5',
  },
  go: {
    ...PLATFORM_ACCENTS.go,
    gradient: 'from-emerald-400 to-emerald-300',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]',
    progress: 'from-emerald-500 to-emerald-400',
    backHover: 'hover:text-emerald-400',
    blurOrb: 'bg-emerald-500/10',
    blurOrbSecondary: 'bg-emerald-500/5',
  },
  agency: {
    ...PLATFORM_ACCENTS.agency,
    gradient: 'from-brand-400 to-brand-300',
    cardShadow: 'hover:shadow-glow-sm',
    progress: 'from-brand-500 to-brand-400',
    backHover: 'hover:text-brand-400',
    blurOrb: 'bg-brand-500/10',
    blurOrbSecondary: 'bg-brand-500/5',
  },
  point: {
    ...PLATFORM_ACCENTS.point,
    gradient: 'from-red-400 to-red-300',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)]',
    progress: 'from-red-500 to-red-400',
    backHover: 'hover:text-red-400',
    blurOrb: 'bg-red-500/10',
    blurOrbSecondary: 'bg-red-500/5',
  },
  freelancer: {
    ...PLATFORM_ACCENTS.freelancer,
    gradient: 'from-violet-400 to-violet-300',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)]',
    progress: 'from-violet-500 to-violet-400',
    backHover: 'hover:text-violet-400',
    blurOrb: 'bg-violet-500/10',
    blurOrbSecondary: 'bg-violet-500/5',
  },
  market: {
    ...PLATFORM_ACCENTS.market,
    gradient: 'from-amber-400 to-amber-300',
    cardShadow: 'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]',
    progress: 'from-amber-500 to-amber-400',
    backHover: 'hover:text-amber-400',
    blurOrb: 'bg-amber-500/10',
    blurOrbSecondary: 'bg-amber-500/5',
  },
}
