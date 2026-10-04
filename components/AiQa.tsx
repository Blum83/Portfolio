'use client'

import { motion } from 'framer-motion'

interface WorkItem {
  title: string
  description: string
  tags: string[]
  icon: string
  color: string
  glowColor: string
}

const items: WorkItem[] = [
  {
    title: 'Agentic QA pipeline',
    description:
      'A multi-agent Claude Code pipeline that turns a Jira ticket and its PR into an evidence-backed QA verdict. It builds an acceptance-criteria checklist, sub-agents run the UI, DB and log checks, and results sync to Qase and Jira.',
    tags: ['Claude Code', 'Sub-agents', 'Jira', 'Qase'],
    icon: '◈',
    color: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.4)',
  },
  {
    title: 'Side-effect risk analysis',
    description:
      'An agent that maps how a code change ripples through microservices and message queues, scores each risk and holds the verdict while blocking risks stay open.',
    tags: ['Microservices', 'SQS', 'RabbitMQ'],
    icon: '⚠',
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
  },
  {
    title: 'AI-assisted test automation',
    description:
      'Qase cases become Playwright specs on the cheapest viable layer, with live selector discovery, lint and typecheck gates and auto-opened PRs. It also flags test cases made stale by new merges.',
    tags: ['Playwright', 'TypeScript', 'CI'],
    icon: '▶',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
  },
  {
    title: 'MCP servers & guardrails',
    description:
      'Custom MCP servers for evidence upload and read-only DB access, hooks that block unsafe tool calls, and checks that reject AI verdicts without real evidence.',
    tags: ['MCP', 'TypeScript', 'Python', 'PostgreSQL'],
    icon: '⬢',
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
  },
]

export default function AiQa() {
  return (
    <section id="ai-qa" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-violet-400 mb-3">{'// ai-augmented qa'}</div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            What I build at work
          </h2>
          <p className="text-slate-400 max-w-xl">
            At OnlyMonster I build QA infrastructure where AI agents do the repetitive verification and I design, guard and review their work. The code is private, so here is what it does.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-white/8 bg-[#0d1117] p-6 flex flex-col gap-5 overflow-hidden transition-shadow duration-300"
            >
              {/* Top border glow on hover */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
              />
              {/* Corner glow */}
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: item.glowColor }}
              />

              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold border"
                style={{
                  borderColor: `${item.color}30`,
                  background: `${item.color}15`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded border bg-white/[0.04] border-white/8 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
