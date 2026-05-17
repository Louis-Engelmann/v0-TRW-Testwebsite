'use client'

import { motion } from 'framer-motion'

export function ShaftSvg() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.2
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      }
    }
  }

  return (
    <motion.svg
      viewBox="0 0 200 80"
      className="w-40 sm:w-48 lg:w-56 h-auto"
      role="img"
      aria-label="Technical illustration of precision-turned shaft with chamfered ends"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {/* Definitions for gradients */}
      <defs>
        <linearGradient id="shaftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A55" />
          <stop offset="50%" stopColor="#3A3A45" />
          <stop offset="100%" stopColor="#2E2E38" />
        </linearGradient>
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A5A65" />
          <stop offset="100%" stopColor="#4A4A55" />
        </linearGradient>
      </defs>

      {/* Center line (technical drawing style) */}
      <motion.line
        x1="5" y1="40" x2="195" y2="40"
        stroke="#A0A0A8" strokeWidth="0.5" strokeDasharray="8 3 2 3"
        variants={draw} custom={0}
      />

      {/* Main cylinder body */}
      <motion.rect
        x="25" y="22" width="150" height="36" rx="2"
        fill="url(#shaftGradient)" stroke="#A0A0A8" strokeWidth="1"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />

      {/* Top highlight line */}
      <motion.rect
        x="25" y="22" width="150" height="8" rx="2"
        fill="url(#highlightGradient)" opacity="0.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />

      {/* Left chamfer end */}
      <motion.path
        d="M25 22 L15 30 L15 50 L25 58"
        fill="url(#shaftGradient)" stroke="#A0A0A8" strokeWidth="1" strokeLinejoin="round"
        variants={draw} custom={1}
      />

      {/* Right chamfer end */}
      <motion.path
        d="M175 22 L185 30 L185 50 L175 58"
        fill="url(#shaftGradient)" stroke="#A0A0A8" strokeWidth="1" strokeLinejoin="round"
        variants={draw} custom={1}
      />

      {/* Dimension lines - left */}
      <motion.line x1="15" y1="68" x2="185" y2="68" stroke="#A0A0A8" strokeWidth="0.5" variants={draw} custom={2} />
      <motion.line x1="15" y1="65" x2="15" y2="71" stroke="#A0A0A8" strokeWidth="0.5" variants={draw} custom={2} />
      <motion.line x1="185" y1="65" x2="185" y2="71" stroke="#A0A0A8" strokeWidth="0.5" variants={draw} custom={2} />
      
      {/* Dimension text */}
      <motion.text 
        x="100" y="76" textAnchor="middle" fill="#A0A0A8" fontSize="8" className="font-mono"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }}
      >
        124 mm
      </motion.text>

      {/* Diameter indicator */}
      <motion.line x1="100" y1="12" x2="100" y2="22" stroke="#A0A0A8" strokeWidth="0.5" variants={draw} custom={3} />
      <motion.text 
        x="100" y="10" textAnchor="middle" fill="#A0A0A8" fontSize="7" className="font-mono"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }}
      >
        Ø 18
      </motion.text>
    </motion.svg>
  )
}
