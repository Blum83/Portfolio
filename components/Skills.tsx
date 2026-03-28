'use client'

import { motion } from 'framer-motion'

interface SkillGroup {
  title: string
  icon: string
  skills: { name: string; primary?: boolean }[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Testing',
    icon: '◈',
    skills: [
      { name: 'Playwright', primary: true },
      { name: 'Postman', primary: true },
      { name: 'API Testing', primary: true },
      { name: 'Manual QA' },
      { name: 'Mobile Testing' },
      { name: 'E2E Testing' },
    ],
  },
  {
    title: 'Tools',
    icon: '⬡',
    skills: [
      { name: 'Jira', primary: true },
      { name: 'Confluence' },
      { name: 'Git', primary: true },
      { name: 'Chrome DevTools', primary: true },
      { name: 'Lighthouse' },
    ],
  },
  {
    title: 'Development',
    icon: '◎',
    skills: [
      { name: 'TypeScript', primary: true },
      { name: 'JavaScript', primary: true },
      { name: 'Node.js', primary: true },
      { name: 'HTML/CSS' },
      { name: 'REST API' },
    ],
  },
  {
    title: 'Domains',
    icon: '▲',
    skills: [
      { name: 'Web', primary: true },
      { name: 'Mobile' },
      { name: 'API', primary: true },
      { name: 'Desktop Apps' },
      { name: 'Performance', primary: true },
      { name: 'Load Testing', primary: true },
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
            A broad toolkit built over 4+ years across web, mobile, API, and performance testing.
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
