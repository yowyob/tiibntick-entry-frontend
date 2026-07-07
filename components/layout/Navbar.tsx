'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, X, Package } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import { ButtonLink } from '@/components/ui/Button'
import LocaleSwitcher from './LocaleSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isHome = pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-xl">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
              <Package size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              TiiB<span className="text-brand-400">n</span>Tick
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {isHome && (
              <a href="#platforms" className="btn-ghost">
                {t('discover')}
              </a>
            )}
            <LocaleSwitcher />
            <Link href="/login" className="btn-ghost">
              {t('login')}
            </Link>
            <ButtonLink href="/start">{t('getStarted')}</ButtonLink>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/5 pt-3 space-y-1">
            {isHome && (
              <a href="#platforms" className="block btn-ghost w-full text-left" onClick={() => setOpen(false)}>
                {t('discover')}
              </a>
            )}
            <Link href="/login" className="block btn-ghost w-full text-left" onClick={() => setOpen(false)}>
              {t('login')}
            </Link>
            <div className="pt-2 flex items-center gap-2">
              <LocaleSwitcher />
              <ButtonLink href="/start" className="flex-1">
                {t('getStarted')}
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
