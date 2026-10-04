'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Network, ShieldCheck, Workflow, type LucideIcon } from 'lucide-react'
import { Chip, IconTile, SectionHeader, container } from './ui'

interface WorkItem {
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
}

const items: WorkItem[] = [
  {
    title: 'Agentic QA pipeline',
    description:
      'A multi-agent Claude Code pipeline that turns a Jira ticket and its PR into an evidence-backed QA verdict. It builds an acceptance-criteria checklist, sub-agents run the UI, DB and log checks, and results sync to Qase and Jira.',
    tags: ['Claude Code', 'Sub-agents', 'Jira', 'Qase'],
    icon: Workflow,
  },
  {
    title: 'Side-effect risk analysis',
    description:
      'An agent that maps how a code change ripples through microservices and message queues, scores each risk and holds the verdict while blocking risks stay open.',
    tags: ['Microservices', 'SQS', 'RabbitMQ'],
    icon: Network,
  },
  {
    title: 'AI-assisted test automation',
    description:
      'Qase cases become Playwright specs on the cheapest viable layer, with live selector discovery, lint and typecheck gates and auto-opened PRs. It also flags test cases made stale by new merges.',
    tags: ['Playwright', 'TypeScript', 'CI'],
    icon: FlaskConical,
  },
  {
    title: 'MCP servers & guardrails',
    description:
      'Custom MCP servers for evidence upload and read-only DB access, hooks that block unsafe tool calls, and checks that reject AI verdicts without real evidence.',
    tags: ['MCP', 'TypeScript', 'Python', 'PostgreSQL'],
    icon: ShieldCheck,
  },
]

export default function AiQa() {
  return (
    <section id="ai-qa" className="pt-[72px] pb-2 lg:pt-[104px] lg:pb-4">
      <div className={container}>
        <SectionHeader
          label="// ai-augmented qa"
          title="What I build at work"
          intro="At OnlyMonster I build QA infrastructure where AI agents do the repetitive verification and I design, guard and review their work. The code is private, so here is what it does."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.55, ease: 'easeOut' }}
              className="flex flex-col gap-5 rounded-xl border border-line bg-surface p-6 lg:p-7 transition-colors hover:border-accent-light/25"
            >
              <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
                <IconTile icon={item.icon} color="#a78bfa" />
                <h3 className="font-heading text-[22px] lg:text-2xl font-bold leading-[1.2] text-ink">{item.title}</h3>
              </div>
              <p className="font-mono text-xs leading-[1.8] text-muted">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
