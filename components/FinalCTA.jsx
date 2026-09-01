'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

export default function FinalCTA({ ctaUrl = '#' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={titleVariants}>
          <CardWoStyle className="p-10 text-center shadow-2xl md:p-16">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              جاهز تنجز عملك بشكل أكثر تنظيمًا؟
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/90">
              ابدأ اليوم، وحوّل بياناتك وإنجازاتك إلى عمل منظم يمكنك الرجوع إليه في أي وقت.
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
              ابدأ مع إنجاز المعلم
            </motion.a>
            <p className="mt-4 text-sm text-ink/70">لا تحتاج إلى انتظار نهاية العام. ابدأ من اليوم.</p>
          </CardWoStyle>
        </motion.div>
      </div>
    </section>
  )
}
