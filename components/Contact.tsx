'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Telegram', icon: '➤', href: 'https://t.me/blumination' },
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/blumination' },
  { label: 'GitHub', icon: '⊛', href: 'https://github.com/Blum83' },
  { label: 'Download CV', icon: '↓', href: '/cv/Valentyn_Korobeinikov_CV.pdf', download: true },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="font-mono text-xs text-violet-400 mb-4">{'// contact'}</div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Open to opportunities
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Looking for a QA engineer who ships AI tooling and automation, not just bug reports? Telegram is the fastest way to reach me.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:stuartblum5@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded bg-violet-600 hover:bg-violet-500 text-white font-mono text-sm transition-colors"
            >
              <span>✉</span>
              Email me
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex items-center gap-2 px-6 py-3 rounded border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white font-mono text-sm transition-all"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
