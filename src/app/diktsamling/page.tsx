import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { KjopSeksjon } from './KjopSeksjon'

export const metadata: Metadata = {
  title: 'Terjes diktsamling – Poetiske refleksjoner over hverdagen',
  description:
    'En samling dikt av tannlege Terje Mikkelsen. Fra barnets smil til livets dype spørsmål – poetiske betraktninger over det lille og det store. Kjøp boken med Vipps.',
  openGraph: {
    title: 'Terjes diktsamling',
    description: 'Dikt om hverdag, natur og livets under.',
    url: 'https://mikkelsen-tannklinikk.no/diktsamling',
    images: [{ url: '/bilder/forside-bok.jpg' }],
  },
}

/* ─── Section divider ──────────────────────────────── */
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #B4C7B2)' }} />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 0 C7 4, 14 7, 7 14 C7 10, 0 7, 7 0Z" fill="#B4C7B2" opacity="0.7"/>
      </svg>
      <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #B4C7B2)' }} />
    </div>
  )
}

export default function DiktsamlingPage() {
  return (
    <>
      <Navbar />
      <main style={{ color: '#2D3748' }}>

        {/* ── Hero ─────────────────────────────────────── */}
        <section
          className="paper-bg relative overflow-hidden py-24 sm:py-36 text-center"
          style={{ background: 'linear-gradient(to bottom, #F5F1E8, #EAE4D6 60%, #F0EDE6)' }}
        >
          {/* Warm amber glow top-right */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 opacity-30 rounded-full"
            style={{ background: 'radial-gradient(circle, #D4A574 0%, transparent 70%)' }} />
          {/* Sage glow bottom-left */}
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 opacity-20 rounded-full"
            style={{ background: 'radial-gradient(circle, #B4C7B2 0%, transparent 70%)' }} />

          <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
            {/* Leaf icon */}
            <div className="dikt-animate flex justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 2 C16 10, 28 16, 16 30 C16 22, 4 16, 16 2Z" fill="#B4C7B2"/>
                <line x1="16" y1="8" x2="16" y2="30" stroke="#8FA88D" strokeWidth="1" opacity="0.6"/>
              </svg>
            </div>

            <h1
              className="dikt-animate dikt-animate-delay-1 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
              style={{ color: '#2D3748', letterSpacing: '-0.02em' }}
            >
              Terjes diktsamling
            </h1>

            {/* Sage underline */}
            <div className="dikt-animate dikt-animate-delay-1 flex justify-center mt-3 mb-6">
              <svg width="120" height="8" viewBox="0 0 120 8" fill="none" aria-hidden="true">
                <path d="M4 6 Q30 2 60 5 Q90 8 116 4" stroke="#B4C7B2" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            <p
              className="dikt-animate dikt-animate-delay-2 font-display text-lg sm:text-xl italic mb-6"
              style={{ color: '#6B7280' }}
            >
              Ord fra hverdagen, skrevet med ettertanke
            </p>

            <p
              className="dikt-animate dikt-animate-delay-3 text-base sm:text-lg leading-[1.85] max-w-xl mx-auto"
              style={{ color: '#4B5563' }}
            >
              Gjennom enkle ord utforsker Terje de store spørsmålene i de små øyeblikkene.
              Fra barnets smil til morgenlyset — en samling som inviterer til
              stillhet og refleksjon.
            </p>
          </div>
        </section>

        {/* ── Bokbilder ────────────────────────────────── */}
        <section
          className="paper-bg relative py-16 sm:py-20"
          style={{ background: '#EAE4D6' }}
        >
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 justify-center items-center sm:items-end">

              {/* Forside */}
              <div className="group relative flex-shrink-0 w-56 sm:w-64">
                <div
                  className="relative overflow-hidden rounded-md transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-3"
                  style={{
                    outline: '3px double #B4C7B2',
                    outlineOffset: '4px',
                    boxShadow: '0 4px 12px rgba(45,55,72,0.08), 0 12px 32px rgba(45,55,72,0.10)',
                  }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/bilder/forside-bok.jpg"
                      alt="Forside av diktsamlingen til Terje Mikkelsen"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-xs tracking-widest uppercase" style={{ color: '#9CA3AF', fontStyle: 'italic' }}>Forside</p>
              </div>

              {/* Bakside — litt lavere på desktop */}
              <div className="group relative flex-shrink-0 w-56 sm:w-64 sm:mb-6">
                <div
                  className="relative overflow-hidden rounded-md transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-3"
                  style={{
                    outline: '3px double #B4C7B2',
                    outlineOffset: '4px',
                    boxShadow: '0 4px 12px rgba(45,55,72,0.08), 0 12px 32px rgba(45,55,72,0.10)',
                  }}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/bilder/bakside-bok.jpg"
                      alt="Bakside av diktsamlingen til Terje Mikkelsen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-xs tracking-widest uppercase" style={{ color: '#9CA3AF', fontStyle: 'italic' }}>Bakside</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dikt-utdrag ──────────────────────────────── */}
        <section
          className="paper-bg relative py-20 sm:py-28"
          style={{ background: 'linear-gradient(to bottom, #F5F1E8, #EDE8DE)' }}
        >
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 text-center">
            <p className="text-xs tracking-widest uppercase italic mb-10" style={{ color: '#9CA3AF' }}>
              Et glimt inn i samlingen
            </p>

            {/* Poem container */}
            <div
              className="relative mx-auto max-w-lg px-8 sm:px-12 py-12"
              style={{
                background: 'linear-gradient(to bottom, #FDFCFA, #F5F1E8)',
                border: '3px double #B4C7B2',
                borderRadius: '6px',
                boxShadow: '0 4px 20px rgba(45,55,72,0.06), inset 0 1px 0 rgba(255,255,255,0.5)',
              }}
            >
              {/* Top flourish */}
              <div className="flex justify-center mb-6" aria-hidden="true">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M24 2 C24 8, 38 12, 24 22 C24 16, 10 12, 24 2Z" fill="#B4C7B2" opacity="0.5"/>
                  <line x1="4" y1="12" x2="16" y2="12" stroke="#B4C7B2" strokeWidth="1" opacity="0.4"/>
                  <line x1="32" y1="12" x2="44" y2="12" stroke="#B4C7B2" strokeWidth="1" opacity="0.4"/>
                </svg>
              </div>

              <blockquote>
                <p
                  className="font-display text-xl sm:text-2xl italic"
                  style={{ color: '#2D3748', lineHeight: '2.1', fontStyle: 'italic' }}
                >
                  Vesle blomen langs vegen eg ser<br />
                  du berre står der og er<br />
                  <span className="whitespace-nowrap">Eg skulle så gjerne ha plukka deg inn</span><br />
                  men då vert du berre min
                </p>
              </blockquote>

              {/* Bottom flourish */}
              <div className="flex justify-center mt-6 mb-4" aria-hidden="true">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M24 2 C24 8, 38 12, 24 22 C24 16, 10 12, 24 2Z" fill="#B4C7B2" opacity="0.5"/>
                  <line x1="4" y1="12" x2="16" y2="12" stroke="#B4C7B2" strokeWidth="1" opacity="0.4"/>
                  <line x1="32" y1="12" x2="44" y2="12" stroke="#B4C7B2" strokeWidth="1" opacity="0.4"/>
                </svg>
              </div>

              <p
                className="font-display italic text-sm text-right"
                style={{ color: '#9CA3AF', marginTop: '0.5rem' }}
              >
                — Fra «Vesle blomen»
              </p>
            </div>

            <p className="mt-8 text-sm italic" style={{ color: '#9CA3AF' }}>
              Enkle ord om livets store spørsmål
            </p>

          </div>
        </section>

        {/* ── Om samlingen + Produktinfo ───────────────── */}
        <section
          className="paper-bg relative py-16 sm:py-24"
          style={{ background: '#FDFCFA' }}
        >
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Venstre: tekst */}
              <div>
                <Divider />
                <p className="text-xs tracking-widest uppercase mt-8 mb-3" style={{ color: '#B4C7B2', fontWeight: 600 }}>
                  Om samlingen
                </p>
                <h2
                  className="font-display text-2xl sm:text-3xl font-bold mb-7"
                  style={{ color: '#2D3748', letterSpacing: '-0.02em' }}
                >
                  26 dikt om det å være menneske
                </h2>

                <p className="drop-cap text-base leading-[1.85] mb-5" style={{ color: '#4B5563' }}>
                  Gjennom 26 dikt tar Terje deg med fra barnets uskyld til livets
                  dype eksistensielle spørsmål. Her finner du dikt om:
                </p>

                <ul className="space-y-2 mb-6" style={{ color: '#4B5563' }}>
                  {[
                    'Barndom og oppdagelse',
                    'Morgenlys og naturens ro',
                    'Kjærlighet funnet og tapt',
                    'Møter som forandrer oss',
                    'Selvrefleksjon og livets mønster',
                    'Tro, tvil og undring',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                        <path d="M7 1 C7 5, 13 7, 7 13 C7 9, 1 7, 7 1Z" fill="#B4C7B2"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="font-display italic text-base leading-[1.85]" style={{ color: '#6B7280' }}>
                  «Hvert dikt er en invitasjon til å stoppe opp, kjenne etter,
                  og finne det store i det lille.»
                </p>
              </div>

              {/* Høyre: produktinfo-kort */}
              <div
                className="rounded-lg p-8 lg:p-10"
                style={{
                  background: 'linear-gradient(135deg, #F5F1E8 0%, #EAE4D6 100%)',
                  border: '1px solid #C9C2B4',
                  boxShadow: '0 1px 2px rgba(45,55,72,0.04), 0 8px 24px rgba(45,55,72,0.07)',
                }}
              >
                <p className="text-xs tracking-widest uppercase mb-6 font-semibold" style={{ color: '#B4C7B2' }}>
                  Detaljar
                </p>

                <div className="space-y-5">
                  {[
                    { label: 'Format', value: 'Fysisk bok, heftet' },
                    { label: 'Språk', value: 'Bokmål' },
                    { label: 'Dikt', value: '26 dikt' },
                    { label: 'Levering', value: 'Posten, 2–4 virkedager' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-baseline gap-4 pb-4 border-b" style={{ borderColor: '#D6D0C4' }}>
                      <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#9CA3AF' }}>{label}</span>
                      <span className="text-sm font-medium text-right" style={{ color: '#374151' }}>{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-2 text-center">
                  <span className="font-display text-4xl font-bold" style={{ color: '#2D3748' }}>99 kr</span>
                  <span className="ml-2 text-sm" style={{ color: '#9CA3AF' }}>+ frakt</span>
                </div>

                <p className="mt-4 text-xs text-center leading-relaxed" style={{ color: '#B0A898' }}>
                  Boken sendes direkte fra Terje.<br />Vipps-forespørsel kommer etter bestilling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Vipps-kjøp ───────────────────────────────── */}
        <KjopSeksjon />

        {/* ── Tilbake ──────────────────────────────────── */}
        <section
          className="pb-16 text-center"
          style={{ background: 'linear-gradient(to bottom, #F5F1E8, #EAE4D6)' }}
        >
          <Divider />
          <div className="mt-8">
            <a
              href="/"
              className="text-sm italic transition-colors hover:text-slate-700"
              style={{ color: '#B0A898' }}
            >
              ← Tilbake til forsiden
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
