'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const steps = [
  {
    number: '1',
    title: 'سجّل الدخول أو أنشئ حساباً',
    description: 'أنشئ حسابك في دقائق وابدأ بإضافة إنجازاتك فوراً.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'إدارة الأداء المهني',
    description: 'تابع تقدمك، وقيّم أداءك، واستعد لأي تقييم رسمي بثقة.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'اعرض وشارك ملفك الاحترافي',
    description: 'اعرض ملفك الجاهز وشاركه مع الإدارة أو زملائك أو اطبعه للسيرة الذاتية.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
}

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section id="how-it-works" className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            كيف تعمل المنصة؟
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/90">
            ثلاث خطوات بسيطة وتبدأ في توثيق إنجازاتك بشكل احترافي.
          </p>
        </motion.div>
        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={stepVariants} className="h-full">
              <CardWoStyle
                as={motion.div}
                className="group h-full p-8 shadow-lg"
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-sm"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.icon}
                </motion.div>
                <span className="mt-5 block text-sm font-bold text-primary-200">الخطوة {step.number}</span>
                <h3 className="mt-2 text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 flex-1 text-ink/85 leading-relaxed">
                  {step.description}
                </p>
              </CardWoStyle>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
