'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import clsx from 'clsx'

const locales = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
] as const

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="flex items-center rounded-lg border border-white/10 overflow-hidden text-xs font-semibold">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={clsx(
            'px-2.5 py-1.5 transition-colors',
            locale === code
              ? 'bg-brand-500/20 text-brand-400'
              : 'text-stone-400 hover:text-white hover:bg-white/5',
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
