'use client'

import { motion } from 'framer-motion'

interface SkillGroup {
  title: string
  icon: string
  skills: { name: string; primary?: boolean }[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Agents',
    icon: '✦',
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
    icon: '◈',
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
    icon: '◎',
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
    icon: '⬡',
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
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="font-mono text-xs text-violet-400 mb-3">// skills</div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            What I work with
          </h2>
          <p className="text-slate-400 max-w-xl">
            A toolkit built over 5+ years of testing web, desktop, mobile and APIs, now extended with AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/8 bg-[#0d1117] p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-violet-400 text-lg">{group.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`font-mono text-xs px-3 py-1.5 rounded border transition-colors ${
                      skill.primary
                        ? 'bg-violet-500/15 border-violet-500/30 text-violet-300'
                        : 'bg-white/[0.04] border-white/8 text-slate-400'
                    }`}
                  >
                    {skill.name}
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
