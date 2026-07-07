'use client'

import { useTranslations } from 'next-intl'
import { Package, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { useSiteConfig } from '@/components/providers/SiteConfigProvider'

export default function Footer() {
  const t = useTranslations('footer')
  const { urls } = useSiteConfig()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-ink-900">
      <div className="container-main section-padding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center">
                <Package size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg">TiiBnTick</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">{t('tagline')}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t('navigation')}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href={urls.sendParcel} className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('sendParcel')}
                </a>
              </li>
              <li>
                <a href="#platforms" className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('howItWorks')}
                </a>
              </li>
              <li>
                <Link href="/platforms/agency" className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('proSpace')}
                </Link>
              </li>
              <li>
                <a href={urls.tracking} className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('trackParcel')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t('legal')}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href={urls.legal.mentions} className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('legalMentions')}
                </a>
              </li>
              <li>
                <a href={urls.legal.terms} className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('terms')}
                </a>
              </li>
              <li>
                <a href={urls.legal.privacy} className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href={urls.legal.cookies} className="text-stone-400 hover:text-brand-400 text-sm transition-colors">
                  {t('cookies')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t('followUs')}
            </h3>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: urls.social.facebook },
                { Icon: Twitter, href: urls.social.twitter },
                { Icon: Linkedin, href: urls.social.linkedin },
                { Icon: Instagram, href: urls.social.instagram },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-stone-400 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-stone-500 text-sm">{t('copyright', { year })}</p>
        </div>
      </div>
    </footer>
  )
}

