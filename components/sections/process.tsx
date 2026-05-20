'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Submit Inquiry',
    description:
      'Share your part specifications, drawings, and requirements through our online form or direct contact.',
  },
  {
    number: '02',
    title: 'Engineering Review',
    description:
      'We evaluate manufacturability, suggest optimizations, and provide a detailed quote based on your requirements.',
  },
  {
    number: '03',
    title: 'Production & Delivery',
    description:
      'Precision manufacturing with defined quality checkpoints, followed by predictable delivery and communication.',
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-16 lg:py-20 bg-surface/50 border-y border-white/5"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="process-heading"
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
          >
            How It Works
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            From inquiry to delivery, our streamlined process ensures efficiency and transparency.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="relative text-center lg:text-left"
              >
                {/* Background number */}
                <div className="absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 font-mono text-8xl font-bold tracking-tight text-white/5 select-none pointer-events-none">
                  {step.number}
                </div>

                {/* Step indicator circle */}
                <div className="relative z-10 w-12 h-12 mx-auto lg:mx-0 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold mb-6">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
