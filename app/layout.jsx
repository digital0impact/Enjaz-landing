import { Tajawal } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import VideoBackground from '@/components/VideoBackground'

const tajawal = Tajawal({
  weight: ['400', '500', '700', '800'],
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata = {
  title: 'انجاز المعلم | منصتك لإدارة وعرض انجازاتك المهنية',
  description: 'منصتك المتكاملة لإدارة وعرض انجازاتك المهنية كمعلم. تطبيق انجاز المعلم.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans min-h-screen bg-transparent text-ink antialiased">
        <VideoBackground />
        <div className="relative z-0">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
