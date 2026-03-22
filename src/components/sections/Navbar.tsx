'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'
import { ToothIcon } from '@/components/ui/tooth-icon'
import { BOOKING_URL, PHONE_HREF, PHONE } from '@/lib/utils'

const navLinks = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Om Terje', href: '#om-terje' },
  { label: 'Terjes diktsamling', href: '/diktsamling' },
  { label: 'Priser', href: '#priser' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/92 backdrop-blur-md shadow-card">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white shadow-card transition-[transform,box-shadow] hover:shadow-elevated hover:-translate-y-px">
            <ToothIcon className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">Tannlege Terje Mikkelsen</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-sky-600 active:text-sky-800 transition-[color] font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 px-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="text-sm font-medium text-slate-600 hover:text-sky-600 active:text-sky-800 transition-[color] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 px-1"
          >
            {PHONE}
          </a>
          <Button asChild size="sm">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book time
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Åpne meny</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white shadow-card">
                  <ToothIcon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-slate-900">Tannlege Terje Mikkelsen</span>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      className="text-base font-medium text-slate-700 hover:text-sky-600 active:text-sky-800 transition-[color]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-sky-100">
                <Button asChild className="w-full">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book time online
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href={PHONE_HREF}>Ring: {PHONE}</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
