import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import StudentAnalysisHero from '@/components/StudentAnalysisHero'
import FeatureDetail from '@/components/FeatureDetail'
import Summary from '@/components/Summary'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

// رابط تطبيق انجاز المعلم الفعلي (نطاق فرعي منفصل عن صفحة الهبوط هذه)
const APP_URL = 'https://app.enjaz-almaulm.com/'
// رابط الدخول المباشر للعرض التجريبي (حساب معلم جاهز ببيانات واقعية، بلا تسجيل)
const DEMO_URL = 'https://app.enjaz-almaulm.com/demo'

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar ctaUrl={APP_URL} />
      <Hero ctaUrl={APP_URL} demoUrl={DEMO_URL} />
      <Problem />
      <StudentAnalysisHero ctaUrl={DEMO_URL} />
      <FeatureDetail
        id="results-analysis"
        title="حوّل النتائج إلى معلومات قابلة للاستخدام"
        paragraphs={['بدلًا من قراءة عشرات الأرقام والجداول، استخدم أدوات التحليل لرؤية النتائج بصورة أكثر تنظيمًا ووضوحًا.']}
        bullets={['قراءة أفضل للنتائج', 'اكتشاف الفجوات', 'دعم اتخاذ القرار التعليمي']}
        image={{ src: '/screen shot/2.gif', alt: 'تحليل النتائج' }}
        imagePosition="left"
        ctaText="شاهد التحليل داخل التطبيق"
        ctaHref={DEMO_URL}
      />
      <FeatureDetail
        id="student-patterns"
        title="لأن الدرجة لا تحكي القصة كاملة"
        paragraphs={[
          'قد يحصل طالبان على الدرجة نفسها، لكن يختلف أداؤهما واحتياجهما تمامًا.',
          'يساعدك تحليل أنماط الطلاب على رؤية الفروقات التي قد لا تظهر من الدرجة وحدها.',
        ]}
        highlight="حلّل النمط، وليس الرقم فقط."
        image={{ src: '/screen shot/3.gif', alt: 'أنماط الطلاب' }}
        imagePosition="right"
      />
      <FeatureDetail
        id="report-builder"
        title="من بياناتك إلى تقريرك"
        paragraphs={[
          'لا تبدأ تقريرك من صفحة فارغة.',
          'استخدم بياناتك لإنشاء تقارير منظمة تساعدك على عرض نتائج عملك بشكل أكثر احترافية.',
        ]}
        highlight="بيانات ← تحليل ← تقرير"
        image={{ src: '/screen shot/4.gif', alt: 'منشئ التقارير' }}
        imagePosition="left"
        ctaText="شاهد منشئ التقارير"
        ctaHref={DEMO_URL}
      />
      <FeatureDetail
        id="documentation"
        title="لا تنتظر نهاية العام لتبحث عن إنجازاتك"
        paragraphs={['وثّق إنجازاتك وشواهدك المهنية أولًا بأول، واحتفظ بها منظمة وجاهزة عندما تحتاج إليها.']}
        highlight="إنجازاتك | شواهدك | خبراتك | أداؤك المهني"
      />
      <Summary />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA ctaUrl={APP_URL} />
      <Footer appUrl={APP_URL} />
    </main>
  )
}
