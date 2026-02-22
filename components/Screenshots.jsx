'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const screens = [
  '/screen shot/1.gif',
  '/screen shot/2.gif',
  '/screen shot/3.gif',
  '/screen shot/4.gif',
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
          className="mt-20 grid gap-10 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {screens.map((src) => (
            <motion.div key={src} variants={cardVariants} className="flex justify-center">
              <CardWoStyle
                as={motion.div}
                className="group overflow-hidden p-0 shadow-lg"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
                }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={src}
                  alt="لقطة من التطبيق"
                  className="block h-auto w-full max-w-full"
                />
              </CardWoStyle>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
