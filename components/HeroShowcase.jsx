'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// تسلسل العرض في الـHero: نتائج الطلاب → تحليل النتائج → أنماط الطلاب → التقرير
const slides = [
  { src: '/screen shot/1.gif', label: 'نتائج الطلاب' },
  { src: '/screen shot/2.gif', label: 'تحليل النتائج' },
  { src: '/screen shot/3.gif', label: 'أنماط الطلاب' },
  { src: '/screen shot/4.gif', label: 'التقرير' },
]

const SLIDE_DURATION_MS = 4000

export default function HeroShowcase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* aspect-[3/2] يحجز مساحة الصورة (1440×960) مسبقًا فلا تتحرك بقية عناصر
          الصفحة أثناء تحميل ملفات الـGIF الكبيرة */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].src}
            src={slides[index].src}
            alt={slides[index].label}
            width={1440}
            height={960}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 block h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={slide.label}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-primary-500' : 'w-2 bg-neutral-400/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
