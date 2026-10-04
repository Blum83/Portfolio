import { tools } from '@/lib/tools'
import ToolCard from './ToolCard'

export default function Tools() {
  return (
    <section id="tools" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-violet-400 mb-3">{'// side projects'}</div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-slate-400 max-w-xl">
            When the right tool doesn&apos;t exist, I build it. Open-source QA utilities I made to solve real problems on real projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
