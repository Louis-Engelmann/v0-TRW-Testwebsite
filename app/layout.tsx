import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.veltec.de'),
  title: {
    default: 'Veltec Precision GmbH | Precision Turned Parts for Automotive',
    template: '%s | Veltec Precision GmbH'
  },
  description: 'German manufacturer of precision-turned components for automotive OEMs and Tier-1 suppliers. CNC machining with ±0.003mm tolerances. Request a quote today.',
  keywords: [
    'precision turning',
    'CNC machining',
    'automotive parts',
    'German manufacturing',
    'turned parts',
    'automotive supplier',
    'ISO 9001',
    'metal machining'
  ],
  authors: [{ name: 'Veltec Precision GmbH' }],
  creator: 'Veltec Precision GmbH',
  publisher: 'Veltec Precision GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Veltec Precision GmbH | Precision Turned Parts for Automotive',
    description: 'German manufacturer of precision-turned components for automotive OEMs. CNC machining with ±0.003mm tolerances.',
    url: 'https://www.veltec.de',
    siteName: 'Veltec Precision',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Veltec Precision GmbH - Premium German Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veltec Precision GmbH | Precision Turned Parts for Automotive',
    description: 'German manufacturer of precision-turned components for automotive OEMs. CNC machining with ±0.003mm tolerances.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  'name': 'Veltec Precision GmbH',
  'alternateName': 'Veltec Precision',
  'url': 'https://www.veltec.de',
  'logo': 'https://www.veltec.de/icon.svg',
  'description': 'German manufacturer of precision-turned components for automotive OEMs and Tier-1 suppliers. CNC machining with ±0.003mm tolerances.',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'DE'
  },
  'knowsAbout': [
    'CNC Machining',
    'Precision Turned Parts',
    'Automotive Manufacturing',
    'ISO 9001:2015'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} ${jetbrainsMono.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
