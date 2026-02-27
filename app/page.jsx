import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Screenshots from '@/components/Screenshots'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

// رابط متجر مُعين على سلة
const STORE_URL = 'https://www.enjaz-almaulm.com/'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar ctaUrl={STORE_URL} />
      <Hero ctaUrl={STORE_URL} />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <Pricing ctaUrl={STORE_URL} />
      <FAQ />
      <Footer ctaUrl={STORE_URL} />
    </main>
  )
}
