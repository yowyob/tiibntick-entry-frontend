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

  const t = await getTranslations({ locale, namespace: 'commencer' })

  return {

    title: t('metaTitle'),

    description: t('metaDescription'),

  }

}



export default async function StartPage({ params }: Props) {

  const { locale } = await params

  setRequestLocale(locale)

  const t = await getTranslations('commencer')



  return (

    <section className="section-padding pt-28 min-h-screen">

      <div className="container-main">

        <PageHeader title={t('title')} subtitle={t('subtitle')} backLabel={t('backHome')} />

        <AccountTypeGrid mode="register" />

        <p className="text-center text-stone-500 text-sm mt-10">

          {t('alreadyHaveAccount')}{' '}

          <Link href="/login" className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium transition-colors">

            {t('signIn')}

            <ArrowRight size={14} />

          </Link>

        </p>

      </div>

    </section>

  )

}

