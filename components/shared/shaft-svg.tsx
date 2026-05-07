export function ShaftSvg() {
  return (
    <svg
      viewBox="0 0 200 80"
      className="w-40 sm:w-48 lg:w-56 h-auto"
      role="img"
      aria-label="Technical illustration of precision-turned shaft with chamfered ends"
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
      <line
        x1="5"
        y1="40"
        x2="195"
        y2="40"
        stroke="#A0A0A8"
        strokeWidth="0.5"
        strokeDasharray="8 3 2 3"
      />

      {/* Main cylinder body */}
      <rect
        x="25"
        y="22"
        width="150"
        height="36"
        rx="2"
        fill="url(#shaftGradient)"
        stroke="#A0A0A8"
        strokeWidth="1"
      />

      {/* Top highlight line */}
      <rect
        x="25"
        y="22"
        width="150"
        height="8"
        rx="2"
        fill="url(#highlightGradient)"
        opacity="0.5"
      />

      {/* Left chamfer end */}
      <path
        d="M25 22 L15 30 L15 50 L25 58"
        fill="url(#shaftGradient)"
        stroke="#A0A0A8"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Right chamfer end */}
      <path
        d="M175 22 L185 30 L185 50 L175 58"
        fill="url(#shaftGradient)"
        stroke="#A0A0A8"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Dimension lines - left */}
      <line x1="15" y1="68" x2="185" y2="68" stroke="#A0A0A8" strokeWidth="0.5" />
      <line x1="15" y1="65" x2="15" y2="71" stroke="#A0A0A8" strokeWidth="0.5" />
      <line x1="185" y1="65" x2="185" y2="71" stroke="#A0A0A8" strokeWidth="0.5" />
      
      {/* Dimension text */}
      <text x="100" y="76" textAnchor="middle" fill="#A0A0A8" fontSize="8" fontFamily="Inter, sans-serif">
        124 mm
      </text>

      {/* Diameter indicator */}
      <line x1="100" y1="12" x2="100" y2="22" stroke="#A0A0A8" strokeWidth="0.5" />
      <text x="100" y="10" textAnchor="middle" fill="#A0A0A8" fontSize="7" fontFamily="Inter, sans-serif">
        Ø 18
      </text>
    </svg>
  )
}
