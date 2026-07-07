'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'

export default function CtaSection() {
  const t = useTranslations('cta')

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-ink-950 to-ink-950" />
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />

      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto text-center glass-card p-10 sm:p-14 border-brand-500/20 shadow-glow">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-stone-400 leading-relaxed mb-8">{t('description')}</p>
          <ButtonLink href="/start" className="text-base px-8 py-3.5">
            {t('button')}
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
