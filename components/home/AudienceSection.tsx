'use client'

import { useTranslations } from 'next-intl'
import { ACCOUNT_TYPE_IDS } from '@/lib/platforms'
import { useAccountTypeIcons } from '@/lib/hooks'

export default function AudienceSection() {
  const t = useTranslations('audience')
  const icons = useAccountTypeIcons()

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            {t('sectionLabel')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {t('sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACCOUNT_TYPE_IDS.map((id) => {
            const Icon = icons[id]
            return (
              <article
                key={id}
                className="glass-card p-6 hover:border-brand-500/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/25 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{t(`${id}.title`)}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{t(`${id}.description`)}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
