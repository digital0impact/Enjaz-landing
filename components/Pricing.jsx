'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CardWoStyle from './CardWoStyle'

const APP_URL = 'https://www.enjaz-almaulm.com/'
const STORE_URL = 'https://salla.sa/moaen.lkm'

const plans = [
  {
    name: 'الاشتراك الأساسي',
    price: 'مجاني',
    description: 'اشتراك مجاني مع ميزات أساسية',
    features: [
      'إدارة الطلاب الأساسية',
      'تتبع الأداء البسيط',
      'تقارير أساسية',
      'نسخ احتياطي محدود (5 ملفات)',
    ],
    cta: 'احصل على التطبيق',
    ctaUrl: APP_URL,
    highlighted: false,
  },
  {
    name: 'الاشتراك النصف سنوي',
    price: '29.99 ريال',
    description: 'اشتراك لمدة 6 أشهر',
    features: [
      'جميع الميزات الأساسية',
      'تقارير متقدمة وشاملة',
      'نسخ احتياطي غير محدود',
      'تحديثات مجانية ومستمرة',
      'تصدير التقارير بصيغ متعددة',
      'إحصائيات تفصيلية',
    ],
    cta: 'متجر مُعين',
    ctaUrl: STORE_URL,
    highlighted: true,
  },
  {
    name: 'الاشتراك السنوي',
    price: '49.99 ريال',
    description: 'اشتراك شامل لمدة سنة كاملة',
    features: [
      'جميع الميزات الأساسية',
      'تقارير متقدمة وشاملة',
      'نسخ احتياطي غير محدود',
      'تحديثات مجانية ومستمرة',
      'تصدير التقارير بصيغ متعددة',
      'إحصائيات تفصيلية',
    ],
    cta: 'متجر مُعين',
    ctaUrl: STORE_URL,
    highlighted: false,
    ribbon: 'توفير اكبر',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section id="pricing" className="bg-transparent py-24 md:py-32" ref={ref}>
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            الأسعار
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/90">
            اختر الخطة المناسبة لك من مُعين.
          </p>
        </motion.div>
        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={cardVariants} className="h-full">
              <motion.div className="relative h-full">
                {plan.ribbon && (
                  <div className="absolute right-2 top-0 z-20 flex flex-col items-center" aria-hidden>
                    {/* خيط يتدلى من زاوية البطاقة */}
                    <div className="h-5 w-px bg-red-900/70" />
                    {/* ثقب في أعلى بطاقة الهدايا */}
                    <div className="h-1.5 w-1.5 rounded-full border-2 border-red-800 bg-red-700" />
                    {/* بطاقة هدايا حمراء متدلية */}
                    <motion.div
                      className="flex min-w-[110px] items-center justify-center rounded-lg rounded-t-none bg-red-600 px-4 py-2.5 shadow-lg"
                      initial={{ rotate: -2 }}
                      animate={{ rotate: [-2, 1.5, -2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)' }}
                    >
                      <span className="text-sm font-bold text-white">{plan.ribbon}</span>
                    </motion.div>
                  </div>
                )}
                <CardWoStyle
                  as={motion.div}
                  className={`relative h-full px-8 pb-8 pt-16 shadow-lg ${plan.highlighted ? 'ring-2 ring-primary-400/60' : ''}`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
                  }}
                  transition={{ duration: 0.25 }}
                >
                {plan.highlighted && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl ring-2 ring-primary-400/40 pointer-events-none"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
                <div className="relative z-10 flex w-full flex-col">
                  <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-ink">{plan.price}</p>
                  <p className="mt-1.5 text-ink/85">{plan.description}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center justify-center gap-2 text-ink/85">
                        <svg className="h-5 w-5 shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={plan.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex min-h-[52px] w-full items-center justify-center rounded-lg bg-primary-500 py-3.5 text-center font-bold text-white hover:bg-primary-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.cta}
                  </motion.a>
                </div>
              </CardWoStyle>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
