import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import AccountTypeGrid, { PageHeader } from '@/components/account/AccountTypeGrid'
import { Link } from '@/i18n/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'connexion' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function LoginPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('connexion')

  return (
    <section className="section-padding pt-28 min-h-screen">
      <div className="container-main">
        <PageHeader title={t('title')} subtitle={t('subtitle')} backLabel={t('backHome')} />
        <AccountTypeGrid mode="login" />
        <p className="text-center text-stone-400 text-sm mt-10">
          {t('noAccount')}{' '}
          <Link href="/start" className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium transition-colors">
            {t('createAccount')}
            <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  )
}
