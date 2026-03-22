'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Star, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BOOKING_URL, PHONE, PHONE_HREF } from '@/lib/utils'

const ease = [0.16, 1, 0.3, 1]

const trustBadges = [
  { icon: Star, label: '4.9/5 på Google' },
  { icon: Shield, label: 'Helfo-avtale' },
  { icon: Award, label: 'Tannlegeforeningen' },
]

const stats = [
  { value: '50+', label: 'år erfaring' },
  { value: '4.9★', label: 'Google-rating' },
  { value: '148', label: 'anmeldelser' },
]

export function Hero() {
  return (
    <section className="noise-bg relative overflow-hidden py-20 sm:py-28">
      {/* Blå-hvit bakgrunn med radielle gradienter */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-50 to-white" />
        <div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, #bcd8ff 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-16 -left-24 h-[360px] w-[360px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, #a5f3fc 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[800px] opacity-25"
          style={{ background: 'radial-gradient(ellipse, #93c5fd 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left – text */}
          <div>
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mb-5"
            >
              <Badge variant="default">📍 Bergen sentrum</Badge>
            </motion.div>

            {/* Heading — Playfair Display via font-display */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="font-display text-4xl font-bold text-slate-900 sm:text-5xl lg:text-[3.25rem] leading-[1.12]"
            >
              Tannlege i Bergen.{' '}
              <span className="text-sky-600">Trygg og smertefri</span>{' '}
              behandling.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
              className="mt-5 text-lg text-slate-600 leading-[1.7] max-w-lg font-sans"
            >
              Vi tar oss tid til deg. Enten du trenger en vanlig undersøkelse, tannbleking
              eller har tannlegeskrekk – du er trygg hos oss. Over 50 år med erfaring
              i Bergen.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book time online
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <a href={PHONE_HREF}>
                  <Phone className="h-4 w-4" />
                  Ring {PHONE}
                </a>
              </Button>
            </motion.div>

            {/* Micro text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 text-sm text-slate-500"
            >
              Svar innen én time · Ingen binding · Første konsultasjon gratis
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-card"
                >
                  <Icon className="h-3.5 w-3.5 text-sky-600" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-7 flex flex-wrap gap-6"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <p className="font-display text-3xl font-bold tracking-tight text-sky-700 leading-none">{value}</p>
                  <p className="font-sans text-sm font-medium text-slate-500 leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – image with gradient overlay + color treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-floating">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/bilder/tannlege-t.webp"
                  alt="Tannlege Terje Mikkelsen undersøker pasient på Tannlege Terje Mikkelsen i Bergen"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 via-sky-900/10 to-transparent" />
                {/* Color treatment layer */}
                <div className="absolute inset-0 bg-sky-600/10 mix-blend-multiply" />
              </div>

              {/* Floating review card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto rounded-2xl bg-white shadow-floating px-5 py-4 border border-slate-100">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-slate-900">4.9</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">«Endelig en tannlege jeg stoler på!»</p>
                <p className="text-xs text-slate-500 mt-1.5 font-medium">— Kari, Riplegården</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
