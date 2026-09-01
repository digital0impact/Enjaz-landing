'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const cards = [
  { emoji: '📊', title: 'حلّل', description: 'حلّل نتائج طلابك.' },
  { emoji: '🔎', title: 'اكتشف', description: 'اكتشف أنماط الأداء.' },
  { emoji: '📝', title: 'أنشئ', description: 'أنشئ تقاريرك.' },
  { emoji: '📁', title: 'وثّق', description: 'وثّق إنجازاتك المهنية.' },
  { emoji: '📋', title: 'نظّم', description: 'نظّم عملك وبياناتك.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

export default function Summary() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            منصة واحدة لرحلة عملك المهني
          </h2>
        </motion.div>
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={itemVariants} className="h-full">
              <CardWoStyle as={motion.div} className="h-full p-7" whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }}>
                <span className="text-4xl">{card.emoji}</span>
                <h3 className="mt-4 text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm text-ink/85 leading-relaxed">{card.description}</p>
              </CardWoStyle>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
