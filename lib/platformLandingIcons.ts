import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Banknote,
  BarChart3,
  Bell,
  Bike,
  Briefcase,
  Building2,
  CheckSquare,
  Clock,
  Coins,
  CreditCard,
  Eye,
  FileText,
  GitBranch,
  Handshake,
  LayoutDashboard,
  Layers,
  Link2,
  ListOrdered,
  Map,
  MapPin,
  MapPinned,
  Megaphone,
  Monitor,
  MousePointerClick,
  Navigation,
  Package,
  PackageCheck,
  PackageSearch,
  QrCode,
  Radio,
  Route,
  Scale,
  ScanLine,
  Search,
  Shield,
  Signal,
  Smartphone,
  Star,
  Store,
  Truck,
  User,
  UserPlus,
  Users,
  Wallet,
  WifiOff,
} from 'lucide-react'
import type { PlatformSlug } from './platforms'

export type PlatformLandingIcons = {
  trust: readonly LucideIcon[]
  innovation: readonly LucideIcon[]
  workflow: readonly LucideIcon[]
  heroCard: LucideIcon
  secondaryCta: LucideIcon
}

export const PLATFORM_LANDING_ICONS: Record<PlatformSlug, PlatformLandingIcons> = {
  link: {
    trust: [Shield, Clock, MapPin, Signal, Smartphone],
    innovation: [MapPinned, Store, Smartphone, Route],
    workflow: [QrCode, PackageCheck, Truck, Bell],
    heroCard: QrCode,
    secondaryCta: MapPin,
  },
  go: {
    trust: [GitBranch, Clock, MapPin],
    innovation: [Megaphone, Eye, Link2, Users],
    workflow: [Megaphone, Handshake, Package, PackageCheck],
    heroCard: GitBranch,
    secondaryCta: Eye,
  },
  agency: {
    trust: [Layers, WifiOff, Radio],
    innovation: [LayoutDashboard, Smartphone, FileText, Truck],
    workflow: [Building2, Users, Package, Monitor],
    heroCard: LayoutDashboard,
    secondaryCta: ArrowRight,
  },
  point: {
    trust: [Store, Clock, Coins],
    innovation: [ScanLine, Users, Wallet, BarChart3],
    workflow: [UserPlus, CheckSquare, Package, Banknote],
    heroCard: Store,
    secondaryCta: FileText,
  },
  freelancer: {
    trust: [Award, Navigation, Wallet],
    innovation: [User, Briefcase, Navigation, CreditCard],
    workflow: [UserPlus, Bell, Bike, Wallet],
    heroCard: Bike,
    secondaryCta: Briefcase,
  },
  market: {
    trust: [Eye, Route, Search],
    innovation: [Search, PackageSearch, Scale, Map],
    workflow: [Search, ListOrdered, MousePointerClick, Star],
    heroCard: Layers,
    secondaryCta: Building2,
  },
}

export { ArrowLeft, ArrowRight }
