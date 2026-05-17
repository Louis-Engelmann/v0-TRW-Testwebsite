'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '150+', label: 'OEM Clients' },
  { value: '±0.005mm', label: 'Tolerance' },
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
              Precision-Turned Parts for Automotive Excellence
            </h1>
            
            <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
              German engineering meets modern CNC technology. We manufacture complex turned components for OEMs and Tier-1 suppliers with tolerances as tight as ±0.003mm.
            </p>

            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg text-base font-medium hover:bg-accent/90 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request a Part Quote
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center sm:items-start ${
                    index > 0 ? 'sm:pl-8 sm:border-l sm:border-border' : ''
                  } ${index < stats.length - 1 ? 'sm:pr-8' : ''}`}
                >
                  <span className="font-mono text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
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
              {/* Placeholder for hero image */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-surface/80 to-surface/20 flex items-center justify-center"
                role="img"
                aria-label="Precision CNC machining center producing automotive components"
              >
                <div className="text-center text-muted">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-border/50 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <svg className="w-8 h-8 text-muted/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium tracking-tight">Technical Image Area</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
