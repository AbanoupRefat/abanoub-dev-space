import { createContext, useContext, useState, ReactNode } from "react";

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
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    document.documentElement.dir = language === "en" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
