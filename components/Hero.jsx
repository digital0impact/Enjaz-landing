'use client'

import { motion } from 'framer-motion'
import HeroShowcase from './HeroShowcase'

const fadeSlideUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export default function Hero({ ctaUrl = '#' }) {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-32 flex items-start justify-center"
      style={{ background: 'transparent' }}
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={fadeSlideUp}
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl drop-shadow-sm"
          >
            أنجز عملك كمعلم بذكاء أكبر
          </motion.h1>
          <motion.p
            variants={fadeSlideUp}
            className="mx-auto mt-4 max-w-2xl text-base text-ink/90 sm:text-lg md:text-xl leading-relaxed"
          >
            حلّل نتائج طلابك، اكتشف أنماط أدائهم، أنشئ تقاريرك، ووثّق إنجازاتك المهنية — في مكان واحد.
          </motion.p>
          <motion.div variants={fadeSlideUp} className="mt-6 flex flex-wrap justify-center gap-4">
            <motion.a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-8 py-4 text-lg font-bold text-white shadow-lg"
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(63, 103, 102, 0.45)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>جرّب إنجاز المعلم</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-ink/15 bg-white/60 px-8 py-4 text-lg font-bold text-ink shadow-sm backdrop-blur-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              شاهد كيف يعمل
            </motion.a>
          </motion.div>
          <motion.p variants={fadeSlideUp} className="mt-3 text-sm text-ink/70">
            مصمم خصيصًا للمعلمين في المملكة العربية السعودية.
          </motion.p>
          <motion.div variants={fadeSlideUp} className="mt-10 w-full">
            <HeroShowcase />
          </motion.div>
          <motion.p
            variants={fadeSlideUp}
            className="mt-8 text-lg font-semibold text-ink/90 sm:text-xl md:text-2xl"
          >
            تصميم وتطوير: أ. أمل بنت علي الشامان
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
