import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Home
    "home.badge": "Software Engineer",
    "home.greeting": "Hi, I'm",
    "home.tagline": "Building powerful desktop applications and modern web experiences that transform businesses",
    "home.viewProjects": "View Projects",
    "home.contactMe": "Contact Me",
    "home.trustedBy": "Trusted By",
    "home.trustedByDesc": "Proud to have delivered solutions for amazing clients across various industries",
    "home.projectsDelivered": "Projects Delivered",
    "home.happyClients": "Happy Clients",
    "home.technologies": "Technologies",
    
    // Projects
    "projects.title": "My Projects",
    "projects.subtitle": "A collection of desktop applications and web solutions I've built for clients across different industries",
    "projects.all": "All Projects",
    "projects.desktop": "Desktop",
    "projects.web": "Web",
    "projects.desktopApps": "Desktop Applications",
    "projects.webApps": "Web Applications",
    "projects.viewDetails": "View Details",
    "projects.application": "Application",
    
    // Project Detail
    "projectDetail.overview": "Project Overview",
    "projectDetail.features": "Key Features",
    "projectDetail.techStack": "Tech Stack",
    "projectDetail.gallery": "Project Gallery",
    "projectDetail.backToProjects": "Back to Projects",
    
    // Skills
    "skills.title": "Technical Skills",
    "skills.subtitle": "A comprehensive toolkit for building robust desktop applications and modern web experiences",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks",
    "skills.databases": "Databases",
    "skills.tools": "Tools",
    "skills.learning": "Always Learning",
    "skills.learningDesc": "Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and best practices to deliver cutting-edge solutions. Currently diving deeper into cloud architectures and AI integration.",
    
    // About
    "about.title": "About Me",
    "about.subtitle": "Software Engineer specializing in Desktop & Web Applications",
    "about.intro": "Hello! I'm Abanoub Refaat, a passionate software engineer with expertise in building both desktop and web applications. I specialize in creating robust, user-friendly solutions that solve real business problems.",
    "about.careerTitle": "Career Highlights",
    "about.desktopExp": "Desktop Development",
    "about.desktopExpDesc": "Extensive experience building Windows desktop applications using C# and WinForms, with expertise in inventory management, POS systems, and enterprise software. Delivered solutions for jewelry stores, auto parts suppliers, construction companies, and healthcare clinics.",
    "about.webExp": "Web Development",
    "about.webExpDesc": "Developed modern web applications using React, TypeScript, and Tailwind CSS. Created e-commerce platforms, landing pages, and progressive web apps with focus on performance and user experience.",
    "about.aiExp": "AI & Innovation",
    "about.aiExpDesc": "Exploring AI integration and cloud architectures to build next-generation applications. Always learning and adapting to new technologies to deliver cutting-edge solutions.",
    "about.downloadCV": "Download CV",
    "about.getInTouch": "Get In Touch",
    
    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's discuss how we can work together on your next project",
    "contact.directContact": "Direct Contact",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.whatsapp": "WhatsApp",

    // Projects Translations
    "project.jewellery-management.title": "Jewellery Management System",
    "project.jewellery-management.desc": "Comprehensive management system for jewelry inventory, sales, and customer tracking with advanced reporting capabilities.",
    
    "project.car-spare-parts.title": "Car Spare Parts Management",
    "project.car-spare-parts.desc": "Complete inventory and sales management solution for automotive spare parts with barcode integration.",
    
    "project.cement-blocks-inventory.title": "Cement & Blocks Inventory System",
    "project.cement-blocks-inventory.desc": "Specialized inventory system for construction materials with weight-based calculations and delivery tracking.",
    
    "project.skincare-system.title": "Multi-Branch Skincare System",
    "project.skincare-system.desc": "Cloud-based POS and inventory system for multiple skincare clinic branches with real-time synchronization.",
    
    "project.coffeemaker-stock.title": "Stock Management System",
    "project.coffeemaker-stock.desc": "Lightweight stock management system for e-commerce inventory with seamless online store integration.",
    
    "project.mobile-store-system.title": "Mobile Store Stock System",
    "project.mobile-store-system.desc": "Specialized system for mobile phone retail with IMEI tracking and warranty management.",
    
    "project.coffeemaker-ecommerce.title": "CoffeeMaker E-commerce Platform",
    "project.coffeemaker-ecommerce.desc": "Full-featured e-commerce website for premium coffee products with modern design and smooth user experience.",
    
    "project.roots-bamboo.title": "Roots | بذور Landing Page",
    "project.roots-bamboo.desc": "Beautiful, eco-friendly landing page for bamboo straws brand with bilingual support and modern animations.",
    
    "project.da3wa.title": "Da3wa Interactive Wedding Invitations",
    "project.da3wa.desc": "Reusable, config-driven wedding invitation web app, re-skinned per couple, with heavy animation and a scroll-snap storytelling flow.",
    
    "project.barber-queue.title": "Barber Queue & Reservation System",
    "project.barber-queue.desc": "Walk-in friendly queue and reservation system for a multi-barber shop, with a customer web app, an admin queue screen and a desktop reporter for receipts and bonuses.",
    
    "project.cwa-recorder.title": "Code With Abanoub Recorder",
    "project.cwa-recorder.desc": "Windows desktop screen recorder built for recording programming lessons, with a record, review and mark workflow and a built-in export pipeline.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.about": "عني",
    "nav.contact": "تواصل معي",
    
    // Home
    "home.badge": "مهندس برمجيات",
    "home.greeting": "مرحباً، أنا",
    "home.tagline": "بناء تطبيقات سطح المكتب القوية وتجارب الويب الحديثة التي تحول الأعمال",
    "home.viewProjects": "عرض المشاريع",
    "home.contactMe": "تواصل معي",
    "home.trustedBy": "موثوق به من قبل",
    "home.trustedByDesc": "فخور بتقديم حلول لعملاء رائعين في مختلف الصناعات",
    "home.projectsDelivered": "مشروع مكتمل",
    "home.happyClients": "عميل سعيد",
    "home.technologies": "تقنية",
    
    // Projects
    "projects.title": "مشاريعي",
    "projects.subtitle": "مجموعة من تطبيقات سطح المكتب وحلول الويب التي قمت ببنائها لعملاء في صناعات مختلفة",
    "projects.all": "كل المشاريع",
    "projects.desktop": "سطح المكتب",
    "projects.web": "الويب",
    "projects.desktopApps": "تطبيقات سطح المكتب",
    "projects.webApps": "تطبيقات الويب",
    "projects.viewDetails": "عرض التفاصيل",
    "projects.application": "تطبيق",
    
    // Project Detail
    "projectDetail.overview": "نظرة عامة على المشروع",
    "projectDetail.features": "الميزات الرئيسية",
    "projectDetail.techStack": "التقنيات المستخدمة",
    "projectDetail.gallery": "معرض المشروع",
    "projectDetail.backToProjects": "العودة للمشاريع",
    
    // Skills
    "skills.title": "المهارات التقنية",
    "skills.subtitle": "مجموعة أدوات شاملة لبناء تطبيقات سطح مكتب قوية وتجارب ويب حديثة",
    "skills.languages": "اللغات",
    "skills.frameworks": "الأطر",
    "skills.databases": "قواعد البيانات",
    "skills.tools": "الأدوات",
    "skills.learning": "التعلم المستمر",
    "skills.learningDesc": "التكنولوجيا تتطور بسرعة، وأنا كذلك. أستكشف باستمرار أدوات وأطر عمل وأفضل الممارسات الجديدة لتقديم حلول متطورة. حالياً أتعمق في بنى السحابة وتكامل الذكاء الاصطناعي.",
    
    // About
    "about.title": "عني",
    "about.subtitle": "مهندس برمجيات متخصص في تطبيقات سطح المكتب والويب",
    "about.intro": "مرحباً! أنا أبانوب رفعت، مهندس برمجيات شغوف بخبرة في بناء تطبيقات سطح المكتب والويب. أتخصص في إنشاء حلول قوية وسهلة الاستخدام تحل مشاكل الأعمال الحقيقية.",
    "about.careerTitle": "أبرز الإنجازات المهنية",
    "about.desktopExp": "تطوير سطح المكتب",
    "about.desktopExpDesc": "خبرة واسعة في بناء تطبيقات ويندوز باستخدام C# و WinForms، مع خبرة في أنظمة إدارة المخزون ونقاط البيع والبرامج المؤسسية. قدمت حلولاً لمحلات المجوهرات وموردي قطع غيار السيارات وشركات البناء والعيادات الصحية.",
    "about.webExp": "تطوير الويب",
    "about.webExpDesc": "طورت تطبيقات ويب حديثة باستخدام React و TypeScript و Tailwind CSS. أنشأت منصات التجارة الإلكترونية والصفحات المقصودة وتطبيقات الويب التقدمية مع التركيز على الأداء وتجربة المستخدم.",
    "about.aiExp": "الذكاء الاصطناعي والابتكار",
    "about.aiExpDesc": "أستكشف تكامل الذكاء الاصطناعي وبنى السحابة لبناء تطبيقات الجيل القادم. أتعلم دائماً وأتكيف مع التقنيات الجديدة لتقديم حلول متطورة.",
    "about.downloadCV": "تحميل السيرة الذاتية",
    "about.getInTouch": "تواصل معي",
    
    // Contact
    "contact.title": "تواصل معي",
    "contact.subtitle": "لنناقش كيف يمكننا العمل معاً على مشروعك القادم",
    "contact.directContact": "التواصل المباشر",
    "contact.linkedin": "لينكدإن",
    "contact.github": "جيت هاب",
    "contact.whatsapp": "واتساب",

    // Projects Translations
    "project.jewellery-management.title": "نظام إدارة المجوهرات",
    "project.jewellery-management.desc": "نظام إدارة شامل لمخزون المجوهرات والمبيعات وتتبع العملاء مع قدرات إعداد التقارير المتقدمة.",
    
    "project.car-spare-parts.title": "إدارة قطع غيار السيارات",
    "project.car-spare-parts.desc": "حل إدارة مخزون وبيع كامل لقطع غيار السيارات مع تكامل مسح الرموز الشريطية.",
    
    "project.cement-blocks-inventory.title": "نظام مخزون الأسمنت والكتل",
    "project.cement-blocks-inventory.desc": "نظام متخصص لمخزون مواد البناء مع حسابات قائمة على الوزن وتتبع التسليم.",
    
    "project.skincare-system.title": "نظام إدارة عيادات العناية بالبشرة متعددة الفروع",
    "project.skincare-system.desc": "نظام نقطة بيع وإدارة مخزون قائم على السحابة لفروع عيادات العناية بالبشرة مع المزامنة في الوقت الفعلي.",
    
    "project.coffeemaker-stock.title": "نظام إدارة المخزون",
    "project.coffeemaker-stock.desc": "نظام إدارة مخزون خفيف الوزن للتجارة الإلكترونية مع تكامل سلس للمتجر عبر الإنترنت.",
    
    "project.mobile-store-system.title": "نظام مخزون متجر الهاتف المحمول",
    "project.mobile-store-system.desc": "نظام متخصص لتجارة الهواتف الذكية مع تتبع IMEI وإدارة الضمان.",
    
    "project.coffeemaker-ecommerce.title": "منصة التجارة الإلكترونية CoffeeMaker",
    "project.coffeemaker-ecommerce.desc": "موقع التجارة الإلكترونية الكامل لمنتجات القهوة الفاخرة بتصميم حديث وتجربة مستخدم سلسة.",
    
    "project.roots-bamboo.title": "صفحة هبوط Roots | بذور",
    "project.roots-bamboo.desc": "صفحة هبوط جميلة وصديقة للبيئة لعلامة تجارية لقش الخيزران مع دعم ثنائي اللغة والرسوم المتحركة الحديثة.",
    
    "project.da3wa.title": "دعوات الزفاف التفاعلية Da3wa",
    "project.da3wa.desc": "تطبيق ويب قابل لإعادة الاستخدام وموجه بالتكوين لدعوات الزفاف، مع إعادة تصميم حسب الزوجين، وميزات رسوم متحركة ثقيلة وتدفق سرد قصة.",
    
    "project.barber-queue.title": "نظام طابور وحجز الحلاقة",
    "project.barber-queue.desc": "نظام طابور وحجز صديق للعملاء الجدد لمتجر حلاقة متعدد الحلاقين، مع تطبيق ويب للعملاء وشاشة طابور الإدارة ومراجع سطح المكتب للإيصالات والمكافآت.",
    
    "project.cwa-recorder.title": "مسجل Code With Abanoub",
    "project.cwa-recorder.desc": "تطبيق تسجيل شاشة سطح المكتب المدمج لتسجيل دروس البرمجة، مع سير عمل التسجيل والمراجعة والعلامة وخط أنابيب التصدير المدمج.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Detect device language on initial load
    const browserLang = navigator.language.split("-")[0];
    return (browserLang === "ar" ? "ar" : "en") as Language;
  });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
