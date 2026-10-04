'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ButtonLink, container } from './ui'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const checks = [
  'UI flow verified (screenshots)',
  'DB state matches expected',
  'No errors in service logs',
  'Side-effect risks: 0 blocking',
]

function JsonList({ items }: { items: string[] }) {
  return (
    <>
      [
      {items.map((item, i) => (
        <span key={item}>
          <span className="text-emerald-500">&quot;{item}&quot;</span>
          {i < items.length - 1 && ', '}
        </span>
      ))}
      ]
    </>
  )
}

function JsonKey({ name }: { name: string }) {
  return <span className="text-[#8fcbeb]">&quot;{name}&quot;</span>
}

function Prompt({ command }: { command: string }) {
  return (
    <div className="text-ink leading-[1.7]">
      <span className="text-accent-light">$</span> {command}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-[167px] pb-16 lg:pt-[181px] lg:pb-24">
      <div className={container}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[590px_1fr] lg:gap-14 items-center">
          {/* Left column */}
          <div className="flex flex-col items-start gap-7">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="px-3 py-2 rounded border border-accent/25 bg-accent/[0.09] font-mono text-[10px] lg:text-[11px] text-accent-light"
            >
              AI-AUGMENTED QA ENGINEER
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-heading text-[32px] sm:text-5xl lg:text-[64px] font-bold text-ink leading-[1.12]"
            >
              Breaking things
              <br />
              <span className="text-accent-light">so users don&apos;t.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-mono text-xs lg:text-sm leading-[1.9] text-muted"
            >
              I&apos;m Valentyn, a QA engineer with 5+ years in web, desktop and mobile testing. I build AI agents, MCP servers and Playwright automation that verify every change with evidence, not guesses.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <ButtonLink href="#ai-qa" icon={ArrowDown} variant="primary">
                See what I build
              </ButtonLink>
              <ButtonLink href="#contact" icon={ArrowUpRight}>
                Get in touch
              </ButtonLink>
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-mono text-[10px] text-dim"
            >
              Valentyn Korobeinikov / QA engineer
            </motion.p>
          </div>

          {/* Right column — terminal card */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="min-w-0 rounded-xl border border-line bg-surface overflow-hidden"
          >
            <div className="flex items-center gap-4 h-[46px] px-[18px] border-b border-line">
              <div className="flex gap-1.5">
                <div className="size-[9px] rounded-full bg-[#ff5f57]"></div>
                <div className="size-[9px] rounded-full bg-[#febc2e]"></div>
                <div className="size-[9px] rounded-full bg-[#28c840]"></div>
              </div>
              <span className="font-mono text-[10px] text-dim">valentyn — qa-workspace</span>
            </div>

            <div className="flex flex-col gap-5 p-[18px] lg:p-6 font-mono text-[10px] lg:text-xs">
              <div className="flex flex-col gap-2.5">
                <Prompt command="cat experience.json" />
                <div className="text-muted leading-[1.8]">
                  <div>{'{'}</div>
                  <div className="pl-[2ch]">
                    <JsonKey name="role" />: <span className="text-emerald-500">&quot;AI-Augmented QA&quot;</span>,
                  </div>
                  <div className="pl-[2ch]">
                    <JsonKey name="experience" />: <span className="text-emerald-500">&quot;5+ years&quot;</span>,
                  </div>
                  <div className="pl-[2ch]">
                    <JsonKey name="stack" />: <JsonList items={['claude-code', 'mcp', 'playwright']} />,
                  </div>
                  <div className="pl-[2ch]">
                    <JsonKey name="platforms" />: <JsonList items={['web', 'desktop', 'mobile', 'api']} />,
                  </div>
                  <div className="pl-[2ch]">
                    <JsonKey name="status" />: <span className="text-emerald-500">&quot;available&quot;</span>
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>

              <div className="flex flex-col gap-[9px]">
                <Prompt command="claude /qa-task TASK-1042" />
                <div className="text-muted leading-[1.7]">Checking 6 acceptance criteria with 3 agents</div>
                {checks.map((check) => (
                  <div key={check} className="text-muted leading-[1.6]">
                    <span className="text-emerald-500">✓</span> {check}
                  </div>
                ))}
                <div className="font-bold text-emerald-500 leading-[1.7]">verdict: PASS · evidence attached to Jira</div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-accent-light">$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                  className="inline-block w-[7px] h-[15px] bg-accent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
