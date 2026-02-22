'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'المميزات', href: '#features' },
  { label: 'كيف تعمل', href: '#how-it-works' },
  { label: 'لقطات الشاشة', href: '#screenshots' },
  { label: 'الشهادات', href: '#testimonials' },
  { label: 'الأسعار', href: '#pricing' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
]

export default function Footer({ ctaUrl = '#' }) {
  return (
    <footer className="bg-neutral-900/90 text-neutral-300">
      <div className="container mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold text-white">انجاز المعلم</p>
            <p className="mt-2 text-sm text-neutral-400">منصتك المتكاملة لإدارة وعرض انجازاتك المهنية</p>
            <p className="mt-2 text-sm text-neutral-400">
              للتواصل والدعم:{' '}
              <a href="mailto:digital0impact@gmail.com" className="text-primary-300 transition-colors hover:text-white">
                digital0impact@gmail.com
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-neutral-700 pt-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} انجاز المعلم. جميع الحقوق محفوظة.
            </p>
            <span className="hidden text-neutral-600 sm:inline">|</span>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/privacy" className="text-neutral-400 transition-colors hover:text-white">
                سياسة الخصوصية
              </a>
              <a href="/terms" className="text-neutral-400 transition-colors hover:text-white">
                الشروط والأحكام
              </a>
              <a href="mailto:digital0impact@gmail.com" className="text-neutral-400 transition-colors hover:text-white">
                للتواصل والدعم: digital0impact@gmail.com
              </a>
            </div>
          </div>
          <motion.a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white"
            whileHover={{ scale: 1.04, boxShadow: '0 4px 14px rgba(63, 103, 102, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            متجر مُعين
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
