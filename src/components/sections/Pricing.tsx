'use client'

import { motion } from 'framer-motion'
import { Check, Info } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BOOKING_URL } from '@/lib/utils'

const services = [
  {
    title: 'Undersøkelse & Rens',
    price: 'Fra 790 kr',
    helfo: true,
    popular: false,
    includes: [
      'Grundig klinisk undersøkelse',
      'Digital røntgen',
      'Fjerning av tannstein',
      'Polering og råd om munnhygiene',
      'Helfo-refusjon kan gjelde',
    ],
  },
  {
    title: 'Tannbleking',
    price: 'Fra 2 490 kr',
    helfo: false,
    popular: true,
    includes: [
      'Profesjonell bleking på klinikken',
      'Hjemmebleking inkludert',
      'Skreddersydde skinner',
      'Synlig resultat etter første behandling',
      'Veiledning for vedlikehold',
    ],
  },
  {
    title: 'Konsultasjon',
    price: 'Gratis',
    helfo: false,
    popular: false,
    includes: [
      'Gjennomgang av tannhelse',
      'Svar på alle spørsmål',
      'Behandlingsplan uten forpliktelser',
      'Pris og refusjonsvurdering',
      'Ingen binding',
    ],
  },
]

export function Pricing() {
  return (
    <section id="priser" className="py-20 sm:py-24">
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
            Priser
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transparent og forutsigbar prising
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Vi oppgir alltid pris før behandlingen starter. Ingen overraskelser på regningen.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {services.map(({ title, price, helfo, popular, includes }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Card className={`h-full relative ${popular ? 'ring-2 ring-sky-500 shadow-lg' : ''}`}>
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-sky-600 text-white border-sky-600 shadow-sm">
                      Mest populær
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
                  <p className="mt-2 text-3xl font-bold text-slate-900">{price}</p>
                  {helfo && (
                    <p className="mt-1 text-xs text-emerald-700 font-medium">
                      Helfo-refusjon kan redusere din kostnad
                    </p>
                  )}

                  <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="h-4 w-4 shrink-0 text-sky-600 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block w-full rounded-md py-2.5 text-center text-sm font-semibold transition-colors ${
                      popular
                        ? 'bg-sky-600 text-white hover:bg-sky-700'
                        : 'border border-slate-300 text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Book time
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Helfo info box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5 flex items-start gap-3"
        >
          <Info className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sky-900 text-sm">Om Helfo-refusjon</p>
            <p className="mt-1 text-sm text-sky-800 leading-relaxed">
              Staten dekker tannbehandling for barn og ungdom til og med 18 år, samt for visse
              diagnoser og tilstander. Vi vurderer alltid din rett til refusjon og sender krav
              til Helfo på dine vegne. Spør oss på konsultasjonen – det koster ingenting å
              undersøke saken.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
