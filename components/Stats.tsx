'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

interface StatItem {
  numericValue: number | null
  label: string
  suffix?: string
  note?: string
  infinite?: boolean
}

const stats: StatItem[] = [
  { numericValue: 5, label: 'Yrs in QA', suffix: '+' },
  { numericValue: 6, label: 'Tools Built' },
  { numericValue: 3, label: 'Platforms', note: 'Web · Desktop · Mobile' },
  { numericValue: null, label: 'Bugs Caught', infinite: true },
]

function AnimatedValue({ value, suffix = '' }: { value: number; suffix?: string }) {
  const motionVal = useMotionValue(0)
  const displayed = useTransform(motionVal, (v) => Math.round(v).toString() + suffix)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, { duration: 1.5, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView, value, motionVal])

  return (
    <span ref={ref}>
      <motion.span>{displayed}</motion.span>
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`py-10 px-6 text-center border-white/5 ${i % 2 === 0 ? 'border-r' : i < stats.length - 1 ? 'md:border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''}`}
            >
              <div className="font-mono text-3xl font-bold text-white mb-1">
                {stat.infinite ? (
                  <span>∞</span>
                ) : (
                  <AnimatedValue value={stat.numericValue!} suffix={stat.suffix} />
                )}
              </div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              {stat.note && <div className="font-mono text-[11px] text-slate-600 mt-1">{stat.note}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
