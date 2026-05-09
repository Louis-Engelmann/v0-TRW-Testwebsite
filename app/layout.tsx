import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Veltec Precision GmbH | Precision Turned Parts for Automotive',
  description: 'German manufacturer of precision-turned components for automotive OEMs and Tier-1 suppliers. CNC machining with ±0.003mm tolerances. Request a quote today.',
  keywords: ['precision turning', 'CNC machining', 'automotive parts', 'German manufacturing', 'ISO 9001'],
  openGraph: {
    title: 'Veltec Precision GmbH | Precision Turned Parts',
    description: 'German manufacturer of precision-turned components for automotive OEMs.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
