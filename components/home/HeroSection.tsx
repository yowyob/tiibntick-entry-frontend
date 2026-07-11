'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { Gift } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { useSiteConfig } from '@/components/providers/SiteConfigProvider'
import { ArrowRight, MapPin } from 'lucide-react'

const SeasonalBanner = dynamic(() => import('./SeasonalBanner'), { ssr: false })

export default function HeroSection() {
  const t = useTranslations('hero')
  const { urls, seasonalNoel } = useSiteConfig()

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#F7F6F4]">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.05),transparent_70%)]" />

      {seasonalNoel && <SeasonalBanner />}

      <div className="container-main relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {seasonalNoel && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-50 text-amber-800 text-sm font-medium mb-6 animate-fade-up">
              <Gift size={16} className="shrink-0" />
              <span>{t('seasonalOffer')}</span>
            </div>
          )}

          {seasonalNoel && (
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3 animate-fade-up">
              {t('seasonalBadge')}
            </p>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 animate-fade-up text-stone-900">
            <span className="block">{t('titleLine1')}</span>
            <span className="block bg-gradient-to-r from-brand-500 via-brand-600 to-amber-500 bg-clip-text text-transparent">
              {t('titleLine2')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-700 font-medium mb-2 animate-fade-up">
            {t('subtitle')}
          </p>
          <p className="text-stone-500 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <ButtonLink href={urls.sendParcel} external variant="primary">
              {t('sendNow')}
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={urls.tracking} external variant="secondary">
              <MapPin size={16} />
              {t('trackParcel')}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-20 flex justify-center gap-8 opacity-50">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-px h-16 bg-gradient-to-b from-brand-500/50 to-transparent"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
