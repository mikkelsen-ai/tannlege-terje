'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Heart, Users, BookOpen } from 'lucide-react'
import { BOOKING_URL } from '@/lib/utils'

type Point = {
  icon: React.ElementType
  title: string
  desc?: string
  descNode?: React.ReactNode
}

const points: Point[] = [
  {
    icon: GraduationCap,
    title: 'Solid faglig bakgrunn',
    desc: 'Autorisert tannlege siden 1973. Etterutdanning innen oral kirurgi, implantatbehandling og angstmestring.',
  },
  {
    icon: MapPin,
    title: 'Rotfestet i Bergen',
    desc: 'Oppvokst og etablert i Bergen. Kjenner lokalsamfunnet godt og har behandlet familier i generasjoner.',
  },
  {
    icon: Heart,
    title: 'Pasientene er det viktigste',
    desc: 'Terje mener tannhelse handler om mer enn tenner. Det handler om livskvalitet og selvtillit. Hvert besøk tar han seg tid til å lytte.',
  },
  {
    icon: Users,
    title: 'Samfunnsengasjert',
    descNode: (
      <>
        Terje grunnla Facebook-gruppen{' '}
        <a
          href="https://www.facebook.com/groups/728297547903172/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:underline font-medium"
        >
          «Tannbehandling/økonomi»
        </a>
        {' '}som nå har over 78 000 medlemmer. Han jobber aktivt for at tannlegetjenester
        skal likestilles med andre helsetjenester i Norge.
      </>
    ),
  },
  {
    icon: BookOpen,
    title: 'Utenfor klinikken',
    descNode: (
      <>
        Terje skriver dikt på fritiden og har gitt ut en diktsamling der han deler tanker
        om livet, naturen og hverdagens små øyeblikk.{' '}
        <a
          href="/diktsamling"
          className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-sky-700 border border-sky-200 bg-sky-50 hover:bg-sky-600 hover:text-white hover:border-sky-600 rounded-full px-3 py-1 transition-[background-color,color,border-color,transform] hover:scale-105 active:scale-95"
        >
          Les mer →
        </a>
      </>
    ),
  },
]

export function AboutTerje() {
  return (
    <section id="om-terje" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left – image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative overflow-hidden rounded-2xl max-w-sm mx-auto lg:max-w-none">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/bilder/tannlege-igjen.jpg"
                  alt="Tannlege Terje Mikkelsen i Bergen"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute top-4 right-4 rounded-xl bg-white shadow-lg px-4 py-3 text-center border border-slate-100">
                <p className="text-2xl font-bold text-sky-600">50+</p>
                <p className="text-xs text-slate-600 font-medium">år erfaring</p>
              </div>
            </div>
          </motion.div>

          {/* Right – bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-3">
              Om tannlegen
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Møt Terje Mikkelsen
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Autorisert tannlege siden 1973. I over 50 år har han behandlet bergensere med
              ro og grundighet. Terje er kjent for sin evne til å sette selv de mest engstelige
              pasientene til ro.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              «Jobben min er ikke bare å fikse tenner. Det er å hjelpe folk til å ha et
              godt forhold til tannhelsen sin, for livet.»
            </p>

            {/* Points */}
            <div className="mt-8 flex flex-col gap-5">
              {points.map(({ icon: Icon, title, desc, descNode }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                    <Icon className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{title}</p>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {descNode ?? desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 active:bg-sky-800 active:scale-[0.97] transition-[background-color,transform]"
              >
                Book time hos Terje
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
