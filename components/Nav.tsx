'use client'

import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#080c10]/80"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-mono text-sm text-violet-400 hover:text-violet-300 transition-colors">
          <span className="text-slate-500">~/</span>qa-engineer
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {['Tools', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-sm text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Status pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-emerald-400">Available for work</span>
        </div>
      </div>
    </motion.nav>
  )
}
