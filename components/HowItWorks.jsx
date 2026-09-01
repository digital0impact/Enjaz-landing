'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const steps = [
  {
    number: '01',
    title: 'أدخل بياناتك',
    description: 'أضف بيانات الطلاب وإنجازاتك المهنية.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'حلّل',
    description: 'استخدم أدوات التحليل لفهم النتائج وأنماط الأداء.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l4.5-4.5 3.75 3.75L18.75 5.25M18.75 5.25H14.25M18.75 5.25v4.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'أنشئ',
    description: 'حوّل بياناتك إلى تقارير منظمة.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'وثّق',
    description: 'احتفظ بإنجازاتك وشواهدك المهنية.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-1.519-2.639l-4.242 4.242" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 3.104c.251.023.501.05.75.082M19.8 14.652c.221.483.36 1.006.399 1.552M9.75 3.104a48.554 48.554 0 013 0m-3 0c-.251.023-.501.05-.75.082M9 21h6" />
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
            أربع خطوات بسيطة وتبدأ في تنظيم عملك المهني بشكل احترافي.
          </p>
        </motion.div>
        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
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
                <span className="mt-5 block text-sm font-bold text-primary-200">{step.number}</span>
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
