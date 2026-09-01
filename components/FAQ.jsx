'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import CardWoStyle from './CardWoStyle'

const items = [
  {
    question: 'هل إنجاز المعلم مخصص للمعلمين فقط؟',
    answer: 'نعم، تم تصميم المنصة لتلبية احتياجات المعلم في التوثيق والتحليل والتقارير.',
  },
  {
    question: 'هل أستطيع تحليل نتائج الطلاب؟',
    answer: 'نعم، يتضمن التطبيق أدوات لتحليل النتائج.',
  },
  {
    question: 'ما المقصود بتحليل أنماط الطلاب؟',
    answer: 'يساعدك على قراءة أنماط الأداء واكتشاف الفروقات التي قد لا تظهر من الدرجة وحدها.',
  },
  {
    question: 'هل يمكن إنشاء التقارير؟',
    answer: 'نعم، يتضمن التطبيق منشئ تقارير.',
  },
  {
    question: 'هل يمكنني توثيق إنجازاتي المهنية؟',
    answer: 'نعم، يمكنك تنظيم وتوثيق إنجازاتك وشواهدك المهنية.',
  },
  {
    question: 'هل توجد خطة مجانية؟',
    answer: 'نعم، وفق المزايا المتاحة في الخطة المجانية.',
  },
  {
    question: 'هل أستطيع استخدام التطبيق من الجوال؟',
    answer: 'نعم، يمكنك استخدام إنجاز المعلم مباشرة من متصفح الجوال، وتثبيته على الشاشة الرئيسية كتطبيق ويب (PWA) لتجربة أقرب للتطبيق الأصلي دون الحاجة لأي متجر. التطبيق غير متاح حاليًا على متجري آبل وجوجل.',
  },
]

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35 },
  }),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section id="faq" className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            الأسئلة الشائعة
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/90">
            إجابات سريعة على أكثر الأسئلة تداولاً.
          </p>
        </motion.div>
        <div className="mt-20 space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={item.question}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <CardWoStyle className="overflow-hidden rounded-xl shadow-md">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-right"
                >
                  <span className="font-bold text-ink">{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-primary-300"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="border-t border-primary-500/30"
                    >
                      <p className="px-6 pb-6 pt-2 text-ink/85 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardWoStyle>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
