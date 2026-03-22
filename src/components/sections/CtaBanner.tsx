'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { BOOKING_URL, PHONE, PHONE_HREF } from '@/lib/utils'

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl px-8 py-14 text-center sm:px-16"
          style={{
            background: 'linear-gradient(135deg, #0369a1 0%, #075985 40%, #0e7490 100%)',
          }}
        >
          {/* Layered radial glow decorations */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40"
              style={{ background: 'radial-gradient(circle, hsl(215,80%,70%) 0%, transparent 70%)' }}
            />
            <div
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30"
              style={{ background: 'radial-gradient(circle, hsl(180,70%,60%) 0%, transparent 70%)' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
            />
          </div>

          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-sans text-sm font-semibold uppercase tracking-widest text-sky-200 mb-3"
            >
              Klar for neste steg?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl font-bold text-white sm:text-4xl"
            >
              Klar for et smil du er stolt av?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-lg text-sky-100 max-w-xl mx-auto leading-[1.7] font-sans"
            >
              Book en gratis konsultasjon i dag. Vi tar oss tid til deg, svarer på alle
              spørsmål og setter opp en plan som passer deg.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.27, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-elevated hover:bg-sky-50 active:bg-sky-100 active:scale-[0.97] transition-[background-color,transform] w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-700"
              >
                Book gratis konsultasjon
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 active:bg-white/30 active:scale-[0.97] transition-[background-color,transform] w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-700"
              >
                <Phone className="h-4 w-4" />
                Ring {PHONE}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 text-sm text-sky-200 font-sans"
            >
              Ingen binding · Svar innen én time · Første konsultasjon gratis
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
