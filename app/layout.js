import './globals.css'
import { Figtree, JetBrains_Mono } from 'next/font/google'
import SmoothScroll from '@/components/providers/SmoothScroll'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import TrialModal from '@/components/trial/TrialModal'
import HelpBot from '@/components/chat/HelpBot'

// Figtree — closest free match to Zoom's geometric grotesque (Almaden Sans / Happy Display)
const jakarta = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-jakarta',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-mono',
})

const DESC =
  "NNC CRM is India's most trusted CRM for every industry: a modular CRM software with sales pipeline, forecasting, enquiries and WhatsApp in one platform, for one simple yearly price. Build your own plan and forecast 3, 6 and 12 months ahead."
const TITLE = "NNC CRM | India's Most Trusted CRM for Every Industry"

export const metadata = {
  metadataBase: new URL('https://nnccrm.example'),
  title: TITLE,
  description: DESC,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: { title: TITLE, description: DESC, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'NNC Digital Solutions',
      description:
        'NNC CRM, a modular decision making CRM you assemble yourself, with forecasting for the next 3, 6 and 12 months.',
    },
    {
      '@type': 'Product',
      name: 'NNC CRM',
      description: DESC,
      brand: { '@type': 'Brand', name: 'NNC CRM' },
      offers: {
        '@type': 'Offer',
        price: '4999',
        priceCurrency: 'INR',
        description: 'Platform & support base price per year; modules added on top.',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body>
        <span className="grain" aria-hidden="true" />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <TrialModal />
          <HelpBot />
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
