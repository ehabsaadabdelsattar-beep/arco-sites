import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { 
  ArrowLeft, 
  ExternalLink, 
  ArrowRight,
} from "lucide-react";
import { projects } from "../data/projects";
import { Magnetic } from "../components/Magnetic";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { useTranslation } from "react-i18next";
import { TiltCard } from "../components/TiltCard";

// ScrollReveal: binds animation directly to scroll position for buttery smooth reveal
function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1.1", "start 0.25"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.5 });
  const y = useTransform(smoothProgress, [0, 1], [120, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.35], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);
  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}

// Premium result icon — custom SVG with gradient, matched to result text
export function ResultIcon({ text, className = "h-10 w-10" }: { text: string; className?: string }) {
  const t = text.toLowerCase();

  // Speed / Performance
  if (t.includes("performance") || t.includes("أداء") || t.includes("speed") || t.includes("سرعة") || t.includes("faster") || t.includes("أسرع"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-speed" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <circle cx="24" cy="24" r="20" fill="var(--primary)" opacity="0.08"/>
        <path d="M24 10 L28 22 H36 L28 30 L31 40 L24 33 L17 40 L20 30 L12 22 H20 Z" fill="url(#g-speed)" strokeLinejoin="round"/>
      </svg>
    );

  // Mobile / Devices
  if (t.includes("mobile") || t.includes("هاتف") || t.includes("جوال") || t.includes("devices") || t.includes("أجهزة") || t.includes("responsive") || t.includes("متجاوب"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-mobile" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <rect x="15" y="8" width="18" height="32" rx="3" fill="var(--primary)" opacity="0.1"/>
        <rect x="15" y="8" width="18" height="32" rx="3" stroke="url(#g-mobile)" strokeWidth="2.5" fill="none"/>
        <rect x="21" y="35" width="6" height="2" rx="1" fill="url(#g-mobile)"/>
        <line x1="15" y1="32" x2="33" y2="32" stroke="url(#g-mobile)" strokeWidth="1.5"/>
        <rect x="20" y="13" width="8" height="5" rx="1" fill="url(#g-mobile)" opacity="0.5"/>
      </svg>
    );

  // Design / Visual / Identity
  if (t.includes("visual") || t.includes("بصري") || t.includes("design") || t.includes("تصميم") || t.includes("identity") || t.includes("هوية") || t.includes("modern") || t.includes("elegant") || t.includes("أنيقة") || t.includes("ui") || t.includes("واجهة"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-design" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <circle cx="24" cy="24" r="12" fill="var(--primary)" opacity="0.1"/>
        <circle cx="24" cy="24" r="4" fill="url(#g-design)"/>
        <circle cx="24" cy="12" r="3" fill="url(#g-design)" opacity="0.7"/>
        <circle cx="34" cy="18" r="3" fill="url(#g-design)" opacity="0.7"/>
        <circle cx="34" cy="30" r="3" fill="url(#g-design)" opacity="0.7"/>
        <circle cx="24" cy="36" r="3" fill="url(#g-design)" opacity="0.7"/>
        <circle cx="14" cy="30" r="3" fill="url(#g-design)" opacity="0.7"/>
        <circle cx="14" cy="18" r="3" fill="url(#g-design)" opacity="0.7"/>
      </svg>
    );

  // Growth / SEO / Traffic
  if (t.includes("increase") || t.includes("زيادة") || t.includes("double") || t.includes("مضاعفة") || t.includes("rate") || t.includes("معدل") || t.includes("seo") || t.includes("بحث") || t.includes("traffic") || t.includes("growth") || t.includes("نمو"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-growth" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <path d="M8 36 L16 26 L22 30 L30 18 L38 10" stroke="url(#g-growth)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 10 H38 V16" stroke="url(#g-growth)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 36 L16 26 L22 30 L30 18 L38 10 L38 38 L8 38 Z" fill="var(--primary)" opacity="0.08"/>
      </svg>
    );

  // Users / Experience / Trust
  if (t.includes("user") || t.includes("مستخدم") || t.includes("client") || t.includes("عميل") || t.includes("trust") || t.includes("ثقة") || t.includes("satisfaction") || t.includes("رضا") || t.includes("engagement") || t.includes("تفاعل") || t.includes("تجربة") || t.includes("experience") || t.includes("browsing"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-users" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <circle cx="24" cy="16" r="7" fill="var(--primary)" opacity="0.12"/>
        <circle cx="24" cy="16" r="7" stroke="url(#g-users)" strokeWidth="2.5" fill="none"/>
        <path d="M10 38 C10 30 14 26 24 26 C34 26 38 30 38 38" stroke="url(#g-users)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M10 38 C10 30 14 26 24 26 C34 26 38 30 38 38 L38 40 L10 40 Z" fill="var(--primary)" opacity="0.08"/>
      </svg>
    );

  // Booking / Sales / Conversion
  if (t.includes("booking") || t.includes("حجز") || t.includes("order") || t.includes("طلب") || t.includes("conversion") || t.includes("تحويل") || t.includes("sales") || t.includes("مبيعات") || t.includes("lead") || t.includes("direct") || t.includes("مباشر"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-sales" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <rect x="10" y="20" width="28" height="20" rx="3" fill="var(--primary)" opacity="0.1"/>
        <rect x="10" y="20" width="28" height="20" rx="3" stroke="url(#g-sales)" strokeWidth="2.5" fill="none"/>
        <path d="M17 20 V16 C17 11.6 20.1 8 24 8 C27.9 8 31 11.6 31 16 V20" stroke="url(#g-sales)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <circle cx="24" cy="30" r="3" fill="url(#g-sales)"/>
      </svg>
    );

  // Hotel / Property / Hospitality
  if (t.includes("hotel") || t.includes("فندق") || t.includes("property") || t.includes("عقار") || t.includes("hospitality") || t.includes("ضيافة") || t.includes("platform") || t.includes("منصة") || t.includes("presentation") || t.includes("عرض") || t.includes("عصري"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-hotel" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <rect x="8" y="18" width="32" height="24" rx="2" fill="var(--primary)" opacity="0.1"/>
        <rect x="8" y="18" width="32" height="24" rx="2" stroke="url(#g-hotel)" strokeWidth="2.5" fill="none"/>
        <path d="M16 18 V12 L24 8 L32 12 V18" stroke="url(#g-hotel)" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <rect x="20" y="30" width="8" height="12" rx="1" fill="url(#g-hotel)" opacity="0.5"/>
        <rect x="13" y="24" width="5" height="4" rx="1" fill="url(#g-hotel)" opacity="0.6"/>
        <rect x="30" y="24" width="5" height="4" rx="1" fill="url(#g-hotel)" opacity="0.6"/>
      </svg>
    );

  // Typography / Content / Architecture
  if (t.includes("typography") || t.includes("خط") || t.includes("content") || t.includes("محتوى") || t.includes("information") || t.includes("معلومات") || t.includes("architecture") || t.includes("بنية") || t.includes("هيكلة"))
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs><linearGradient id="g-type" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
        <rect x="20" y="10" width="8" height="6" rx="1.5" stroke="url(#g-type)" strokeWidth="2.5" fill="none"/>
        <rect x="10" y="32" width="8" height="6" rx="1.5" stroke="url(#g-type)" strokeWidth="2.5" fill="none"/>
        <rect x="30" y="32" width="8" height="6" rx="1.5" stroke="url(#g-type)" strokeWidth="2.5" fill="none"/>
        <path d="M24 16 V26" stroke="url(#g-type)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 26 H34" stroke="url(#g-type)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 26 V32" stroke="url(#g-type)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M34 26 V32" stroke="url(#g-type)" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="20" y="10" width="8" height="6" rx="1.5" fill="var(--primary)" opacity="0.15"/>
        <rect x="10" y="32" width="8" height="6" rx="1.5" fill="var(--primary)" opacity="0.15"/>
        <rect x="30" y="32" width="8" height="6" rx="1.5" fill="var(--primary)" opacity="0.15"/>
      </svg>
    );

  // Default — premium checkmark
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs><linearGradient id="g-check" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)"/><stop offset="100%" stopColor="var(--primary)" stopOpacity="0.55"/></linearGradient></defs>
      <circle cx="24" cy="24" r="16" fill="var(--primary)" opacity="0.1"/>
      <circle cx="24" cy="24" r="16" stroke="url(#g-check)" strokeWidth="2.5" fill="none"/>
      <path d="M15 24 L21 30 L33 18" stroke="url(#g-check)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Keep getResultIcon for backward-compat with Goals/Improvements sections
const getResultIcon = (text: string, className: string = "h-6 w-6 text-primary") => {
  const t = text.toLowerCase();
  if (t.includes("performance") || t.includes("أداء") || t.includes("speed") || t.includes("سرعة") || t.includes("faster") || t.includes("أسرع")) return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  if (t.includes("mobile") || t.includes("هاتف") || t.includes("devices") || t.includes("أجهزة") || t.includes("responsive") || t.includes("متجاوب")) return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>;
  if (t.includes("visual") || t.includes("design") || t.includes("تصميم") || t.includes("identity") || t.includes("modern") || t.includes("clean") || t.includes("ui") || t.includes("واجهة")) return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125 0-.922.75-1.672 1.672-1.672h1.969c3.008 0 5.454-2.438 5.454-5.484C21.906 6.006 17.5 2 12 2z"/></svg>;
  if (t.includes("increase") || t.includes("زيادة") || t.includes("seo") || t.includes("traffic") || t.includes("growth") || t.includes("نمو")) return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
  if (t.includes("user") || t.includes("مستخدم") || t.includes("trust") || t.includes("ثقة") || t.includes("experience") || t.includes("تجربة")) return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  if (t.includes("booking") || t.includes("حجز") || t.includes("sales") || t.includes("مبيعات") || t.includes("direct") || t.includes("مباشر")) return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>;
};

export const Route = createFileRoute("/portfolio/$projectId")({
  component: CaseStudyPage,
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw new Error("Project not found");
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project?.title ?? "Project"} — Case Study` },
      { name: "description", content: loaderData?.project?.overview ?? "" },
    ],
  }),
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();
  const router = useRouter();
  const { t, i18n } = useTranslation("portfolio");
  const isAr = i18n.language?.startsWith("ar");

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  // Image slider indices per device
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [tabletIdx, setTabletIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [galleryIdx, setGalleryIdx] = useState(0);

  // Reset indices when project changes
  useEffect(() => {
    setDesktopIdx(0);
    setTabletIdx(0);
    setMobileIdx(0);
    setGalleryIdx(0);
  }, [project.id]);

  // Find prev and next project for CTA
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {/* 1. Hero Section */}
      <section
        ref={heroRef}
        className="relative flex h-[70vh] items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover mix-blend-luminosity opacity-40"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t to-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to top, var(--background) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <span
              className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
              style={{
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                backgroundColor: "rgba(128,128,128,0.1)",
              }}
            >
              {isAr ? (project.category_ar || project.category) : project.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`mb-8 text-5xl font-bold sm:text-7xl lg:text-8xl ${isAr ? "leading-[1.2] tracking-normal" : "tracking-tighter"}`}
            style={{ color: "var(--foreground)" }}
          >
            {isAr ? (project.title_ar || project.title) : project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`mx-auto max-w-3xl text-lg sm:text-xl ${isAr ? "leading-[1.8]" : "leading-relaxed"}`}
            style={{ color: "var(--muted-foreground)" }}
          >
            {isAr ? (project.overview_ar || project.overview) : project.overview}
          </motion.p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-12 lg:px-24">
        <Link
          to="/portfolio"
          className={`group mb-16 inline-flex items-center text-sm font-bold uppercase tracking-widest transition-colors hover:text-foreground ${isAr ? "flex-row-reverse" : ""}`}
          style={{ color: "var(--muted-foreground)" }}
        >
          <ArrowLeft className={`h-4 w-4 transition-transform group-hover:-translate-x-1 ${isAr ? "ml-2 rotate-180" : "mr-2"}`} />
          {t("back_to_portfolio")}
        </Link>

        {/* 2. Before vs After Section */}
        {project.projectType === "redesign" && (
          <div className="mb-32">
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold sm:text-5xl"
                style={{ color: "var(--foreground)" }}
              >
                {isAr ? "قبل وبعد" : "Before & "}
                {!isAr && <span className="italic text-primary">After</span>}
              </h2>
              <p className="mt-4 text-lg" style={{ color: "var(--muted-foreground)" }}>
                {isAr ? "التحول من الموقع القديم إلى التصميم الحديث." : "The transformation from the original website to the modern redesign."}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Before */}
              <div className="group relative flex flex-col gap-4">
                <span
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Original Website (Before)
                </span>
                <div
                  className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    backgroundColor: "var(--card)",
                    aspectRatio: "16/10",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-pulse"
                    style={{ backgroundColor: "var(--card-deeper)" }}
                  >
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Loading Original...
                    </span>
                  </div>
                  <img
                    src={project.oldScreenshot}
                    alt={`${project.title} Original Website`}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 relative z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* After */}
              <div className="group relative flex flex-col gap-4">
                <span
                  className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
                >
                  Redesigned Website (After)
                </span>
                <div
                  className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--card)",
                    aspectRatio: "16/10",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-pulse"
                    style={{ backgroundColor: "var(--card-deeper)" }}
                  >
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Loading Redesign...
                    </span>
                  </div>
                  <img
                    src={project.newScreenshot}
                    alt={`${project.title} Redesigned Website`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 relative z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Device Sliders Section */}
        {(project.desktopSlider || project.tabletSlider || project.mobileSlider) && (
          <div className="mb-32">
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold sm:text-5xl"
                style={{ color: "var(--foreground)" }}
              >
                {isAr ? "شاشات" : "Device "}
                <span className={isAr ? "text-primary" : "italic text-primary"}>{isAr ? " العرض" : "Screens"}</span>
              </h2>
            </div>
            <div className="flex flex-col gap-16 sm:gap-32">
              {/* Desktop Slider */}
              {project.desktopSlider && (
                <ScrollReveal className="flex flex-col items-center">
                  <h3 className="mb-2 sm:mb-4 text-xl font-bold tracking-widest text-muted-foreground uppercase">{isAr ? "سطح المكتب" : "Desktop"}</h3>
                    <div className="relative mx-auto flex w-full max-w-4xl justify-center py-4">
                      <TiltCard className="w-full">
                        <div className="w-full" style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.35))" }}>
                          <div className="relative mx-auto w-[85%] rounded-t-[16px] sm:rounded-t-[20px] bg-[#1a1a1a] p-[4px] sm:p-[6px] border border-[#d1d5db]">
                            <div className="relative overflow-hidden rounded-[10px] sm:rounded-[14px] bg-black" style={{ aspectRatio: "16/10" }}>
                              <div className="absolute left-1/2 top-0 z-20 h-3 w-16 sm:h-4 sm:w-24 -translate-x-1/2 rounded-b-lg bg-[#1a1a1a]" />
                              <img src={project.desktopSlider[0]} alt={`${project.title} Desktop`} className="h-full w-full object-cover" />
                            </div>
                          </div>
                          <div className="relative z-10 w-full h-2.5 sm:h-3.5 rounded-b-[12px] sm:rounded-b-[16px] bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] shadow-md border-t border-[#f3f4f6]">
                            <div className="absolute left-1/2 top-0 h-1 sm:h-1.5 w-24 sm:w-32 -translate-x-1/2 rounded-b-md bg-[#d1d5db] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]" />
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                </ScrollReveal>
              )}
              {/* Tablet Slider */}
              {project.tabletSlider && (
                <ScrollReveal className="flex flex-col items-center">
                  <h3 className="mb-2 sm:mb-4 text-xl font-bold tracking-widest text-muted-foreground uppercase">{isAr ? "جهاز لوحي" : "Tablet"}</h3>
                  <div className="relative mx-auto flex w-full max-w-2xl justify-center py-4">
                    <TiltCard className="w-[90%] sm:w-full">
                      <div style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.35))" }}>
                        <div className="relative rounded-[20px] sm:rounded-[24px] bg-[#d1d5db] p-[2px] sm:p-[3px] shadow-[inset_0_0_2px_rgba(255,255,255,0.8)] border border-[#9ca3af]">
                          <div className="relative rounded-[18px] sm:rounded-[21px] bg-[#111] p-[8px] sm:p-[10px]">
                            <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#333]" />
                            <div className="relative overflow-hidden rounded-[10px] sm:rounded-[12px] bg-black" style={{ aspectRatio: "4/3" }}>
                              <img src={project.tabletSlider[0]} alt={`${project.title} Tablet`} className="h-full w-full object-cover" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </ScrollReveal>
              )}
              {/* Mobile Slider */}
              {project.mobileSlider && (
                <ScrollReveal className="flex flex-col items-center">
                  <h3 className="mb-2 sm:mb-4 text-xl font-bold tracking-widest text-muted-foreground uppercase">{isAr ? "هاتف محمول" : "Mobile"}</h3>
                  <div className="relative mx-auto flex w-full max-w-[280px] justify-center py-4">
                    <TiltCard className="w-[80%] sm:w-full">
                      <div style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.35))" }}>
                        <div className="relative rounded-[40px] sm:rounded-[45px] bg-gradient-to-br from-[#d1d5db] via-[#f3f4f6] to-[#9ca3af] p-[2px] sm:p-[3px] border border-[#9ca3af]">
                          <div className="relative rounded-[38px] sm:rounded-[42px] bg-[#111] p-[6px] sm:p-[8px]">
                            {/* Dynamic Island */}
                            <div className="absolute left-1/2 top-[12px] sm:top-[16px] z-20 h-5 sm:h-6 w-16 sm:w-20 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-end px-2">
                              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#1a1a2e]" />
                            </div>
                            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[34px] bg-black" style={{ aspectRatio: "9/19.5" }}>
                              <img src={project.mobileSlider[0]} alt={`${project.title} Mobile`} className="h-full w-full object-cover" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        )}

        {/* Gallery for New Projects */}
        {project.projectType === "new" && project.gallery && project.gallery.length > 0 && (
          <div className="mb-32">
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold sm:text-5xl"
                style={{ color: "var(--foreground)" }}
              >
                {isAr ? "معرض" : "Project "}
                <span className={isAr ? "text-primary" : "italic text-primary"}>{isAr ? " الصور" : "Gallery"}</span>
              </h2>
            </div>
            {/* Gallery Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, margin: "-80px" }}
              className="relative overflow-hidden rounded-2xl"
              style={{ border: "1px solid var(--border-subtle)", aspectRatio: "16/9" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryIdx}
                  src={project.gallery[galleryIdx]}
                  alt={`${project.title} Gallery ${galleryIdx + 1}`}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              {/* Prev arrow */}
              <button
                onClick={() => setGalleryIdx(i => (i - 1 + project.gallery.length) % project.gallery.length)}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              {/* Next arrow */}
              <button
                onClick={() => setGalleryIdx(i => (i + 1) % project.gallery.length)}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
              {/* Counter */}
              <div className="absolute bottom-4 right-4 z-20 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {galleryIdx + 1} / {project.gallery.length}
              </div>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {project.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIdx(i)}
                    className={`h-2 rounded-full transition-all ${ i === galleryIdx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80" }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* 3. Goals & Key Improvements */}
        <div className="mb-32 grid gap-16 lg:grid-cols-2">
          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: "-80px" }}
            className="rounded-3xl p-10 sm:p-12"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border-subtle)" }}
          >
            <h3
              className="mb-8 text-2xl font-bold sm:text-4xl"
              style={{ color: "var(--foreground)" }}
            >
              {isAr ? "أهداف المشروع" : "Project Goals"}
            </h3>
            <ul className="space-y-5">
              {(isAr && project.clientGoals_ar ? project.clientGoals_ar : project.clientGoals).map((goal, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-base sm:text-lg"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <ResultIcon text={goal} className="h-8 w-8" />
                  </div>
                  <span className="leading-relaxed pt-1">{goal}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Key Improvements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, margin: "-80px" }}
            className="rounded-3xl p-10 sm:p-12"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border-subtle)" }}
          >
            <h3
              className="mb-8 text-2xl font-bold sm:text-4xl"
              style={{ color: "var(--foreground)" }}
            >
              {t("case_study.key_improvements", "Key Improvements")}
            </h3>
            <ul className="space-y-5">
              {(isAr && project.keyImprovements_ar ? project.keyImprovements_ar : project.keyImprovements).map((improvement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-base sm:text-lg"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <ResultIcon text={improvement} className="h-8 w-8" />
                  </div>
                  <span className="leading-relaxed pt-1">{improvement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 4. Results Section */}
        <div className="mb-32 text-center">
          <h2
            className="mb-12 text-3xl font-bold sm:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            {isAr ? "الـ " : "The "}
            <span className={isAr ? "text-primary" : "italic text-primary"}>
              {t("case_study.results", "Results")}
            </span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(isAr && project.results_ar ? project.results_ar : project.results).map((result, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                viewport={{ once: false, margin: "-60px" }}
                key={i}
                className="group flex flex-col items-center gap-5 rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--card)" }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl transition-transform group-hover:scale-110" style={{ background: "var(--card)", boxShadow: "0 0 0 1px var(--border-subtle), 0 4px 24px rgba(0,0,0,0.08)" }}>
                  <ResultIcon text={result} className="h-14 w-14" />
                </div>
                <div
                  className="text-base font-semibold text-center leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  {result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. Live Links Section */}
        <div className="mb-12 text-center">
          <h2
            className="mb-8 text-2xl font-bold sm:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            {project.projectType === "redesign"
              ? (isAr ? "استكشف التحول" : "Explore the Transformation")
              : (isAr ? "زيارة المشروع" : "Visit the Project")}
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {project.projectType === "redesign" && project.oldUrl && (
              <a
                href={project.oldUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black/5 dark:hover:bg-white/5"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  backgroundColor: "transparent",
                }}
              >
                <ExternalLink className="h-4 w-4" />
                Visit Original Website
              </a>
            )}

            <a
              href={project.newUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:opacity-90"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              <ExternalLink className="h-4 w-4" />
              {project.projectType === "redesign"
                ? "Visit Redesigned Website"
                : "Visit Live Website"}
            </a>
          </div>
        </div>
      </section>

      {/* 6. Portfolio Navigation */}
      <section
        className="grid grid-cols-2"
        style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--card-deeper)" }}
      >
        <Link
          to="/portfolio/$projectId"
          params={{ projectId: prevProject.id }}
          className="group flex flex-col items-start justify-center p-8 transition-colors sm:p-16 hover:bg-black/5 dark:hover:bg-white/5"
          style={{ borderRight: "1px solid var(--border)" }}
        >
          <span
            className={`mb-4 flex items-center text-xs font-bold uppercase tracking-widest ${isAr ? "flex-row-reverse" : ""}`}
            style={{ color: "var(--muted-foreground)" }}
          >
            <ArrowLeft className={`h-4 w-4 transition-transform ${isAr ? "ml-2 rotate-180 group-hover:translate-x-2" : "mr-2 group-hover:-translate-x-2"}`} />
            {isAr ? "المشروع السابق" : "Previous Project"}
          </span>
          <h3
            className="text-2xl font-bold sm:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            {isAr ? (prevProject.title_ar || prevProject.title) : prevProject.title}
          </h3>
        </Link>

        <Link
          to="/portfolio/$projectId"
          params={{ projectId: nextProject.id }}
          className="group flex flex-col items-end justify-center p-8 transition-colors sm:p-16 text-right hover:bg-black/5 dark:hover:bg-white/5"
        >
          <span
            className={`mb-4 flex items-center text-xs font-bold uppercase tracking-widest ${isAr ? "flex-row-reverse" : ""}`}
            style={{ color: "var(--muted-foreground)" }}
          >
            {isAr ? "المشروع التالي" : t("case_study.next_project", "Next Project")}
            <ArrowRight className={`h-4 w-4 transition-transform ${isAr ? "mr-2 rotate-180 group-hover:-translate-x-2" : "ml-2 group-hover:translate-x-2"}`} />
          </span>
          <h3
            className="text-2xl font-bold sm:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            {isAr ? (nextProject.title_ar || nextProject.title) : nextProject.title}
          </h3>
        </Link>
      </section>
    </div>
  );
}
