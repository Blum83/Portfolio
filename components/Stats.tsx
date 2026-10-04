'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { container } from './ui'

interface StatItem {
  numericValue: number | null
  label: string
  suffix?: string
  infinite?: boolean
}

const stats: StatItem[] = [
  { numericValue: 5, label: 'Years in QA', suffix: '+ yrs' },
  { numericValue: 6, label: 'Tools built' },
  { numericValue: 3, label: 'Platforms: Web · Desktop · Mobile' },
  { numericValue: null, label: 'Bugs caught', infinite: true },
]

// Dividers: 2×2 grid on mobile, single row of four on desktop
const cellBorders = ['', 'border-l pl-5 lg:pl-8', 'lg:border-l lg:pl-8', 'border-l pl-5 lg:pl-8']

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
    <section ref={ref} className={container}>
      <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-line py-2 lg:py-[34px]">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`flex flex-col gap-2.5 py-6 pr-4 lg:py-0 border-line ${cellBorders[i]}`}
          >
            <div className="font-heading text-[32px] lg:text-[40px] font-bold leading-[1.1] text-ink">
              {stat.infinite ? '∞' : <AnimatedValue value={stat.numericValue!} suffix={stat.suffix} />}
            </div>
            <div className="font-mono text-[10px] lg:text-[11px] leading-[1.6] text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
