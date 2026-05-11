'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShaftSvg } from '@/components/shared/shaft-svg'

const specs = [
  { name: 'Material', value: '17-4 PH Stainless' },
  { name: 'Diameter', value: 'Ø 18 mm ±0.003' },
  { name: 'Length', value: '124 mm ±0.01' },
  { name: 'Surface Finish', value: 'Ra 0.4 µm' },
  { name: 'Heat Treatment', value: 'H1025 Condition' },
  { name: 'Quantity', value: '8,000 pcs / year' },
]

export function Precision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  return (
    <section
      id="precision"
      aria-labelledby="precision-heading"
      className="py-16 lg:py-20"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-surface rounded-xl p-8 sm:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-[35%_65%] gap-8 lg:gap-16 items-center">
            {/* Left Column: Shaft Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <ShaftSvg />
            </motion.div>

            {/* Right Column: Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="pr-4 sm:pr-8 lg:pr-12"
            >
              <h2
                id="precision-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground"
              >
                Precision Turned Shaft
              </h2>
              <p className="mt-2 text-sm text-muted">
                Sample Part Specification
              </p>

              <div className="mt-8 space-y-0">
                {specs.map((spec, index) => (
                  <div
                    key={spec.name}
                    className={`flex justify-between items-center py-3 ${
                      index < specs.length - 1 ? 'border-b border-border/30' : ''
                    }`}
                  >
                    <span className="text-sm text-muted">{spec.name}</span>
                    <span className="text-sm font-medium text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
