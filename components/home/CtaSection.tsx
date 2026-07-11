'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'

export default function CtaSection() {
  const t = useTranslations('cta')

  return (
    <section className="section-padding relative overflow-hidden bg-[#F7F6F4]">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-hero-gradient opacity-40" />

      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto text-center glass-card p-10 sm:p-14 border-brand-500/25 shadow-glow">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-stone-500 leading-relaxed mb-8">{t('description')}</p>
          <ButtonLink href="/start" className="text-base px-8 py-3.5">
            {t('button')}
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
