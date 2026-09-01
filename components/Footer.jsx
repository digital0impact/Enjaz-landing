'use client'

const navLinks = [
  { label: 'الرئيسية', href: '#top' },
  { label: 'المميزات', href: '#features' },
  { label: 'الأسعار', href: '#pricing' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
]

const legalLinks = [
  { label: 'سياسة الخصوصية', href: '/privacy' },
  { label: 'الشروط والأحكام', href: '/terms' },
]

export default function Footer({ appUrl = '#' }) {
  const contactUrl = `${appUrl.replace(/\/$/, '')}/contact`

  return (
    <footer id="contact" className="bg-neutral-900/90 text-neutral-300">
      <div className="container mx-auto max-w-4xl px-6 py-14 text-center">
        <p className="text-xl font-bold text-white">إنجاز المعلم</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-neutral-400">
          منصة رقمية تساعد المعلمين على التوثيق والتحليل وإنشاء التقارير.
        </p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-white"
          >
            تواصل معنا
          </a>
        </nav>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-neutral-700 pt-8 sm:flex-row sm:justify-center sm:gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} إنجاز المعلم. جميع الحقوق محفوظة.
          </p>
          <span className="hidden text-neutral-600 sm:inline">|</span>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-neutral-400 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
