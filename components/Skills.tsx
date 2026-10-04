'use client'

import { motion } from 'framer-motion'
import { CheckCheck, CodeXml, Sparkles, Wrench, type LucideIcon } from 'lucide-react'
import { Chip, SectionHeader, container } from './ui'

interface SkillGroup {
  title: string
  icon: LucideIcon
  skills: { name: string; primary?: boolean }[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Agents',
    icon: Sparkles,
    skills: [
      { name: 'Claude Code', primary: true },
      { name: 'MCP servers', primary: true },
      { name: 'Sub-agents & skills', primary: true },
      { name: 'Hooks & guardrails' },
      { name: 'Prompt engineering' },
      { name: 'LLM cost analysis' },
    ],
  },
  {
    title: 'Testing',
    icon: CheckCheck,
    skills: [
      { name: 'Playwright', primary: true },
      { name: 'API Testing', primary: true },
      { name: 'Postman/Newman', primary: true },
      { name: 'Manual QA' },
      { name: 'Mobile (Android/iOS)' },
      { name: 'Electron' },
      { name: 'k6/Gatling' },
      { name: 'Lighthouse' },
    ],
  },
  {
    title: 'Development',
    icon: CodeXml,
    skills: [
      { name: 'TypeScript', primary: true },
      { name: 'JavaScript/Node.js', primary: true },
      { name: 'SQL/PostgreSQL', primary: true },
      { name: 'Python' },
      { name: 'Bash' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Tools & Infra',
    icon: Wrench,
    skills: [
      { name: 'Qase', primary: true },
      { name: 'Jira', primary: true },
      { name: 'GitHub Actions', primary: true },
      { name: 'Confluence' },
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Grafana' },
      { name: 'Chrome DevTools/CDP' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="pt-[72px] pb-16 lg:py-[104px]">
      <div className={container}>
        <SectionHeader
          label="// skills"
          title="What I work with"
          intro="A toolkit built over 5+ years of testing web, desktop, mobile and APIs, now extended with AI agents."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (gi % 2) * 0.1, duration: 0.5 }}
              className="flex flex-col gap-[22px] rounded-xl border border-line bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <group.icon size={18} strokeWidth={1.75} className="text-accent-light shrink-0" />
                <h3 className="font-heading text-[22px] font-bold text-ink">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Chip key={skill.name} primary={skill.primary}>
                    {skill.name}
                  </Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
