'use client'

/**
 * بطاقة زجاجية شفافة تعرض خلفية الفيديو من خلالها مع طمس خفيف
 */
export default function CardWoStyle({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.03] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.004) 0%, rgba(255,255,255,0.001) 50%, rgba(255,255,255,0.002) 100%)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.02) inset, 4px 8px 16px rgba(0,0,0,0.35), 12px 24px 40px rgba(0,0,0,0.4), 24px 48px 80px -16px rgba(0,0,0,0.5)',
      }}
      {...props}
    >
      <div className="relative z-10 flex h-full flex-col items-center text-center text-ink">
        {children}
      </div>
    </Component>
  )
}
