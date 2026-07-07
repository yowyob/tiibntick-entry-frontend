'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { Link } from '@/i18n/navigation'
import {
  ACCOUNT_TYPE_IDS,
  ACCOUNT_TYPE_PLATFORM,
  PLATFORM_ACCENTS,
  PLATFORM_SLUGS,
  type PlatformSlug,
} from '@/lib/platforms'
import { useSiteConfig } from '@/components/providers/SiteConfigProvider'
import { usePlatformIcons, useAccountTypeIcons } from '@/lib/hooks'

type Mode = 'register' | 'login'

export default function AccountTypeGrid({ mode }: { mode: Mode }) {
  const ns = mode === 'register' ? 'commencer' : 'connexion'
  const t = useTranslations(ns)
  const tPlatforms = useTranslations('platforms')
  const platformIcons = usePlatformIcons()
  const accountIcons = useAccountTypeIcons()
  const { platformUrls } = useSiteConfig()

  if (mode === 'login') {
    return <LoginPlatformGrid t={t} tPlatforms={tPlatforms} icons={platformIcons} platformUrls={platformUrls} />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {ACCOUNT_TYPE_IDS.map((id) => {
        const platform = ACCOUNT_TYPE_PLATFORM[id]
        const accent = PLATFORM_ACCENTS[platform]
        const PlatformIcon = platformIcons[platform]
        const AccountIcon = accountIcons[id]
        const registerUrl = platformUrls[platform].register

        return (
          <article
            key={id}
            className={clsx('glass-card p-6 flex flex-col group', accent.cardBorder, accent.glow)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={clsx('w-10 h-10 rounded-lg flex items-center justify-center border', accent.bg, accent.border)}>
                <AccountIcon size={18} className={accent.text} />
              </div>
              <div className={clsx('w-10 h-10 rounded-lg flex items-center justify-center border', accent.bg, accent.border)}>
                <PlatformIcon size={18} className={accent.text} />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{t(`${id}.title`)}</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-5 flex-1">
              {t(`${id}.description`)}
            </p>

            <p className={clsx('inline-flex items-center gap-1.5 text-xs font-medium mb-4', accent.text)}>
              <ArrowRight size={12} />
              {tPlatforms(`${platform}.name`)}
            </p>

            <a
              href={registerUrl}
              className={clsx(
                'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all',
                'bg-brand-500 hover:bg-brand-600 text-white',
              )}
            >
              {t('createAccount')}
              <ArrowRight size={14} />
            </a>
          </article>
        )
      })}
    </div>
  )
}

function LoginPlatformGrid({
  t,
  tPlatforms,
  icons,
  platformUrls,
}: {
  t: ReturnType<typeof useTranslations<'connexion'>>
  tPlatforms: ReturnType<typeof useTranslations<'platforms'>>
  icons: ReturnType<typeof usePlatformIcons>
  platformUrls: ReturnType<typeof useSiteConfig>['platformUrls']
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {PLATFORM_SLUGS.map((slug: PlatformSlug) => {
        const accent = PLATFORM_ACCENTS[slug]
        const Icon = icons[slug]
        const loginUrl = platformUrls[slug].login

        return (
          <article
            key={slug}
            className={clsx('glass-card p-6 flex flex-col group', accent.cardBorder, accent.glow)}
          >
            <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center border mb-4', accent.bg, accent.border)}>
              <Icon size={22} className={accent.text} />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">{tPlatforms(`${slug}.name`)}</h3>
            <p className="text-stone-400 text-sm mb-5 flex-1">{tPlatforms(`${slug}.category`)}</p>

            <a
              href={loginUrl}
              className={clsx(
                'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all',
                'border border-white/20 bg-white/5 hover:bg-white/10 text-white',
              )}
            >
              {t('login')}
              <ArrowRight size={14} />
            </a>
          </article>
        )
      })}
    </div>
  )
}

export function PageHeader({
  title,
  subtitle,
  backLabel,
}: {
  title: string
  subtitle: string
  backLabel: string
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-stone-400 hover:text-brand-400 text-sm mb-8 transition-colors"
      >
        <ArrowLeft size={14} />
        {backLabel}
      </Link>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-stone-400 leading-relaxed">{subtitle}</p>
    </div>
  )
}
