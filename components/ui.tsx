import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export const container = 'mx-auto w-full max-w-[1440px] px-6 lg:px-24'

export function SectionHeader({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="flex flex-col gap-[18px] mb-10">
      <div className="font-mono text-xs text-accent-light">{label}</div>
      <h2 className="font-heading text-[32px] lg:text-[42px] font-bold leading-[1.12] text-ink">{title}</h2>
      {intro && <p className="max-w-[760px] font-mono text-xs lg:text-sm leading-[1.8] text-muted">{intro}</p>}
    </div>
  )
}

export function Chip({ children, primary = false }: { children: ReactNode; primary?: boolean }) {
  return (
    <span
      className={`font-mono text-[11px] px-2.5 py-1.5 rounded border whitespace-nowrap ${
        primary
          ? 'bg-accent/[0.09] border-accent/[0.22] text-accent-light'
          : 'bg-white/[0.02] border-line text-muted'
      }`}
    >
      {children}
    </span>
  )
}

export function IconTile({ icon: Icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <div
      className="size-11 shrink-0 rounded-xl border flex items-center justify-center"
      style={{ background: `${color}12`, borderColor: `${color}26`, color }}
    >
      <Icon size={22} strokeWidth={1.75} />
    </div>
  )
}

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  icon: LucideIcon
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
}

export function ButtonLink({ icon: Icon, variant = 'secondary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const sizing = size === 'md' ? 'h-12 px-5 text-[13px]' : 'h-[38px] px-3.5 text-xs'
  const look =
    variant === 'primary'
      ? 'bg-accent border-accent shadow-[0_0_24px_rgba(124,58,237,0.25)] hover:bg-violet-500 hover:border-violet-500'
      : 'border-line hover:border-accent-light/40 hover:bg-white/[0.03]'
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center gap-2.5 rounded-md border font-mono font-medium text-ink transition-colors ${sizing} ${look} ${className}`}
    >
      <Icon size={16} strokeWidth={1.75} />
      {children}
    </a>
  )
}
