'use client'

import { useTranslations } from 'next-intl'
import { useInfrastructureIcons } from '@/lib/hooks'
import { Check } from 'lucide-react'

const INFRA_KEYS = ['search', 'core', 'confidence'] as const

export default function InfrastructureSection() {
  const t = useTranslations('infrastructure')
  const icons = useInfrastructureIcons()

  return (
    <section id="infrastructure" className="section-padding bg-[#F7F6F4] relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />

      <div className="container-main relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {t('sectionTitle')}
          </h2>
          <p className="mt-4 text-stone-500 leading-relaxed">{t('sectionDescription')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {INFRA_KEYS.map((key) => {
            const Icon = icons[key]
            const features = t.raw(`${key}.features`) as string[]
            return (
              <article key={key} className="glass-card p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/25 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">{t(`${key}.name`)}</h3>
                <p className="text-sm text-brand-600 font-medium mb-4">{t(`${key}.subtitle`)}</p>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{t(`${key}.description`)}</p>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check size={14} className="text-brand-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
