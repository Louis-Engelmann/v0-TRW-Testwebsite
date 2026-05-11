'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, User } from 'lucide-react'

export function NamedContact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 lg:py-20"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-8"
          >
            Questions? Get in Touch
          </h2>

          <div className="flex flex-col items-center">
            {/* Contact Photo Placeholder */}
            <div
              className="w-20 h-20 rounded-full bg-surface border border-border flex items-center justify-center mb-4"
              role="img"
              aria-label="Thomas Richter, Head of Sales at Veltec Precision"
            >
              <User className="w-8 h-8 text-muted" />
            </div>

            {/* Name and Title */}
            <h3 className="text-lg font-semibold text-foreground">
              Thomas Richter
            </h3>
            <p className="text-sm text-muted mb-6">
              Head of Sales, DACH Region
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a
                href="mailto:t.richter@veltec-precision.de"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                t.richter@veltec-precision.de
              </a>
              <a
                href="tel:+4989123456789"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +49 89 123 456 789
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
