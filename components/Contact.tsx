'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Send } from 'lucide-react'
import { ButtonLink, container } from './ui'

const links = [
  { label: 'Telegram', icon: Send, href: 'https://t.me/blumination' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/blumination' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/Blum83' },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line pt-16 lg:pt-20">
      <div className={container}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6 lg:items-center lg:text-center"
        >
          <div className="font-mono text-xs text-accent-light">{'// contact'}</div>
          <h2 className="font-heading text-[37px] lg:text-[52px] font-bold leading-[1.1] text-ink">
            Open to opportunities
          </h2>
          <p className="max-w-[640px] font-mono text-xs leading-[1.9] text-muted">
            Looking for a QA engineer who ships AI tooling and automation, not just bug reports? Telegram is the fastest way to reach me.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 lg:justify-center">
            <ButtonLink href="mailto:stuartblum5@gmail.com" icon={Mail} variant="primary">
              Email
            </ButtonLink>
            {links.map((link) => (
              <ButtonLink key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" icon={link.icon}>
                {link.label}
              </ButtonLink>
            ))}
            <ButtonLink href="/cv/Valentyn_Korobeinikov_CV.pdf" download icon={Download}>
              Download CV
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
