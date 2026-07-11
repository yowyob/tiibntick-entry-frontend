'use client'

import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import { Link } from '@/i18n/navigation'
import { PLATFORM_LANDING_THEMES, type PlatformSlug } from '@/lib/platforms'
import { PLATFORM_LANDING_ICONS, ArrowLeft, ArrowRight } from '@/lib/platformLandingIcons'
import { useSiteConfig } from '@/components/providers/SiteConfigProvider'
import { ButtonLink } from '@/components/ui/Button'

type InnovationItem = { category: string; title: string; description: string }
type WorkflowStep = { title: string; description: string }

function getCtaUrls(slug: PlatformSlug, urls: ReturnType<typeof useSiteConfig>['urls'], platformUrls: ReturnType<typeof useSiteConfig>['platformUrls']) {
  switch (slug) {
    case 'link':
      return { primary: urls.sendParcel, secondary: urls.search, primaryExternal: true, secondaryExternal: true }
    case 'market':
      return { primary: platformUrls.market.landing, secondary: '/platforms/agency', primaryExternal: true, secondaryExternal: false }
    case 'agency':
      return { primary: platformUrls.agency.register, secondary: '/start', primaryExternal: true, secondaryExternal: false }
    case 'go':
      return { primary: platformUrls.go.register, secondary: platformUrls.go.login, primaryExternal: true, secondaryExternal: true }
    case 'point':
      return { primary: platformUrls.point.register, secondary: urls.coreDocs, primaryExternal: true, secondaryExternal: true }
    case 'freelancer':
      return { primary: platformUrls.freelancer.register, secondary: platformUrls.freelancer.login, primaryExternal: true, secondaryExternal: true }
  }
}

export default function PlatformLandingDetail({ slug }: { slug: PlatformSlug }) {
  const t = useTranslations(`platformPage.${slug}`)
  const tPage = useTranslations('platformPage')
  const { urls, platformUrls } = useSiteConfig()
  const theme = PLATFORM_LANDING_THEMES[slug]
  const icons = PLATFORM_LANDING_ICONS[slug]
  const ctaUrls = getCtaUrls(slug, urls, platformUrls)

  const trustBadges = t.raw('trustBadges') as string[]
  const innovationItems = t.raw('innovation.items') as InnovationItem[]
  const workflowSteps = t.raw('workflow.steps') as WorkflowStep[]
  const HeroCardIcon = icons.heroCard
  const SecondaryCtaIcon = icons.secondaryCta

  return (
    <>
      <section className="relative pt-24 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-60" />
        <div className="container-main relative z-10">
          <Link
            href="/"
            className={clsx(
              'inline-flex items-center gap-1.5 text-stone-500 text-sm mb-10 transition-colors',
              theme.backHover,
            )}
          >
            <ArrowLeft size={14} />
            {tPage('backToSuite')}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className={clsx('inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6', theme.badge)}>
                {t('solutionBadge')}
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.1] mb-6">
                <span className="block">{t('heroTitleLine1')}</span>
                <span className={clsx('block bg-gradient-to-r bg-clip-text text-transparent', theme.gradient)}>
                  {t('heroTitleLine2')}
                </span>
              </h1>

              <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-xl">
                {t('heroDescription')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <ButtonLink href={ctaUrls.primary} external={ctaUrls.primaryExternal}>
                  {t('primaryCta')}
                  <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink href={ctaUrls.secondary} external={ctaUrls.secondaryExternal} variant="secondary">
                  <SecondaryCtaIcon size={16} />
                  {t('secondaryCta')}
                </ButtonLink>
              </div>

              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge, i) => {
                  const Icon = icons.trust[i]
                  return (
                    <span
                      key={badge}
                      className={clsx(
                        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium',
                        theme.border,
                        theme.bg,
                        theme.text,
                      )}
                    >
                      {Icon && <Icon size={12} />}
                      {badge}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className={clsx('glass-card p-6 sm:p-8 animate-float', theme.cardBorder)}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-stone-500 text-sm">{t('heroCard.processing')}</span>
                  <span className={clsx('font-bold text-sm', theme.text)}>{t('heroCard.progress')}</span>
                </div>

                <div className="h-2 rounded-full bg-stone-100 mb-6 overflow-hidden">
                  <div className={clsx('h-full w-3/4 rounded-full bg-gradient-to-r', theme.progress)} />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className={clsx('w-10 h-10 rounded-xl border flex items-center justify-center', theme.bg, theme.border)}>
                    <HeroCardIcon size={20} className={theme.text} />
                  </div>
                  <div>
                    <p className="text-stone-900 font-semibold">{t('heroCard.title')}</p>
                    <p className="text-stone-500 text-sm">{t('heroCard.subtitle')}</p>
                  </div>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed">{t('heroCard.description')}</p>
              </div>

              <div className={clsx('absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl pointer-events-none', theme.blurOrb)} />
              <div className={clsx('absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl pointer-events-none', theme.blurOrbSecondary)} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className={clsx('font-semibold text-sm uppercase tracking-wider mb-3', theme.text)}>
              {t('innovation.sectionLabel')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              {t('innovation.sectionTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {innovationItems.map((item, i) => {
              const Icon = icons.innovation[i]
              return (
                <article
                  key={item.title}
                  className={clsx('glass-card p-7 transition-shadow', theme.cardBorder, theme.cardShadow)}
                >
                  <div className="flex items-start gap-4">
                    <div className={clsx('w-12 h-12 rounded-xl border flex items-center justify-center shrink-0', theme.bg, theme.border)}>
                      {Icon && <Icon size={22} className={theme.text} />}
                    </div>
                    <div>
                      <p className={clsx('text-xs font-semibold uppercase tracking-wider mb-1', theme.text)}>
                        {item.category}
                      </p>
                      <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className={clsx('font-semibold text-sm uppercase tracking-wider mb-3', theme.text)}>
              {t('workflow.sectionLabel')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              {t('workflow.sectionTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, i) => {
              const Icon = icons.workflow[i]
              return (
                <article key={step.title} className={clsx('relative glass-card p-6', theme.cardBorder)}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={clsx(
                        'w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold',
                        theme.bg,
                        theme.border,
                        theme.text,
                      )}
                    >
                      {i + 1}
                    </span>
                    <div className={clsx('w-10 h-10 rounded-xl border flex items-center justify-center', theme.bg, theme.border)}>
                      {Icon && <Icon size={18} className={theme.text} />}
                    </div>
                  </div>
                  <h3 className="text-stone-900 font-bold mb-2">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-stone-500 leading-relaxed mb-8">{t('cta.description')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href={platformUrls[slug].register} external>
              {t('cta.getStarted')}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="/start" variant="secondary">
              {t('cta.contact')}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
