import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { AnxietySection } from '@/components/sections/AnxietySection'
import { AboutTerje } from '@/components/sections/AboutTerje'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/sections/Footer'
import { StickyMobileCta } from '@/components/sections/StickyMobileCta'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <AboutTerje />
        <Testimonials />
        <AnxietySection />
        <Pricing />
        <FAQ />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
