import { CheckCircle2, ShieldCheck } from 'lucide-react'

const industries = [
  'Powertrain',
  'Sensors',
  'Fasteners',
  'EV thermal',
  'Fluid systems',
  'Precision shafts',
]

const signals = [
  { title: 'ISO 9001-aligned QMS', subtitle: 'Certificate available on request', icon: ShieldCheck },
  { title: 'In-process & final inspection', subtitle: 'Built into every run', icon: CheckCircle2 },
  { title: 'Inspection reports available', subtitle: 'For supplier qualification', icon: CheckCircle2 },
  { title: 'Lot traceability (where required)', subtitle: 'Material & process records', icon: CheckCircle2 },
]

export function TrustBand() {
  return (
    <section
      id="trust"
      aria-label="Industries served and quality signals"
      className="py-12 border-y border-border bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted mb-8">
          Built for supplier qualification: clear scope, controlled process, and documentation.
        </p>

        <div className="space-y-10">
          {/* Row A: Industries served */}
          <div>
            <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-4">
              Industries served
            </p>
            <div className="relative">
              <div
                className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none lg:hidden"
                aria-hidden="true"
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none lg:hidden"
                aria-hidden="true"
              />

              <div className="flex lg:flex-wrap lg:justify-center gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide px-4 lg:px-0">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex-shrink-0 rounded-full bg-surface/80 border border-white/5 px-4 py-2 text-xs font-medium tracking-tight text-foreground/90"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row B: Quality & process signals */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-6">
              Quality and process signals
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {signals.map((signal) => {
                const Icon = signal.icon
                return (
                  <div
                    key={signal.title}
                    className="bg-surface/70 border border-white/5 rounded-xl px-4 py-4 flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-surface/80 border border-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-foreground">
                        {signal.title}
                      </p>
                      <p className="mt-1 text-xs text-muted leading-relaxed">
                        {signal.subtitle}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
