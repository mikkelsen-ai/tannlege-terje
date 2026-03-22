import { Phone } from 'lucide-react'
import { PHONE, PHONE_HREF } from '@/lib/utils'

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2 w-full rounded-md bg-sky-600 py-3 text-sm font-semibold text-white hover:bg-sky-700 active:bg-sky-800 transition-colors min-h-[44px]"
      >
        <Phone className="h-4 w-4" />
        Ring oss: {PHONE}
      </a>
    </div>
  )
}
