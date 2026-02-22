/**
 * Bita Zar Andish Pars — Multi-language i18n system
 * Supported: fa (Farsi / RTL), en (English / LTR), ar (Arabic / RTL)
 * Cookie: site_lang | IP detection on first visit via ipapi.co
 */
(function () {
  'use strict';

  /* ─────────────────────────────────────────
     TRANSLATION DICTIONARIES
  ───────────────────────────────────────── */
  const T = {

    /* ═══════════════════ FARSI ═══════════════════ */
    fa: {
      /* Nav */
      'nav.home'      : 'خانه',
      'nav.about'     : 'درباره ما',
      'nav.products'  : 'محصولات',
      'nav.services'  : 'خدمات',
      'nav.contact'   : 'تماس',

      /* Footer */
      'footer.rights' : 'تمامی حقوق محفوظ است',
      'footer.design' : 'طراحی شده توسط',

      /* Hero */
      'hero.title'        : 'بیتا زر اندیش پارس',
      'hero.subtitle'     : 'نوآوری در سامانه‌های نرم‌افزاری',
      'hero.desc'         : 'توسعه سامانه‌های نرم‌افزاری تحت وب و اتوماسیون برای بهبود عملکرد سازمان‌ها',
      'hero.cta.projects' : 'مشاهده پروژه‌ها',
      'hero.cta.about'    : 'درباره ما',
      'hero.stat.years'   : 'سال تجربه',
      'hero.stat.success' : 'پروژه‌های موفق',
      'hero.stat.clients' : 'همکاران راضی',

      /* About */
      'about.title'   : 'درباره ما',
      'about.sub'     : 'پیشگام در توسعه سامانه‌های نرم‌افزاری پیشرفته، اتوماسیون سازمانی و راهکارهای هوشمند امنیت سایبری',
      'about.badge'   : 'درباره بیتا زر اندیش پارس',
      'about.h2'      : 'شرکت متخصص در حوزه فناوری اطلاعات و امنیت سایبری',
      'about.lead'    : 'شرکت بیتا زر اندیش پارس، با شماره ثبت <strong>۵۷۰۶۷</strong>، متخصص در حوزه طراحی، توسعه و استقرار سامانه‌های نرم‌افزاری تحت وب و اتوماسیون فرآیندهای سازمانی است.',
      'about.p'       : 'از برجسته‌ترین دستاوردهای این شرکت، توسعه سامانه جامع پژوهشی دانشگاه اصفهان (<strong>RIS</strong>) با بیش از <strong>۳۰۰۰</strong> کاربر فعال، همکاری با آپا دانشگاه اصفهان در توسعه میدان سایبری نقش‌مجاز برای شبیه‌سازی شبکه و آموزش امنیت، و همکاری با دانشگاه‌های آزاد کشور در حوزه رزومه مقالات علمی می‌باشد.',

      /* Services */
      'services.title' : 'خدمات ما',
      'services.sub'   : 'راه‌حل‌های نوآورانه در حوزه سامانه‌های نرم‌افزاری و امنیت سایبری',
      'services.heading': 'ساخت آینده‌ای امن با فناوری',
      'services.desc'  : 'ما با توسعه سامانه‌های نرم‌افزاری و اتوماسیون‌ها، به بهبود امنیت و کارایی سازمان‌ها کمک می‌کنیم.',
      'services.more'  : 'جزئیات بیشتر',

      /* Skills */
      'skills.title'  : 'سوابق ما',
      'skills.sub'    : 'گامی به سوی پیشرفت با نوآوری در فناوری اطلاعات و راهکارهای نرم‌افزاری',

      /* Portfolio */
      'portfolio.title' : 'پروژه های ما',
      'portfolio.sub'   : 'نمونه‌هایی از دستاوردها و سامانه‌های توسعه داده شده توسط ما',
      'portfolio.filter.all'    : 'همه پروژه ها',
      'portfolio.filter.web'    : 'پروژه های تحت وب',
      'portfolio.filter.scrape' : 'پروژه های اسکریپ',
      'portfolio.filter.auto'   : 'پروژه های کارتابل مدیریتی',
      'portfolio.filter.edu'    : 'سامانه‌های آموزشی',

      /* Team */
      'team.title'  : 'تیم متخصصان ما',
      'team.sub'    : 'متخصصان و مدیران بیتا زر اندیش پارس که از سال ۱۳۹۹ در کنار هم این مجموعه را شکل می‌دهند',
      'team.resume.fa' : 'رزومه',
      'team.resume.en' : 'EN Resume',

      /* FAQ */
      'faq.title' : 'سوالات متداول',

      /* Contact */
      'contact.title' : 'تماس با ما',
      'contact.sub'   : 'با ما در ارتباط باشید',

      /* Page titles */
      'page.automation' : 'سامانه اتوماسیون BPMS',
      'page.product'    : 'وبسایت بیزاَپ',
      'page.about'      : 'درباره ما',
      'page.profile.edu': 'سامانه رزومه اساتید',

      /* Breadcrumbs */
      'bc.home'         : 'خانه',
      'bc.projects'     : 'پروژه‌ها',

      /* ProfileResume page */
      'pr.title'       : 'سامانه ساخت صفحات رزومه شخصی اساتید و دانشگاه',
      'pr.section1'    : 'خلاصه اجرایی',
      'pr.gallery'     : 'تصاویر سامانه',
      'pr.features'    : 'ویژگی‌های کلیدی',
      'pr.goals'       : 'اهداف سامانه',
      'pr.result'      : 'نتیجه و تأثیرگذاری',

      /* Shared section labels */
      'sec.exec'       : 'خلاصه اجرایی',
      'sec.gallery'    : 'تصاویر سامانه',

      /* CTA buttons (shared) */
      'cta.ready'      : 'آماده همکاری هستیم',
      'cta.btn.contact': 'تماس با ما',
      'cta.btn.projects': 'مشاهده سایر پروژه‌ها',

      /* Automation page */
      'auto.bc'        : 'سامانه اتوماسیون BPMS',
      'auto.h1'        : 'سامانه یکپارچه اتوماسیون فرآیندهای کسب‌وکار',
      'auto.sub'       : 'پلتفرم هوشمند No-Code/Low-Code برای دیجیتالی‌سازی، خودکارسازی و مدیریت کلیه فرآیندهای سازمانی در یک بستر واحد، امن و مقیاس‌پذیر.',
      'auto.info.h3'   : 'اطلاعات محصول',
      'auto.gallery'   : 'تصاویر سامانه',
      'auto.goals.h2'  : 'اهداف کلان و کمی‌سازی‌شده پروژه',
      'auto.engines.h2': 'موتورهای هوشمند پلتفرم',
      'auto.engines.sub': 'قدرت واقعی پلتفرم بیتا در موتورهای تخصصی No-Code نهفته است',
      'auto.arch.h2'   : 'معماری و فناوری‌های هسته',
      'auto.arch.sub'  : 'معماری میکروسرویس مبتنی بر .NET با رویکرد Cloud-Ready و DevOps کامل',
      'auto.adv.h2'    : 'مزایای رقابتی منحصربه‌فرد',
      'auto.adv.sub'   : 'از توانمندسازی کاربران تا امنیت سازمانی چندلایه',
      'auto.proof.h2'  : 'اثبات صلاحیت: سابقه اجرایی',
      'auto.proof.sub' : 'عملکرد اثبات‌شده در محیط‌های واقعی و پیچیده',
      'auto.cta.sub'   : 'برای دریافت مشاوره رایگان و بررسی نیازمندی‌های سازمان خود، با ما تماس بگیرید.',

      /* Product (Bizap) page */
      'product.bc'          : 'وبسایت بیزاَپ',
      'product.h1'          : 'وبسایت بیزاَپ (Bizap)',
      'product.sub'         : 'پلتفرم جامع آنلاین برای معرفی، شبکه‌سازی و ارتباط مستقیم کسب‌وکارهای کوچک و متوسط با مشتریان در سراسر کشور.',
      'product.info.h3'     : 'اطلاعات پروژه',
      'product.gallery'     : 'تصاویر پلتفرم',
      'product.video'       : 'ویدیو معرفی پلتفرم',
      'product.features.h2' : 'قابلیت‌های اصلی پلتفرم',
      'product.features.sub': 'مجموعه‌ای کامل از ابزارها برای رشد دیجیتال کسب‌وکارهای کوچک و متوسط',
      'product.arch.h2'     : 'معماری و فناوری‌های استفاده‌شده',
      'product.arch.sub'    : 'معماری مدرن، مقیاس‌پذیر و امن برای میلیون‌ها کاربر',
      'product.cats.h2'     : 'دسته‌بندی‌های پشتیبانی‌شده',
      'product.cats.sub'    : 'پوشش گسترده صنایع و حوزه‌های خدماتی در سراسر کشور',
      'product.kpi.h2'      : 'دستاوردهای کلیدی',
      'product.kpi.sub'     : 'نتایج و شاخص‌های کلیدی عملکرد پلتفرم پس از راه‌اندازی',
      'product.cta.sub'     : 'برای دریافت مشاوره رایگان درباره طراحی پلتفرم کسب‌وکار، با ما تماس بگیرید.',

      /* ProfileResume — detailed content */
      'pr.sub'          : 'سامانه یکپارچه دیجیتال برای شخصی‌سازی حضور آنلاین اساتید',
      'pr.exec.lead'    : 'فناوری دانشگاه نیاز به یک گذار دارد؛ از بایگانی‌های کاغذی به رزومه‌های زنده، تعاملی و همیشه به‌روز.',
      'pr.exec.p'       : 'این سامانه با هدف ایجاد یک حضور دیجیتال حرفه‌ای برای اساتید دانشگاهی طراحی شده؛ ابزاری که بدون نیاز به دانش فنی، هر استاد بتواند رزومه، پژوهش‌ها و اطلاعات علمی خود را در یک صفحه منحصربه‌فرد به دنیا نشان دهد.',
      'pr.info.h3'      : 'اطلاعات پروژه',
      'pr.video.h3'     : 'ویدیو معرفی سامانه',
      'pr.video.link'   : 'مشاهده ویدیو',
      'pr.goals.sub'    : 'اهداف کلیدی طراحی‌شده برای بهبود حضور علمی اساتید',
      'pr.goal1.h3'     : 'شخصی‌سازی حضور دیجیتال',
      'pr.goal1.p'      : 'هر استاد یک صفحه رزومه آنلاین منحصربه‌فرد با URL اختصاصی دارد که بازتاب کامل هویت علمی اوست.',
      'pr.goal2.h3'     : 'ارتقای دید علمی',
      'pr.goal2.p'      : 'ویترین دیجیتال برای انتشارات، پژوهش‌ها و دروس، با امکان جستجو توسط موتورهای جستجو.',
      'pr.goal3.h3'     : 'کاهش بار اداری',
      'pr.goal3.p'      : 'مدیر سامانه قادر است با چند کلیک پروفایل‌ها را به‌روز و ساختار کلی را کنترل کند.',
      'pr.goal4.h3'     : 'یکپارچگی با سیستم دانشگاه',
      'pr.goal4.p'      : 'اتصال مستقیم به پایگاه داده دانشگاهی برای همگام‌سازی خودکار اطلاعات.',
      'pr.features.sub' : 'قابلیت‌های فنی و ویژگی‌های اصلی سامانه',
      'pr.f1.h4'        : 'تولید صفحه رزومه اختصاصی',
      'pr.f1.p'         : 'هر استاد یک URL منحصربه‌فرد دریافت می‌کند که شامل تمام اطلاعات علمی، پژوهشی و آموزشی اوست.',
      'pr.f2.h4'        : 'آپلود تصویر و ویدیو',
      'pr.f2.p'         : 'پشتیبانی از آپلود عکس پروفایل با کیفیت بالا، ویدیوی معرفی و فایل‌های پژوهشی.',
      'pr.f3.h4'        : 'پنل مدیریت استاد',
      'pr.f3.p'         : 'رابط کاربری ساده برای ویرایش مستقل رزومه، انتشار مقالات و مدیریت دوره‌های آموزشی.',
      'pr.f4.h4'        : 'داشبورد مدیر دانشگاه',
      'pr.f4.p'         : 'کنترل، تأیید و مدیریت تمامی پروفایل‌های اساتید از یک پنل مرکزی.',
      'pr.f5.h4'        : 'امنیت و احراز هویت',
      'pr.f5.p'         : 'ورود با حساب دانشگاهی (Single Sign-On)، مدیریت سطوح دسترسی و رمزنگاری داده‌ها.',
      'pr.f6.h4'        : 'SEO بهینه',
      'pr.f6.p'         : 'هر صفحه با متاتگ‌های استاندارد، sitemap خودکار و ساختار schema.org برای ایندکس بهتر.',
      'pr.f7.h4'        : 'پشتیبانی چندزبانه',
      'pr.f7.p'         : 'پشتیبانی از فارسی و انگلیسی با رابط کاربری واکنش‌گرا و بهینه برای همه دستگاه‌ها.',
      'pr.result.sub'   : 'دستاوردها و تأثیرگذاری پس از استقرار سامانه',
      'pr.r1.h3'        : 'پذیرش دانشگاهی',
      'pr.r1.p'         : 'استقرار موفق در دانشگاه‌های پیام‌نور و همکاری در حال گسترش با دانشگاه‌های آزاد.',
      'pr.r2.h3'        : 'رضایت اساتید',
      'pr.r2.p'         : 'کاهش معنادار وقت صرف‌شده برای به‌روزرسانی رزومه‌های سازمانی.',
      'pr.r3.h3'        : 'دیده‌شدن بیشتر',
      'pr.r3.p'         : 'افزایش به‌طور میانگین سه‌برابری بازدید پروفایل اساتید پس از راه‌اندازی.',

      /* Automation — detailed content */
      'auto.exec.lead'  : 'اتوماسیون امروز یک انتخاب نیست؛ الزامی است. سازمان‌هایی که فرآیندهای خود را دیجیتالی نکرده‌اند، عملاً در حال از دست دادن زمان، منابع و رقابت‌پذیری هستند.',
      'auto.exec.p'     : 'سامانه بیتا با رویکرد No-Code/Low-Code، فرآیندهای سازمانی را بدون نیاز به توسعه‌دهنده دیجیتالی می‌کند. از مکاتبات اداری تا مدیریت قراردادها، همه در یک بستر یکپارچه.',
      'auto.goal1.h3'   : 'حذف کاغذبازی سازمانی',
      'auto.goal1.p'    : 'دیجیتالی‌سازی کامل مکاتبات، درخواست‌ها و تأییدیه‌ها؛ صفر کاغذ، صد درصد شفافیت.',
      'auto.goal2.h3'   : 'کاهش زمان پردازش',
      'auto.goal2.p'    : 'هدف‌گذاری کاهش ۷۰٪ در زمان پردازش درخواست‌ها از طریق مسیریابی هوشمند.',
      'auto.goal3.h3'   : 'نظارت لحظه‌ای مدیران',
      'auto.goal3.p'    : 'داشبوردهای مدیریتی با به‌روزرسانی لحظه‌ای برای رصد عملکرد همه فرآیندها.',
      'auto.goal4.h3'   : 'یکپارچگی سازمانی',
      'auto.goal4.p'    : 'اتصال به سیستم‌های ERP، CRM و پایگاه‌های داده موجود از طریق API استاندارد.',
      'auto.goal5.h3'   : 'امنیت چندلایه',
      'auto.goal5.p'    : 'رمزنگاری داده‌ها، کنترل دسترسی نقش‌محور و ثبت کامل لاگ عملیاتی.',
      'auto.goal6.h3'   : 'گسترش‌پذیری نامحدود',
      'auto.goal6.p'    : 'معماری میکروسرویس که با رشد سازمان مقیاس می‌دهد بدون نیاز به بازطراحی.',
      'auto.eng1.h3'    : 'موتور BPMN ۲.۰',
      'auto.eng1.p'     : 'طراحی بصری فرآیندها با استاندارد بین‌المللی BPMN 2.0 و اجرای خودکار آن‌ها.',
      'auto.eng2.h3'    : 'موتور فرم‌ساز No-Code',
      'auto.eng2.p'     : 'ساخت فرم‌های پویا با Drag & Drop بدون نیاز به کدنویسی؛ از ساده تا پیچیده.',
      'auto.eng3.h3'    : 'موتور قوانین کسب‌وکار',
      'auto.eng3.p'     : 'تعریف و اجرای قوانین تجاری پیچیده بدون کدنویسی، با امکان تغییر فوری.',
      'auto.eng4.h3'    : 'موتور گزارش‌ساز هوشمند',
      'auto.eng4.p'     : 'ایجاد گزارش‌های تعاملی، چارت‌های مدیریتی و داشبوردهای سازمانی در لحظه.',
      'auto.eng5.h3'    : 'موتور مدیریت اسناد',
      'auto.eng5.p'     : 'آرشیو دیجیتال اسناد با جستجوی OCR، کنترل نسخه و مدیریت دسترسی.',
      'auto.eng6.h3'    : 'موتور نقشه حجم کاری',
      'auto.eng6.p'     : 'نمایش حجم کاری کارکنان و مدیریت ظرفیت تیم‌ها در یک نقشه بصری.',
      'auto.adv1.h3'    : 'بدون نیاز به کدنویسی',
      'auto.adv1.p'     : 'تیم‌های غیرفنی می‌توانند فرآیندها را مستقلاً تعریف، ویرایش و راه‌اندازی کنند.',
      'auto.adv2.h3'    : 'یکپارچه‌سازی سریع',
      'auto.adv2.p'     : 'API استاندارد REST و کانکتورهای آماده برای اتصال به سیستم‌های موجود طی ساعت‌ها.',
      'auto.adv3.h3'    : 'امنیت سازمانی چندلایه',
      'auto.adv3.p'     : 'رمزنگاری AES-256، احراز هویت دوعاملی، RBAC و ثبت کامل تمام فعالیت‌ها.',
      'auto.adv4.h3'    : 'پشتیبانی و SLA تضمینی',
      'auto.adv4.p'     : 'پشتیبانی ۲۴/۷ با SLA مشخص، آموزش تیم و به‌روزرسانی‌های دوره‌ای رایگان.',
      'auto.proof1.h3'  : 'دانشگاه اصفهان',
      'auto.proof1.p'   : 'استقرار سامانه مکاتبات اداری و مدیریت فرآیندهای دانشکده‌ای در بیش از ۵ واحد.',
      'auto.proof2.h3'  : 'شبکه آپا',
      'auto.proof2.p'   : 'اتوماسیون فرآیندهای مدیریت رویدادهای امنیتی و گزارش‌دهی ملی.',
      'auto.proof3.h3'  : 'سازمان‌های صنعتی',
      'auto.proof3.p'   : 'پیاده‌سازی اتوماسیون زنجیره تأمین در شرکت‌های تولیدی و خدماتی.',
      'auto.kpi.h3'     : 'شاخص‌های کلیدی عملکرد (KPI)',

      /* Product (Bizap) — detailed content */
      'product.exec.lead'        : 'در دنیایی که جستجوی مشتری همیشه از گوشی آغاز می‌شود، نبودن آنلاین یعنی نبودن در رقابت.',
      'product.exec.p'           : 'بیزاَپ پلتفرمی است که کسب‌وکارهای کوچک را با ابزارهای دیجیتال حرفه‌ای مجهز می‌کند: صفحه اختصاصی، جستجوی نقشه‌ای، چت بلادرنگ، مجله و اپلیکیشن موبایل در یک بستر.',
      'product.feat1.h3'         : 'صفحه اختصاصی کسب‌وکار',
      'product.feat1.p'          : 'هر کسب‌وکار یک صفحه کاملاً شخصی‌سازی‌شده دارد؛ شامل تصاویر، توضیحات، اطلاعات تماس، دسته‌بندی، برچسب‌های تخصصی، امتیاز و QR Code اختصاصی.',
      'product.feat2.h3'         : 'جستجوی هوشمند متنی و نقشه‌ای',
      'product.feat2.p'          : 'موتور جستجوی پیشرفته با فیلترهای چندگانه و نمای نقشه تعاملی با Elasticsearch برای یافتن کسب‌وکارهای اطراف.',
      'product.feat3.h3'         : 'کارتابل فروشندگان',
      'product.feat3.p'          : 'پنل مدیریت اختصاصی برای مالکان کسب‌وکار جهت مدیریت پروفایل، آمار بازدید، نظرات و ارتباطات.',
      'product.feat4.h3'         : 'چت بلادرنگ',
      'product.feat4.p'          : 'سیستم پیام‌رسان همزمان مبتنی بر SignalR برای ارتباط مستقیم بین کسب‌وکارها و مشتریان.',
      'product.feat5.h3'         : 'درخواست خدمات در محدوده',
      'product.feat5.p'          : 'کاربران می‌توانند درخواست خدمت خود را با مشخص کردن محدوده جغرافیایی ثبت کنند.',
      'product.feat6.h3'         : 'مجله بیزاَپ',
      'product.feat6.p'          : 'بستر محتوامحور برای انتشار مقالات تخصصی، تبلیغات بنری هوشمند و کمپین‌های ویژه.',
      'product.feat7.h3'         : 'کارتابل مدیریت (Admin Panel)',
      'product.feat7.p'          : 'داشبورد جامع برای ناظران پلتفرم جهت نظارت بر کاربران، تأیید کسب‌وکارها و مدیریت کامل.',
      'product.feat8.h3'         : 'سیستم امتیازدهی و نظرات',
      'product.feat8.p'          : 'کاربران می‌توانند برای کسب‌وکارها امتیاز و نظر ثبت کنند. سیستم ضد جعل و پاسخ عمومی.',
      'product.feat9.h3'         : 'اپلیکیشن موبایل (PWA)',
      'product.feat9.p'          : 'نسخه Progressive Web App برای دسترسی موبایل بدون نیاز به نصب؛ پشتیبانی Android، iOS و آفلاین.',
      'product.arch.h3.modules'  : 'ماژول‌های اصلی سیستم',
      'product.arch.h3.stack'    : 'پشته فناوری',
      'product.kpi1.h3'          : 'کسب‌وکارهای ثبت‌شده',
      'product.kpi1.p'           : 'معرفی صدها کسب‌وکار متنوع در دسته‌بندی‌های مختلف در شهرهای متعدد.',
      'product.kpi2.h3'          : 'تعاملات چت بلادرنگ',
      'product.kpi2.p'           : 'ارتباط مستقیم و فوری با SignalR بدون تأخیر، بین کسب‌وکارها و مشتریان.',
      'product.kpi3.h3'          : 'جستجوی نقشه‌ای',
      'product.kpi3.p'           : 'یافتن کسب‌وکارهای مجاور در کسری از ثانیه با Geo-Query قدرتمند Elasticsearch.',
      'product.kpi4.h3'          : 'سازگاری موبایل',
      'product.kpi4.p'           : 'PWA با تجربه native-like روی Android و iOS بدون نیاز به نصب از App Store.',
      'product.table.th1'        : 'ماژول',
      'product.table.th2'        : 'قابلیت کلیدی',
      'product.table.th3'        : 'فناوری',

      /* About Us — detailed content */
      'about.feat1'                  : 'طراحی و توسعه سامانه‌های تحت وب پیشرفته و پیچیده',
      'about.feat2'                  : 'راهکارهای اتوماسیون فرآیند با فناوری BPMS No-Code',
      'about.feat3'                  : 'امنیت سایبری، آزمون نفوذ و حفاظت از زیرساخت',
      'about.feat4'                  : 'مشاوره تخصصی هوش مصنوعی و یادگیری ماشین',
      'about.feat5'                  : 'توسعه اپلیکیشن‌های موبایل (PWA و Native)',
      'about.feat6'                  : 'همکاری پژوهشی با دانشگاه‌های معتبر کشور',
      'about.sidebar.title'          : 'اطلاعات شرکت',
      'about.sidebar.company.label'  : 'نام شرکت',
      'about.sidebar.company.val'    : 'بیتا زر اندیش پارس',
      'about.sidebar.reg.label'      : 'شماره ثبت',
      'about.sidebar.founded.label'  : 'سال تأسیس',
      'about.sidebar.founded.val'    : '۱۳۹۹ هجری شمسی',
      'about.sidebar.location.label' : 'مقر اصلی',
      'about.sidebar.location.val'   : 'اصفهان، ایران',
      'about.sidebar.phone.label'    : 'تلفن تماس',
      'about.sidebar.email.label'    : 'ایمیل',
      'about.areas.title'            : 'حوزه‌های خدماتی',
      'about.area1.title'            : 'نرم‌افزار سازمانی',
      'about.area1.desc'             : 'سامانه‌های مدیریت، اتوماسیون و ERP برای سازمان‌های بزرگ',
      'about.area2.title'            : 'امنیت سایبری',
      'about.area2.desc'             : 'ممیزی امنیتی، آزمون نفوذ و مشاوره ISMS',
      'about.area3.title'            : 'پژوهش دانشگاهی',
      'about.area3.desc'             : 'تحقیق و توسعه مشترک با دانشگاه‌های ایران',
      'about.stat.years'             : 'سال سابقه',
      'about.stat.projects'          : 'پروژه موفق',
      'about.stat.users'             : 'کاربر فعال',
      'about.stat.clients'           : 'مشتری سازمانی',
      'about.vm.title'               : 'چشم‌انداز و مأموریت',
      'about.vm.sub'                 : 'هدف ما ایجاد فناوری‌هایی است که سازمان‌ها را متحول می‌کنند',
      'about.vision.title'           : 'چشم‌انداز ما',
      'about.vision.desc'            : 'تبدیل شدن به پیشرو منطقه در فناوری سازمانی و امنیت سایبری؛ آفرینش راهکارهایی که استانداردهای جهانی را با نیازهای بومی ادغام کنند.',
      'about.mission.title'          : 'مأموریت ما',
      'about.mission.desc'           : 'توانمندسازی سازمان‌ها و دانشگاه‌ها از طریق نرم‌افزارهای هوشمند، امن و مقیاس‌پذیر که بار اداری را حذف و بهره‌وری را دوچندان می‌کنند.',
      'about.spec.title'             : 'تخصص‌های محوری',
      'about.spec.sub'               : 'سه رکن اصلی که بیتا زر اندیش پارس را متمایز می‌کنند',
      'about.spec1.title'            : 'توسعه سامانه‌های یکپارچه',
      'about.spec1.desc'             : 'طراحی معماری میکروسرویس، توسعه API-First و پیاده‌سازی سامانه‌های پیچیده سازمانی با ASP.NET Core.',
      'about.spec2.title'            : 'اتوماسیون فرآیند (BPMS)',
      'about.spec2.desc'             : 'پیاده‌سازی موتورهای BPMN 2.0، طراحی گردش‌کار No-Code و یکپارچه‌سازی با سیستم‌های موجود.',
      'about.spec3.title'            : 'امنیت و زیرساخت',
      'about.spec3.desc'             : 'آزمون نفوذ (Pentest)، پیاده‌سازی ISMS، رمزنگاری داده و مشاوره امنیت سایبری سازمانی.',
      'about.spec.more'              : 'مشاهده خدمات کامل',
      'about.clients.title'          : 'مشتریان و شرکای کلیدی',
      'about.clients.sub'            : 'افتخار همکاری با نهادهای علمی و سازمان‌های معتبر کشور',
      'about.client1.title'          : 'دانشگاه اصفهان',
      'about.client1.desc'           : 'استقرار سامانه رزومه اساتید و اتوماسیون فرآیندهای اداری دانشکده‌ها.',
      'about.client2.title'          : 'دانشگاه‌های پیام‌نور',
      'about.client2.desc'           : 'پیاده‌سازی پورتال رزومه اساتید در چندین واحد استانی.',
      'about.client3.title'          : 'دانشگاه‌های آزاد',
      'about.client3.desc'           : 'ارائه خدمات مشاوره‌ای و راهکارهای نرم‌افزاری سفارشی.',
      'about.tech.title'             : 'فناوری‌های ما',
      'about.tech.sub'               : 'پشته فناوری مدرن برای راهکارهای مقیاس‌پذیر و امن',
      'about.location.title'         : 'موقعیت ما',
      'about.location.sub'           : 'در قلب اصفهان، با دسترسی سراسری',
      'about.location.address'       : 'اصفهان، خیابان چهارباغ بالا، مجتمع اطلاعاتی پردیس، طبقه پنجم',
      'about.cta.sub'                : 'با تیم متخصص ما در بیتا زر اندیش پارس آشنا شوید و پروژه بعدی خود را به ما بسپارید.',

      /* Index — Resume & FAQ sections */
      'resume.title'   : 'سوابق ما',
      'resume.sub'     : 'گامی به سوی پیشرفت با نوآوری در فناوری اطلاعات و راهکارهای نرم‌افزاری',
      'faq.sub'        : 'پاسخ به سؤالات رایج درباره خدمات و محصولات ما در زمینه سامانه‌های نرم‌افزاری و اتوماسیون',

      /* About — info labels & values */
      'about.info.company.label'  : 'نام شرکت',
      'about.info.reg.label'      : 'شماره ثبت',
      'about.info.founded.label'  : 'سال تأسیس',
      'about.info.location.label' : 'محل فعالیت',
      'about.info.specialty.label': 'حوزه تخصصی',
      'about.info.clients.label'  : 'مشتریان کلیدی',
      'about.info.company.val'    : 'بیتا زر اندیش پارس',
      'about.info.reg.val'        : '۵۷۰۶۷',
      'about.info.founded.val'    : '۱۳۹۹ هجری شمسی',
      'about.info.location.val'   : 'اصفهان، ایران',
      'about.info.specialty.val'  : 'سامانه‌های تحت وب و امنیت سایبری',
      'about.info.clients.val'    : 'دانشگاه اصفهان، آپا، دانشگاه‌های آزاد',

      /* Services — individual items */
      'services.item1.title' : 'نرم‌افزارهای امنیت سایبری',
      'services.item1.desc'  : 'توسعه نرم‌افزارهای امنیتی برای حفاظت از اطلاعات سازمان‌ها.',
      'services.item2.title' : 'توسعه سامانه‌های تحت وب',
      'services.item2.desc'  : 'ایجاد سامانه‌های تحت وب با کارایی بالا و امن.',
      'services.item3.title' : 'اتوماسیون فرآیندها',
      'services.item3.desc'  : 'بهینه‌سازی و اتوماسیون فرآیندهای سازمانی برای افزایش کارایی.',
      'services.item4.title' : 'تحقیق و مشاوره',
      'services.item4.desc'  : 'همکاری با دانشگاه‌ها برای تحقیق و توسعه در حوزه فناوری اطلاعات.',

      /* Skills — individual items */
      'skills.item1.title' : 'مدیریت پروژه و ریسک',
      'skills.item1.desc'  : 'مدیریت مؤثر پروژه‌ها با شناسایی و کاهش ریسک‌های مرتبط برای تضمین تحویل به‌موقع و با کیفیت.',
      'skills.item2.title' : 'امنیت اطلاعات',
      'skills.item2.desc'  : 'توسعه راهکارهای امنیتی به‌منظور حفاظت از داده‌ها و جلوگیری از تهدیدات سایبری.',
      'skills.item3.title' : 'رضایت سازمان‌ها و مشتریان',
      'skills.item3.desc'  : 'تضمین رضایت مشتریان و سازمان‌ها از طریق ارائه خدمات با کیفیت و پاسخگویی به نیازهای آنان.',
      'skills.item4.title' : 'پشتیبانی نرم‌افزاری',
      'skills.item4.desc'  : 'ارائه پشتیبانی مستمر و تخصصی برای محصولات، شامل رفع مشکلات و به‌روزرسانی‌های دوره‌ای به منظور حفظ کارایی و رضایت مشتریان.',

      /* Resume block header */
      'resume.projects.h2'   : 'پروژه‌های نرم‌افزاری',
      'resume.projects.lead' : 'دستاوردهای ما در توسعه راهکارهای یکپارچه و تخصصی',

      /* Timeline items */
      'resume.t1.company'   : 'سامانه جامع پژوهشی',
      'resume.t1.period'    : '۱۴۰۳ - کنونی',
      'resume.t1.position'  : 'مدیریت هوشمند فرآیندهای پژوهشی',
      'resume.t1.desc'      : 'توسعه سیستم یکپارچه مدیریت پژوهش با قابلیت ثبت، پیگیری و گزارش‌گیری از فعالیت‌های علمی و پژوهشی. این سامانه امکان دریافت داده‌ها از مراجع معتبر، تحلیل داده‌ها و محاسبه پایه‌های تشویقی و ارتقاء اعضای هیئت علمی را فراهم می‌کند. همچنین دارای کارتابل کاملاً داینامیک با قابلیت ویرایش و تغییر برای مدیریت بهتر فرآیندها است.',
      'resume.t2.company'   : 'سامانه فرم‌ساز',
      'resume.t2.period'    : '۱۴۰۳',
      'resume.t2.position'  : 'طراحی و مدیریت فرم‌های هوشمند',
      'resume.t2.desc'      : 'توسعه پلتفرم چندمنظوره برای طراحی، مدیریت و اجرای فرم‌های هوشمند با قابلیت سفارشی‌سازی گسترده. این سامانه مجهز به سطح دسترسی جامع برای کنترل کاربران، روندنگار برای تعریف ترتیب و جریان فرم‌ها، و امنیت بالا برای حفاظت از داده‌ها و اطلاعات حساس است.',
      'resume.t3.company'   : 'پایه‌های تشویقی',
      'resume.t3.period'    : '۱۴۰۳',
      'resume.t3.position'  : 'سامانه پایه‌های تشویقی',
      'resume.t3.desc'      : 'طراحی سیستم هوشمند برای ارزیابی و امتیازدهی به اعضای هیئت علمی با معیارهای علمی و کیفی متناسب با آئین‌نامه‌ها و داده‌های برروز از پایگاه‌های معتبر.',
      'resume.t4.company'   : 'رزومه اساتید',
      'resume.t4.period'    : '۱۴۰۳',
      'resume.t4.position'  : 'رزومه اطلاعات علمی و پژوهشی',
      'resume.t4.desc'      : 'ایجاد سامانه‌ای جامع برای نمایش رزومه علمی و تخصصی اعضای هیئت علمی با استفاده از اطلاعات کامل مقالات و کتاب‌ها از مراجع و پایگاه‌های معتبر، همراه با امکان مدیریت و به‌روزرسانی داده‌ها به‌صورت دقیق و ساختاریافته.',
      'resume.t5.company'   : 'میدان سایبری نقش‌مجاز',
      'resume.t5.period'    : '۱۴۰۲ - ۱۴۰۳',
      'resume.t5.position'  : 'همکاری با آپا دانشگاه اصفهان — شبیه‌سازی شبکه و امنیت سایبری',
      'resume.t5.desc'      : 'طراحی و توسعه میدان سایبری نقش‌مجاز در همکاری با مرکز آپا دانشگاه اصفهان؛ بستری برای شبیه‌سازی شبکه‌های واقعی، آموزش هک اخلاقی و دفاع سایبری، برگزاری مسابقات CTF و تمرین سناریوهای هک و دفاع به صورت همزمان با استفاده از ماشین‌های مجازی تحت وب.',
      'resume.t6.company'   : 'کتابخانه ملی ایران',
      'resume.t6.period'    : '۱۴۰۲',
      'resume.t6.position'  : 'سامانه دریافت کتاب با پروتکل Z3950',
      'resume.t6.desc'      : 'پیاده‌سازی سیستم یکپارچه برای جستجو و دریافت منابع کتابخانه‌ای با استفاده از استاندارد بین‌المللی Z3950.',
      'resume.t7.company'   : 'اسکریپ',
      'resume.t7.period'    : '۱۴۰۲',
      'resume.t7.position'  : 'سامانه اسکریپ مقالات و ژورنال‌ها',
      'resume.t7.desc'      : 'ایجاد زیرساخت هوشمند برای استخراج و دسترسی به مقالات علمی از ۴ پایگاه معتبر بین‌المللی با قابلیت فیلترسازی و دسته‌بندی تخصصی.',
      'resume.t8.company'   : 'دانشگاه‌های آزاد',
      'resume.t8.period'    : '۱۴۰۲ - ۱۴۰۳',
      'resume.t8.position'  : 'همکاری با دانشگاه‌های آزاد — رزومه مقالات علمی',
      'resume.t8.desc'      : 'توسعه سامانه جامع رزومه مقالات فارسی و انگلیسی برای اعضای هیئت علمی دانشگاه‌های آزاد کشور؛ دربرگیرنده استخراج خودکار داده از پایگاه‌های معتبر، نمایش ساختاریافته سوابق پژوهشی و قابلیت مدیریت و به‌روزرسانی توسط اساتید.',
      'resume.t9.company'   : 'املاک نجف‌آباد',
      'resume.t9.period'    : '۱۴۰۲ - ۱۴۰۳',
      'resume.t9.position'  : 'اتوماسیون، وبسایت و ربات‌های اسکریپر',
      'resume.t9.desc'      : 'طراحی وبسایت، پیاده‌سازی سامانه اتوماسیون فرآیندهای داخلی و توسعه ربات‌های اسکریپر هوشمند جهت جمع‌آوری و پردازش داده‌های بازار مسکن برای مجموعه‌ی فعال در حوزه امور ملکی نجف‌آباد.',
      'resume.t10.company'  : 'مرکز رشد شهاب',
      'resume.t10.period'   : '۱۴۰۲ - ۱۴۰۳',
      'resume.t10.position' : 'پروژه کیف پول هوشمند دیجیتال',
      'resume.t10.desc'     : 'همکاری با مرکز رشد شهاب در طراحی و توسعه سامانه کیف پول هوشمند دیجیتال؛ شامل مدیریت تراکنش‌ها، یکپارچه‌سازی با درگاه‌های پرداخت و پیاده‌سازی مکانیزم‌های امنیتی چندلایه برای حفاظت از دارایی‌های دیجیتال.',
      'resume.t11.company'  : 'بیزاَپ',
      'resume.t11.period'   : '۱۳۹۹ - ۱۴۰۱',
      'resume.t11.position' : 'سامانه معرفی و مدیریت کسب‌وکارها',
      'resume.t11.desc'     : 'طراحی و پیاده‌سازی پلتفرم جامع برای معرفی و شبکه‌سازی کسب‌وکارهای کوچک و متوسط با هدف افزایش تعاملات اقتصادی. شامل کارتابل فروشندگان، صفحه شخصی‌سازی‌شده، جستجوی متنی و نقشه‌ای، مجله بیزاپ، کارتابل مدیریت و قابلیت چت همزمان بین کسب‌وکارها.',

      /* Portfolio items */
      'port1.category' : 'معرفی رایگان کسب‌وکارها',
      'port1.h3'       : 'وبسایت بیزاَپ',
      'port1.p'        : 'طراحی و پیاده‌سازی پلتفرم جامع برای معرفی و شبکه‌سازی کسب‌وکارهای کوچک و متوسط با هدف افزایش تعاملات اقتصادی. این سامانه شامل قابلیت کارتابل فروشندگان، صفحه شخصی‌سازی شده برای هر کسب‌وکار، جستجوی دقیق متنی و نقشه‌ای، مجله بیزاپ برای اطلاع‌رسانی، کارتابل مدیریت و قابلیت چت همزمان بین کسب‌وکارها و مشتریان است.',
      'port2.category' : 'اتوماسیون سازمانی · No-Code BPMS',
      'port2.h3'       : 'سامانه یکپارچه اتوماسیون فرآیندها',
      'port2.p'        : 'پلتفرم هوشمند مدیریت فرآیندهای کسب‌وکار (BPMS) با رویکرد No-Code/Low-Code. طراحی فرم، مدل‌سازی گردش‌کار BPMN 2.0، هوش تجاری و مدیریت دسترسی — همه در یک بستر یکپارچه برای سازمان‌هایی که به خوداتکایی دیجیتال باور دارند.',
      'port3.category' : 'سامانه دانشگاهی · .NET / React.js',
      'port3.h3'       : 'سامانه رزومه شخصی اساتید و دانشگاه',
      'port3.p'        : 'پلتفرم حرفه‌ای ساخت صفحات رزومه دیجیتال برای اساتید دانشگاهی با پشتیبانی از دو زبان فارسی و انگلیسی، یکپارچه با Google Scholar، ORCID و ResearchGate.',

      /* Team cards */
      'team.role.chairman'   : 'رئیس هیئت مدیره',
      'team.role.ceo'        : 'مدیرعامل',
      'team.role.member'     : 'عضو هیئت مدیره',
      'team.role.uiux'       : 'متخصص UI/UX',
      'team.since.1399'      : 'عضویت از ۱۳۹۹',
      'team.since.1401'      : 'عضویت از ۱۴۰۱',
      'team.since.1403'      : 'عضویت از ۱۴۰۳',
      'team.spec.aghakabiri' : 'سنیور فول‌استک · توسعه سامانه‌های تحت وب',
      'team.spec.shams'      : 'سنیور فول‌استک · معماری نرم‌افزار',
      'team.spec.shirazi'    : 'سنیور فرانت‌اند · هوش مصنوعی · فارغ‌التحصیل مهندسی کامپیوتر دانشگاه اصفهان',
      'team.spec.madahi'     : 'مدیریت کسب‌وکار · توسعه بازار',
      'team.spec.kimia'      : 'UI/UX Design · Figma · تجربه کاربری',

      /* FAQ items */
      'faq.q1' : 'خدمات اصلی شرکت بیتا زر اندیش پارس چیست؟',
      'faq.a1' : 'ما در سه حوزه اصلی فعالیت می‌کنیم: توسعه سامانه‌های نرم‌افزاری تحت وب، اتوماسیون فرآیندهای سازمانی (BPMS) و ارائه راهکارهای امنیت سایبری. محصولات ما شامل سامانه فرم‌ساز هوشمند، پلتفرم BPMS و بیزاپ است که برای سازمان‌ها و کسب‌وکارها طراحی شده‌اند.',
      'faq.q2' : 'آیا پروژه‌های سفارشی و کاستومایز شده برای کارفرمایان انجام می‌دهید؟',
      'faq.a2' : 'بله، توسعه پروژه‌های کاملاً سفارشی بر اساس نیازهای خاص کارفرما یکی از خدمات اصلی ماست. از طراحی رابط کاربری منحصربه‌فرد گرفته تا پیاده‌سازی منطق کسب‌وکار پیچیده، تیم ما همراه شما خواهد بود تا راهکاری دقیقاً متناسب با سازمان شما بسازیم.',
      'faq.q3' : 'نحوه شروع همکاری و بستن قرارداد چگونه است؟',
      'faq.a3' : 'فرآیند همکاری با ما ساده است: ابتدا از طریق فرم تماس یا تلفن با ما در ارتباط باشید. سپس جلسه‌ای برای بررسی نیازها ترتیب می‌دهیم. پس از توافق اولیه، پیشنهاد فنی و مالی ارائه می‌شود و در نهایت قرارداد رسمی منعقد خواهیم کرد.',
      'faq.q4' : 'برای محصولات آماده مانند فرم‌ساز یا BPMS چگونه قرارداد می‌بندیم؟',
      'faq.a4' : 'محصولات آماده ما از طریق خرید لایسنس یا اشتراک قابل استفاده هستند. بسته به حجم سازمان و نیازهای خاص، پکیج‌های متنوعی طراحی شده است. با تیم ما تماس بگیرید تا بهترین گزینه را بررسی و قرارداد رسمی منعقد کنیم.',
      'faq.q5' : 'آیا پس از تحویل پروژه پشتیبانی ارائه می‌شود؟',
      'faq.a5' : 'بله، خدمات پشتیبانی مستمر بخشی جدایی‌ناپذیر از تمامی قراردادهای ماست. این شامل رفع اشکال، به‌روزرسانی‌های دوره‌ای، آموزش تیم شما و پاسخ‌دهی سریع به مشکلات فنی می‌شود. همچنین یک دوره پشتیبانی رایگان پس از تحویل پیش‌بینی شده است.',
      'faq.q6' : 'با سازمان‌های دولتی و دانشگاه‌ها همکاری داشته‌اید؟',
      'faq.a6' : 'بله، ما سابقه همکاری با نهادهای معتبر داریم؛ از جمله دانشگاه اصفهان (سامانه جامع پژوهشی و میدان سایبری نقش‌مجاز)، دانشگاه‌های آزاد کشور، کتابخانه ملی ایران و مرکز رشد شهاب. این تجربه درک عمیقی از نیازهای سازمان‌های بزرگ به ما داده است.',
      'faq.q7' : 'هزینه و زمان‌بندی پروژه‌ها چگونه تعیین می‌شود؟',
      'faq.a7' : 'هزینه و زمان‌بندی بر اساس پیچیدگی و دامنه پروژه مشخص می‌شود. پس از جلسه اولیه بررسی نیازها، یک بازه تخمینی از هزینه و مدت اجرا ارائه می‌شود. ما به شفافیت در قیمت‌گذاری پایبندیم و هیچ هزینه پنهانی وجود ندارد.',
      'faq.q8' : 'اگر پاسخ سؤال خود را اینجا پیدا نکردم، چه کنم؟',
      'faq.a8' : 'نگران نباشید! می‌توانید از طریق فرم تماس پیام ارسال کنید، با شماره‌های درج‌شده در بخش تماس تلفن بزنید، یا از طریق بخش ارسال پیام سایت با ما در ارتباط باشید. تیم ما در اسرع وقت پاسخگوی شما خواهد بود.',

      /* Contact section */
      'contact.badge'            : 'تماس با ما',
      'contact.h2'               : 'با بیتا زر اندیش پارس در ارتباط باشید',
      'contact.lead'             : 'ما آماده‌ایم تا با ارائه خدمات پشتیبانی و مشاوره به شما کمک کنیم.',
      'contact.address'          : 'اصفهان، میدان آزادی، دانشگاه اصفهان، مرکز رشد و فناوری، طبقه همکف، واحد ۱۷',
      'contact.maplink'          : 'مشاهده نقشه',
      'contact.form.name'        : 'نام شما',
      'contact.form.email'       : 'ایمیل شما',
      'contact.form.phone'       : 'شماره تماس (مثال: 09123456789)',
      'contact.form.phone.title' : 'لطفاً یک شماره تماس معتبر وارد کنید',
      'contact.form.subject'     : 'موضوع',
      'contact.form.message'     : 'پیام شما',
      'contact.form.loading'     : 'در حال ارسال...',
      'contact.form.sent'        : 'پیام شما با موفقیت ارسال شد!',
      'contact.form.submit'      : 'ارسال پیام',
    },

    /* ═══════════════════ ENGLISH ═══════════════════ */
    en: {
      /* Nav */
      'nav.home'      : 'Home',
      'nav.about'     : 'About',
      'nav.products'  : 'Products',
      'nav.services'  : 'Services',
      'nav.contact'   : 'Contact',

      /* Footer */
      'footer.rights' : 'All rights reserved',
      'footer.design' : 'Designed by',

      /* Hero */
      'hero.title'        : 'Bita Zar Andish Pars',
      'hero.subtitle'     : 'Innovation in Software Systems',
      'hero.desc'         : 'Developing web-based software systems and automation to improve organizational performance',
      'hero.cta.projects' : 'View Projects',
      'hero.cta.about'    : 'About Us',
      'hero.stat.years'   : 'Years Experience',
      'hero.stat.success' : 'Successful Projects',
      'hero.stat.clients' : 'Satisfied Partners',

      /* About */
      'about.title'   : 'About Us',
      'about.sub'     : 'Pioneering advanced software systems, organizational automation, and intelligent cybersecurity solutions',
      'about.badge'   : 'About Bita Zar Andish Pars',
      'about.h2'      : 'Specialist in Information Technology and Cybersecurity',
      'about.lead'    : 'Bita Zar Andish Pars (Reg. No. <strong>57067</strong>) specializes in designing, developing, and deploying web-based software systems and organizational process automation.',
      'about.p'       : 'Key achievements include: developing the comprehensive Research Information System (<strong>RIS</strong>) for the University of Isfahan with over <strong>3,000</strong> active users, collaborating with UoI\'s APA Center on the Naghsh Mojaz Cyber Range for network simulation and security training, and partnering with Islamic Azad Universities on academic article portfolio systems.',

      /* Services */
      'services.title' : 'Our Services',
      'services.sub'   : 'Innovative solutions in software systems and cybersecurity',
      'services.heading': 'Building a Secure Future with Technology',
      'services.desc'  : 'Through software development and automation, we help organizations improve security and efficiency.',
      'services.more'  : 'More Details',

      /* Skills */
      'skills.title'  : 'Our Track Record',
      'skills.sub'    : 'A step toward progress with innovation in IT and software solutions',

      /* Portfolio */
      'portfolio.title' : 'Our Projects',
      'portfolio.sub'   : 'Samples of our achievements and developed systems',
      'portfolio.filter.all'    : 'All Projects',
      'portfolio.filter.web'    : 'Web Projects',
      'portfolio.filter.scrape' : 'Scraping Projects',
      'portfolio.filter.auto'   : 'Management Systems',
      'portfolio.filter.edu'    : 'Educational Systems',

      /* Team */
      'team.title'  : 'Our Expert Team',
      'team.sub'    : 'Specialists and managers of Bita Zar Andish Pars who have shaped this organization together since 2020',
      'team.resume.fa' : 'Resume',
      'team.resume.en' : 'EN Resume',

      /* FAQ */
      'faq.title' : 'Frequently Asked Questions',

      /* Contact */
      'contact.title' : 'Contact Us',
      'contact.sub'   : 'Get in Touch',

      /* Page titles */
      'page.automation' : 'BPMS Automation System',
      'page.product'    : 'Bizapp Website',
      'page.about'      : 'About Us',
      'page.profile.edu': 'Academic Profile System',

      /* Breadcrumbs */
      'bc.home'         : 'Home',
      'bc.projects'     : 'Projects',

      /* ProfileResume page */
      'pr.title'       : 'Academic Staff Personal Resume & Profile System',
      'pr.section1'    : 'Executive Summary',
      'pr.gallery'     : 'System Screenshots',
      'pr.features'    : 'Key Features',
      'pr.goals'       : 'System Objectives',
      'pr.result'      : 'Impact & Results',

      /* Shared section labels */
      'sec.exec'       : 'Executive Summary',
      'sec.gallery'    : 'System Screenshots',

      /* CTA buttons (shared) */
      'cta.ready'      : 'Ready to Collaborate',
      'cta.btn.contact': 'Contact Us',
      'cta.btn.projects': 'View Other Projects',

      /* Automation page */
      'auto.bc'        : 'BPMS Automation System',
      'auto.h1'        : 'Integrated Business Process Automation System',
      'auto.sub'       : 'Smart No-Code/Low-Code platform for digitizing, automating and managing all organizational processes in a single, secure and scalable environment.',
      'auto.info.h3'   : 'Product Information',
      'auto.gallery'   : 'System Screenshots',
      'auto.goals.h2'  : 'Key Quantified Project Goals',
      'auto.engines.h2': 'Platform Smart Engines',
      'auto.engines.sub': 'The real power of the Bita platform lies in its specialized No-Code engines',
      'auto.arch.h2'   : 'Core Architecture & Technologies',
      'auto.arch.sub'  : 'Microservice architecture based on .NET with Cloud-Ready approach and full DevOps',
      'auto.adv.h2'    : 'Unique Competitive Advantages',
      'auto.adv.sub'   : 'From user empowerment to multi-layer organizational security',
      'auto.proof.h2'  : 'Proof of Competence: Track Record',
      'auto.proof.sub' : 'Proven performance in real and complex environments',
      'auto.cta.sub'   : 'Contact us for a free consultation and review of your organization\'s requirements.',

      /* Product (Bizap) page */
      'product.bc'          : 'Bizap Website',
      'product.h1'          : 'Bizap Website',
      'product.sub'         : 'Comprehensive online platform for introducing, networking and directly connecting small and medium businesses with customers nationwide.',
      'product.info.h3'     : 'Project Information',
      'product.gallery'     : 'Platform Screenshots',
      'product.video'       : 'Platform Introduction Video',
      'product.features.h2' : 'Main Platform Features',
      'product.features.sub': 'A complete set of tools for digital growth of small and medium businesses',
      'product.arch.h2'     : 'Architecture & Technologies Used',
      'product.arch.sub'    : 'Modern, scalable and secure architecture for millions of users',
      'product.cats.h2'     : 'Supported Categories',
      'product.cats.sub'    : 'Wide coverage of industries and service sectors across the country',
      'product.kpi.h2'      : 'Key Achievements',
      'product.kpi.sub'     : 'Results and key performance indicators after launch',
      'product.cta.sub'     : 'Contact us for a free consultation on business platform design.',

      /* ProfileResume — detailed content */
      'pr.sub'          : 'Integrated digital system for personalizing the online academic presence of professors',
      'pr.exec.lead'    : 'University technology needs a transition; from paper archives to live, interactive and always up-to-date resumes.',
      'pr.exec.p'       : 'This system was designed to create a professional digital presence for university professors — a tool that allows each professor, without any technical knowledge, to showcase their resume, research and academic information on a unique page.',
      'pr.info.h3'      : 'Project Information',
      'pr.video.h3'     : 'System Introduction Video',
      'pr.video.link'   : 'Watch Video',
      'pr.goals.sub'    : 'Key objectives designed to improve professors\' scientific presence',
      'pr.goal1.h3'     : 'Personalizing Digital Presence',
      'pr.goal1.p'      : 'Each professor has a unique online resume page with a dedicated URL fully reflecting their academic identity.',
      'pr.goal2.h3'     : 'Enhancing Scientific Visibility',
      'pr.goal2.p'      : 'A digital showcase for publications, research and courses, searchable by search engines.',
      'pr.goal3.h3'     : 'Reducing Administrative Burden',
      'pr.goal3.p'      : 'System administrators can update profiles and control the overall structure with just a few clicks.',
      'pr.goal4.h3'     : 'Integration with University Systems',
      'pr.goal4.p'      : 'Direct connection to the university database for automatic information synchronization.',
      'pr.features.sub' : 'Technical capabilities and key system features',
      'pr.f1.h4'        : 'Dedicated Resume Page Generation',
      'pr.f1.p'         : 'Each professor receives a unique URL containing all their academic, research and educational information.',
      'pr.f2.h4'        : 'Image & Video Upload',
      'pr.f2.p'         : 'Support for high-quality profile photo upload, introduction video and research file attachments.',
      'pr.f3.h4'        : 'Professor Management Panel',
      'pr.f3.p'         : 'Simple interface for independent resume editing, article publishing and course management.',
      'pr.f4.h4'        : 'University Admin Dashboard',
      'pr.f4.p'         : 'Control, approve and manage all professor profiles from a central panel.',
      'pr.f5.h4'        : 'Security & Authentication',
      'pr.f5.p'         : 'Login with university account (Single Sign-On), access level management and data encryption.',
      'pr.f6.h4'        : 'SEO Optimized',
      'pr.f6.p'         : 'Each page with standard meta tags, automatic sitemap and schema.org structure for better indexing.',
      'pr.f7.h4'        : 'Multilingual Support',
      'pr.f7.p'         : 'Support for Persian and English with responsive UI optimized for all devices.',
      'pr.result.sub'   : 'Achievements and impact after system deployment',
      'pr.r1.h3'        : 'Academic Adoption',
      'pr.r1.p'         : 'Successful deployment at Payam Noor universities with ongoing expansion to Azad universities.',
      'pr.r2.h3'        : 'Professor Satisfaction',
      'pr.r2.p'         : 'Significant reduction in time spent updating organizational resumes.',
      'pr.r3.h3'        : 'Increased Visibility',
      'pr.r3.p'         : 'Average 3× increase in professor profile visits after launch.',

      /* Automation — detailed content */
      'auto.exec.lead'  : 'Automation today is not a choice; it\'s a necessity. Organizations that have not digitized their processes are effectively losing time, resources and competitiveness.',
      'auto.exec.p'     : 'With a No-Code/Low-Code approach, the Bita platform digitizes organizational processes without needing a developer — from administrative correspondence to contract management, all in one integrated system.',
      'auto.goal1.h3'   : 'Eliminating Bureaucratic Paperwork',
      'auto.goal1.p'    : 'Complete digitization of correspondence, requests and approvals; zero paper, 100% transparency.',
      'auto.goal2.h3'   : 'Reducing Processing Time',
      'auto.goal2.p'    : 'Targeting 70% reduction in request processing time through intelligent routing.',
      'auto.goal3.h3'   : 'Real-Time Management Oversight',
      'auto.goal3.p'    : 'Management dashboards with real-time updates to monitor all process performance.',
      'auto.goal4.h3'   : 'Complete Organizational Integration',
      'auto.goal4.p'    : 'Connection to existing ERP, CRM and databases through standard API.',
      'auto.goal5.h3'   : 'Multi-Layer Security',
      'auto.goal5.p'    : 'Data encryption, role-based access control and complete operational log recording.',
      'auto.goal6.h3'   : 'Unlimited Scalability',
      'auto.goal6.p'    : 'Microservice architecture that scales with organizational growth without redesign.',
      'auto.eng1.h3'    : 'BPMN 2.0 Engine',
      'auto.eng1.p'     : 'Visual process design with international BPMN 2.0 standard and automatic execution.',
      'auto.eng2.h3'    : 'No-Code Form Builder Engine',
      'auto.eng2.p'     : 'Build dynamic forms with Drag & Drop without coding; from simple to complex.',
      'auto.eng3.h3'    : 'Business Rules Engine',
      'auto.eng3.p'     : 'Define and execute complex business rules without coding, with instant change capability.',
      'auto.eng4.h3'    : 'Smart Report Builder Engine',
      'auto.eng4.p'     : 'Create interactive reports, management charts and organizational dashboards instantly.',
      'auto.eng5.h3'    : 'Document Management Engine',
      'auto.eng5.p'     : 'Digital document archive with OCR search, version control and access management.',
      'auto.eng6.h3'    : 'Workload Map Engine',
      'auto.eng6.p'     : 'Visual display of employee workload and team capacity management.',
      'auto.adv1.h3'    : 'No Coding Required',
      'auto.adv1.p'     : 'Non-technical teams can independently define, edit and deploy processes.',
      'auto.adv2.h3'    : 'Rapid Integration',
      'auto.adv2.p'     : 'Standard REST API and ready connectors to link with existing systems within hours.',
      'auto.adv3.h3'    : 'Multi-Layer Enterprise Security',
      'auto.adv3.p'     : 'AES-256 encryption, two-factor authentication, RBAC and complete activity logging.',
      'auto.adv4.h3'    : 'Guaranteed Support & SLA',
      'auto.adv4.p'     : '24/7 support with defined SLA, team training and free periodic updates.',
      'auto.proof1.h3'  : 'University of Isfahan',
      'auto.proof1.p'   : 'Deployment of administrative correspondence system and faculty process management in over 5 units.',
      'auto.proof2.h3'  : 'APAC Network',
      'auto.proof2.p'   : 'Automation of security event management and national reporting processes.',
      'auto.proof3.h3'  : 'Industrial Organizations',
      'auto.proof3.p'   : 'Implementing supply chain automation in manufacturing and service companies.',
      'auto.kpi.h3'     : 'Key Performance Indicators (KPI)',

      /* Product (Bizap) — detailed content */
      'product.exec.lead'        : 'In a world where customer search always starts on a phone, not being online means not being in the competition.',
      'product.exec.p'           : 'Bizap is a platform that empowers small businesses with professional digital tools: dedicated page, map search, real-time chat, magazine and mobile app in one integrated platform.',
      'product.feat1.h3'         : 'Dedicated Business Page',
      'product.feat1.p'          : 'Each business has a fully customized page including images, descriptions, contact info, categories, tags, ratings and dedicated QR Code.',
      'product.feat2.h3'         : 'Smart Text & Map Search',
      'product.feat2.p'          : 'Advanced search engine with multi-filters and interactive map view with Elasticsearch to find nearby businesses.',
      'product.feat3.h3'         : 'Seller Dashboard',
      'product.feat3.p'          : 'Dedicated management panel for business owners to manage profile, view statistics, reviews and communications.',
      'product.feat4.h3'         : 'Real-Time Chat',
      'product.feat4.p'          : 'SignalR-based instant messaging system for direct communication between businesses and customers.',
      'product.feat5.h3'         : 'Area Service Requests',
      'product.feat5.p'          : 'Users can submit service requests by specifying geographic area, and the platform notifies eligible businesses.',
      'product.feat6.h3'         : 'Bizap Magazine',
      'product.feat6.p'          : 'Content-driven platform for publishing specialized articles, smart banner ads and special campaigns.',
      'product.feat7.h3'         : 'Admin Management Panel',
      'product.feat7.p'          : 'Comprehensive dashboard for platform supervisors to monitor users, approve businesses and full management.',
      'product.feat8.h3'         : 'Rating & Review System',
      'product.feat8.p'          : 'Users can rate and review businesses. Anti-fraud system and public business response to reviews.',
      'product.feat9.h3'         : 'Mobile App (PWA)',
      'product.feat9.p'          : 'Progressive Web App for mobile access without store installation; Android, iOS and offline support.',
      'product.arch.h3.modules'  : 'Main System Modules',
      'product.arch.h3.stack'    : 'Technology Stack',
      'product.kpi1.h3'          : 'Registered Businesses',
      'product.kpi1.p'           : 'Hundreds of diverse businesses in various categories across multiple cities.',
      'product.kpi2.h3'          : 'Real-Time Chat Interactions',
      'product.kpi2.p'           : 'Direct and instant communication with SignalR, no delay, between businesses and customers.',
      'product.kpi3.h3'          : 'Map-Based Search',
      'product.kpi3.p'           : 'Finding nearby businesses in a fraction of a second with powerful Elasticsearch Geo-Query.',
      'product.kpi4.h3'          : 'Mobile Compatibility',
      'product.kpi4.p'           : 'PWA with native-like experience on Android and iOS without App Store installation.',
      'product.table.th1'        : 'Module',
      'product.table.th2'        : 'Key Feature',
      'product.table.th3'        : 'Technology',

      /* About Us — detailed content */
      'about.feat1'                  : 'Advanced custom web application development',
      'about.feat2'                  : 'Business process automation with BPMS No-Code technology',
      'about.feat3'                  : 'Cybersecurity, penetration testing and infrastructure protection',
      'about.feat4'                  : 'AI and Machine Learning consulting',
      'about.feat5'                  : 'Mobile app development (PWA and Native)',
      'about.feat6'                  : 'Research collaboration with leading universities',
      'about.sidebar.title'          : 'Company Information',
      'about.sidebar.company.label'  : 'Company Name',
      'about.sidebar.company.val'    : 'Bita Zar Andish Pars',
      'about.sidebar.reg.label'      : 'Registration No.',
      'about.sidebar.founded.label'  : 'Founded',
      'about.sidebar.founded.val'    : '2020 AD',
      'about.sidebar.location.label' : 'Headquarters',
      'about.sidebar.location.val'   : 'Isfahan, Iran',
      'about.sidebar.phone.label'    : 'Phone',
      'about.sidebar.email.label'    : 'Email',
      'about.areas.title'            : 'Service Areas',
      'about.area1.title'            : 'Enterprise Software',
      'about.area1.desc'             : 'Management systems, automation and ERP for large organizations',
      'about.area2.title'            : 'Cybersecurity',
      'about.area2.desc'             : 'Security audit, penetration testing and ISMS consulting',
      'about.area3.title'            : 'Academic Research',
      'about.area3.desc'             : 'Joint R&D with Iranian universities',
      'about.stat.years'             : 'Years of Experience',
      'about.stat.projects'          : 'Successful Projects',
      'about.stat.users'             : 'Active Users',
      'about.stat.clients'           : 'Enterprise Clients',
      'about.vm.title'               : 'Vision & Mission',
      'about.vm.sub'                 : 'Our goal is creating technologies that transform organizations',
      'about.vision.title'           : 'Our Vision',
      'about.vision.desc'            : 'To become the regional leader in enterprise technology and cybersecurity — creating solutions that merge global standards with local needs.',
      'about.mission.title'          : 'Our Mission',
      'about.mission.desc'           : 'Empowering organizations and universities through intelligent, secure and scalable software that eliminates administrative burden and doubles productivity.',
      'about.spec.title'             : 'Core Specializations',
      'about.spec.sub'               : 'Three main pillars that distinguish Bita Zar Andish Pars',
      'about.spec1.title'            : 'Integrated Systems Development',
      'about.spec1.desc'             : 'Microservice architecture design, API-First development and implementation of complex enterprise systems with ASP.NET Core.',
      'about.spec2.title'            : 'Process Automation (BPMS)',
      'about.spec2.desc'             : 'Implementing BPMN 2.0 engines, No-Code workflow design and integration with existing systems.',
      'about.spec3.title'            : 'Security & Infrastructure',
      'about.spec3.desc'             : 'Penetration testing, ISMS implementation, data encryption and enterprise cybersecurity consulting.',
      'about.spec.more'              : 'View Complete Services',
      'about.clients.title'          : 'Key Clients & Partners',
      'about.clients.sub'            : 'Honored to collaborate with leading academic and organizational institutions',
      'about.client1.title'          : 'University of Isfahan',
      'about.client1.desc'           : 'Deployment of professor resume system and faculty administrative process automation.',
      'about.client2.title'          : 'Payam Noor Universities',
      'about.client2.desc'           : 'Implementation of professor resume portal in multiple provincial units.',
      'about.client3.title'          : 'Azad Universities',
      'about.client3.desc'           : 'Providing consulting services and custom software solutions.',
      'about.tech.title'             : 'Our Technology Stack',
      'about.tech.sub'               : 'Modern technology stack for scalable and secure solutions',
      'about.location.title'         : 'Our Location',
      'about.location.sub'           : 'In the heart of Isfahan, with nationwide reach',
      'about.location.address'       : 'Isfahan, Chaharbagheh Bala Street, Pardis Information Complex, 5th Floor',
      'about.cta.sub'                : 'Meet our expert team at Bita Zar Andish Pars and entrust your next project to us.',

      /* Index — Resume & FAQ sections */
      'resume.title'   : 'Our Track Record',
      'resume.sub'     : 'A step toward progress with innovation in IT and software solutions',
      'faq.sub'        : 'Answers to frequently asked questions about our software systems and automation services',

      /* About — info labels & values */
      'about.info.company.label'  : 'Company Name',
      'about.info.reg.label'      : 'Registration No.',
      'about.info.founded.label'  : 'Founded',
      'about.info.location.label' : 'Location',
      'about.info.specialty.label': 'Specialty',
      'about.info.clients.label'  : 'Key Clients',
      'about.info.company.val'    : 'Bita Zar Andish Pars',
      'about.info.reg.val'        : '57067',
      'about.info.founded.val'    : '2020',
      'about.info.location.val'   : 'Isfahan, Iran',
      'about.info.specialty.val'  : 'Web Systems & Cybersecurity',
      'about.info.clients.val'    : 'U. of Isfahan, APA, Azad Universities',

      /* Services — individual items */
      'services.item1.title' : 'Cybersecurity Software',
      'services.item1.desc'  : 'Developing security software to protect organizational data.',
      'services.item2.title' : 'Web System Development',
      'services.item2.desc'  : 'Creating high-performance and secure web-based systems.',
      'services.item3.title' : 'Process Automation',
      'services.item3.desc'  : 'Optimizing and automating organizational processes to increase efficiency.',
      'services.item4.title' : 'Research & Consulting',
      'services.item4.desc'  : 'Collaborating with universities for research and development in IT.',

      /* Skills — individual items */
      'skills.item1.title' : 'Project & Risk Management',
      'skills.item1.desc'  : 'Effective project management by identifying and mitigating risks to ensure timely, high-quality delivery.',
      'skills.item2.title' : 'Information Security',
      'skills.item2.desc'  : 'Developing security solutions to protect data and prevent cyber threats.',
      'skills.item3.title' : 'Client & Organizational Satisfaction',
      'skills.item3.desc'  : 'Ensuring client and organizational satisfaction through quality services and responsiveness to their needs.',
      'skills.item4.title' : 'Software Support',
      'skills.item4.desc'  : 'Providing continuous and specialized product support, including issue resolution and periodic updates to maintain performance and client satisfaction.',

      /* Resume block header */
      'resume.projects.h2'   : 'Software Projects',
      'resume.projects.lead' : 'Our achievements in developing integrated and specialized solutions',

      /* Timeline items */
      'resume.t1.company'   : 'Research Information System',
      'resume.t1.period'    : '2024 – Present',
      'resume.t1.position'  : 'Smart Management of Research Processes',
      'resume.t1.desc'      : 'Development of an integrated research management system with capabilities for registering, tracking and reporting scientific activities. It enables data retrieval from authoritative sources, data analysis, and calculation of incentive bases and promotion of faculty members, featuring a fully dynamic inbox with editing capabilities.',
      'resume.t2.company'   : 'Form Builder System',
      'resume.t2.period'    : '2024',
      'resume.t2.position'  : 'Design and Management of Smart Forms',
      'resume.t2.desc'      : 'Development of a multi-purpose platform for designing, managing and executing smart forms with extensive customization. The system features comprehensive access control, a workflow engine for defining form sequences and flows, and high security to protect sensitive data.',
      'resume.t3.company'   : 'Incentive Bases',
      'resume.t3.period'    : '2024',
      'resume.t3.position'  : 'Incentive Bases System',
      'resume.t3.desc'      : 'Design of a smart system for evaluating and scoring faculty members based on scientific and qualitative criteria aligned with regulations and up-to-date data from authoritative databases.',
      'resume.t4.company'   : 'Faculty Profiles',
      'resume.t4.period'    : '2024',
      'resume.t4.position'  : 'Academic & Research CV System',
      'resume.t4.desc'      : 'Creating a comprehensive system for displaying academic and professional CVs of faculty members using complete article and book data from authoritative references, with precise and structured data management and updates.',
      'resume.t5.company'   : 'Naghsh Mojaz Cyber Range',
      'resume.t5.period'    : '2023–2024',
      'resume.t5.position'  : 'Collaboration with UoI APA Center — Network Simulation & Cybersecurity',
      'resume.t5.desc'      : 'Design and development of the Naghsh Mojaz Cyber Range in collaboration with the APA Center of University of Isfahan; a platform for simulating real networks, ethical hacking and cyber defense training, CTF competitions and simultaneous attack/defense scenarios using web-based virtual machines.',
      'resume.t6.company'   : 'National Library of Iran',
      'resume.t6.period'    : '2023',
      'resume.t6.position'  : 'Book Retrieval System with Z3950 Protocol',
      'resume.t6.desc'      : 'Implementation of an integrated system for searching and retrieving library resources using the international Z3950 standard.',
      'resume.t7.company'   : 'Scraper',
      'resume.t7.period'    : '2023',
      'resume.t7.position'  : 'Article & Journal Scraping System',
      'resume.t7.desc'      : 'Building a smart infrastructure for extracting and accessing scientific articles from 4 reputable international databases with specialized filtering and categorization capabilities.',
      'resume.t8.company'   : 'Azad Universities',
      'resume.t8.period'    : '2023–2024',
      'resume.t8.position'  : 'Collaboration with Azad Universities — Academic Article CVs',
      'resume.t8.desc'      : 'Development of a comprehensive Persian and English article CV system for faculty members of Azad Universities; including automatic data extraction from authoritative databases, structured display of research history and management capabilities for professors.',
      'resume.t9.company'   : 'Najafabad Real Estate',
      'resume.t9.period'    : '2023–2024',
      'resume.t9.position'  : 'Automation, Website & Scraper Bots',
      'resume.t9.desc'      : 'Website design, implementation of an internal process automation system, and development of smart scraper bots for collecting and processing housing market data for a Najafabad real estate firm.',
      'resume.t10.company'  : 'Shahab Growth Center',
      'resume.t10.period'   : '2023–2024',
      'resume.t10.position' : 'Smart Digital Wallet Project',
      'resume.t10.desc'     : 'Collaboration with Shahab Growth Center on designing and developing a smart digital wallet system; including transaction management, payment gateway integration and multi-layer security mechanisms to protect digital assets.',
      'resume.t11.company'  : 'Bizap',
      'resume.t11.period'   : '2020–2022',
      'resume.t11.position' : 'Business Introduction & Management Platform',
      'resume.t11.desc'     : 'Design and implementation of a comprehensive platform for introducing and networking small and medium businesses to increase economic interactions. Including a seller dashboard, personalized business pages, text and map search, Bizap magazine, admin dashboard and real-time chat between businesses.',

      /* Portfolio items */
      'port1.category' : 'Free Business Introduction',
      'port1.h3'       : 'Bizap Website',
      'port1.p'        : 'Design and implementation of a comprehensive platform for introducing and networking small and medium businesses to increase economic interactions. Features include seller dashboard, personalized pages, text and map search, Bizap magazine, admin dashboard and real-time chat between businesses and customers.',
      'port2.category' : 'Enterprise Automation · No-Code BPMS',
      'port2.h3'       : 'Integrated Process Automation System',
      'port2.p'        : 'Smart Business Process Management Platform (BPMS) with a No-Code/Low-Code approach. Form design, BPMN 2.0 workflow modeling, business intelligence and access management — all in one integrated platform for organizations that believe in digital self-reliance.',
      'port3.category' : 'Academic System · .NET / React.js',
      'port3.h3'       : 'Faculty & University Personal CV System',
      'port3.p'        : 'Professional platform for creating digital resume pages for academic faculty, supporting both Persian and English, integrated with Google Scholar, ORCID and ResearchGate.',

      /* Team cards */
      'team.role.chairman'   : 'Board Chairman',
      'team.role.ceo'        : 'CEO',
      'team.role.member'     : 'Board Member',
      'team.role.uiux'       : 'UI/UX Specialist',
      'team.since.1399'      : 'Member since 2020',
      'team.since.1401'      : 'Member since 2022',
      'team.since.1403'      : 'Member since 2024',
      'team.spec.aghakabiri' : 'Senior Full-Stack · Web System Development',
      'team.spec.shams'      : 'Senior Full-Stack · Software Architecture',
      'team.spec.shirazi'    : 'Senior Front-End · AI · CS Graduate, University of Isfahan',
      'team.spec.madahi'     : 'Business Management · Market Development',
      'team.spec.kimia'      : 'UI/UX Design · Figma · User Experience',

      /* FAQ items */
      'faq.q1' : 'What are the main services of Bita Zar Andish Pars?',
      'faq.a1' : 'We operate in three core areas: web-based software system development, organizational process automation (BPMS), and cybersecurity solutions. Our main products include the Smart Form Builder, BPMS platform, and Bizap — all designed for organizations and businesses.',
      'faq.q2' : 'Do you develop customized projects for clients?',
      'faq.a2' : 'Absolutely. Delivering fully customized solutions tailored to each client\'s specific needs is one of our key services. From unique UI design to complex business logic implementation, our team works alongside you to build a solution that fits your organization perfectly.',
      'faq.q3' : 'How does the collaboration and contract process work?',
      'faq.a3' : 'Our collaboration process is straightforward: reach out via the contact form or phone, then we arrange a meeting to analyze your requirements. After an initial agreement, we provide a technical and financial proposal, and upon approval, a formal contract is signed.',
      'faq.q4' : 'How can we sign a contract for ready-made products like Form Builder or BPMS?',
      'faq.a4' : 'Our ready-made products are available through license purchase or subscription. Various packages are designed depending on your organization\'s size and specific needs. Contact our team to review your options and finalize a formal agreement.',
      'faq.q5' : 'Is post-delivery support provided?',
      'faq.a5' : 'Yes, ongoing support is an integral part of all our contracts. This includes bug fixing, periodic updates, team training, and fast responses to technical issues. A free support period is also included after project delivery.',
      'faq.q6' : 'Have you worked with government organizations and universities?',
      'faq.a6' : 'Yes, we have a strong track record with reputable institutions, including the University of Isfahan (Comprehensive Research System and NaqshMojaz Cyber Range), Azad Universities across Iran, the National Library of Iran, and Shahab Growth Center.',
      'faq.q7' : 'How are project costs and timelines determined?',
      'faq.a7' : 'Cost and timeline are determined based on the complexity and scope of the project. After an initial requirements meeting, we provide an estimated timeline and budget. We are committed to transparent pricing with no hidden charges.',
      'faq.q8' : 'What if I can\'t find the answer to my question here?',
      'faq.a8' : 'No worries! You can send a message through the contact form, call the numbers listed in the contact section, or use the messaging feature on our website. Our team will respond as quickly as possible.',

      /* Contact section */
      'contact.badge'            : 'Contact Us',
      'contact.h2'               : 'Get in Touch with Bita Zar Andish Pars',
      'contact.lead'             : 'We are ready to assist you with support and consulting services.',
      'contact.address'          : 'Isfahan, Azadi Square, University of Isfahan, Growth & Technology Center, Ground Floor, Unit 17',
      'contact.maplink'          : 'View on Map',
      'contact.form.name'        : 'Your Name',
      'contact.form.email'       : 'Your Email',
      'contact.form.phone'       : 'Phone Number (e.g. 09123456789)',
      'contact.form.phone.title' : 'Please enter a valid phone number',
      'contact.form.subject'     : 'Subject',
      'contact.form.message'     : 'Your Message',
      'contact.form.loading'     : 'Sending...',
      'contact.form.sent'        : 'Your message was sent successfully!',
      'contact.form.submit'      : 'Send Message',
    },

    /* ═══════════════════ ARABIC ═══════════════════ */
    ar: {
      /* Nav */
      'nav.home'      : 'الرئيسية',
      'nav.about'     : 'معلومات عنا',
      'nav.products'  : 'المنتجات',
      'nav.services'  : 'الخدمات',
      'nav.contact'   : 'اتصل بنا',

      /* Footer */
      'footer.rights' : 'جميع الحقوق محفوظة',
      'footer.design' : 'تصميم بواسطة',

      /* Hero */
      'hero.title'        : 'بيتا زار أنديش پارس',
      'hero.subtitle'     : 'الابتكار في أنظمة البرمجيات',
      'hero.desc'         : 'تطوير أنظمة البرمجيات المبنية على الويب والأتمتة لتحسين الأداء المؤسسي',
      'hero.cta.projects' : 'عرض المشاريع',
      'hero.cta.about'    : 'معلومات عنا',
      'hero.stat.years'   : 'سنوات الخبرة',
      'hero.stat.success' : 'مشاريع ناجحة',
      'hero.stat.clients' : 'شركاء راضون',

      /* About */
      'about.title'   : 'معلومات عنا',
      'about.sub'     : 'رائدة في تطوير أنظمة البرمجيات المتقدمة وأتمتة المؤسسات وحلول الأمن السيبراني الذكية',
      'about.badge'   : 'عن بيتا زار أنديش پارس',
      'about.h2'      : 'متخصصة في تقنية المعلومات والأمن السيبراني',
      'about.lead'    : 'شركة بيتا زار أنديش پارس (رقم التسجيل <strong>57067</strong>) متخصصة في تصميم وتطوير ونشر أنظمة البرمجيات المبنية على الويب وأتمتة العمليات المؤسسية.',
      'about.p'       : 'من أبرز إنجازاتها: تطوير نظام معلومات البحث الشامل (<strong>RIS</strong>) لجامعة أصفهان بأكثر من <strong>3000</strong> مستخدم نشط، والتعاون مع مركز APA في تطوير ميدان الإنترنت الآمن للتدريب على الأمن، والتعاون مع جامعات أزاد الإسلامية في مجال ملخصات المقالات العلمية.',

      /* Services */
      'services.title' : 'خدماتنا',
      'services.sub'   : 'حلول مبتكرة في أنظمة البرمجيات والأمن السيبراني',
      'services.heading': 'بناء مستقبل آمن بالتكنولوجيا',
      'services.desc'  : 'من خلال تطوير البرمجيات والأتمتة، نساعد المؤسسات على تحسين الأمن والكفاءة.',
      'services.more'  : 'تفاصيل أكثر',

      /* Skills */
      'skills.title'  : 'سجلنا الحافل',
      'skills.sub'    : 'خطوة نحو التقدم بالابتكار في تقنية المعلومات وحلول البرمجيات',

      /* Portfolio */
      'portfolio.title' : 'مشاريعنا',
      'portfolio.sub'   : 'نماذج من إنجازاتنا والأنظمة التي طورناها',
      'portfolio.filter.all'    : 'جميع المشاريع',
      'portfolio.filter.web'    : 'المشاريع على الويب',
      'portfolio.filter.scrape' : 'مشاريع الاستخراج',
      'portfolio.filter.auto'   : 'أنظمة الإدارة',
      'portfolio.filter.edu'    : 'الأنظمة التعليمية',

      /* Team */
      'team.title'  : 'فريق الخبراء لدينا',
      'team.sub'    : 'المتخصصون والمديرون في بيتا زار أنديش پارس الذين شكلوا هذه المنظمة معًا منذ عام 2020',
      'team.resume.fa' : 'السيرة الذاتية',
      'team.resume.en' : 'السيرة الذاتية (EN)',

      /* FAQ */
      'faq.title' : 'الأسئلة الشائعة',

      /* Contact */
      'contact.title' : 'اتصل بنا',
      'contact.sub'   : 'تواصل معنا',

      /* Page titles */
      'page.automation' : 'نظام أتمتة BPMS',
      'page.product'    : 'موقع بيزاپ',
      'page.about'      : 'معلومات عنا',
      'page.profile.edu': 'نظام ملخصات الأساتذة',

      /* Breadcrumbs */
      'bc.home'         : 'الرئيسية',
      'bc.projects'     : 'المشاريع',

      /* ProfileResume page */
      'pr.title'       : 'نظام إنشاء صفحات السيرة الذاتية للأساتذة',
      'pr.section1'    : 'الملخص التنفيذي',
      'pr.gallery'     : 'صور النظام',
      'pr.features'    : 'الميزات الرئيسية',
      'pr.goals'       : 'أهداف النظام',
      'pr.result'      : 'النتائج والأثر',

      /* Shared section labels */
      'sec.exec'       : 'الملخص التنفيذي',
      'sec.gallery'    : 'صور النظام',

      /* CTA buttons (shared) */
      'cta.ready'      : 'مستعدون للتعاون',
      'cta.btn.contact': 'اتصل بنا',
      'cta.btn.projects': 'عرض مشاريع أخرى',

      /* Automation page */
      'auto.bc'        : 'نظام أتمتة BPMS',
      'auto.h1'        : 'نظام أتمتة العمليات التجارية المتكامل',
      'auto.sub'       : 'منصة ذكية No-Code/Low-Code لرقمنة وأتمتة وإدارة جميع العمليات المؤسسية في بيئة واحدة وآمنة وقابلة للتوسع.',
      'auto.info.h3'   : 'معلومات المنتج',
      'auto.gallery'   : 'صور النظام',
      'auto.goals.h2'  : 'الأهداف الكبرى والمحددة للمشروع',
      'auto.engines.h2': 'المحركات الذكية للمنصة',
      'auto.engines.sub': 'تكمن القوة الحقيقية لمنصة بيتا في محركاتها المتخصصة No-Code',
      'auto.arch.h2'   : 'بنية ومتقنيات النواة',
      'auto.arch.sub'  : 'معمارية الخدمات الدقيقة القائمة على .NET مع نهج Cloud-Ready و DevOps كامل',
      'auto.adv.h2'    : 'المزايا التنافسية الفريدة',
      'auto.adv.sub'   : 'من تمكين المستخدمين إلى الأمن المؤسسي متعدد الطبقات',
      'auto.proof.h2'  : 'إثبات الكفاءة: السجل التنفيذي',
      'auto.proof.sub' : 'الأداء المثبت في البيئات الواقعية والمعقدة',
      'auto.cta.sub'   : 'تواصل معنا للحصول على استشارة مجانية ومراجعة متطلبات مؤسستك.',

      /* Product (Bizap) page */
      'product.bc'          : 'موقع بيزاَپ',
      'product.h1'          : 'موقع بيزاَپ (Bizap)',
      'product.sub'         : 'منصة شاملة عبر الإنترنت لتقديم وتشبيك وتواصل مباشر بين الشركات الصغيرة والمتوسطة والعملاء في جميع أنحاء البلاد.',
      'product.info.h3'     : 'معلومات المشروع',
      'product.gallery'     : 'صور المنصة',
      'product.video'       : 'فيديو تعريفي للمنصة',
      'product.features.h2' : 'الميزات الرئيسية للمنصة',
      'product.features.sub': 'مجموعة كاملة من الأدوات للنمو الرقمي للشركات الصغيرة والمتوسطة',
      'product.arch.h2'     : 'البنية والتقنيات المستخدمة',
      'product.arch.sub'    : 'بنية حديثة وقابلة للتوسع وآمنة لملايين المستخدمين',
      'product.cats.h2'     : 'الفئات المدعومة',
      'product.cats.sub'    : 'تغطية واسعة للصناعات وقطاعات الخدمات في جميع أنحاء البلاد',
      'product.kpi.h2'      : 'الإنجازات الرئيسية',
      'product.kpi.sub'     : 'النتائج ومؤشرات الأداء الرئيسية للمنصة بعد الإطلاق',
      'product.cta.sub'     : 'تواصل معنا للحصول على استشارة مجانية حول تصميم منصة الأعمال.',

      /* ProfileResume — detailed content */
      'pr.sub'          : 'نظام رقمي متكامل لتخصيص الحضور الأكاديمي الإلكتروني للأساتذة',
      'pr.exec.lead'    : 'تحتاج تقنية الجامعة إلى تحول؛ من الأرشيف الورقي إلى سير ذاتية حية وتفاعلية ومحدثة دائمًا.',
      'pr.exec.p'       : 'صُمم هذا النظام لإنشاء حضور رقمي احترافي لأساتذة الجامعات — أداة تتيح لكل أستاذ دون معرفة تقنية عرض سيرته الذاتية وأبحاثه ومعلوماته الأكاديمية على صفحة فريدة.',
      'pr.info.h3'      : 'معلومات المشروع',
      'pr.video.h3'     : 'فيديو تعريفي للنظام',
      'pr.video.link'   : 'مشاهدة الفيديو',
      'pr.goals.sub'    : 'الأهداف الرئيسية المصممة لتحسين الحضور العلمي للأساتذة',
      'pr.goal1.h3'     : 'تخصيص الحضور الرقمي',
      'pr.goal1.p'      : 'لكل أستاذ صفحة سيرة ذاتية إلكترونية فريدة بعنوان URL خاص يعكس هويته الأكاديمية بالكامل.',
      'pr.goal2.h3'     : 'تعزيز الرؤية العلمية',
      'pr.goal2.p'      : 'واجهة رقمية للمنشورات والأبحاث والمقررات، قابلة للبحث عبر محركات البحث.',
      'pr.goal3.h3'     : 'تقليل العبء الإداري',
      'pr.goal3.p'      : 'يستطيع مدير النظام تحديث الملفات الشخصية والتحكم في الهيكل العام ببضع نقرات.',
      'pr.goal4.h3'     : 'التكامل مع أنظمة الجامعة',
      'pr.goal4.p'      : 'اتصال مباشر بقاعدة بيانات الجامعة للمزامنة التلقائية للمعلومات.',
      'pr.features.sub' : 'الإمكانيات التقنية والميزات الرئيسية للنظام',
      'pr.f1.h4'        : 'توليد صفحة سيرة ذاتية مخصصة',
      'pr.f1.p'         : 'يحصل كل أستاذ على عنوان URL فريد يحتوي على جميع معلوماته الأكاديمية والبحثية والتعليمية.',
      'pr.f2.h4'        : 'رفع الصور والفيديو',
      'pr.f2.p'         : 'دعم رفع صورة الملف الشخصي عالية الجودة وفيديو التعريف والملفات البحثية.',
      'pr.f3.h4'        : 'لوحة إدارة الأستاذ',
      'pr.f3.p'         : 'واجهة بسيطة للتحرير المستقل للسيرة الذاتية ونشر المقالات وإدارة الدورات التدريبية.',
      'pr.f4.h4'        : 'لوحة تحكم مدير الجامعة',
      'pr.f4.p'         : 'التحكم والموافقة وإدارة جميع ملفات الأساتذة من لوحة مركزية.',
      'pr.f5.h4'        : 'الأمن والمصادقة',
      'pr.f5.p'         : 'تسجيل الدخول بحساب الجامعة (تسجيل دخول موحد)، إدارة مستويات الوصول وتشفير البيانات.',
      'pr.f6.h4'        : 'محسّن لمحركات البحث',
      'pr.f6.p'         : 'كل صفحة بعلامات تعريفية قياسية وخريطة موقع تلقائية وهيكل schema.org لفهرسة أفضل.',
      'pr.f7.h4'        : 'دعم متعدد اللغات',
      'pr.f7.p'         : 'دعم الفارسية والإنجليزية بواجهة مستخدم متجاوبة ومحسّنة لجميع الأجهزة.',
      'pr.result.sub'   : 'الإنجازات والتأثير بعد تشغيل النظام',
      'pr.r1.h3'        : 'التبني الأكاديمي',
      'pr.r1.p'         : 'نشر ناجح في جامعات بيام نور مع توسع مستمر نحو جامعات آزاد.',
      'pr.r2.h3'        : 'رضا الأساتذة',
      'pr.r2.p'         : 'تقليل ملحوظ في الوقت المستغرق لتحديث السير الذاتية الرسمية.',
      'pr.r3.h3'        : 'زيادة الظهور',
      'pr.r3.p'         : 'زيادة بمعدل ثلاثة أضعاف في زيارات ملفات الأساتذة بعد الإطلاق.',

      /* Automation — detailed content */
      'auto.exec.lead'  : 'الأتمتة اليوم ليست خيارًا؛ إنها ضرورة. المنظمات التي لم ترقمن عملياتها تخسر فعليًا الوقت والموارد والقدرة التنافسية.',
      'auto.exec.p'     : 'بنهج No-Code/Low-Code، تُرقمن منصة بيتا العمليات التنظيمية دون الحاجة إلى مطور — من المراسلات الإدارية إلى إدارة العقود، كل شيء في منصة واحدة متكاملة.',
      'auto.goal1.h3'   : 'إلغاء العمل الورقي البيروقراطي',
      'auto.goal1.p'    : 'رقمنة كاملة للمراسلات والطلبات والموافقات؛ صفر ورق، شفافية كاملة.',
      'auto.goal2.h3'   : 'تقليل وقت المعالجة',
      'auto.goal2.p'    : 'استهداف تخفيض 70٪ في وقت معالجة الطلبات عبر التوجيه الذكي.',
      'auto.goal3.h3'   : 'رقابة إدارية فورية',
      'auto.goal3.p'    : 'لوحات تحكم إدارية بتحديثات فورية لمراقبة أداء جميع العمليات.',
      'auto.goal4.h3'   : 'تكامل تنظيمي كامل',
      'auto.goal4.p'    : 'الاتصال بأنظمة ERP وCRM وقواعد البيانات الموجودة عبر API قياسية.',
      'auto.goal5.h3'   : 'أمن متعدد الطبقات',
      'auto.goal5.p'    : 'تشفير البيانات، التحكم في الوصول القائم على الأدوار وتسجيل كامل لجميع العمليات.',
      'auto.goal6.h3'   : 'قابلية توسع غير محدودة',
      'auto.goal6.p'    : 'معمارية ميكروسيرفيس تتوسع مع نمو المنظمة دون الحاجة إلى إعادة التصميم.',
      'auto.eng1.h3'    : 'محرك BPMN 2.0',
      'auto.eng1.p'     : 'تصميم بصري للعمليات وفق معيار BPMN 2.0 الدولي وتنفيذها تلقائيًا.',
      'auto.eng2.h3'    : 'محرك بناء النماذج بلا كود',
      'auto.eng2.p'     : 'بناء نماذج ديناميكية بالسحب والإفلات دون ترميز؛ من البسيط إلى المعقد.',
      'auto.eng3.h3'    : 'محرك قواعد الأعمال',
      'auto.eng3.p'     : 'تعريف قواعد الأعمال المعقدة وتنفيذها دون ترميز، مع إمكانية التغيير الفوري.',
      'auto.eng4.h3'    : 'محرك تقارير ذكي',
      'auto.eng4.p'     : 'إنشاء تقارير تفاعلية ومخططات إدارية ولوحات معلومات تنظيمية فورًا.',
      'auto.eng5.h3'    : 'محرك إدارة المستندات',
      'auto.eng5.p'     : 'أرشيف رقمي للمستندات مع بحث OCR والتحكم في الإصدار وإدارة الوصول.',
      'auto.eng6.h3'    : 'محرك خريطة عبء العمل',
      'auto.eng6.p'     : 'عرض بصري لعبء عمل الموظفين وإدارة سعة الفريق.',
      'auto.adv1.h3'    : 'لا يحتاج إلى ترميز',
      'auto.adv1.p'     : 'يمكن للفرق غير التقنية تعريف العمليات وتحريرها ونشرها بشكل مستقل.',
      'auto.adv2.h3'    : 'تكامل سريع',
      'auto.adv2.p'     : 'REST API قياسية وموصلات جاهزة للربط بالأنظمة الموجودة في غضون ساعات.',
      'auto.adv3.h3'    : 'أمن مؤسسي متعدد الطبقات',
      'auto.adv3.p'     : 'تشفير AES-256، مصادقة ثنائية، RBAC وتسجيل كامل لجميع الأنشطة.',
      'auto.adv4.h3'    : 'دعم مضمون واتفاقية مستوى الخدمة',
      'auto.adv4.p'     : 'دعم على مدار الساعة باتفاقية SLA محددة وتدريب الفريق وتحديثات دورية مجانية.',
      'auto.proof1.h3'  : 'جامعة أصفهان',
      'auto.proof1.p'   : 'نشر نظام المراسلات الإدارية وإدارة عمليات الكليات في أكثر من 5 وحدات.',
      'auto.proof2.h3'  : 'شبكة آبا',
      'auto.proof2.p'   : 'أتمتة عمليات إدارة الأحداث الأمنية وإعداد التقارير الوطنية.',
      'auto.proof3.h3'  : 'المنظمات الصناعية',
      'auto.proof3.p'   : 'تنفيذ أتمتة سلسلة التوريد في شركات التصنيع والخدمات.',
      'auto.kpi.h3'     : 'مؤشرات الأداء الرئيسية (KPI)',

      /* Product (Bizap) — detailed content */
      'product.exec.lead'        : 'في عالم تبدأ فيه عمليات بحث العملاء دائمًا من الهاتف، عدم التواجد عبر الإنترنت يعني عدم المنافسة.',
      'product.exec.p'           : 'بيزاَپ منصة تُجهّز الشركات الصغيرة بأدوات رقمية احترافية: صفحة مخصصة، بحث على الخريطة، دردشة فورية، مجلة وتطبيق جوال في منصة واحدة.',
      'product.feat1.h3'         : 'صفحة أعمال مخصصة',
      'product.feat1.p'          : 'لكل نشاط تجاري صفحة مخصصة بالكامل تشمل الصور والأوصاف ومعلومات الاتصال والفئات والتقييمات ورمز QR مخصص.',
      'product.feat2.h3'         : 'بحث نصي وخرائطي ذكي',
      'product.feat2.p'          : 'محرك بحث متقدم بفلاتر متعددة وعرض خريطة تفاعلية مع Elasticsearch للعثور على الأنشطة التجارية القريبة.',
      'product.feat3.h3'         : 'لوحة تحكم البائعين',
      'product.feat3.p'          : 'لوحة إدارة مخصصة لأصحاب الأعمال لإدارة الملف الشخصي وعرض الإحصاءات والمراجعات والاتصالات.',
      'product.feat4.h3'         : 'دردشة فورية',
      'product.feat4.p'          : 'نظام مراسلة فوري مبني على SignalR للتواصل المباشر بين الشركات والعملاء.',
      'product.feat5.h3'         : 'طلبات الخدمة في النطاق الجغرافي',
      'product.feat5.p'          : 'يمكن للمستخدمين تقديم طلبات الخدمة بتحديد النطاق الجغرافي وتُعلم المنصة الشركات المؤهلة.',
      'product.feat6.h3'         : 'مجلة بيزاَپ',
      'product.feat6.p'          : 'منصة محتوى لنشر مقالات متخصصة وإعلانات بانر ذكية وحملات خاصة.',
      'product.feat7.h3'         : 'لوحة الإدارة',
      'product.feat7.p'          : 'لوحة تحكم شاملة للمشرفين لمراقبة المستخدمين والموافقة على الأعمال والإدارة الكاملة.',
      'product.feat8.h3'         : 'نظام التقييم والمراجعات',
      'product.feat8.p'          : 'يمكن للمستخدمين تقييم الأعمال ومراجعتها. نظام مضاد للتزوير ورد عام من الشركات.',
      'product.feat9.h3'         : 'تطبيق الجوال (PWA)',
      'product.feat9.p'          : 'تطبيق ويب تقدمي للوصول عبر الجوال دون تثبيت؛ دعم Android وiOS والوضع غير المتصل.',
      'product.arch.h3.modules'  : 'وحدات النظام الرئيسية',
      'product.arch.h3.stack'    : 'حزمة التقنيات',
      'product.kpi1.h3'          : 'الأعمال المسجلة',
      'product.kpi1.p'           : 'المئات من الأعمال المتنوعة في فئات مختلفة عبر مدن متعددة.',
      'product.kpi2.h3'          : 'تفاعلات الدردشة الفورية',
      'product.kpi2.p'           : 'تواصل مباشر وفوري مع SignalR بدون تأخير بين الشركات والعملاء.',
      'product.kpi3.h3'          : 'البحث الخرائطي',
      'product.kpi3.p'           : 'إيجاد الأعمال المجاورة في جزء من الثانية بـ Geo-Query القوي من Elasticsearch.',
      'product.kpi4.h3'          : 'التوافق مع الجوال',
      'product.kpi4.p'           : 'PWA بتجربة شبيهة بالتطبيق الأصلي على Android وiOS دون تثبيت من App Store.',
      'product.table.th1'        : 'الوحدة',
      'product.table.th2'        : 'الميزة الرئيسية',
      'product.table.th3'        : 'التقنية',

      /* About Us — detailed content */
      'about.feat1'                  : 'تطوير تطبيقات ويب مخصصة متقدمة ومعقدة',
      'about.feat2'                  : 'حلول أتمتة العمليات بتقنية BPMS No-Code',
      'about.feat3'                  : 'الأمن السيبراني واختبار الاختراق وحماية البنية التحتية',
      'about.feat4'                  : 'استشارات الذكاء الاصطناعي وتعلم الآلة',
      'about.feat5'                  : 'تطوير تطبيقات الجوال (PWA وNative)',
      'about.feat6'                  : 'التعاون البحثي مع الجامعات الرائدة',
      'about.sidebar.title'          : 'معلومات الشركة',
      'about.sidebar.company.label'  : 'اسم الشركة',
      'about.sidebar.company.val'    : 'بيتا زر أنديش پارس',
      'about.sidebar.reg.label'      : 'رقم التسجيل',
      'about.sidebar.founded.label'  : 'سنة التأسيس',
      'about.sidebar.founded.val'    : '2020 م',
      'about.sidebar.location.label' : 'المقر الرئيسي',
      'about.sidebar.location.val'   : 'أصفهان، إيران',
      'about.sidebar.phone.label'    : 'هاتف',
      'about.sidebar.email.label'    : 'البريد الإلكتروني',
      'about.areas.title'            : 'مجالات الخدمة',
      'about.area1.title'            : 'البرمجيات المؤسسية',
      'about.area1.desc'             : 'أنظمة إدارة وأتمتة وERP للمنظمات الكبيرة',
      'about.area2.title'            : 'الأمن السيبراني',
      'about.area2.desc'             : 'تدقيق أمني واختبار اختراق واستشارات ISMS',
      'about.area3.title'            : 'البحث الأكاديمي',
      'about.area3.desc'             : 'بحث وتطوير مشترك مع الجامعات الإيرانية',
      'about.stat.years'             : 'سنوات خبرة',
      'about.stat.projects'          : 'مشاريع ناجحة',
      'about.stat.users'             : 'مستخدم نشط',
      'about.stat.clients'           : 'عميل مؤسسي',
      'about.vm.title'               : 'الرؤية والرسالة',
      'about.vm.sub'                 : 'هدفنا إنشاء تقنيات تحوّل المنظمات',
      'about.vision.title'           : 'رؤيتنا',
      'about.vision.desc'            : 'أن نصبح الرائد الإقليمي في تقنيات المؤسسات والأمن السيبراني — إنشاء حلول تدمج المعايير العالمية مع الاحتياجات المحلية.',
      'about.mission.title'          : 'رسالتنا',
      'about.mission.desc'           : 'تمكين المنظمات والجامعات من خلال برمجيات ذكية وآمنة وقابلة للتوسع تُلغي العبء الإداري وتُضاعف الإنتاجية.',
      'about.spec.title'             : 'التخصصات الجوهرية',
      'about.spec.sub'               : 'ثلاثة أركان رئيسية تُميّز بيتا زر أنديش پارس',
      'about.spec1.title'            : 'تطوير الأنظمة المتكاملة',
      'about.spec1.desc'             : 'تصميم معمارية الميكروسيرفيس وتطوير API-First وتنفيذ الأنظمة المؤسسية المعقدة بـ ASP.NET Core.',
      'about.spec2.title'            : 'أتمتة العمليات (BPMS)',
      'about.spec2.desc'             : 'تنفيذ محركات BPMN 2.0 وتصميم سير عمل No-Code والتكامل مع الأنظمة الموجودة.',
      'about.spec3.title'            : 'الأمن والبنية التحتية',
      'about.spec3.desc'             : 'اختبار الاختراق، تنفيذ ISMS، تشفير البيانات واستشارات الأمن السيبراني المؤسسي.',
      'about.spec.more'              : 'عرض الخدمات الكاملة',
      'about.clients.title'          : 'العملاء والشركاء الرئيسيون',
      'about.clients.sub'            : 'نفخر بالتعاون مع المؤسسات الأكاديمية والمنظمات الرائدة',
      'about.client1.title'          : 'جامعة أصفهان',
      'about.client1.desc'           : 'نشر نظام سيرة الأساتذة الذاتية وأتمتة العمليات الإدارية للكليات.',
      'about.client2.title'          : 'جامعات بيام نور',
      'about.client2.desc'           : 'تطبيق بوابة سيرة الأساتذة في عدة وحدات إقليمية.',
      'about.client3.title'          : 'جامعات آزاد',
      'about.client3.desc'           : 'تقديم خدمات استشارية وحلول برمجية مخصصة.',
      'about.tech.title'             : 'حزمة تقنياتنا',
      'about.tech.sub'               : 'حزمة تقنيات حديثة لحلول قابلة للتوسع وآمنة',
      'about.location.title'         : 'موقعنا',
      'about.location.sub'           : 'في قلب أصفهان، مع وصول على مستوى البلاد',
      'about.location.address'       : 'أصفهان، شارع چهارباغ بالا، مجمع پرديس المعلوماتي، الطابق الخامس',
      'about.cta.sub'                : 'تعرّف على فريق الخبراء في بيتا زر أنديش پارس وعهد إلينا بمشروعك القادم.',

      /* Index — Resume & FAQ sections */
      'resume.title'   : 'سجلنا',
      'resume.sub'     : 'خطوة نحو التقدم بالابتكار في تقنية المعلومات وحلول البرمجيات',
      'faq.sub'        : 'إجابات على الأسئلة الشائعة حول خدماتنا ومنتجاتنا في أنظمة البرمجيات والأتمتة',

      /* About — info labels & values */
      'about.info.company.label'  : 'اسم الشركة',
      'about.info.reg.label'      : 'رقم التسجيل',
      'about.info.founded.label'  : 'سنة التأسيس',
      'about.info.location.label' : 'الموقع',
      'about.info.specialty.label': 'التخصص',
      'about.info.clients.label'  : 'العملاء الرئيسيون',
      'about.info.company.val'    : 'بيتا زار أنديش پارس',
      'about.info.reg.val'        : '57067',
      'about.info.founded.val'    : '2020',
      'about.info.location.val'   : 'أصفهان، إيران',
      'about.info.specialty.val'  : 'أنظمة الويب والأمن السيبراني',
      'about.info.clients.val'    : 'جامعة أصفهان، APA، جامعات أزاد',

      /* Services — individual items */
      'services.item1.title' : 'برمجيات الأمن السيبراني',
      'services.item1.desc'  : 'تطوير برامج أمنية لحماية بيانات المنظمات.',
      'services.item2.title' : 'تطوير أنظمة الويب',
      'services.item2.desc'  : 'إنشاء أنظمة ويب عالية الأداء وآمنة.',
      'services.item3.title' : 'أتمتة العمليات',
      'services.item3.desc'  : 'تحسين وأتمتة العمليات المؤسسية لزيادة الكفاءة.',
      'services.item4.title' : 'البحث والاستشارة',
      'services.item4.desc'  : 'التعاون مع الجامعات للبحث والتطوير في تقنية المعلومات.',

      /* Skills — individual items */
      'skills.item1.title' : 'إدارة المشاريع والمخاطر',
      'skills.item1.desc'  : 'إدارة فعّالة للمشاريع من خلال تحديد المخاطر والحد منها لضمان التسليم في الوقت المحدد وبجودة عالية.',
      'skills.item2.title' : 'أمن المعلومات',
      'skills.item2.desc'  : 'تطوير حلول أمنية لحماية البيانات والوقاية من التهديدات السيبرانية.',
      'skills.item3.title' : 'رضا المنظمات والعملاء',
      'skills.item3.desc'  : 'ضمان رضا العملاء والمنظمات من خلال تقديم خدمات عالية الجودة والاستجابة لاحتياجاتهم.',
      'skills.item4.title' : 'دعم البرمجيات',
      'skills.item4.desc'  : 'تقديم دعم مستمر ومتخصص للمنتجات، يشمل حل المشكلات والتحديثات الدورية للحفاظ على الأداء ورضا العملاء.',

      /* Resume block header */
      'resume.projects.h2'   : 'المشاريع البرمجية',
      'resume.projects.lead' : 'إنجازاتنا في تطوير الحلول المتكاملة والمتخصصة',

      /* Timeline items */
      'resume.t1.company'   : 'نظام معلومات البحث الشامل',
      'resume.t1.period'    : '2024 – الآن',
      'resume.t1.position'  : 'الإدارة الذكية للعمليات البحثية',
      'resume.t1.desc'      : 'تطوير نظام متكامل لإدارة البحث العلمي مع قدرات تسجيل وتتبع وإعداد تقارير عن الأنشطة العلمية. يتيح النظام استرداد البيانات من المصادر الموثوقة وتحليلها وحساب قواعد التحفيز وترقية أعضاء هيئة التدريس، مع لوحة تحكم ديناميكية كاملة.',
      'resume.t2.company'   : 'نظام بناء النماذج',
      'resume.t2.period'    : '2024',
      'resume.t2.position'  : 'تصميم وإدارة النماذج الذكية',
      'resume.t2.desc'      : 'تطوير منصة متعددة الأغراض لتصميم وإدارة وتنفيذ النماذج الذكية مع تخصيص واسع. يتميز النظام بتحكم شامل في الوصول، ومحرك سير عمل لتحديد تسلسل النماذج، وأمان عالٍ لحماية البيانات الحساسة.',
      'resume.t3.company'   : 'قواعد التحفيز',
      'resume.t3.period'    : '2024',
      'resume.t3.position'  : 'نظام قواعد التحفيز',
      'resume.t3.desc'      : 'تصميم نظام ذكي لتقييم وتسجيل نقاط أعضاء هيئة التدريس وفق معايير علمية ونوعية متوائمة مع اللوائح والبيانات المحدّثة من قواعد البيانات الموثوقة.',
      'resume.t4.company'   : 'ملفات الأساتذة',
      'resume.t4.period'    : '2024',
      'resume.t4.position'  : 'نظام السيرة الذاتية العلمية والبحثية',
      'resume.t4.desc'      : 'إنشاء نظام شامل لعرض السير الذاتية الأكاديمية والمتخصصة لأعضاء هيئة التدريس باستخدام بيانات كاملة للمقالات والكتب من مراجع موثوقة، مع إمكانية إدارة البيانات وتحديثها بدقة وبشكل منظم.',
      'resume.t5.company'   : 'ميدان نقش مجاز السيبراني',
      'resume.t5.period'    : '2023–2024',
      'resume.t5.position'  : 'تعاون مع مركز APA بجامعة أصفهان — محاكاة الشبكة والأمن السيبراني',
      'resume.t5.desc'      : 'تصميم وتطوير ميدان نقش مجاز السيبراني بالتعاون مع مركز APA بجامعة أصفهان؛ منصة لمحاكاة الشبكات الحقيقية وتدريب القرصنة الأخلاقية والدفاع السيبراني وإقامة مسابقات CTF وممارسة سيناريوهات الهجوم والدفاع باستخدام الآلات الافتراضية.',
      'resume.t6.company'   : 'المكتبة الوطنية الإيرانية',
      'resume.t6.period'    : '2023',
      'resume.t6.position'  : 'نظام استرداد الكتب ببروتوكول Z3950',
      'resume.t6.desc'      : 'تطبيق نظام متكامل للبحث واسترداد الموارد المكتبية باستخدام المعيار الدولي Z3950.',
      'resume.t7.company'   : 'استخراج البيانات',
      'resume.t7.period'    : '2023',
      'resume.t7.position'  : 'نظام استخراج المقالات والمجلات',
      'resume.t7.desc'      : 'بناء بنية تحتية ذكية لاستخراج المقالات العلمية والوصول إليها من 4 قواعد بيانات دولية موثوقة مع إمكانيات تصفية وتصنيف متخصصة.',
      'resume.t8.company'   : 'جامعات أزاد',
      'resume.t8.period'    : '2023–2024',
      'resume.t8.position'  : 'تعاون مع جامعات أزاد — السير الذاتية للمقالات العلمية',
      'resume.t8.desc'      : 'تطوير نظام شامل للسيرة الذاتية للمقالات بالعربية والإنجليزية لأعضاء هيئة التدريس في جامعات أزاد؛ يشمل الاستخراج التلقائي للبيانات وعرضاً منظماً للسجلات البحثية وإمكانية إدارتها وتحديثها من قبل الأساتذة.',
      'resume.t9.company'   : 'عقارات نجف آباد',
      'resume.t9.period'    : '2023–2024',
      'resume.t9.position'  : 'الأتمتة والموقع الإلكتروني وروبوتات الاستخراج',
      'resume.t9.desc'      : 'تصميم موقع إلكتروني وتطبيق نظام أتمتة للعمليات الداخلية وتطوير روبوتات استخراج ذكية لجمع بيانات سوق الإسكان ومعالجتها لصالح شركة عقارات في نجف آباد.',
      'resume.t10.company'  : 'مركز نمو شهاب',
      'resume.t10.period'   : '2023–2024',
      'resume.t10.position' : 'مشروع المحفظة الرقمية الذكية',
      'resume.t10.desc'     : 'التعاون مع مركز نمو شهاب في تصميم وتطوير نظام محفظة رقمية ذكية؛ يشمل إدارة المعاملات والتكامل مع بوابات الدفع وتطبيق آليات أمنية متعددة الطبقات لحماية الأصول الرقمية.',
      'resume.t11.company'  : 'بيزاَپ',
      'resume.t11.period'   : '2020–2022',
      'resume.t11.position' : 'منصة تعريف وإدارة الأعمال',
      'resume.t11.desc'     : 'تصميم وتطبيق منصة شاملة لتعريف وربط الشركات الصغيرة والمتوسطة بهدف تعزيز التفاعلات الاقتصادية. تشمل لوحة تحكم البائعين وصفحات مخصصة لكل عمل وبحثاً نصياً وعلى الخريطة ومجلة بيزاپ ولوحة إدارة ودردشة فورية.',

      /* Portfolio items */
      'port1.category' : 'تعريف مجاني للأعمال',
      'port1.h3'       : 'موقع بيزاَپ',
      'port1.p'        : 'تصميم وتطبيق منصة شاملة لتعريف وربط الشركات الصغيرة والمتوسطة لزيادة التفاعلات الاقتصادية. تشمل لوحة البائعين وصفحات مخصصة لكل عمل والبحث النصي والخرائطي ومجلة بيزاپ ولوحة الإدارة ودردشة فورية بين الشركات والعملاء.',
      'port2.category' : 'أتمتة مؤسسية · No-Code BPMS',
      'port2.h3'       : 'نظام أتمتة العمليات المتكامل',
      'port2.p'        : 'منصة إدارة عمليات الأعمال الذكية (BPMS) بنهج No-Code/Low-Code. تصميم النماذج ونمذجة سير العمل BPMN 2.0 وذكاء الأعمال وإدارة الوصول — جميعها في منصة واحدة متكاملة للمنظمات التي تؤمن بالاستقلالية الرقمية.',
      'port3.category' : 'نظام أكاديمي · .NET / React.js',
      'port3.h3'       : 'نظام السيرة الذاتية الشخصية للأساتذة والجامعة',
      'port3.p'        : 'منصة احترافية لإنشاء صفحات السيرة الذاتية الرقمية لأعضاء هيئة التدريس مع دعم اللغتين الفارسية والإنجليزية، متكاملة مع Google Scholar وORCID وResearchGate.',

      /* Team cards */
      'team.role.chairman'   : 'رئيس مجلس الإدارة',
      'team.role.ceo'        : 'المدير التنفيذي',
      'team.role.member'     : 'عضو مجلس الإدارة',
      'team.role.uiux'       : 'متخصص UI/UX',
      'team.since.1399'      : 'عضو منذ 2020',
      'team.since.1401'      : 'عضو منذ 2022',
      'team.since.1403'      : 'عضو منذ 2024',
      'team.spec.aghakabiri' : 'مطور متكامل أول · تطوير أنظمة الويب',
      'team.spec.shams'      : 'مطور متكامل أول · هندسة البرمجيات',
      'team.spec.shirazi'    : 'مطور واجهات أول · الذكاء الاصطناعي · خريج هندسة الحاسوب، جامعة أصفهان',
      'team.spec.madahi'     : 'إدارة الأعمال · تطوير السوق',
      'team.spec.kimia'      : 'UI/UX Design · Figma · تجربة المستخدم',

      /* FAQ items */
      'faq.q1' : 'ما هي الخدمات الرئيسية لشركة بيتا زار أنديش پارس؟',
      'faq.a1' : 'نعمل في ثلاثة مجالات رئيسية: تطوير أنظمة البرمجيات المبنية على الويب، وأتمتة العمليات المؤسسية (BPMS)، وتقديم حلول الأمن السيبراني. تشمل منتجاتنا الرئيسية منشئ النماذج الذكي ومنصة BPMS وبيزاپ.',
      'faq.q2' : 'هل تنفذون مشاريع مخصصة للعملاء؟',
      'faq.a2' : 'نعم، تطوير المشاريع المخصصة بالكامل وفق احتياجات كل عميل هو أحد خدماتنا الأساسية. من تصميم واجهة مستخدم فريدة إلى تنفيذ منطق أعمال معقد، فريقنا سيكون بجانبك لبناء حل يناسب مؤسستك تمامًا.',
      'faq.q3' : 'كيف تسير عملية التعاون وإبرام العقود؟',
      'faq.a3' : 'عملية التعاون معنا بسيطة: تواصل معنا عبر نموذج الاتصال أو الهاتف، ثم نرتب اجتماعًا لتحليل متطلباتك. بعد الاتفاق المبدئي، نقدم عرضًا فنيًا وماليًا، وعند الموافقة يُبرم عقد رسمي.',
      'faq.q4' : 'كيف يمكن إبرام عقد للمنتجات الجاهزة مثل منشئ النماذج أو BPMS؟',
      'faq.a4' : 'منتجاتنا الجاهزة متاحة من خلال شراء الترخيص أو الاشتراك. تم تصميم حزم متنوعة تبعًا لحجم مؤسستك واحتياجاتك الخاصة. تواصل مع فريقنا لمراجعة الخيارات المتاحة وإتمام العقد.',
      'faq.q5' : 'هل يتم تقديم الدعم بعد تسليم المشروع؟',
      'faq.a5' : 'نعم، خدمات الدعم المستمرة جزء لا يتجزأ من جميع عقودنا. تشمل إصلاح الأخطاء والتحديثات الدورية وتدريب فريقك والاستجابة السريعة للمشكلات التقنية، كما يتضمن العقد فترة دعم مجانية بعد التسليم.',
      'faq.q6' : 'هل تعاونتم مع مؤسسات حكومية وجامعات؟',
      'faq.a6' : 'نعم، لدينا سجل حافل في التعاون مع مؤسسات مرموقة، من بينها جامعة أصفهان، الجامعات الحرة في إيران، المكتبة الوطنية الإيرانية، ومركز نمو شهاب. هذه التجارب منحتنا فهمًا عميقًا لاحتياجات المؤسسات الكبرى.',
      'faq.q7' : 'كيف يتم تحديد تكاليف وجداول المشاريع؟',
      'faq.a7' : 'يتم تحديد التكلفة والجدول الزمني بناءً على تعقيد المشروع ونطاقه. بعد اجتماع المتطلبات الأولي، نقدم تقديرًا للميزانية والمدة الزمنية. نحن ملتزمون بالشفافية في التسعير وليس هناك أي تكاليف خفية.',
      'faq.q8' : 'ماذا أفعل إن لم أجد إجابة لسؤالي هنا؟',
      'faq.a8' : 'لا تقلق! يمكنك إرسال رسالة عبر نموذج الاتصال، أو الاتصال بالأرقام المدرجة في قسم التواصل، أو استخدام خاصية المراسلة على موقعنا. سيرد فريقنا في أقرب وقت ممكن.',

      /* Contact section */
      'contact.badge'            : 'اتصل بنا',
      'contact.h2'               : 'تواصل مع بيتا زار أنديش پارس',
      'contact.lead'             : 'نحن مستعدون لمساعدتك بخدمات الدعم والاستشارة.',
      'contact.address'          : 'أصفهان، ميدان الحرية، جامعة أصفهان، مركز النمو والتكنولوجيا، الطابق الأرضي، وحدة 17',
      'contact.maplink'          : 'عرض الخريطة',
      'contact.form.name'        : 'اسمك',
      'contact.form.email'       : 'بريدك الإلكتروني',
      'contact.form.phone'       : 'رقم الهاتف (مثال: 09123456789)',
      'contact.form.phone.title' : 'يرجى إدخال رقم هاتف صحيح',
      'contact.form.subject'     : 'الموضوع',
      'contact.form.message'     : 'رسالتك',
      'contact.form.loading'     : 'جاري الإرسال...',
      'contact.form.sent'        : 'تم إرسال رسالتك بنجاح!',
      'contact.form.submit'      : 'إرسال الرسالة',
    }
  };

  /* ─────────────────────────────────────────
     COOKIE HELPERS
  ───────────────────────────────────────── */
  function getCookie(name) {
    const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 864e5);
    document.cookie = name + '=' + encodeURIComponent(value) +
      '; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
  }

  /* ─────────────────────────────────────────
     APPLY LANGUAGE TO DOM
  ───────────────────────────────────────── */
  function applyLang(lang) {
    const dict = T[lang] || T['fa'];
    const isRTL = (lang !== 'en');

    // Set html attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // Translate all data-i18n elements (inner text)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Translate data-i18n-html elements (innerHTML — for <strong> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Translate data-i18n-title elements (title attribute)
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.title = dict[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // Update active switcher button
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Store in cookie for 365 days
    setCookie('site_lang', lang, 365);

    // Dispatch event so other scripts can react
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: lang } }));
  }

  /* ─────────────────────────────────────────
     DETECT LANGUAGE (cookie → localhost → IP → fallback)
     Rules:
       1. Saved cookie   → honour it
       2. Localhost/LAN  → fa
       3. IP from Iran   → fa
       4. IP from Arabic-speaking country → ar
       5. Any other country → en
       6. Timeout / error → fa
  ───────────────────────────────────────── */

  /** Returns true if the current host is localhost / a private LAN address */
  function isLocalhost() {
    var h = window.location.hostname;
    return (
      h === 'localhost' ||
      h === '127.0.0.1' ||
      h === '::1' ||
      /^192\.168\./.test(h) ||
      /^10\./.test(h) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(h)
    );
  }

  /** ISO-3166-1 alpha-2 codes of Arabic-speaking countries */
  var ARABIC_COUNTRIES = [
    'SA','AE','EG','IQ','SY','JO','LB','KW','BH','QA','OM',
    'YE','LY','TN','DZ','MA','SD','MR','SO','DJ','KM','PS'
  ];

  function detectAndApply() {
    // 1. Honour saved cookie
    var saved = getCookie('site_lang');
    if (saved && T[saved]) {
      applyLang(saved);
      return;
    }

    // 2. Localhost / private LAN → always Persian
    if (isLocalhost()) {
      applyLang('fa');
      return;
    }

    // 3. IP-based detection (non-blocking, 2.5 s timeout)
    var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timer = setTimeout(function () {
      if (controller) controller.abort();
      applyLang('fa'); // timeout fallback
    }, 2500);

    fetch('https://ipapi.co/country/', { signal: controller ? controller.signal : undefined })
      .then(function (r) { return r.text(); })
      .then(function (body) {
        clearTimeout(timer);
        var country = body.trim().toUpperCase();
        if (country === 'IR') {
          applyLang('fa');
        } else if (ARABIC_COUNTRIES.indexOf(country) !== -1) {
          applyLang('ar');
        } else {
          applyLang('en');
        }
      })
      .catch(function () {
        clearTimeout(timer);
        applyLang('fa'); // error fallback
      });
  }

  /* ─────────────────────────────────────────
     PUBLIC API
  ───────────────────────────────────────── */
  window.SiteI18n = {
    apply    : applyLang,
    getCurrent: function () { return getCookie('site_lang') || 'fa'; },
    t        : function (key) { return (T[window.SiteI18n.getCurrent()] || T['fa'])[key] || key; }
  };

  /* ─────────────────────────────────────────
     INIT ON DOM READY
  ───────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectAndApply);
  } else {
    detectAndApply();
  }

})();
