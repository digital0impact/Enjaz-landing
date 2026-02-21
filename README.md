# انجاز المعلم - صفحة هبوط

صفحة هبوط احترافية لتطبيق **انجاز المعلم** مبنية بـ Next.js و Tailwind CSS.

## التشغيل

```bash
npm install
npm run dev
```

ثم افتح [http://localhost:3000](http://localhost:3000).

## البناء للإنتاج

```bash
npm run build
npm start
```

## تغيير رابط متجر سلة

في ملف `app/page.jsx` غيّر قيمة الثابت:

```js
const SALLA_STORE_URL = 'https://enjaz.salla.sa'
```

إلى رابط متجر سلة الخاص بك. نفس الرابط يُستخدم في زر CTA وفي التذييل وشريط التنقل.

## هيكل المشروع

- `app/page.jsx` — الصفحة الرئيسية (ترتيب الأقسام)
- `app/layout.jsx` — التخطيط العام واتجاه RTL وخط Cairo
- `app/globals.css` — أنماط Tailwind العامة
- `components/` — مكونات كل قسم:
  - `Navbar.jsx` — شريط التنقل
  - `Hero.jsx` — قسم البطل
  - `Features.jsx` — المميزات
  - `HowItWorks.jsx` — كيف تعمل المنصة
  - `Screenshots.jsx` — لقطات الشاشة
  - `Testimonials.jsx` — الشهادات
  - `Pricing.jsx` — الأسعار
  - `FAQ.jsx` — الأسئلة الشائعة
  - `Footer.jsx` — التذييل

## تخصيص النصوص

يمكنك استبدال النصوص التسويقية داخل كل مكون في مجلد `components/` (المصفوفات مثل `features`، `steps`، `testimonials`، `plans`، `items` في FAQ).

## لقطات الشاشة الحقيقية

في `components/Screenshots.jsx` استبدل المساحات الملونة بلقطات شاشة حقيقية باستخدام عنصر `<img>` أو مكون Next.js `Image` مع مسارات الصور.
