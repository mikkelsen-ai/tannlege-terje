'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Hand, Wind, BookOpen } from 'lucide-react'

const tiltak = [
  {
    icon: Hand,
    title: 'Stopp-signal – du bestemmer',
    desc: 'Hev hånden når som helst, og vi stopper umiddelbart. Ingen forklaringer nødvendig. Du har full kontroll fra start til slutt, og vi fortsetter aldri uten at du er klar.',
    color: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-600 bg-sky-100',
  },
  {
    icon: Wind,
    title: 'Lystgass tilgjengelig',
    desc: 'For de mest behandlingsredde tilbyr vi lystgass (N₂O) som gir dyp avslapning og demper angst effektivt. Du er bevisst og kan snakke med oss hele veien – men uten engstelse.',
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600 bg-teal-100',
  },
  {
    icon: BookOpen,
    title: 'Steg-for-steg forklaring',
    desc: 'Før hvert eneste inngrep forklarer vi nøyaktig hva vi skal gjøre, hva du vil kjenne og hvor lang tid det tar. Ingen overraskelser. Du sier selv om du vil se, høre eller bare slappe av.',
    color: 'bg-indigo-50 border-indigo-200',
    iconColor: 'text-indigo-600 bg-indigo-100',
  },
]

export function AnxietySection() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left – copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-3">
              For deg med tannlegeskrekk
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-tight">
              «Jeg gruer meg» – det forstår vi
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Rundt 1 av 5 nordmenn har en form for tannlegeskrekk. Det er vanlig, og det er
              ingenting å skamme seg over. Hos Tannlege Terje Mikkelsen er vi vant til å jobbe
              med engstelige pasienter – og vi har konkrete tiltak som faktisk hjelper.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Vi tar aldri snarveier, hastar aldri, og dommen er alltid til deg. Mange av
              våre mest lojale pasienter var de som var mest redde første gang de kom inn
              døren.
            </p>
            {/* Ambient image */}
            <div className="relative mt-6 aspect-video overflow-hidden rounded-xl shadow-md">
              <Image
                src="/bilder/tannlegeren.jpeg"
                alt="Rolig og beroligende atmosfære på tannklinikken"
                fill
                className="object-cover object-bottom"
              />
            </div>

            {/* Quote */}
            <blockquote className="mt-6 border-l-4 border-sky-300 pl-4">
              <p className="text-slate-700 italic">
                «Jeg er mor til Terje, og jeg kan si at han har alltid hatt denne roen i seg.
                Selv jeg, som har vært redd for tannlegen hele livet, sitter rolig i stolen
                når det er sønnen min som behandler meg. Han har aldri hastverk, aldri mas –
                bare omsorg. Det er ikke alle som får si det om tannlegen sin.»
              </p>
              <footer className="mt-2 text-sm text-slate-500">— Svanhild, 80 år (Mor til Terje)</footer>
            </blockquote>
          </motion.div>

          {/* Right – tiltak */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-4"
          >
            {tiltak.map(({ icon: Icon, title, desc, color, iconColor }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className={`rounded-xl border p-5 ${color}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
