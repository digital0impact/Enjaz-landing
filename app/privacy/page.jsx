import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const STORE_URL = 'https://enjaz-almaulm.com/'

export const metadata = {
  title: 'سياسة الخصوصية | انجاز المعلم',
  description: 'سياسة الخصوصية لتطبيق انجاز المعلم.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-ink md:text-4xl">سياسة الخصوصية</h1>
          <p className="mt-4 text-ink/80">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
          <div className="mt-12 space-y-8 text-ink/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-ink">1. مقدمة</h2>
              <p className="mt-2">
                نحن في انجاز المعلم نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع
                واستخدام وحماية معلوماتك عند استخدام تطبيقنا أو خدماتنا.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">2. المعلومات التي نجمعها</h2>
              <p className="mt-2">
                قد نجمع معلومات مثل: الاسم، البريد الإلكتروني، بيانات الحساب، والمحتوى الذي تضيفه (إنجازات،
                تصنيفات). نستخدم هذه البيانات لتقديم الخدمة وتحسينها ولأغراض الدعم الفني.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">3. استخدام المعلومات</h2>
              <p className="mt-2">
                نستخدم المعلومات لتفعيل حسابك، حفظ إنجازاتك، تحسين التطبيق، والرد على استفساراتك. لا نبيع بياناتك
                الشخصية لأطراف ثالثة لأغراض تسويقية.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">4. الأمان والاحتفاظ بالبيانات</h2>
              <p className="mt-2">
                نطبق إجراءات أمنية مناسبة لحماية بياناتك. نحتفظ بالبيانات طوال مدة استخدامك للخدمة وما بعدها وفق
                المتطلبات القانونية.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">5. حقوقك</h2>
              <p className="mt-2">
                يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها. للاستفسارات أو ممارسة حقوقك، تواصل معنا عبر
                قنوات الدعم المتاحة.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">6. التعديلات</h2>
              <p className="mt-2">
                قد نحدّث سياسة الخصوصية من وقت لآخر. سنعلمك بأي تغييرات جوهرية عبر التطبيق أو البريد الإلكتروني.
              </p>
            </section>
          </div>
          <p className="mt-12 text-sm text-ink/70">
            لمراجعة الشروط والأحكام، يرجى زيارة صفحة{' '}
            <a href="/terms" className="font-medium text-primary-600 underline hover:text-primary-700">
              الشروط والأحكام
            </a>
            .
          </p>
        </div>
      </article>
      <Footer ctaUrl={STORE_URL} />
    </main>
  )
}
