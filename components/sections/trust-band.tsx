'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const logos = [
  { name: 'Automotive Partner 1' },
  { name: 'Automotive Partner 2' },
  { name: 'Automotive Partner 3' },
  { name: 'Automotive Partner 4' },
  { name: 'Automotive Partner 5' },
  { name: 'Automotive Partner 6' },
]

export function TrustBand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="trust"
      aria-label="Trusted by leading manufacturers"
      className="py-12 border-y border-border bg-background"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted mb-8"
        >
          Trusted by leading automotive manufacturers
        </motion.p>

        {/* Desktop: Flex wrap / Mobile: Horizontal scroll with fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Fade gradients for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none lg:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none lg:hidden" />

          {/* Logos container */}
          <div className="flex lg:flex-wrap lg:justify-center gap-8 lg:gap-12 overflow-x-auto lg:overflow-visible scrollbar-hide px-4 lg:px-0">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-10 w-24 rounded bg-border/30 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                role="img"
                aria-label={`${logo.name} logo placeholder`}
              >
                <span className="text-xs text-muted">Logo {index + 1}</span>
              </div>
            ))}
          </div>

          {/* Trust & Compliance Badges */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 sm:gap-10">
            {['ISO 9001:2015', 'RoHS Compliant', 'REACH Certified'].map((cert) => (
              <div key={cert} className="flex items-center gap-3 text-sm font-medium tracking-tight text-muted hover:text-foreground transition-colors cursor-default">
                <div className="w-10 h-10 rounded-full bg-surface/80 border border-white/5 shadow-[0_4px_15px_rgb(0,0,0,0.1)] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <span className="font-mono">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
