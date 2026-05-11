'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cog, Gauge, Shield } from 'lucide-react'

const capabilities = [
  {
    icon: Cog,
    title: 'CNC Turning',
    description:
      'Multi-axis precision turning with Swiss-type lathes capable of producing complex geometries in a single setup.',
  },
  {
    icon: Gauge,
    title: 'Tight Tolerances',
    description:
      'Achieving ±0.003mm tolerances consistently with advanced metrology and in-process quality controls.',
  },
  {
    icon: Shield,
    title: 'Material Expertise',
    description:
      'Stainless steel, titanium, aluminum, brass, and exotic alloys processed with optimal parameters.',
  },
]

export function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-16 lg:py-20"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="capabilities-heading"
            className="text-3xl lg:text-4xl font-semibold text-foreground"
          >
            Our Capabilities
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            State-of-the-art manufacturing processes ensuring consistent quality and precision for every component.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="bg-surface rounded-xl p-6 hover:shadow-lg hover:shadow-black/20 transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
