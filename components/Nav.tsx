'use client'

import { motion } from 'framer-motion'
import { container } from './ui'

const links = [
  { label: 'AI QA', href: '#ai-qa' },
  { label: 'Projects', href: '#tools' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Availability() {
  return (
    <div className="flex items-center gap-2 px-3 py-[7px] rounded-full border border-emerald-500/[0.19] bg-emerald-500/[0.09]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
      </span>
      <span className="font-mono text-[10px] lg:text-[11px] text-emerald-500">Available for work</span>
    </div>
  )
}

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-line backdrop-blur-md bg-background/85"
    >
      <div className={`${container} flex flex-col gap-6 py-[22px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-[26px]`}>
        <div className="flex items-center justify-between">
          <a href="/" className="font-mono font-bold text-base lg:text-xl text-ink hover:text-accent-light transition-colors">
            ~/valentyn
          </a>
          <div className="lg:hidden">
            <Availability />
          </div>
        </div>

        <div className="flex items-center justify-between lg:justify-center lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Availability />
        </div>
      </div>
    </motion.nav>
  )
}
