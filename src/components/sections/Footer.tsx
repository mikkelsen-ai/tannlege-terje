import { PHONE, PHONE_HREF, BOOKING_URL } from '@/lib/utils'
import { ToothIcon } from '@/components/ui/tooth-icon'

const navLinks = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Om Terje', href: '#om-terje' },
  { label: 'Priser', href: '#priser' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white">
                <ToothIcon className="h-5 w-5" />
              </div>
              <span className="font-semibold text-slate-900">Tannlege Terje Mikkelsen</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Trygg og smertefri tannbehandling i Bergen sentrum siden 2004. Helfo-avtale og
              spesialisering på angstpasienter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-slate-900 text-sm mb-3">Navigasjon</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-600 font-medium hover:underline"
                >
                  Book time online →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-slate-900 text-sm mb-3">Kontakt</p>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              <li>Torget 11</li>
              <li>5014 Bergen</li>
              <li>
                <a href={PHONE_HREF} className="hover:text-sky-600 transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:post@mikkelsen-tannklinikk.no"
                  className="hover:text-sky-600 transition-colors"
                >
                  post@mikkelsen-tannklinikk.no
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="font-semibold text-slate-900 text-sm mb-3">Åpningstider</p>
            <ul className="flex flex-col gap-1 text-sm text-slate-600">
              <li className="flex justify-between gap-4">
                <span>Mandag–fredag</span>
                <span>08–17</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Lørdag</span>
                <span>09–14</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Søndag</span>
                <span className="text-slate-400">Stengt</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Akutte tilfeller: ring og vi hjelper deg videre.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © 2026 Tannlege Terje Mikkelsen AS · Org.nr. 123 456 789
          </p>
          <div className="flex gap-5 text-sm text-slate-500">
            <a href="/personvern" className="hover:text-sky-600 transition-colors">
              Personvern
            </a>
            <a href="/cookies" className="hover:text-sky-600 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
