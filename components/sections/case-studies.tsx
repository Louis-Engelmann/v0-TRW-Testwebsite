import { FileText, Gauge, ShieldCheck } from 'lucide-react'

const caseStudies = [
  {
    title: 'Anonymized OEM program',
    subtitle: 'Supplier qualification and repeatable production release',
    bullets: [
      { icon: FileText, label: 'Problem', value: 'Documentation-heavy onboarding with clear inspection expectations.' },
      { icon: Gauge, label: 'Constraints', value: 'Tolerance-critical features and stable run-to-run measurements.' },
      { icon: ShieldCheck, label: 'Delivered', value: 'Defined inspection checkpoints and reports to support qualification.' },
    ],
  },
  {
    title: 'Anonymized Tier‑1 component',
    subtitle: 'Tight-fit features with inspection-first process control',
    bullets: [
      { icon: Gauge, label: 'Problem', value: 'Fit and finish requirements that can’t drift across production.' },
      { icon: ShieldCheck, label: 'Constraints', value: 'Process control and measurement discipline over marketing claims.' },
      { icon: FileText, label: 'Delivered', value: 'Supplier-ready documentation and traceability where required.' },
    ],
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="case-studies-heading"
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
          >
            Case studies
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Realistic examples (anonymized) that emphasize constraints, process, and qualification readiness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="bg-surface/80 backdrop-blur-md border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-foreground tracking-tight">
                {cs.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{cs.subtitle}</p>

              <div className="mt-6 space-y-4">
                {cs.bullets.map((b) => {
                  const Icon = b.icon
                  return (
                    <div key={b.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface/80 border border-white/5 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground tracking-tight">
                          {b.label}
                        </p>
                        <p className="mt-1 text-sm text-muted leading-relaxed">{b.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

