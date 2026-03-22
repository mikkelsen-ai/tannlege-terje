'use client'

import { motion } from 'framer-motion'
import { Search, Sparkles, AlignCenter, RotateCcw, Baby, Grid } from 'lucide-react'
import { BOOKING_URL } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Undersøkelse & Rens',
    desc: 'Grundig tannundersøkelse med røntgen, fjerning av tannstein og profesjonell polering. Helfo-refusjon gjelder for mange.',
    helfo: true,
  },
  {
    icon: Sparkles,
    title: 'Tannbleking',
    desc: 'Profesjonell tannbleking som gir resultater du ser med en gang. Trygt, effektivt og tilpasset ditt tannsett.',
    helfo: false,
  },
  {
    icon: AlignCenter,
    title: 'Tannregulering',
    desc: 'Usynlige skinner (Invisalign) og tradisjonell regulering for barn og voksne. Vi finner løsningen som passer deg.',
    helfo: false,
  },
  {
    icon: Grid,
    title: 'Implantat & Krone',
    desc: 'Permanente erstatninger for manglende tenner. Naturlig utseende og full funksjonalitet som holder livet ut.',
    helfo: true,
  },
  {
    icon: RotateCcw,
    title: 'Rotfylling',
    desc: 'Smertefri behandling av betente tenner. Vi redder tennene dine og sørger for at du holder på ditt eget tannsett lengst mulig.',
    helfo: true,
  },
  {
    icon: Baby,
    title: 'Barn & Ungdom',
    desc: 'Spesialtilpasset behandling for de minste. Vi skaper trygghet og gode vaner fra første besøk. Gratis til og med 18 år.',
    helfo: true,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function Services() {
  return (
    <section id="tjenester" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sky-600 mb-3">
            Tjenester
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Alt du trenger under ett tak
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-[1.7] max-w-2xl mx-auto font-sans">
            Fra rutinesjekk til avansert behandling – vi tilbyr et komplett spekter av
            tannlegetjenester for hele familien.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, desc, helfo }) => (
            <motion.div key={title} variants={item}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <div className="h-full rounded-xl border border-sky-100 bg-white p-6 shadow-card transition-[box-shadow,transform] hover:shadow-card-hover">
                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50">
                    <Icon className="h-5 w-5 text-sky-600" />
                  </div>
                  <h3 className="font-sans font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-[1.7]">{desc}</p>
                  {helfo && (
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Helfo-refusjon kan gjelde
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-sky-700 active:bg-sky-800 active:scale-[0.97] transition-[background-color,transform,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
          >
            Book time til undersøkelse
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-sm text-slate-500">Første konsultasjon er gratis</p>
        </motion.div>
      </div>
    </section>
  )
}
