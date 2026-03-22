import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Tannlege Bergen – Tannlege Terje Mikkelsen | Trygg behandling',
  description:
    'Tannlege Terje Mikkelsen i Bergen – autorisert siden 1974, over 50 års erfaring. Helfo-avtale, spesialist på tannlegeskrekk og smertefri behandling. Book time online – svar innen én time. Tlf: 908 40 482.',
  keywords: [
    'tannlege bergen',
    'tannlege bergen sentrum',
    'tannbleking bergen',
    'tannregulering bergen',
    'helfo tannlege',
    'tannlege angst',
    'terje mikkelsen tannlege',
    'tannlege 50 år erfaring bergen',
    'tannbehandling økonomi facebook',
  ],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://mikkelsen-tannklinikk.no',
    siteName: 'Tannlege Terje Mikkelsen',
    title: 'Tannlege Bergen – Tannlege Terje Mikkelsen',
    description:
      'Tannlege i Bergen sentrum. Helfo-avtale, trygg og smertefri behandling. Book time online.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Tannlege Terje Mikkelsen Bergen' }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://mikkelsen-tannklinikk.no' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Tannlege Terje Mikkelsen',
  description: 'Tannlege Terje Mikkelsen i Bergen sentrum – autorisert siden 1974 med over 50 års erfaring. Helfo-avtale og spesialisering på angstpasienter. Grunnlegger av Facebook-gruppen «Tannbehandling/økonomi» med 78 000+ medlemmer.',
  url: 'https://mikkelsen-tannklinikk.no',
  telephone: '+4790840482',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Torget 11',
    addressLocality: 'Bergen',
    postalCode: '5014',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.3913,
    longitude: 5.3221,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  foundingYear: '1974',
  sameAs: ['https://www.facebook.com/groups/728297547903172/'],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '148',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
