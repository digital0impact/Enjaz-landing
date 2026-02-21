import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const STORE_URL = 'https://salla.sa/moaen.lkm'

export const metadata = {
  title: 'الشروط والأحكام | انجاز المعلم',
  description: 'شروط الاستخدام والأحكام لتطبيق انجاز المعلم.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-ink md:text-4xl">الشروط والأحكام</h1>
          <p className="mt-4 text-ink/80">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
          <div className="mt-12 space-y-8 text-ink/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-ink">1. القبول بالشروط</h2>
              <p className="mt-2">
                باستخدامك تطبيق انجاز المعلم أو الخدمات المرتبطة به، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                إن عدم موافقتك يمنعك من استخدام الخدمة.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">2. وصف الخدمة</h2>
              <p className="mt-2">
                يوفر انجاز المعلم منصة لإدارة وعرض الإنجازات المهنية (دورات، شهادات، مشاريع). الخدمة متاحة عبر
                الاشتراكات المعروضة في المتجر، وتشمل الميزات المذكورة في كل خطة.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">3. حساب المستخدم والمسؤولية</h2>
              <p className="mt-2">
                أنت مسؤول عن الحفاظ على سرية بيانات الدخول والمحتوى الذي تضيفه. يجب أن تكون المعلومات والإنجازات
                المضافة صحيحة ولا تنتهك حقوق الآخرين أو القوانين المعمول بها.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">4. الاستخدام المقبول</h2>
              <p className="mt-2">
                يُحظر استخدام الخدمة لأغراض غير قانونية أو مخالفة للآداب العامة، أو لإلحاق الضرر بالتطبيق أو
                بالمستخدمين. نحتفظ بحق تعليق أو إنهاء الحساب في حال المخالفة.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">5. الملكية الفكرية</h2>
              <p className="mt-2">
                المحتوى الذي تضيفه يبقى ملكك. باستخدام الخدمة، تمنحنا ترخيصاً محدوداً لعرضه وتخزينه وتشغيل الخدمة.
                العلامات والتصميم والبرمجيات الخاصة بنا محمية ولا يجوز نسخها أو إعادة استخدامها دون إذن.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">6. الاشتراكات والدفع</h2>
              <p className="mt-2">
                الاشتراكات والمدفوعات تتم عبر متجر مُعين (سلة). تخضع المعاملات لسياسات المتجر. يمكنك إلغاء الاشتراك
                أو طلب استرداد وفق سياسة المتجر والقانون.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">7. التعديلات والإيقاف</h2>
              <p className="mt-2">
                قد نعدّل الشروط أو ميزات الخدمة مع إشعارك عند الإمكان. نحتفظ بحق إيقاف الخدمة أو جزء منها لأسباب
                تقنية أو قانونية، مع مراعاة حقوق المشتركين.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-ink">8. الاتصال</h2>
              <p className="mt-2">
                لأي استفسار حول الشروط أو الخدمة، يرجى التواصل معنا عبر قنوات الدعم أو صفحة تواصل معانا على موقعنا.
              </p>
            </section>
          </div>
          <p className="mt-12 text-sm text-ink/70">
            لمعرفة كيفية تعاملنا مع بياناتك، راجع{' '}
            <a href="/privacy" className="font-medium text-primary-600 underline hover:text-primary-700">
              سياسة الخصوصية
            </a>
            .
          </p>
        </div>
      </article>
      <Footer ctaUrl={STORE_URL} />
    </main>
  )
}
