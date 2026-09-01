import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Screenshots from '@/components/Screenshots'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

// رابط تطبيق انجاز المعلم الفعلي (نطاق فرعي منفصل عن صفحة الهبوط هذه)
const APP_URL = 'https://app.enjaz-almaulm.com/'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar ctaUrl={APP_URL} />
      <Hero ctaUrl={APP_URL} />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <Pricing ctaUrl={APP_URL} />
      <FAQ />
      <Footer ctaUrl={APP_URL} />
    </main>
  )
}
