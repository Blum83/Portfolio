'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

interface StatItem {
  numericValue: number | null
  label: string
  suffix?: string
  infinite?: boolean
}

const stats: StatItem[] = [
  { numericValue: 4.5, label: 'Years Experience', suffix: ' yrs' },
  { numericValue: 4, label: 'Tools Built' },
  { numericValue: 3, label: 'Testing Domains' },
  { numericValue: null, label: 'Bugs Caught', infinite: true },
]

function AnimatedValue({ value, suffix = '', isFloat = false }: { value: number; suffix?: string; isFloat?: boolean }) {
  const motionVal = useMotionValue(0)
  const displayed = useTransform(motionVal, (v) =>
    isFloat ? v.toFixed(1) + suffix : Math.round(v).toString() + suffix
  )
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
              className={`py-10 px-6 text-center ${i < stats.length - 1 ? 'border-r border-white/5' : ''}`}
            >
              <div className="font-mono text-3xl font-bold text-white mb-1">
                {stat.infinite ? (
                  <span>∞</span>
                ) : (
                  <AnimatedValue
                    value={stat.numericValue!}
                    suffix={stat.suffix}
                    isFloat={stat.numericValue === 4.5}
                  />
                )}
              </div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
