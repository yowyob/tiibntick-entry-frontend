'use client'

import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { useSiteConfig } from '@/components/providers/SiteConfigProvider'

const STORAGE_KEY = 'tiibntick-cookie-consent'

type ConsentChoice = 'accepted' | 'rejected'

export default function CookieConsent() {
  const t = useTranslations('cookieConsent')
  const { urls } = useSiteConfig()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const saveChoice = (choice: ConsentChoice) => {
    localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6 animate-fade-up"
    >
      <div className="container-main">
        <div className="glass-card p-5 sm:p-6 shadow-2xl border-brand-500/20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-xl bg-brand-500/15 border border-brand-500/30 items-center justify-center">
                <Cookie size={20} className="text-brand-600" />
              </div>
              <div>
                <h2 id="cookie-consent-title" className="font-semibold text-stone-900 mb-1.5">
                  {t('title')}
                </h2>
                <p id="cookie-consent-description" className="text-stone-500 text-sm leading-relaxed max-w-2xl">
                  {t('description')}{' '}
                  <a
                    href={urls.legal.cookies}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
                  >
                    {t('policy')}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
              <Button variant="secondary" onClick={() => saveChoice('rejected')} className="w-full sm:w-auto">
                {t('reject')}
              </Button>
              <Button onClick={() => saveChoice('accepted')} className="w-full sm:w-auto">
                {t('accept')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
