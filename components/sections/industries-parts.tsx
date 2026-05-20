import { ArrowUpRight, Check } from 'lucide-react'

const tiles = [
  {
    title: 'Powertrain & driveline',
    description: 'Shafts, sleeves, bushings, spacers with tolerance-critical features.',
    constraint: 'Inspection plan defined before first run',
  },
  {
    title: 'Sensors & housings',
    description: 'Turned housings and inserts where fits and surface finish matter.',
    constraint: 'Fit and finish documented with reports',
  },
  {
    title: 'Fasteners & precision hardware',
    description: 'Short-run to series production with stable process checkpoints.',
    constraint: 'Lot traceability where required',
  },
  {
    title: 'Fluid systems',
    description: 'Components with sealing interfaces and repeatable diameters.',
    constraint: 'Critical features measured at defined intervals',
  },
  {
    title: 'EV thermal',
    description: 'Turned parts supporting thermal management assemblies.',
    constraint: 'Material certs handled where applicable',
  },
  {
    title: 'Precision shafts',
    description: 'Geometry-focused parts designed for predictable run-to-run stability.',
    constraint: 'Process control over “hero” prototypes',
  },
]

export function IndustriesParts() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="py-16 lg:py-20 bg-surface/50 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="industries-heading"
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
          >
            Industries & parts we support
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A quick way to self-qualify—if your part looks like these, we can usually move fast.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="bg-surface/80 backdrop-blur-md border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {tile.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{tile.description}</p>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <span className="font-medium text-foreground/90">{tile.constraint}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

