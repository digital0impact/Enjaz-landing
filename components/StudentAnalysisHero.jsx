'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const callouts = ['تحليل النتائج', 'أنماط الأداء', 'مؤشرات واضحة']

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function StudentAnalysisHero({ ctaUrl = '#' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="student-analysis" className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            بيانات طلابك تتحدث… هل تسمعها؟
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/90 leading-relaxed">
            لا تجعل نتائج الاختبارات مجرد أرقام تنتهي بانتهاء الاختبار.
            <br />
            حلّل النتائج، تعرّف على أنماط الأداء، واستخدم البيانات لتكوين صورة أوضح عن طلابك.
          </p>
          <motion.a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-8 py-4 text-lg font-bold text-white shadow-lg"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(63, 103, 102, 0.45)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            اكتشف تحليل الطلاب
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <CardWoStyle className="w-full max-w-2xl overflow-hidden p-0 shadow-2xl">
            <img
              src="/screen shot/1.gif"
              alt="تحليل نتائج الطلاب"
              width={1440}
              height={960}
              className="block h-auto w-full"
            />
          </CardWoStyle>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {callouts.map((label) => (
            <span
              key={label}
              className="rounded-full border border-primary-500/30 bg-primary-500/10 px-5 py-2 text-sm font-bold text-primary-600"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
