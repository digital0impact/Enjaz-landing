'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const screens = [
  {
    title: 'لوحة التحكم',
    description: 'نظرة عامة على إنجازاتك وتصنيفاتها.',
  },
  {
    title: 'إضافة إنجاز',
    description: 'إضافة وتعديل الإنجازات بسهولة.',
  },
  {
    title: 'الملف الاحترافي',
    description: 'عرض جاهز للمشاركة أو الطباعة.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
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

export default function Screenshots() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section id="screenshots" className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            لقطات من التطبيق
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/90">
            تعرّف على واجهة انجاز المعلم من الداخل.
          </p>
        </motion.div>
        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {screens.map((screen) => (
            <motion.div key={screen.title} variants={cardVariants} className="h-full">
              <CardWoStyle
                as={motion.div}
                className="group h-full p-6 shadow-lg"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex justify-center py-4">
                  <motion.svg
                    className="h-14 w-14 text-primary-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </motion.svg>
                </div>
                <h3 className="text-lg font-bold text-ink">{screen.title}</h3>
                <p className="mt-2 flex-1 text-ink/85">{screen.description}</p>
              </CardWoStyle>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="mt-10 text-center text-sm text-ink/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          يمكنك استبدال هذه المساحات بلقطات شاشة حقيقية من التطبيق لاحقاً.
        </motion.p>
      </div>
    </section>
  )
}
