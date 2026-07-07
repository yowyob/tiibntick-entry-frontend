import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import PlatformDetail from '@/components/platform/PlatformDetail'
import { PLATFORM_SLUGS, isPlatformSlug } from '@/lib/platforms'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return PLATFORM_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isPlatformSlug(slug)) return {}
  const t = await getTranslations({ locale, namespace: 'platformPage' })
  return {
    title: t(`${slug}.metaTitle`),
    description: t(`${slug}.metaDescription`),
  }
}

export default async function PlatformPage({ params }: Props) {
  const { locale, slug } = await params
  if (!isPlatformSlug(slug)) notFound()

  setRequestLocale(locale)

  return <PlatformDetail slug={slug} />
}
