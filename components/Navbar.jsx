'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const logoSrc = '/logo.png'

const navLinks = [
  { label: 'المميزات', href: '#features' },
  { label: 'كيف تعمل', href: '#how-it-works' },
  { label: 'لقطات الشاشة', href: '#screenshots' },
  { label: 'الشهادات', href: '#testimonials' },
  { label: 'الأسعار', href: '#pricing' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-900/90 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-2.5">
        <a href="#" className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="انجاز المعلم"
            width={120}
            height={44}
            className="h-8 w-auto object-contain md:h-9"
            unoptimized
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-200 transition-colors hover:text-primary-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-neutral-200 hover:bg-white/10 md:hidden"
            aria-label="القائمة"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-neutral-700 bg-neutral-900/90 px-6 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-3 font-medium text-neutral-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
