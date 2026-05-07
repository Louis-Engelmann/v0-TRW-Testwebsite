'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    value: '1.2M+',
    label: 'Parts delivered annually',
  },
  {
    value: '99.7%',
    label: 'On-time delivery rate',
  },
  {
    value: 'ISO 9001',
    label: 'Certified quality system',
  },
]

export function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section
      id="social-proof"
      aria-labelledby="stats-heading"
      className="py-20 lg:py-28 bg-background"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="stats-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl lg:text-4xl font-semibold text-foreground mb-12"
        >
          Trusted Performance
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="bg-surface rounded-xl p-6 text-center hover:shadow-lg hover:shadow-black/20 transition-shadow"
            >
              <p className="text-4xl lg:text-5xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
