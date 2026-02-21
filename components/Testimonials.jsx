'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const testimonials = [
  {
    quote: 'منصة بسيطة وفعّالة ساعدتني في تنظيم إنجازاتي وعرضها بشكل احترافي في التقييمات.',
    name: 'معلم تجربة مستخدم',
    role: 'معلم',
  },
  {
    quote: 'وفرت عليّ الكثير من الوقت في تجهيز ملف الإنجازات للمشرفين والإدارة.',
    name: 'معلم راضٍ',
    role: 'معلم',
  },
  {
    quote: 'واجهة واضحة وسهلة، أنصح بها كل زملائي.',
    name: 'مستخدم التطبيق',
    role: 'معلم',
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

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section id="testimonials" className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            ماذا يقول المعلمون؟
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/90">
            آراء حقيقية من معلمين يستخدمون انجاز المعلم.
          </p>
        </motion.div>
        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants} className="h-full">
              <CardWoStyle
                as={motion.div}
                className="h-full p-8 shadow-lg"
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                }}
                transition={{ duration: 0.25 }}
              >
                <svg className="h-10 w-10 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-5 flex-1 text-ink/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-ink/70">{t.role}</p>
                </div>
              </CardWoStyle>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
