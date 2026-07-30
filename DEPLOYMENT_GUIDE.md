# 🚀 دليل رفع وتشغيل مشروع "قصر المندي" على GitHub و Vercel و Neon PostgreSQL

هذا الدليل يشرح لك خطوة بخطوة كيفية رفع المشروع على **GitHub** وتشبك قاعدة البيانات السحابية **Neon PostgreSQL** ونشر الموقع رسمياً على منصة **Vercel** مجاناً وفي أقل من 5 دقائق!

---

## 📌 الخطوة 1: تجهيز قاعدة البيانات على Neon (Neon.tech)

1. اذهب إلى موقع [https://neon.tech](https://neon.tech) وسجل حساباً مجانياً (باستخدام Google أو GitHub).
2. أنشئ مشروعاً جديداً باسم: `qasr-al-mandi-db`.
3. اضغط على **"Connect"** أو **"Dashboard"** وقم بنسخ رابط **`DATABASE_URL`**.
   - سيكون الرابط بهذا الشكل:
     ```text
     postgresql://neondb_owner:XXXXXX@ep-sample-1234.us-east-2.aws.neon.tech/neondb?sslmode=require
     ```
4. احفظ هذا الرابط معك للخطوة القادمة.

---

## 📌 الخطوة 2: رفع الكود على GitHub

في مبنى المشروع، افتح موجه الأوامر (Terminal / PowerShell) وقم بتنفيذ الأوامر التالية بالترتيب:

```bash
# 1. تهيئة المستودع
git init

# 2. إضافة جميع الملفات
git add .

# 3. حفظ التغييرات
git commit -m "إطلاق مشروع منيو قصر المندي مع دعم Neon PostgreSQL و Vercel"

# 4. ربط المستودع برابط GitHub الخاص بك
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/qasr-al-mandi.git

# 5. رفع الكود
git push -u origin main
```

---

## 📌 الخطوة 3: نشر الموقع على Vercel (Vercel.com)

1. اذهب إلى موقع [https://vercel.com](https://vercel.com) وسجل الدخول بحساب GitHub الخاص بك.
2. اضغط على **"Add New Project"** واختر مستودع `qasr-al-mandi`.
3. في صفحة الإعدادات قبل النشر (Environment Variables):
   - قم بإضافة متغير بيئة جديد:
     - **Key (الاسم):** `DATABASE_URL`
     - **Value (القيمة):** ضع رابط Neon الذي نسخته من الخطوة الأولى.
4. اضغط على **"Deploy"**.
5. خلال 30 ثانية سيكون موقعك يعمل على رابط مثل:
   `https://qasr-al-mandi.vercel.app`

---

## 📌 الخطوة 4: إنشاء الجداول تلقائياً بنقرة واحدة (Database Auto-Init)

بمجرد رفع الموقع على Vercel، افتح المتصفح واذهب إلى هذا الرابط لإنشاء الجداول وحقن بيانات الـ 60 وجبة والقوائم تلقائياً في قاعدة بيانات Neon:

```text
https://qasr-al-mandi.vercel.app/api/init
```

ستظهر لك رسالة تأكيد نجاح إنشاء الجداول وتوليد الـ 60 وجبة:
`{"success": true, "message": "Neon PostgreSQL Database successfully initialized for Qasr Al-Mandi!"}`

---

## 🔑 بيانات لوحة التحكم (Admin Credentials)
- 👤 **اسم المستخدم:** `admin`
- 🔑 **كلمة المرور:** `mandi2026`
