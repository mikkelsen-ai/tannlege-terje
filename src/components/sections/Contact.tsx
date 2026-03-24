'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { PHONE, PHONE_HREF } from '@/lib/utils'

const FORMSPREE_URL = 'https://formspree.io/f/DIN_FORM_ID'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-20 sm:py-24">
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
            Kontakt oss
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ta kontakt – vi svarer innen én time
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left – form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-10 text-center h-full min-h-[300px]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900">Takk! Meldingen er sendt.</h3>
                <p className="mt-2 text-emerald-700">Vi kontakter deg innen én time i åpningstiden.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-emerald-700 underline hover:text-emerald-900"
                >
                  Send ny melding
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name">Navn *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ola Nordmann"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="phone">Telefonnummer *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="400 00 000"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">Hva gjelder det? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Beskriv kort hva du ønsker hjelp med, eller still et spørsmål..."
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                    Noe gikk galt. Prøv igjen, eller ring oss direkte på {PHONE}.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className="w-full"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sender...
                    </span>
                  ) : (
                    'Send forespørsel'
                  )}
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  Vi svarer innen én time i åpningstiden · Ingen binding
                </p>
              </form>
            )}
          </motion.div>

          {/* Right – contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Contact details */}
            <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-slate-900 text-sm">Adresse</p>
                  <p className="text-sm text-slate-600">Torget 11, 5014 Bergen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-slate-900 text-sm">Telefon</p>
                  <a href={PHONE_HREF} className="text-sm text-sky-600 hover:underline">
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-slate-900 text-sm">E-post</p>
                  <a href="mailto:te-mikk@online.no" className="text-sm text-sky-600 hover:underline">
                    te-mikk@online.no
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-slate-900 text-sm">Åpningstider</p>
                  <p className="text-sm text-slate-600">Man–fre: 08.00–17.00</p>
                  <p className="text-sm text-slate-600">Lørdag: 09.00–14.00</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <div className="aspect-[4/3] w-full bg-slate-100 flex flex-col items-center justify-center text-slate-400 gap-2">
                <MapPin className="h-8 w-8 text-slate-300" />
                <p className="text-sm font-medium">Google Maps-kart</p>
                <p className="text-xs text-slate-400">Torget 11, Bergen</p>
                <a
                  href="https://maps.google.com/?q=Torget+11+Bergen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-xs text-sky-600 hover:underline"
                >
                  Åpne i Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
