'use client'

import { motion } from 'framer-motion'
import type { Tool } from '@/lib/tools'

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
      transition={{ delay: index * 0.1, duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl border border-white/8 bg-[#0d1117] p-6 flex flex-col gap-5 overflow-hidden transition-shadow duration-300"
    >
      {/* Top border glow on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)` }}
      />
      {/* Corner glow */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: tool.glowColor }}
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold border"
          style={{
            borderColor: `${tool.color}30`,
            background: `${tool.color}15`,
            color: tool.color,
          }}
        >
          {tool.icon}
        </div>
        <span className={`font-mono text-xs px-2 py-1 rounded border ${tool.tagColor}`}>
          {tool.tag}
        </span>
      </div>

      {/* Name + description */}
      <div>
        <h3 className="font-heading text-xl font-bold text-white mb-2">{tool.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2 flex-1">
        {tool.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 text-sm text-slate-400">
            <span style={{ color: tool.color }} className="mt-0.5 shrink-0 text-xs">▸</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-3 pt-1">
        <a
          href={tool.liveUrl}
          className="flex-1 py-2 rounded text-center font-mono text-xs font-medium transition-all border"
          style={{
            borderColor: `${tool.color}40`,
            color: tool.color,
            background: `${tool.color}10`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = `${tool.color}25`
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = `${tool.color}10`
          }}
        >
          Try it live
        </a>
        <a
          href={tool.githubUrl}
          className="flex-1 py-2 rounded text-center font-mono text-xs font-medium border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  )
}
