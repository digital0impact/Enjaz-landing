'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const features = [
  {
    title: 'أقل عمل متكرر',
    description: 'قلل الوقت الذي تقضيه في الأعمال التنظيمية.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'بيانات أكثر وضوحًا',
    description: 'حوّل النتائج إلى معلومات أسهل في القراءة.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l4.5-4.5 3.75 3.75L18.75 5.25M18.75 5.25H14.25M18.75 5.25v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19.5h18" />
      </svg>
    ),
  },
  {
    title: 'تنظيم أفضل',
    description: 'اجمع أعمالك المهنية في مكان واحد.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5M3.75 9.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-9M3.75 9.75l1.928-3.856A1.5 1.5 0 016.99 5.25h10.02a1.5 1.5 0 011.313.644l1.927 3.856" />
      </svg>
    ),
  },
  {
    title: 'جاهزية مستمرة',
    description: 'لا تنتظر نهاية العام لترتيب إنجازاتك.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-9-9 9 9 0 019 9z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="features" className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            لأن وقت المعلم ثمين
          </h2>
        </motion.div>
        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className="h-full">
              <CardWoStyle
                as={motion.div}
                className="group h-full p-8"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/20 text-ink">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-4 flex-1 text-ink/85 leading-relaxed">
                  {feature.description}
                </p>
              </CardWoStyle>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
