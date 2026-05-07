import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { TrustBand } from '@/components/sections/trust-band'
import { Precision } from '@/components/sections/precision'
import { SocialProof } from '@/components/sections/social-proof'
import { Capabilities } from '@/components/sections/capabilities'
import { Process } from '@/components/sections/process'
import { QuoteForm } from '@/components/sections/quote-form'
import { NamedContact } from '@/components/sections/named-contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <Precision />
        <SocialProof />
        <Capabilities />
        <Process />
        <QuoteForm />
        <NamedContact />
      </main>
      <Footer />
    </>
  )
}
