import { setRequestLocale } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import PlatformsSection from '@/components/home/PlatformsSection'
import InfrastructureSection from '@/components/home/InfrastructureSection'
import AudienceSection from '@/components/home/AudienceSection'
import CtaSection from '@/components/home/CtaSection'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HeroSection />
      <PlatformsSection />
      <InfrastructureSection />
      <AudienceSection />
      <CtaSection />
    </>
  )
}
