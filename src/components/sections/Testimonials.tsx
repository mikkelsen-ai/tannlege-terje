'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Celine Fløgstad Mikkelsen',
    location: 'Bergen',
    rating: 5,
    text: 'Jeg har alltid vært livredd for tannlegen, men Terje er så rolig og grundig at jeg faktisk gleder meg til neste time. Helt utrolig! Han har vært tannlege lenger enn mamma har levd – det sier litt om kvaliteten.',
    treatment: 'Angstpasient',
    initials: 'CF',
  },
  {
    name: 'Daniel Fløgstad Mikkelsen',
    location: 'Bergen',
    rating: 5,
    text: 'Terje er legenden selv. Kom inn med tannpine og gikk ut med et smil – bokstavelig talt. 50 år i bransjen og fortsatt skarpere enn de fleste. Og han har sin egen Facebook-gruppe med 78 000 folk, hvem gjør det?!',
    treatment: 'Akutttime',
    initials: 'DF',
  },
  {
    name: 'Tor Andre Mikkelsen',
    location: 'Bergen',
    rating: 5,
    text: 'Bestebror anbefalte Terje og nå skjønner jeg hvorfor hele familien sverger til ham. Han forklarer alt steg for steg, ingen overraskelser. Bergen sin beste tannlege – ingen diskusjon.',
    treatment: 'Undersøkelse + rens',
    initials: 'TM',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-3">
            Pasientanmeldelser
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Hva pasientene sier
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-slate-900">4.9</span>
            <span className="text-slate-500 text-sm">· 148 anmeldelser på Google</span>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map(({ name, location, rating, text, treatment, initials }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 leading-relaxed text-sm flex-1">«{text}»</p>

                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{name}</p>
                      <p className="text-xs text-slate-500">{location} · {treatment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Google link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-slate-500"
        >
          Les alle anmeldelser på{' '}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline font-medium"
          >
            Google Maps
          </a>
        </motion.p>
      </div>
    </section>
  )
}
