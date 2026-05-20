'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const proofPoints = [
  { title: 'ISO 9001:2015', subtitle: 'Quality Management' },
  { title: 'Inspection-first', subtitle: 'In-process + final checks' },
  { title: 'Supplier-ready', subtitle: 'Documentation & traceability' },
]

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-1"
          >
            <h1
              id="hero-heading"
              className="text-[clamp(2rem,6vw,4rem)] font-bold text-foreground leading-tight tracking-tight text-balance"
            >
              Precision-turned components for automotive supply chains
            </h1>
            
            <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
              CNC turning with an inspection-first process—built for repeatability,
              documentation, and stable tolerances across production runs.
            </p>

            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg text-base font-medium hover:bg-accent/90 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Talk to Sales Engineering
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Proof points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0"
            >
              {proofPoints.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col items-center sm:items-start ${
                    index > 0 ? 'sm:pl-8 sm:border-l sm:border-border' : ''
                  } ${index < proofPoints.length - 1 ? 'sm:pr-8' : ''}`}
                >
                  <span className="font-mono text-base sm:text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </span>
                  <span className="text-sm text-muted">{item.subtitle}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="order-2 lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface/50 border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm">
              {/* Decorative visual plate (swap with real photo/video later) */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface/80 to-surface/20" aria-hidden="true">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border border-white/10 bg-background/10 px-5 py-2 text-xs font-mono tracking-tight text-muted">
                    Inspection-first • repeatable runs • supplier-ready docs
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
