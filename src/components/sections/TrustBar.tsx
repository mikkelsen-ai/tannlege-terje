'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, Star, Clock } from 'lucide-react'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Helfo-avtale',
    desc: 'Refusjon der du har krav på det',
  },
  {
    icon: Award,
    title: 'Tannlegeforeningen',
    desc: 'Godkjent og autorisert tannlege',
  },
  {
    icon: Star,
    title: '4.9 / 5 på Google',
    desc: 'Basert på 148 anmeldelser',
  },
  {
    icon: Clock,
    title: '50+ år erfaring',
    desc: 'Autorisert tannlege siden 1974',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {trustItems.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                <Icon className="h-5 w-5 text-sky-600" />
              </div>
              <p className="font-semibold text-slate-900 text-sm">{title}</p>
              <p className="text-xs text-slate-500 leading-snug">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
