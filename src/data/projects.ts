export interface Project {
  id: string;
  title: string;
  title_ar?: string;
  projectType: "redesign" | "new";
  showcaseTheme?: "hotel" | "coastal" | "boutique" | "realestate";
  showcaseVariant?: "laptop" | "imac";
  category: string;
  category_ar?: string;
  year: string;
  heroImage: string;
  overview: string;
  overview_ar?: string;
  clientGoals: string[];
  clientGoals_ar?: string[];
  designProcess: string;
  challenges: string;
  technologies: string[];
  mockupDesktop: string;
  mockupMobile: string;
  desktopSlider?: string[];
  tabletSlider?: string[];
  mobileSlider?: string[];
  results: string[];
  results_ar?: string[];
  gallery: string[];
  oldUrl?: string;
  newUrl: string;
  oldScreenshot?: string;
  newScreenshot?: string;
  keyImprovements: string[];
  keyImprovements_ar?: string[];
}

export const projects: Project[] = [
  {
    id: "park-regency-hotel",
    title: "Park Regency Sharm El-Sheikh",
    title_ar: "فندق بارك ريجنسي شرم الشيخ",
    projectType: "new",
    showcaseTheme: "hotel" as const,
    showcaseVariant: "imac" as const,
    category: "Luxury Hotel Website",
    category_ar: "موقع فندق فاخر",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2500&auto=format&fit=crop",
    overview: "A complete luxury redesign of the Park Regency Sharm El-Sheikh's digital presence. The existing site was outdated, slow, and relied heavily on external booking sites, resulting in high commission costs. The new website was engineered to reflect the hotel's five-star standards — fast, modern, and immersive — while delivering a seamless direct booking and payment experience.",
    overview_ar: "إعادة تصميم فاخرة وكاملة للحضور الرقمي لفندق بارك ريجنسي شرم الشيخ. كان الموقع القديم بطيئاً وعفا عليه الزمن، ويعتمد بشكل كبير على مواقع الحجز الخارجية مما يسبب عمولات باهظة. تم تصميم الموقع الجديد ليعكس معايير الخمس نجوم للفندق - سريع، عصري، وغامر - مع تقديم تجربة حجز مباشر ودفع سلسة وتوفير العمولات.",
    clientGoals: [
      "Increase direct bookings significantly and reduce reliance on third-party commissions",
      "Modernize user experience and performance to provide instant and seamless browsing",
      "Provide secure direct payment gateways to ensure peace of mind for guests",
      "Develop a mobile-first luxury design perfectly tailored for all smart devices",
    ],
    clientGoals_ar: [
      "زيادة الحجوزات المباشرة وتقليل الاعتماد على العمولات الخارجية بشكل كبير",
      "تحديث تجربة المستخدم وسرعة الأداء لتوفير تصفح فوري ومريح للزوار",
      "توفير بوابات دفع مباشر آمنة وموثوقة لضمان راحة النزلاء",
      "تصميم واجهة فاخرة متوافقة تماماً مع الهواتف الذكية والأجهزة اللوحية",
    ],
    designProcess: "We approached the design with a 'minimalist luxury' philosophy — rich photography paired with ample white space, refined serif typography, and understated gold accents. Every section was crafted to feel like a high-end editorial spread, guiding the visitor from inspiration to booking with minimal friction.",
    challenges: "The primary challenge was balancing visual richness with performance. Large, cinematic imagery needed to load instantly without compromising the premium feel. We implemented progressive image loading, lazy rendering, and a direct secure payment gateway to completely replace reliance on third-party booking sites.",
    technologies: ["React", "Framer Motion", "Vite", "Tailwind CSS", "Payment Gateway"],
    mockupDesktop: "/projects_ui/park-regency-upload.png",
    mockupMobile: "https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?q=80&w=800&auto=format&fit=crop",
    desktopSlider: [
      "/projects/park-regency-hotel/desktop.png"
    ],
    tabletSlider: [
      "/projects/park-regency-hotel/tablet.png"
    ],
    mobileSlider: [
      "/projects/park-regency-hotel/mobile.png"
    ],
    results: [
      "Cleaner user experience",
      "Stronger visual identity",
      "Better mobile usability",
      "Modern hotel presentation",
    ],
    results_ar: [
      "تجربة مستخدم أنظف",
      "هوية بصرية أقوى",
      "سهولة استخدام أفضل على الهاتف",
      "عرض فندقي عصري",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1800&auto=format&fit=crop",
    ],
    oldUrl: "https://www.parkregency.net/",
    newUrl: "https://park-regency.vercel.app/",
    oldScreenshot: "/projects/park-regency-hotel/before.png",
    newScreenshot: "/projects/park-regency-hotel/after.png",
    keyImprovements: [
      "Modern UI Design reflecting the hotel's luxury brand",
      "Fully responsive layout working flawlessly across all screens",
      "Improved typography and text for a better reading experience",
      "Restructured information architecture for easier content access",
      "Lightning-fast performance and instant loading for high-res images",
      "Premium visual experience enhancing the overall brand identity",
    ],
    keyImprovements_ar: [
      "تصميم واجهة مستخدم عصري يعكس فخامة الفندق بشكل مثالي",
      "تخطيط متجاوب بالكامل يعمل بسلاسة على كافة الشاشات والأجهزة",
      "تحسين جودة الخطوط والنصوص لتجربة قراءة أفضل وأكثر وضوحاً",
      "إعادة هيكلة بنية المعلومات لتسهيل وصول المستخدمين للمحتوى المطلوب",
      "أداء أسرع بكثير وتحميل فوري للصور عالية الدقة والجودة",
      "تجربة بصرية فاخرة متكاملة تعزز هوية العلامة التجارية بشكل استثنائي",
    ],
  },
  {
    id: "naama-blue-hotel",
    title: "Naama Blue Hotel",
    title_ar: "فندق نعمة بلو",
    projectType: "new",
    showcaseTheme: "coastal" as const,
    showcaseVariant: "laptop" as const,
    category: "Hotel Website Redesign",
    category_ar: "إعادة تصميم موقع فندق",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2500&auto=format&fit=crop",
    overview: "A full modernization of the Naama Blue Hotel's online presence in Sharm El-Sheikh. The previous website had a fragmented visual hierarchy and a confusing navigation structure that was damaging guest trust. We rebuilt it from the ground up with a clean, booking-focused architecture designed to convert browsers into confident guests.",
    overview_ar: "تحديث كامل للحضور الرقمي لفندق نعمة بلو في شرم الشيخ. كان للموقع القديم تسلسل مرئي مشتت وبنية تنقل مربكة كانت تضر بثقة الضيوف. قمنا بإعادة بنائه من الصفر بهندسة نظيفة تركز على الحجز، مصممة لتحويل المتصفحين إلى ضيوف واثقين.",
    clientGoals: [
      "Improve visual quality",
      "Modernize user experience",
      "Increase trust and credibility",
      "Mobile-first optimization",
      "Better booking journey",
    ],
    clientGoals_ar: [
      "تحسين الجودة المرئية",
      "تحديث تجربة المستخدم",
      "زيادة الثقة والمصداقية",
      "تحسين التوافق مع الهواتف أولاً",
      "رحلة حجز أفضل",
    ],
    designProcess: "We studied the hotel's brand identity and translated it into a clean digital language. A calm, coastal color palette — deep ocean blues and crisp whites — established instant trust. Navigation was radically simplified: every page has one primary action, guiding visitors toward a booking decision without distraction.",
    challenges: "The hotel's existing content was scattered across multiple outdated pages with inconsistent imagery and messaging. We audited and restructured all content, developed a new photography-led visual hierarchy, and enforced a mobile-first breakpoint strategy to ensure flawless rendering on smaller screens.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
    mockupDesktop: "/projects_ui/naama-blue-upload.jpg",
    mockupMobile: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
    desktopSlider: ["/projects/naama-blue-hotel/desktop.png"],
    tabletSlider: ["/projects/naama-blue-hotel/tablet.png"],
    mobileSlider: ["/projects/naama-blue-hotel/mobile.png"],
    results: [
      "Cleaner user experience",
      "Stronger visual identity",
      "Better mobile usability",
      "Modern hotel presentation",
    ],
    results_ar: [
      "تجربة مستخدم أنظف",
      "هوية بصرية أقوى",
      "سهولة استخدام أفضل على الهاتف",
      "عرض فندقي عصري",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1800&auto=format&fit=crop",
    ],
    oldUrl: "https://www.naamabluehotel.com/",
    newUrl: "https://naama-blue-hotel.vercel.app/",
    oldScreenshot: "/projects/naama-blue-hotel/before.png",
    newScreenshot: "/projects/naama-blue-hotel/after.jpg",
    keyImprovements: [
      "Modern UI Design",
      "Responsive Layout",
      "Improved Typography",
      "Better Information Architecture",
      "Faster Performance",
      "Premium Visual Experience",
    ],
    keyImprovements_ar: [
      "تصميم واجهة مستخدم عصري",
      "تخطيط متجاوب بالكامل",
      "تحسين جودة الخطوط والنصوص",
      "بنية معلومات أفضل",
      "أداء أسرع",
      "تجربة بصرية فاخرة",
    ],
  },
  {
    id: "naama-inn-hotel",
    title: "Naama Inn Hotel",
    title_ar: "فندق نعمة إن",
    projectType: "new",
    showcaseTheme: "boutique" as const,
    showcaseVariant: "laptop" as const,
    category: "Hotel Website Redesign",
    category_ar: "إعادة تصميم موقع فندق",
    year: "2024",
    heroImage: "/projects_ui/naama-inn-upload.png",
    overview: "Naama Inn Hotel required a complete digital refresh to align its online presence with modern hospitality standards. While the original website provided essential information, its aging design, dated visual presentation, and limited user experience no longer reflected the expectations of today's travelers. The goal of this redesign was to create a cleaner, faster, and more engaging experience that showcases the hotel professionally while improving usability across all devices.",
    overview_ar: "احتاج فندق نعمة إن إلى تحديث رقمي كامل لمواءمة حضوره عبر الإنترنت مع معايير الضيافة الحديثة. في حين قدم الموقع الأصلي المعلومات الأساسية، فإن تصميمه القديم وعرضه المرئي وتجربة المستخدم المحدودة لم تعد تعكس توقعات المسافرين اليوم. كان الهدف من إعادة التصميم هذا هو خلق تجربة أنظف وأسرع وأكثر جاذبية تعرض الفندق بشكل احترافي مع تحسين قابلية الاستخدام عبر جميع الأجهزة.",
    clientGoals: [
      "Create a cleaner, faster, and more engaging experience",
      "Showcase the hotel professionally",
      "Improve usability across all devices",
    ],
    clientGoals_ar: [
      "خلق تجربة أنظف، أسرع وأكثر جاذبية",
      "عرض الفندق بشكل احترافي",
      "تحسين قابلية الاستخدام عبر جميع الأجهزة",
    ],
    designProcess: "The website was completely redesigned with a focus on simplicity, performance, and user experience. We focused on delivering a smoother browsing experience and a more professional brand image.",
    challenges: "The original website faced several challenges including an outdated visual design, inconsistent layout, limited mobile experience, and a slower user journey. It lacked modern hospitality-focused design elements, which reduced visual impact and guest engagement.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO Optimization"],
    mockupDesktop: "/projects_ui/naama-inn-upload.png",
    mockupMobile: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    desktopSlider: ["/projects/naama-inn-hotel/desktop.png"],
    tabletSlider: ["/projects/naama-inn-hotel/tablet.png"],
    mobileSlider: ["/projects/naama-inn-hotel/mobile.png"],
    results: [
      "Modern and welcoming digital experience",
      "Efficient exploration and smoother browsing",
      "Professional and trustworthy hospitality platform",
    ],
    results_ar: [
      "تجربة رقمية حديثة وترحيبية",
      "تصفح فعال وأكثر سلاسة",
      "منصة ضيافة احترافية وجديرة بالثقة",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=1800&auto=format&fit=crop",
    ],
    oldUrl: "https://naamainn.com/",
    newUrl: "https://naama-inn-hotel.vercel.app/",
    oldScreenshot: "/projects/naama-inn-hotel/before.png",
    newScreenshot: "/projects/naama-inn-hotel/after.png",
    keyImprovements: [
      "Modern and elegant user interface",
      "Fully responsive mobile-first design",
      "Improved navigation and page structure",
      "Enhanced typography and visual hierarchy",
      "Faster loading experience",
      "Better presentation of hotel facilities",
    ],
    keyImprovements_ar: [
      "واجهة مستخدم حديثة وأنيقة",
      "تصميم متجاوب بالكامل وملائم للهواتف",
      "تحسين التنقل وبنية الصفحة",
      "تحسين الخطوط والتسلسل المرئي",
      "تجربة تحميل أسرع",
      "عرض أفضل لمرافق الفندق",
    ],
  },
  {
    id: "al-hisham-development",
    title: "Al Hisham Development",
    title_ar: "الهشام للتطوير العقاري",
    projectType: "new",
    showcaseTheme: "realestate" as const,
    showcaseVariant: "imac" as const,
    category: "Real Estate Development",
    category_ar: "تطوير عقاري",
    year: "2025",
    heroImage: "/projects_ui/al-hisham-upload.png",
    overview: "Al Hisham Development is a leading real estate firm specializing in luxury residential and commercial projects. They required a robust platform to showcase their portfolio of high-quality properties and sustainable real estate value.",
    overview_ar: "الهشام للتطوير العقاري هي شركة رائدة متخصصة في المشاريع السكنية والتجارية الفاخرة. لقد احتاجوا إلى منصة قوية لعرض محفظتهم من العقارات عالية الجودة والقيمة العقارية المستدامة.",
    clientGoals: [
      "Display property portfolio interactively",
      "Capture high-quality leads",
      "Establish market authority",
      "Provide virtual walkthroughs",
    ],
    clientGoals_ar: [
      "عرض محفظة العقارات بشكل تفاعلي",
      "الحصول على عملاء محتملين بجودة عالية",
      "تأسيس سلطة في السوق",
      "تقديم جولات افتراضية",
    ],
    designProcess: "The design reflects architectural grandeur through bold typography, generous whitespace, and expansive property photography. We implemented a sleek filtering system to help investors find their ideal property type.",
    challenges: "Handling numerous high-resolution images and 3D renders without sacrificing website performance and load times.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    mockupDesktop: "/projects_ui/al-hisham-upload.png",
    mockupMobile: "/projects_ui/al-hisham-upload.png",
    desktopSlider: ["/projects/al-hisham-development/desktop.png"],
    tabletSlider: ["/projects/al-hisham-development/tablet.png"],
    mobileSlider: ["/projects/al-hisham-development/mobile.png"],
    results: [
      "Double the lead generation rate",
      "Faster content delivery",
      "Improved SEO performance",
    ],
    results_ar: [
      "مضاعفة معدل توليد العملاء المحتملين",
      "توصيل أسرع للمحتوى",
      "تحسين أداء تحسين محركات البحث (SEO)",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
    ],
    oldUrl: "https://example.com/alhisham",
    newUrl: "https://alhisham.vercel.app/",
    oldScreenshot: "/projects_ui/al-hisham-upload.png",
    newScreenshot: "/projects_ui/al-hisham-upload.png",
    keyImprovements: [
      "Advanced Property Filtering",
      "High-Res Image Optimization",
      "Lead Capture Integration",
      "Premium Corporate Design",
    ],
    keyImprovements_ar: [
      "تصفية متقدمة للعقارات",
      "تحسين الصور عالية الدقة",
      "تكامل التقاط العملاء المحتملين",
      "تصميم شركات فاخر",
    ],
  },

];
