'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
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

/**
 * قسم تفصيلي لميزة واحدة: نص (عنوان + فقرات + نقاط اختيارية + سطر إبراز
 * اختياري + زر اختياري) بجانب صورة اختيارية، بترتيب متبادل يمينًا/يسارًا.
 */
export default function FeatureDetail({
  id,
  title,
  paragraphs = [],
  bullets = [],
  highlight,
  image,
  ctaText,
  ctaHref,
  imagePosition = 'right',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const imageOnLeft = imagePosition === 'left'

  return (
    <section id={id} className="bg-transparent py-16 md:py-20" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <div
          className={`flex flex-col items-center gap-12 md:gap-16 ${
            image ? (imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse') : ''
          }`}
        >
          <motion.div
            className={`text-center ${image ? 'md:w-1/2 md:text-right' : 'mx-auto max-w-2xl'}`}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="text-2xl font-bold text-ink sm:text-3xl md:text-4xl">{title}</h2>
            {paragraphs.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-ink/90">
                {p}
              </p>
            ))}
            {bullets.length > 0 && (
              <ul className={`mt-6 space-y-2 ${image ? 'md:mr-0' : 'mx-auto max-w-md text-right'}`}>
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-ink/90">
                    <span className="text-primary-500">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {highlight && (
              <p className="mt-6 text-xl font-bold text-primary-600">{highlight}</p>
            )}
            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 font-bold text-primary-600 transition-colors hover:text-primary-700"
              >
                {ctaText}
                <span aria-hidden>←</span>
              </a>
            )}
          </motion.div>
          {image && (
            <motion.div
              className="md:w-1/2"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <CardWoStyle className="mx-auto w-full max-w-md overflow-hidden p-0 shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1440}
                  height={960}
                  className="block h-auto w-full"
                />
              </CardWoStyle>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
