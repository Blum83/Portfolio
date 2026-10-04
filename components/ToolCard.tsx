'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Tool } from '@/lib/tools'
import { ButtonLink, IconTile } from './ui'

interface ToolCardProps {
  tool: Tool
  index: number
}

export default function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.55, ease: 'easeOut' }}
      className="flex flex-col gap-5 rounded-xl border border-line bg-surface p-6 lg:p-7 lg:min-h-[370px] transition-colors hover:border-white/[0.14]"
    >
      {/* Icon + category */}
      <div className="flex items-center justify-between gap-3">
        <IconTile icon={tool.icon} color={tool.color} />
        <span
          className="font-mono text-[10px] px-[9px] py-1.5 rounded border whitespace-nowrap"
          style={{ color: tool.color, background: `${tool.color}0a`, borderColor: `${tool.color}26` }}
        >
          {tool.tag}
        </span>
      </div>

      {/* Name + description */}
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-[22px] lg:text-[26px] font-bold leading-[1.2] text-ink">{tool.name}</h3>
        <p className="font-mono text-xs leading-[1.8] text-muted">{tool.description}</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-[9px]">
        {tool.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 font-mono text-[11px] leading-[1.65] text-muted">
            <span style={{ color: tool.color }} className="shrink-0">▸</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* Links */}
      {(tool.liveUrl || tool.githubUrl) && (
        <div className="flex flex-wrap gap-3 pt-1">
          {tool.liveUrl && (
            <ButtonLink href={tool.liveUrl} target="_blank" rel="noopener noreferrer" icon={ArrowUpRight} size="sm">
              {tool.liveLabel ?? 'Try it live'}
            </ButtonLink>
          )}
          {tool.githubUrl && (
            <ButtonLink href={tool.githubUrl} target="_blank" rel="noopener noreferrer" icon={Github} size="sm">
              GitHub
            </ButtonLink>
          )}
        </div>
      )}
    </motion.div>
  )
}
