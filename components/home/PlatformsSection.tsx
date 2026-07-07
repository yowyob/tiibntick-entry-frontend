'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { PLATFORM_SLUGS, PLATFORM_ACCENTS, type PlatformSlug } from '@/lib/platforms'
import { usePlatformIcons } from '@/lib/hooks'
import clsx from 'clsx'

export default function PlatformsSection() {
  const t = useTranslations('platforms')
  const icons = usePlatformIcons()

  return (
    <section id="platforms" className="section-padding bg-ink-900/50">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PLATFORM_SLUGS.map((slug) => (
            <PlatformCard key={slug} slug={slug} icons={icons} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlatformCard({
  slug,
  icons,
  t,
}: {
  slug: PlatformSlug
  icons: ReturnType<typeof usePlatformIcons>
  t: ReturnType<typeof useTranslations<'platforms'>>
}) {
  const accent = PLATFORM_ACCENTS[slug]
  const Icon = icons[slug]
  const features = t.raw(`${slug}.features`) as string[]

  return (
    <article
      className={clsx(
        'glass-card p-7 flex flex-col group',
        accent.cardBorder,
        accent.glow,
      )}
    >
      <div className="flex items-start justify-between mb-5">
        <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center border', accent.bg, accent.border)}>
          <Icon size={22} className={accent.text} />
        </div>
        <span className={clsx('text-xs font-semibold px-2.5 py-1 rounded-full', accent.badge)}>
          {t(`${slug}.category`)}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{t(`${slug}.name`)}</h3>
      <p className="text-stone-400 text-sm leading-relaxed mb-5 flex-1">
        {t(`${slug}.tagline`)}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-stone-300">
            <Check size={14} className={clsx('shrink-0', accent.text)} />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={`/platforms/${slug}`}
        className={clsx(
          'inline-flex items-center gap-2 text-sm font-semibold transition-colors',
          accent.text,
          'hover:opacity-80',
        )}
      >
        {t('discover')}
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </article>
  )
}
