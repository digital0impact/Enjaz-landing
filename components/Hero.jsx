'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeSlideUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
}

const zoomIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export default function Hero({ ctaUrl = '#' }) {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40 min-h-[80vh] flex items-start justify-center"
      style={{ background: 'transparent' }}
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={zoomIn}
            className="-mt-4 flex justify-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            style={{ perspective: 800 }}
          >
            <motion.div
              className="inline-block origin-center"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 720 }}
              transition={{
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              <Image
                src="/logo.png"
                alt="انجاز المعلم"
                width={400}
                height={220}
                className="h-40 w-auto object-contain sm:h-48 md:h-60 lg:h-72"
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
          <motion.h1
            variants={fadeSlideUp}
            className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl drop-shadow-sm"
          >
            تطبيق انجاز المعلم
          </motion.h1>
          <motion.p
            variants={fadeSlideUp}
            className="mx-auto mt-4 max-w-2xl text-base text-ink/90 sm:text-lg md:text-xl leading-relaxed"
          >
            منصتك المتكاملة لإدارة وعرض انجازاتك المهنية
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
              <span>احصل على التطبيق الآن</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
