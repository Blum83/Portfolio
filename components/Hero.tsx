'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-6">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1 rounded border border-violet-500/30 bg-violet-500/10"
            >
              <span className="text-violet-400 font-mono text-xs">▸</span>
              <span className="text-violet-300 font-mono text-xs tracking-wider uppercase">QA Engineer</span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Breaking things
              <br />
              <span className="text-violet-400">so users don&apos;t.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              I build automation frameworks, performance tooling, and browser extensions that make quality a first-class citizen — not an afterthought.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#tools"
                className="px-6 py-3 rounded bg-violet-600 hover:bg-violet-500 text-white font-mono text-sm transition-colors"
              >
                See my tools
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded border border-white/10 hover:border-violet-500/50 text-slate-300 hover:text-white font-mono text-sm transition-all"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right column — terminal card */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="rounded-xl border border-white/8 bg-[#0d1117] overflow-hidden shadow-2xl shadow-violet-500/10">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#161b22]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <span className="font-mono text-xs text-slate-500 ml-2">terminal</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-1">
                <div className="text-slate-500">$ cat experience.json</div>
                <div className="text-slate-300 mt-2">{`{`}</div>
                <div className="pl-4 text-slate-400">
                  <span className="text-violet-400">&quot;role&quot;</span>: <span className="text-emerald-400">&quot;QA Engineer&quot;</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-violet-400">&quot;experience&quot;</span>: <span className="text-orange-400">&quot;4.5 years&quot;</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-violet-400">&quot;tools_built&quot;</span>: <span className="text-orange-400">4</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-violet-400">&quot;domains&quot;</span>: [<span className="text-emerald-400">&quot;web&quot;</span>, <span className="text-emerald-400">&quot;api&quot;</span>, <span className="text-emerald-400">&quot;performance&quot;</span>],
                </div>
                <div className="pl-4 text-slate-400">
                  <span className="text-violet-400">&quot;status&quot;</span>: <span className="text-emerald-400">&quot;available&quot;</span>
                </div>
                <div className="text-slate-300">{`}`}</div>

                <div className="mt-4 text-slate-500">$ npx playwright test</div>
                <div className="text-slate-400 mt-1">Running 47 tests using 4 workers</div>
                <div className="mt-1 space-y-0.5">
                  {[200, 450, 612].map((ms, i) => (
                    <div key={i} className="text-emerald-400">
                      {'  '}✓ test suite {i + 1} ({ms}ms)
                    </div>
                  ))}
                  <div className="text-emerald-400">{'  '}✓ ... 44 more passing</div>
                </div>
                <div className="mt-2 text-emerald-400 font-semibold">
                  47 passed (12s)
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-slate-500">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-violet-400"
                  />
                </div>
              </div>
            </div>

            {/* Glow behind terminal */}
            <div className="absolute -inset-1 bg-violet-500/10 rounded-xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
