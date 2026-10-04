'use client'

import { tools } from '@/lib/tools'
import ToolCard from './ToolCard'
import { SectionHeader, container } from './ui'

export default function Tools() {
  return (
    <section id="tools" className="pt-[72px] pb-2 lg:pt-[104px] lg:pb-4">
      <div className={container}>
        <SectionHeader
          label="// side projects"
          title="Side projects"
          intro="When the right tool doesn't exist, I build it. Open-source QA utilities I made to solve real problems on real projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
