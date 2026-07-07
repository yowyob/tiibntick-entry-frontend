import clsx from 'clsx'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from '@/i18n/navigation'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

type BaseProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string
    external?: boolean
  }

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx(variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  href,
  external,
  ...props
}: LinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(variants[variant], className)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={clsx(variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
