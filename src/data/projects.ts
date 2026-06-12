export interface Project {
  id: string;
  title: string;
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
}

export const projects: Project[] = [
  {
    id: "lumina-hotel",
    title: "Lumina Boutique Hotel",
    category: "Luxury Hotel Website",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2500&auto=format&fit=crop",
    overview: "A highly immersive, visually driven digital presence for an ultra-luxury boutique hotel. The goal was to translate their world-class physical hospitality into a digital booking experience.",
    clientGoals: [
      "Increase direct bookings by 30% to reduce OTA dependency.",
      "Showcase the architectural beauty of the property through high-end media.",
      "Implement a seamless, lightning-fast reservation system."
    ],
    designProcess: "We focused on a 'Dark Luxury' aesthetic, utilizing deep charcoals and gold accents. The typography was carefully selected to evoke a sense of heritage while remaining highly legible.",
    challenges: "The primary challenge was integrating a complex, legacy third-party booking engine (Synxis) into a modern headless frontend without compromising on speed or design.",
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "Stripe API"],
    mockupDesktop: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "45% Increase in Direct Bookings",
      "0.8s Average Page Load Time",
      "120% Increase in Mobile Conversion Rate"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "oasis-resort",
    title: "Oasis Resort & Spa",
    category: "Resort Booking Platform",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2500&auto=format&fit=crop",
    overview: "A comprehensive booking and discovery platform for a massive island resort, featuring interactive maps, dynamic pricing, and personalized itinerary builders.",
    clientGoals: [
      "Unify 5 different sub-properties under one digital roof.",
      "Provide an interactive map for guests to explore amenities.",
      "Upsell spa and dining packages during the booking flow."
    ],
    designProcess: "We utilized an 'Airy & Organic' design system, incorporating glassmorphism to let the stunning tropical imagery shine through the interface components.",
    challenges: "Managing state across complex booking funnels (dates, rooms, add-ons, flights) required a highly robust state management solution.",
    technologies: ["TypeScript", "Zustand", "TanStack Query", "Mapbox GL"],
    mockupDesktop: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1000&auto=format&fit=crop",
    results: [
      "3x Increase in Spa Package Upsells",
      "Reduced Booking Drop-off by 60%",
      "Awarded 'Best Travel UI' 2025"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "nexus-corporate",
    title: "Nexus Core",
    category: "Corporate Business Website",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop",
    overview: "A massive, multi-lingual corporate platform for a global logistics conglomerate. Designed to serve investors, partners, and prospective talent simultaneously.",
    clientGoals: [
      "Consolidate 12 regional websites into one headless CMS.",
      "Create a dedicated, real-time Investor Relations dashboard.",
      "Modernize the brand perception from 'legacy' to 'innovative'."
    ],
    designProcess: "We implemented a strict, grid-based Brutalist-Corporate aesthetic. High contrast, massive typography, and sharp edges communicate efficiency and scale.",
    challenges: "Content migration from 12 separate legacy WordPress instances into a unified Sanity CMS required custom ETL pipelines and rigorous testing.",
    technologies: ["Next.js", "Sanity CMS", "GraphQL", "GSAP"],
    mockupDesktop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "100% Core Web Vitals Score",
      "Saved 40hrs/week in Content Management",
      "220% Increase in Careers Page Engagement"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "apex-construction",
    title: "Apex Build Group",
    category: "Construction Company Website",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2500&auto=format&fit=crop",
    overview: "A rugged yet refined portfolio website for a premium commercial construction firm, featuring massive project galleries and drone video integrations.",
    clientGoals: [
      "Showcase high-resolution drone footage of completed projects.",
      "Generate high-quality leads for commercial bids.",
      "Highlight safety records and certifications."
    ],
    designProcess: "We used industrial colors—concrete greys, safety yellows, and steel blues. The typography is bold and structural, mimicking the nature of their work.",
    challenges: "Optimizing massive 4K drone videos for seamless background playback across mobile and desktop without tanking performance.",
    technologies: ["Vite", "React", "Cloudinary", "Framer Motion"],
    mockupDesktop: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "Zero-layout-shift Video Loading",
      "85% Increase in Bid Requests",
      "Featured on SiteInspire"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "vital-health",
    title: "Vitality Medical Clinic",
    category: "Medical Clinic Website",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2500&auto=format&fit=crop",
    overview: "A sterile, fast, and highly accessible website for a network of modern medical clinics, featuring HIPAA-compliant appointment scheduling.",
    clientGoals: [
      "Implement a secure, real-time appointment booking system.",
      "Achieve WCAG 2.1 AA Accessibility compliance.",
      "Create a warm, reassuring digital aesthetic."
    ],
    designProcess: "We strayed away from traditional 'clinical blue' and used warm terracotta and soft sage greens to reduce patient anxiety.",
    challenges: "Ensuring deep accessibility (screen readers, keyboard navigation) while maintaining highly interactive booking calendars.",
    technologies: ["React", "Aria", "PostgreSQL", "Prisma"],
    mockupDesktop: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "100% WCAG AA Compliance",
      "2.5x Increase in Online Bookings",
      "Reduced Phone Queue Times by 40%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "umami-restaurant",
    title: "Umami Prime",
    category: "Restaurant Website",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2500&auto=format&fit=crop",
    overview: "An immersive, sensory-driven website for a Michelin-starred restaurant. The site features dynamic menus, WebGL smoke effects, and a VIP reservation portal.",
    clientGoals: [
      "Convey the dark, moody atmosphere of the physical restaurant.",
      "Integrate OpenTable for real-time reservations.",
      "Create an interactive, visual tasting menu."
    ],
    designProcess: "We shot custom high-speed slow-motion video of their culinary process and used it as interactive masks for the typography.",
    challenges: "Balancing heavy WebGL shaders (for smoke and fire effects) with mobile performance.",
    technologies: ["Three.js", "React Three Fiber", "Tailwind CSS"],
    mockupDesktop: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "Fully Booked 3 Months in Advance",
      "Winner: CSS Design Awards",
      "60fps Performance on Mobile"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338988a2e8c0?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "aura-fashion",
    title: "Aura Paradigm",
    category: "E-commerce Fashion Store",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2500&auto=format&fit=crop",
    overview: "A headless Shopify build for an avant-garde fashion label. The experience feels more like an interactive editorial magazine than a traditional store.",
    clientGoals: [
      "Break the mold of standard e-commerce grid layouts.",
      "Implement a lightning-fast dynamic cart.",
      "Support multi-currency and international shipping."
    ],
    designProcess: "We used massive, asymmetrical imagery and horizontal scrolling 'lookbooks' to allow users to shop entire outfits directly from editorial shots.",
    challenges: "Managing inventory synchronization between the headless frontend and Shopify backend in milliseconds to prevent overselling limited drops.",
    technologies: ["Hydrogen", "Shopify Storefront API", "Tailwind CSS"],
    mockupDesktop: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "3.2% Conversion Rate (Up from 1.1%)",
      "Sub-second Page Transitions",
      "$2M Revenue in First Quarter"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "haven-furniture",
    title: "Haven Interiours",
    category: "Furniture Store",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2500&auto=format&fit=crop",
    overview: "An elegant e-commerce platform for a Scandinavian furniture brand, featuring 3D product viewers and AR room-placement technology.",
    clientGoals: [
      "Allow users to view furniture in 3D 360-degrees.",
      "Integrate WebXR for 'View in Room' AR capabilities.",
      "Maintain a minimalist, clean brand identity."
    ],
    designProcess: "Lots of white space, soft shadows, and incredibly high-resolution textures. We let the product photography do 90% of the heavy lifting.",
    challenges: "Loading massive 3D model files (GLTF/GLB) progressively without blocking the main thread or causing UI freezes.",
    technologies: ["React Three Fiber", "WebXR", "Next.js", "Stripe"],
    mockupDesktop: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "40% Reduction in Product Returns",
      "Average Session Duration: 6 Minutes",
      "High Customer Engagement with AR"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "elevate-realestate",
    title: "Elevate Properties",
    category: "Real Estate Platform",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500&auto=format&fit=crop",
    overview: "A massive MLS-integrated platform for luxury real estate, featuring dynamic map clustering, virtual tours, and a dedicated broker portal.",
    clientGoals: [
      "Real-time synchronization with 3 distinct MLS databases.",
      "High-performance map searching with drawing tools.",
      "Secure client portal for saved properties and communications."
    ],
    designProcess: "We aimed for an 'Editorial Tech' vibe. Using deep blacks and stark whites with highly structured typography to make reading property specs effortless.",
    challenges: "Handling thousands of geographic data points on a map without dropping frames required advanced clustering algorithms and vector tiles.",
    technologies: ["Mapbox", "Supercluster", "PostGIS", "React"],
    mockupDesktop: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "Handled 50,000+ Concurrent Listings",
      "Map Interaction at Smooth 60fps",
      "300% Increase in Lead Generation"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09c15ffa?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "wander-travel",
    title: "Wanderlust Expeditions",
    category: "Travel Agency Website",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2500&auto=format&fit=crop",
    overview: "A visually breathtaking booking platform for ultra-premium global expeditions, focusing on immersive storytelling and exotic photography.",
    clientGoals: [
      "Sell high-ticket travel packages ($20k+).",
      "Provide detailed, day-by-day interactive itineraries.",
      "Streamline the complex onboarding and visa documentation process."
    ],
    designProcess: "We leaned heavily into immersive scrolling. As users scroll through an itinerary, the background environment seamlessly transitions from mountains to deserts to oceans.",
    challenges: "Animating massive background transitions while maintaining scroll performance on lower-end devices.",
    technologies: ["GSAP ScrollTrigger", "Lenis Scroll", "React"],
    mockupDesktop: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "$5M+ Processed in Year 1",
      "Awwwards Site of the Day",
      "Zero Support Tickets for Onboarding"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "mastery-edu",
    title: "Mastery Platform",
    category: "Educational Platform",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2500&auto=format&fit=crop",
    overview: "A modern LMS (Learning Management System) built for creators to host cohorts, featuring real-time chat, video streaming, and interactive quizzes.",
    clientGoals: [
      "Replace 4 fragmented tools (Zoom, Slack, Teachable, Notion) with one platform.",
      "Support massive concurrent video streaming.",
      "Gamify the learning experience to increase completion rates."
    ],
    designProcess: "We created a clean, distraction-free 'Focus Mode' UI for learning, utilizing soft purples and deep navys to reduce eye strain during long sessions.",
    challenges: "Implementing a highly scalable real-time WebSocket infrastructure for live chat during broadcasts with 10k+ concurrent users.",
    technologies: ["WebRTC", "Socket.io", "Redis", "React"],
    mockupDesktop: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "85% Course Completion Rate",
      "Supported 15,000 Concurrent Streams",
      "Acquired by Major EdTech Firm"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "vanguard-saas",
    title: "Vanguard Hub",
    category: "SaaS Dashboard",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2500&auto=format&fit=crop",
    overview: "A highly complex B2B financial analytics dashboard, designed to make massive datasets digestible through beautiful, interactive data visualization.",
    clientGoals: [
      "Visualize terabytes of financial data in real-time.",
      "Allow users to build custom drag-and-drop report layouts.",
      "Maintain strict SOC2 compliance."
    ],
    designProcess: "We built a custom component library based on brutalist data-heavy aesthetics. Monospace fonts for numbers, stark lines, and glowing neon charts on dark backgrounds.",
    challenges: "Rendering thousands of SVG data points in charts was crashing the browser. We had to migrate to HTML5 Canvas and WebGL for data viz.",
    technologies: ["Recharts", "D3.js", "Canvas API", "TypeScript"],
    mockupDesktop: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "Renders 100k Data Points in 16ms",
      "Voted #1 FinTech Dashboard",
      "Zero Security Breaches"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "nova-personal",
    title: "Nova Creative",
    category: "Personal Brand Website",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2500&auto=format&fit=crop",
    overview: "A highly experimental, award-winning portfolio for a world-renowned creative director, featuring WebGL typography and cursor-based physics.",
    clientGoals: [
      "Win Site of the Month on Awwwards.",
      "Push the absolute limits of web browser capabilities.",
      "Act as a living art piece rather than a standard portfolio."
    ],
    designProcess: "Rules were thrown out the window. No grids, no standard scrolling. The site navigates via dragging a fluid, liquid-like canvas.",
    challenges: "Creating a custom physics engine in JavaScript to handle the fluid simulation and typographic collisions.",
    technologies: ["WebGL", "GLSL Shaders", "Framer Motion"],
    mockupDesktop: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "Awwwards Site of the Month",
      "FWA of the Day",
      "2 Million Unique Visitors"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "sterling-law",
    title: "Sterling & Partners",
    category: "Law Firm Website",
    year: "2026",
    heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2500&auto=format&fit=crop",
    overview: "A highly authoritative, trust-inspiring digital presence for a top-tier corporate litigation firm. Modernizing the 'stuffy lawyer' trope.",
    clientGoals: [
      "Project extreme competence and premium authority.",
      "Provide a secure document drop portal for whistleblowers.",
      "Highlight the partners' aggressive track record."
    ],
    designProcess: "We used classic serif typography (Playfair Display) updated with stark, high-contrast layouts. The color palette relies on deep mahogany and pure white.",
    challenges: "Building a bank-level encrypted, anonymous document upload portal directly into the frontend.",
    technologies: ["React", "AWS KMS", "Tailwind CSS"],
    mockupDesktop: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "Ranked #1 for Corporate Litigation in NYC",
      "100% Secure Encrypted Uploads",
      "Massive Increase in High-Net-Worth Leads"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1500&auto=format&fit=crop"
    ]
  },
  {
    id: "iron-fitness",
    title: "Iron Core Gym",
    category: "Gym and Fitness Website",
    year: "2025",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2500&auto=format&fit=crop",
    overview: "A highly aggressive, high-energy digital platform for a hardcore bodybuilding and powerlifting franchise, featuring member portals and class booking.",
    clientGoals: [
      "Reflect the gritty, hardcore culture of the gym.",
      "Allow seamless class booking and membership management.",
      "Sell merchandise directly through the site."
    ],
    designProcess: "Bold, uppercase, italicized typography paired with stark black and aggressive neon red. High-contrast photography with heavy grain filters.",
    challenges: "Integrating a custom Shopify storefront natively into the class-booking dashboard so members could buy gear with one click.",
    technologies: ["Next.js", "Shopify API", "Mindbody API"],
    mockupDesktop: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop",
    mockupMobile: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    results: [
      "200% Increase in Merch Sales",
      "Seamless Mindbody Integration",
      "Tripled Online Sign-ups"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1500&auto=format&fit=crop"
    ]
  }
];
