'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Jeg er veldig redd for tannlegen – kan dere hjelpe meg?',
    a: 'Absolutt. Vi spesialiserer oss på engstelige pasienter. Du kan bruke stopp-signal når som helst, vi tilbyr lystgass for de mest behandlingsredde, og vi forklarer nøyaktig hva som skjer før vi gjør noe. Ring oss gjerne på forhånd for å snakke med Terje – det kan senke terskelen betraktelig.',
  },
  {
    q: 'Gjør det vondt?',
    a: 'Vi bruker alltid lokalbedøvelse ved behov, og vi tar oss god tid til å la den virke. De fleste pasienter opplever lite eller ingen smerte. Dersom du kjenner noe ubehagelig under behandlingen, si ifra umiddelbart – vi stopper og justerer.',
  },
  {
    q: 'Har dere Helfo-avtale, og hva dekkes?',
    a: 'Ja, vi har full Helfo-avtale. Helfo dekker tannbehandling for barn og ungdom til og med 18 år helt gratis. For voksne dekkes visse diagnoser og tilstander, som periodontitt (tannkjøttsykdom), spesifikke misdannelser og mer. Vi vurderer alltid din situasjon og sender krav på dine vegne.',
  },
  {
    q: 'Hvor lang ventetid er det?',
    a: 'For rutinekontroll er ventetiden vanligvis 1–3 uker. Akutte tannpiner forsøker vi å ta samme dag eller neste hverdag. Book online for å se ledige tider, eller ring oss direkte.',
  },
  {
    q: 'Er det parkering i nærheten?',
    a: 'Ja, nærmeste parkering er Bryggen P-Hus, ca. 5 minutters gange fra klinikken. Det er også busstopp for linjene 2, 3 og 5 rett utenfor. Klinikken er universelt utformet.',
  },
  {
    q: 'Hva skjer hvis jeg må avbestille timen?',
    a: 'Vi ber om beskjed senest 24 timer før timen, slik at vi kan tilby den til andre pasienter. Avbestilling gjøres enkelt via SMS, telefon eller e-post. Vi forstår at livet skjer – vi tar ikke gebyr ved avbestilling med rimelig varsel.',
  },
]

export function FAQ() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-3">
            Spørsmål og svar
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Har du spørsmål?
          </h2>
          <p className="mt-4 text-slate-600">
            Her er svarene på det vi oftest får spørsmål om. Ikke finn svaret ditt? Ring oss!
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="bg-white rounded-xl border border-slate-200 px-4 divide-y-0">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left py-5 text-sm sm:text-base font-medium">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-slate-600">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
