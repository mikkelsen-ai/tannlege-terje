'use client'

import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'

type FormData = {
  navn: string
  adresse: string
  epost: string
  vipps: string
}

const empty: FormData = { navn: '', adresse: '', epost: '', vipps: '' }

export function KjopSeksjon() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormData>(empty)
  const [sendt, setSendt] = useState(false)
  const [laster, setLaster] = useState(false)

  function oppdater(felt: keyof FormData, verdi: string) {
    setForm(f => ({ ...f, [felt]: verdi }))
  }

  async function sendSkjema(e: React.FormEvent) {
    e.preventDefault()
    setLaster(true)
    await new Promise(r => setTimeout(r, 900))
    setLaster(false)
    setSendt(true)
  }

  function lukk() {
    setOpen(false)
    setTimeout(() => {
      setForm(empty)
      setSendt(false)
    }, 300)
  }

  return (
    <>
      {/* CTA-seksjon */}
      <section
        className="paper-bg relative py-20 sm:py-28 text-center overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #EAE4D6, #F5F1E8)' }}
      >
        {/* Amber glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-96 opacity-20 rounded-full"
          style={{ background: 'radial-gradient(ellipse, #D4A574 0%, transparent 70%)' }}
        />

        <div className="relative mx-auto max-w-lg px-4 sm:px-6">
          <p className="text-xs tracking-widest uppercase italic mb-4" style={{ color: '#B4C7B2', fontWeight: 600 }}>
            Ta med deg boken hjem
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-5"
            style={{ color: '#2D3748', letterSpacing: '-0.02em' }}
          >
            Bestill boka
          </h2>
          <p className="text-base leading-[1.8] mb-2" style={{ color: '#4B5563' }}>
            Fysisk bok · 99 kr + frakt
          </p>
          <p className="text-sm mb-10" style={{ color: '#9CA3AF' }}>
            Sendes med Posten innen 2–4 virkedager etter bestilling.
          </p>

          {/* Vipps button — pill, gradient, glow */}
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 text-base font-semibold text-white transition-[transform,box-shadow] active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #FF5B24 0%, #FF8A00 100%)',
              borderRadius: '50px',
              padding: '1rem 2.5rem',
              boxShadow: '0 4px 15px rgba(255,91,36,0.30), 0 2px 5px rgba(0,0,0,0.10)',
              border: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 22px rgba(255,91,36,0.42), 0 4px 10px rgba(0,0,0,0.14)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(255,91,36,0.30), 0 2px 5px rgba(0,0,0,0.10)'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.2"/>
              <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">V</text>
            </svg>
            Bestill med Vipps
          </button>

          <p className="mt-5 text-xs italic" style={{ color: '#B0A898' }}>
            Du betaler etter at vi sender deg Vipps-forespørselen
          </p>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) lukk() }}
        >
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-md rounded-xl bg-white p-8"
            style={{
              boxShadow: '0 4px 8px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.15)',
            }}
          >
            <button
              onClick={lukk}
              className="absolute top-4 right-4 rounded-lg p-1.5 transition-colors hover:bg-stone-100"
              style={{ color: '#9CA3AF' }}
              aria-label="Lukk"
            >
              <X className="h-5 w-5" />
            </button>

            {sendt ? (
              <div className="text-center py-4">
                <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: '#2D3748' }}>
                  Bestilling mottatt!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Takk, {form.navn.split(' ')[0]}! Du vil motta en Vipps-forespørsel
                  på <strong>{form.vipps}</strong> innen kort tid. Boken sendes
                  til oppgitt adresse så snart betalingen er bekreftet.
                </p>
                <button
                  onClick={lukk}
                  className="mt-6 rounded-full px-6 py-2 text-sm font-semibold text-white transition-colors"
                  style={{ background: '#B4C7B2' }}
                >
                  Lukk
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#2D3748' }}>
                  Bestill diktsamlinga
                </h3>
                <p className="text-sm mb-6" style={{ color: '#9CA3AF' }}>
                  99 kr + frakt. Vi sender Vipps-forespørsel når vi pakker boken.
                </p>

                <form onSubmit={sendSkjema} className="flex flex-col gap-4">
                  {([
                    { id: 'navn',    label: 'Fullt navn',         type: 'text',  placeholder: 'Ola Nordmann' },
                    { id: 'adresse', label: 'Leveringsadresse',   type: 'text',  placeholder: 'Storgata 1, 5003 Bergen' },
                    { id: 'epost',   label: 'E-post',             type: 'email', placeholder: 'ola@example.no' },
                    { id: 'vipps',   label: 'Vippsnummer',        type: 'tel',   placeholder: '900 00 000' },
                  ] as const).map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        value={form[id]}
                        onChange={e => oppdater(id, e.target.value)}
                        placeholder={placeholder}
                        className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 transition-shadow"
                        style={{
                          borderColor: '#D6D0C4',
                          color: '#2D3748',
                          '--tw-ring-color': '#B4C7B2',
                        } as React.CSSProperties}
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={laster}
                    className="mt-2 w-full rounded-full py-3 text-sm font-bold text-white disabled:opacity-60 transition-[transform,box-shadow] active:scale-[0.97]"
                    style={{
                      background: 'linear-gradient(135deg, #FF5B24 0%, #FF8A00 100%)',
                      boxShadow: '0 4px 12px rgba(255,91,36,0.28)',
                    }}
                  >
                    {laster ? 'Sender bestilling...' : 'Bekreft kjøp'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
