# 🎓 Frontend_Project – سامانه مدیریت کاربران (مشابه یودمی)

این پروژه یک **سایت آموزشی ساده** با قابلیت **مدیریت کاربران** است که ظاهری مشابه یودمی دارد. پروژه در دو نسخه **موبایل** و **لب تاب** (ریسپانسیو) طراحی شده و از **صفحه‌بندی (Pagination)** برای نمایش کاربران استفاده می‌کند.
<div align="center">
  <img src="https://github.com/user-attachments/assets/a506b8c9-ff84-42cc-a006-935f66127f63" alt="تصویر پروژه" width="600"/>
</div>
## ✨ ویژگی‌های اصلی

- ✅ صفحه اصلی (خانه) با طراحی جذاب و آیکون اختصاصی پروژه
- ✅ صفحه مدیریت کاربران با فرم ثبت اطلاعات (نام، نام‌خانوادگی، ایمیل)
- ✅ نمایش کاربران ثبت‌شده در یک جدول مرتب
- ✅ صفحه‌بندی هر ۱۰ کاربر در هر صفحه (با دکمه‌های رفتن به صفحات بعدی/قبلی)
- ✅ طراحی کاملاً واکنش‌گرا (Responsive) برای موبایل و دسکتاپ
- ✅ قابلیت توسعه بسیار بالا (معماری مناسب برای اضافه شدن امکانات جدید)
<div style="display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
  <img src="https://github.com/user-attachments/assets/922475c4-4e24-441b-8589-a9c1543bac20" alt="تصویر 1" style="width: 32%; object-fit: cover;">
  <img src="https://github.com/user-attachments/assets/6c7abb67-54da-4112-b9ed-0146e55265ed" alt="تصویر 2" style="width: 32%; object-fit: cover;">
  <img  src="https://github.com/user-attachments/assets/14d6eb3c-da62-4b3a-811e-80059a2c4e03" alt="تصویر 3" style="width: 32%; object-fit: cover;">
</div>
## 🛠️ تکنولوژی‌های استفاده‌شده

- HTML5
- CSS3 (با رویکرد Flex/Grid و Media Queries)
- JavaScript (Vanilla JS – بدون فریم‌ورک)
- Font Awesome / آیکون اختصاصی پروژه
- LocalStorage (برای ذخیره کاربران در مرورگر – اختیاری)

## 📁 ساختار پروژه
Frontend_Project/
│
├── index.html # صفحه اصلی (خانه)
├── users.html # صفحه مدیریت کاربران
├── assets/
│ ├── css/
│ │ ├── style.css # استایل‌های عمومی و ریسپانسیو
│ │ └── users.css # استایل مخصوص صفحه کاربران
│ ├── js/
│ │ ├── main.js # منطق صفحه اصلی
│ │ └── users.js # منطق مدیریت کاربران + صفحه‌بندی
│ └── images/
│ └── logo-icon.png # آیکون اختصاصی پروژه
└── README.md

https://github.com/amirhossein-sabouri/Frontend_Project/issues/1#issue-4616811374

## 🚀 نحوه اجرا

1. پروژه را clone کنید:
   ```bash
   git clone https://github.com/your-username/Frontend_Project.git
فایل index.html را در مرورگر باز کنید.

روی دکمه مدیریت کاربر ها کلیک کنید.

کاربر جدید ثبت کنید و جدول را مشاهده کنید.

با استفاده از دکمه‌های صفحه‌بندی، لیست کاربران را جابه‌جا کنید.

📱 قابلیت ریسپانسیو
صفحه در عرض‌های کمتر از ۷۶۸px به حالت ستونی و فشرده (موبایل) تبدیل می‌شود.

جدول کاربران در موبایل به صورت کارت‌های عمودی نمایش داده می‌شود.

دکمه‌های صفحه‌بندی به صورت لمسی بزرگ‌تر می‌شوند.

🔮 قابلیت توسعه (برای آینده)
از آنجا که پروژه بر اساس معماری ساده و ماژولار طراحی شده، به راحتی می‌توان افزود:

ویرایش و حذف کاربران

جستجو و فیلتر کاربران

اتصال به بک‌اند واقعی (API)

احراز هویت (ورود و ثبت‌نام)

نقش‌های مختلف (ادمین، کاربر عادی)

ذخیره اطلاعات در دیتابیس (با Node.js/PHP)

🖼️ پیش‌نمایش (اسکرین‌شات)
در حال حاضر تصویری اضافه نشده است. می‌توانید در بخش assets/images/screenshot.png یک اسکرین‌شات اضافه کنید.

👨‍💻 نحوه مشارکت
Fork مخزن اصلی

یک Branch جدید ایجاد کنید: git checkout -b feature/new-feature

تغییرات خود را Commit کنید: git commit -m 'Add new feature'

Push کنید: git push origin feature/new-feature

Pull Request ارسال کنید.

📄 مجوز
این پروژه تحت مجوز MIT منتشر شده است – استفاده آزاد با ذکر منبع.

توسعه‌یافته توسط تیم Frontend_Project – الهام گرفته از تجربه کاربری یودمی 🚀
