import {
  Link2,
  Zap,
  Building2,
  MapPin,
  Bike,
  Store,
  Search,
  Cpu,
  Shield,
  Gift,
  Home,
  Bus,
  ShoppingBag,
  Handshake,
  Check,
} from 'lucide-react'
import type { PlatformSlug } from './platforms'
import type { AccountTypeId } from './platforms'

export function usePlatformIcons() {
  const icons: Record<PlatformSlug, typeof Link2> = {
    link: Link2,
    go: Zap,
    agency: Building2,
    point: MapPin,
    freelancer: Bike,
    market: Store,
  }
  return icons
}

export function useInfrastructureIcons() {
  return {
    search: Search,
    core: Cpu,
    confidence: Shield,
  }
}

export function useAccountTypeIcons() {
  const icons: Record<AccountTypeId, typeof Gift> = {
    particulier: Gift,
    freelance: Bike,
    pointRelais: Home,
    agence: Bus,
    commercant: ShoppingBag,
    entreprise: Handshake,
  }
  return icons
}

export { Check }
