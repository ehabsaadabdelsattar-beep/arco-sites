export interface Project {
  id: string;
  title: string;
  projectType: "redesign" | "new";
  showcaseTheme?: "hotel" | "coastal" | "boutique" | "realestate";
  showcaseVariant?: "laptop" | "imac";
  category: string;
  year: string;
  heroImage: string;
  overview: string;
  clientGoals: string[];
  designProcess: string;
  challenges: string;
  technologies: string[];
  mockupDesktop: string;
  mockupMobile: string;
  results: string[];
  gallery: string[];
  // Case Study Fields
  oldUrl?: string;
  newUrl: string;
  oldScreenshot?: string;
  newScreenshot?: string;
  keyImprovements: string[];
}

export const projects: Project[] = [
  {
    id: "park-regency-hotel",
    title: "Park Regency Hotel",
    projectType: "new",
    showcaseTheme: "hotel" as const,
    showcaseVariant: "imac" as const,
    category: "Hotel Website Redesign",
    year: "2025",
    heroImage:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2500&auto=format&fit=crop",
    overview:
      "A complete luxury redesign of the Park Regency Hotel's digital presence. The existing site was outdated, slow, and failing to convert visitors into guests. The new website was engineered to reflect the hotel's five-star standards — elegant, authoritative, and immersive — while delivering a seamless booking experience across all devices.",
    clientGoals: [
      "Improve visual quality",
      "Modernize user experience",
      "Increase trust and credibility",
      "Mobile-first optimization",
      "Better booking journey",
    ],
    designProcess:
      "We approached the design with a 'minimalist luxury' philosophy — rich photography paired with ample white space, refined serif typography, and understated gold accents. Every section was crafted to feel like a high-end editorial spread, guiding the visitor from inspiration to booking with minimal friction.",
    challenges:
      "The primary design challenge was balancing visual richness with performance. Large, cinematic imagery needed to load instantly without compromising the premium feel. We implemented progressive image loading, lazy rendering, and a lightweight CSS animation layer to keep every interaction at 60fps.",
    technologies: ["React", "Framer Motion", "Vite", "Vanilla CSS", "Cloudinary"],
    mockupDesktop:
      "/projects_ui/park-regency-upload.png",
    mockupMobile:
      "https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?q=80&w=800&auto=format&fit=crop",
    results: [
      "Cleaner user experience",
      "Stronger visual identity",
      "Better mobile usability",
      "Modern hotel presentation",
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
      "Modern UI Design",
      "Responsive Layout",
      "Improved Typography",
      "Better Information Architecture",
      "Faster Performance",
      "Premium Visual Experience",
    ],
  },
  {
    id: "naama-blue-hotel",
    title: "Naama Blue Hotel",
    projectType: "new",
    showcaseTheme: "coastal" as const,
    showcaseVariant: "laptop" as const,
    category: "Hotel Website Redesign",
    year: "2025",
    heroImage:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2500&auto=format&fit=crop",
    overview:
      "A full modernization of the Naama Blue Hotel's online presence in Sharm El-Sheikh. The previous website had a fragmented visual hierarchy and a confusing navigation structure that was damaging guest trust. We rebuilt it from the ground up with a clean, booking-focused architecture designed to convert browsers into confident guests.",
    clientGoals: [
      "Improve visual quality",
      "Modernize user experience",
      "Increase trust and credibility",
      "Mobile-first optimization",
      "Better booking journey",
    ],
    designProcess:
      "We studied the hotel's brand identity and translated it into a clean digital language. A calm, coastal color palette — deep ocean blues and crisp whites — established instant trust. Navigation was radically simplified: every page has one primary action, guiding visitors toward a booking decision without distraction.",
    challenges:
      "The hotel's existing content was scattered across multiple outdated pages with inconsistent imagery and messaging. We audited and restructured all content, developed a new photography-led visual hierarchy, and enforced a mobile-first breakpoint strategy to ensure flawless rendering on smaller screens.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
    mockupDesktop:
      "/projects_ui/naama-blue-upload.jpg",
    mockupMobile:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
    results: [
      "Cleaner user experience",
      "Stronger visual identity",
      "Better mobile usability",
      "Modern hotel presentation",
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
  },
  {
    id: "naama-inn-hotel",
    title: "Naama Inn Hotel",
    projectType: "new",
    showcaseTheme: "boutique" as const,
    showcaseVariant: "laptop" as const,
    category: "Hotel Website Redesign",
    year: "2024",
    heroImage: "/projects_ui/naama-inn-upload.png",
    overview:
      "Naama Inn Hotel required a complete digital refresh to align its online presence with modern hospitality standards. While the original website provided essential information, its aging design, dated visual presentation, and limited user experience no longer reflected the expectations of today's travelers. The goal of this redesign was to create a cleaner, faster, and more engaging experience that showcases the hotel professionally while improving usability across all devices.",
    clientGoals: [
      "Create a cleaner, faster, and more engaging experience",
      "Showcase the hotel professionally",
      "Improve usability across all devices",
    ],
    designProcess:
      "The website was completely redesigned with a focus on simplicity, performance, and user experience. We focused on delivering a smoother browsing experience and a more professional brand image.",
    challenges:
      "The original website faced several challenges including an outdated visual design, inconsistent layout, limited mobile experience, and a slower user journey. It lacked modern hospitality-focused design elements, which reduced visual impact and guest engagement.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO Optimization"],
    mockupDesktop:
      "/projects_ui/naama-inn-upload.png",
    mockupMobile:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    results: [
      "Modern and welcoming digital experience",
      "Efficient exploration and smoother browsing",
      "Professional and trustworthy hospitality platform",
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
  },
  {
    id: "al-hisham-development",
    title: "Al Hisham Development",
    projectType: "new",
    showcaseTheme: "realestate" as const,
    showcaseVariant: "imac" as const,
    category: "Real Estate Development",
    year: "2025",
    heroImage:
      "/projects_ui/al-hisham-upload.png",
    overview:
      "Al Hisham Development is a leading real estate firm specializing in luxury residential and commercial projects. They required a robust platform to showcase their portfolio of high-quality properties and sustainable real estate value.",
    clientGoals: [
      "Display property portfolio interactively",
      "Capture high-quality leads",
      "Establish market authority",
      "Provide virtual walkthroughs",
    ],
    designProcess:
      "The design reflects architectural grandeur through bold typography, generous whitespace, and expansive property photography. We implemented a sleek filtering system to help investors find their ideal property type.",
    challenges:
      "Handling numerous high-resolution images and 3D renders without sacrificing website performance and load times.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    mockupDesktop:
      "/projects_ui/al-hisham-upload.png",
    mockupMobile:
      "/projects_ui/al-hisham-upload.png",
    results: [
      "Double the lead generation rate",
      "Faster content delivery",
      "Improved SEO performance",
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
  },
  {
    id: "royal-horizon-hotel",
    title: "Royal Horizon Hotel",
    projectType: "new",
    category: "Luxury Hotel Website",
    year: "2025",
    heroImage: "/projects_ui/royal_horizon.png",
    overview:
      "A comprehensive luxury hotel website designed to provide a seamless and fast booking experience for global visitors. The site focuses on highlighting rooms and services in a modern way while optimizing user experience across all devices.",
    clientGoals: [
      "Increase direct bookings",
      "Reduce reliance on external booking platforms",
      "Provide a seamless multilingual experience",
    ],
    designProcess:
      "The goal was to create a modern and fast website that provides a professional room display system with direct WhatsApp integration to facilitate communication and booking.",
    challenges:
      "Balancing a luxury aesthetic with lightning-fast load times and a complex multilingual architecture.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    mockupDesktop: "/projects_ui/royal_horizon.png",
    mockupMobile: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?q=80&w=800&auto=format&fit=crop",
    results: [
      "45% increase in direct bookings",
      "Performance score improved to 95/100",
      "Increased visitor retention rate",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1800&auto=format&fit=crop",
    ],
    newUrl: "https://royal-horizon.vercel.app/",
    keyImprovements: [
      "Luxury modern design",
      "Direct booking system & WhatsApp integration",
      "4-language support",
      "SEO optimization & Smart contact form",
    ],
  },
  {
    id: "luna-jewelry-store",
    title: "Luna Jewelry Store",
    projectType: "new",
    category: "Jewelry eCommerce",
    year: "2025",
    heroImage: "/projects_ui/luna_jewelry.png",
    overview:
      "An elegant eCommerce store specializing in luxury women's jewelry and accessories. The refined design reflects the brand's identity and significantly enhances the shopping experience.",
    clientGoals: [
      "Display products professionally",
      "Enhance the shopping experience",
      "Increase conversion rates",
    ],
    designProcess:
      "Designed with an elegant gold and white color palette, prioritizing high-resolution product photography and a frictionless checkout process.",
    challenges:
      "Implementing an advanced shopping cart and secure payment gateway while maintaining a luxurious feel.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
    mockupDesktop: "/projects_ui/luna_jewelry.png",
    mockupMobile: "https://images.unsplash.com/photo-1515562141207-7a8efbfc3473?q=80&w=800&auto=format&fit=crop",
    results: [
      "Increased conversion rate",
      "Enhanced user experience",
      "Faster store loading speed",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599643478514-4a4204142f1a?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop",
    ],
    newUrl: "https://luna-jewelry.vercel.app/",
    keyImprovements: [
      "Smart categorization",
      "Advanced shopping cart & Secure payment",
      "Wishlist feature & Customer reviews",
      "Discount coupons system",
    ],
  },
  {
    id: "elite-properties",
    title: "Elite Properties Real Estate",
    projectType: "new",
    category: "Real Estate Platform",
    year: "2024",
    heroImage: "/projects_ui/elite_properties.png",
    overview:
      "An advanced real estate platform for showcasing residential and commercial properties. It features an advanced search system that helps clients find the right property quickly.",
    clientGoals: [
      "Streamline property search",
      "Provide detailed property showcases",
      "Simplify the property viewing request process",
    ],
    designProcess:
      "Focused on a clean, corporate design with interactive map integrations and high-quality property media to inspire trust and reliability.",
    challenges:
      "Handling a massive database of properties with advanced filtering logic without compromising frontend performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Mapbox"],
    mockupDesktop: "/projects_ui/elite_properties.png",
    mockupMobile: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    results: [
      "Faster property discovery",
      "Significant increase in viewing requests",
      "Better mobile engagement",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop",
    ],
    newUrl: "https://elite-properties.vercel.app/",
    keyImprovements: [
      "Advanced search and filtering",
      "Interactive property maps",
      "Property comparison tool",
      "Save favorite properties functionality",
    ],
  },
  {
    id: "care-medical-center",
    title: "Care Medical Center",
    projectType: "new",
    category: "Medical Clinic Website",
    year: "2025",
    heroImage: "/projects_ui/care_medical.png",
    overview:
      "A professional medical website for a multi-specialty clinic that allows patients to book appointments online and learn about available services and doctors.",
    clientGoals: [
      "Digitize appointment booking",
      "Showcase clinic expertise and doctor profiles",
      "Provide accessible medical resources",
    ],
    designProcess:
      "Adopted a calming blue and white color scheme typical of healthcare brands, paired with a highly accessible layout suitable for all age groups.",
    challenges:
      "Creating a secure and compliant appointment scheduling system that syncs directly with the clinic's reception desk.",
    technologies: ["React", "Tailwind CSS", "Express", "PostgreSQL"],
    mockupDesktop: "/projects_ui/care_medical.png",
    mockupMobile: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    results: [
      "Streamlined patient booking process",
      "Reduced phone inquiries by 30%",
      "Increased patient trust and satisfaction",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1800&auto=format&fit=crop",
    ],
    newUrl: "https://care-medical.vercel.app/",
    keyImprovements: [
      "Online appointment booking",
      "Comprehensive doctor profiles",
      "Medical articles section",
      "Direct WhatsApp integration",
    ],
  },
  {
    id: "taste-house-restaurant",
    title: "Taste House Restaurant",
    projectType: "new",
    category: "Restaurant & Cafe Website",
    year: "2025",
    heroImage: "/projects_ui/taste_house.png",
    overview:
      "A modern restaurant website aimed at increasing orders and table reservations through an attractive and easy-to-use interface.",
    clientGoals: [
      "Increase table reservations",
      "Showcase menu interactively",
      "Drive online delivery orders",
    ],
    designProcess:
      "Created an elegant dark-themed interface that makes the vibrant, luxury food photography pop, complemented by an intuitive digital menu.",
    challenges:
      "Designing a digital menu that is easy to navigate on mobile while still looking sophisticated and premium.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
    mockupDesktop: "/projects_ui/taste_house.png",
    mockupMobile: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    results: [
      "50% increase in online reservations",
      "Enhanced brand identity",
      "Improved mobile browsing experience",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-33898b12015c?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1800&auto=format&fit=crop",
    ],
    newUrl: "https://taste-house.vercel.app/",
    keyImprovements: [
      "Interactive Digital Menu",
      "Table reservation system",
      "Direct WhatsApp ordering",
      "High-quality food gallery",
    ],
  },
  {
    id: "elevate-marketing",
    title: "Elevate Marketing Agency",
    projectType: "new",
    category: "Digital Marketing Agency",
    year: "2024",
    heroImage: "/projects_ui/elevate_marketing.png",
    overview:
      "A vibrant and modern digital marketing agency website showcasing creative portfolios, service offerings, and an analytics dashboard for clients to track campaign success.",
    clientGoals: [
      "Showcase creative capabilities",
      "Attract high-end corporate clients",
      "Provide client analytics transparency",
    ],
    designProcess:
      "Used vibrant gradients, micro-animations, and bold typography to communicate creativity and digital expertise.",
    challenges:
      "Developing a lightweight custom analytics dashboard that integrates with third-party tracking tools.",
    technologies: ["React", "Vite", "Framer Motion", "GSAP"],
    mockupDesktop: "/projects_ui/elevate_marketing.png",
    mockupMobile: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    results: [
      "Tripled incoming leads",
      "Established strong brand authority",
      "Praised for innovative UI design",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1800&auto=format&fit=crop",
    ],
    newUrl: "https://elevate-marketing.vercel.app/",
    keyImprovements: [
      "Creative portfolio grid",
      "Client analytics dashboard",
      "Vibrant gradient UI",
      "Lead generation forms",
    ],
  }
];
