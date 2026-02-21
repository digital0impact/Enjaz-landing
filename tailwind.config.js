/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* تدرج من #3f6766: غامق → فاتح (أزرار، روابط، حدود، أيقونات) */
        primary: {
          50: '#eef4f4',
          100: '#d9e9e9',
          200: '#b3d3d3',
          300: '#8cbdbd',
          400: '#66a7a7',
          500: '#3f6766',
          600: '#375958',
          700: '#2f4b4a',
          800: '#273d3c',
          900: '#1f2f2e',
        },
        /* بنفسجي-رمادي من التصميم (نص وعناصر) */
        accent: {
          50: '#f5f4f8',
          100: '#e8e6ef',
          200: '#d4d0e0',
          300: '#b5aec8',
          400: '#807b96',
          500: '#645f7b',
          600: '#524e66',
          700: '#454155',
          800: '#2d2a38',
          900: '#1a1820',
        },
        /* خلفيات داكنة وتدرج نهاية الفيديو */
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        },
        /* لون الخطوط الرئيسي */
        ink: '#1c1f33',
        /* للخلفيات الداكنة جداً (مثل الفيديو) */
        dark: {
          DEFAULT: '#0a0a0f',
          50: '#1a1820',
          100: '#15131a',
          200: '#0f0e14',
          300: '#0a0a0f',
          400: '#060508',
        },
      },
      fontFamily: {
        sans: ['var(--font-tajawal)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '500',
        medium: '500',
        semibold: '700',
        bold: '800',
      },
      backgroundImage: {
        /* تدرج من ألوان الفيديو: سيان → بنفسجي-رمادي → غامق */
        'hero-gradient': 'linear-gradient(180deg, #e8f8fc 0%, #e8e6ef 40%, #1a1820 100%)',
        'video-gradient': 'linear-gradient(180deg, #a2f3fb 0%, #807b96 50%, #0a0a0f 100%)',
        'section-light': 'linear-gradient(180deg, rgba(232,248,252,0.9) 0%, rgba(245,244,248,0.95) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
