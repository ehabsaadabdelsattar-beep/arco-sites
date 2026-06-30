import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { LayoutTemplate, Zap, Smartphone, Search } from "lucide-react";
import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";

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

export const Route = createFileRoute("/")({
  component: HomePage,
});

const featuredProjects = projects.slice(0, 6);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    quote_ar: "Arco Sites حوّل تمامًا حضورنا الإلكتروني. الموقع الجديد ليس جميلاً فحسب، بل زاد حجوزاتنا المباشرة بشكل ملحوظ.",
    quote_en: "Arco Sites completely transformed our online presence. The new website is not just beautiful, but it significantly increased our direct bookings.",
    author: "Mahmoud Hassan",
    role_ar: "المدير العام، نعمة إن",
    role_en: "General Manager, Naama Inn",
  },
  {
    quote_ar: "احترافية وسرعة! الفريق فهم رؤيتنا تمامًا وقدّم منصة تعكس فعلًا فخامة عقاراتنا.",
    quote_en: "Professionalism and speed! The team understood our vision perfectly and delivered a platform that truly reflects the luxury of our properties.",
    author: "Sarah El-Sayed",
    role_ar: "المديرة، إليت للعقارات",
    role_en: "Director, Elite Properties",
  },
  {
    quote_ar: "احتجنا موقعًا يتحمل حركة مرور كثيفة وحجوزات معقدة بسلاسة. Arco Sites تجاوز توقعاتنا.",
    quote_en: "We needed a website that could handle high traffic and complex reservations effortlessly. Arco Sites delivered beyond our expectations.",
    author: "Ahmed Tariq",
    role_ar: "الرئيس التنفيذي، تيست هاوس",
    role_en: "CEO, Taste House",
  },
];

function HomePage() {
  const { t, i18n } = useTranslation("home");
  const isAr = i18n.language?.startsWith("ar");

  const serviceCards = [
    {
      icon: LayoutTemplate,
      title: t("services.design_title"),
      desc: t("services.design_desc"),
    },
    {
      icon: Zap,
      title: t("services.performance_title"),
      desc: t("services.performance_desc"),
    },
    {
      icon: Smartphone,
      title: t("services.mobile_title"),
      desc: t("services.mobile_desc"),
    },
    {
      icon: Search,
      title: t("services.seo_title"),
      desc: t("services.seo_desc"),
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }} className="relative overflow-hidden">
      {/* ── FIXED BACKGROUND BLOB ───────────────────────── */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          width: "90vw",
          height: "90vw",
          minWidth: "600px",
          minHeight: "600px",
          maxWidth: "1200px",
          maxHeight: "1200px",
          background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.25,
        }}
      />

      <div className="relative z-10">
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 text-center sm:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className={`text-5xl font-bold sm:text-6xl lg:text-[5.5rem] ${isAr ? "leading-[1.3] tracking-normal" : "leading-[1.1] tracking-tight"}`}
            style={{ color: "var(--foreground)", letterSpacing: isAr ? "normal" : "-0.03em" }}
          >
            {t("hero_title")}{" "}
            <span className={isAr ? "font-black" : "italic"} style={{ color: "var(--primary)" }}>
              {t("hero_title_accent")}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className={`mx-auto mt-6 max-w-2xl text-lg sm:text-xl ${isAr ? "leading-[1.8]" : ""}`}
            style={{ color: "var(--muted-foreground)" }}
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
          >
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--primary)", color: "#ffffff" }}
            >
              {t("hero_cta")}
            </Link>
            <Link
              to="/portfolio"
              className="text-sm font-semibold underline-offset-4 hover:underline transition-all"
              style={{ color: "var(--foreground)" }}
            >
              {t("hero_cta_secondary")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="px-6 py-12 sm:px-12 lg:px-24">
        <ScrollReveal className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-24 text-center divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: "var(--border)" }}>
            <div className="pt-6 sm:pt-0 sm:px-6 first:ps-0 flex flex-col gap-2">
              <span className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>{t("stats.projects_value")}</span>
              <span className="text-sm tracking-wide uppercase font-medium" style={{ color: "var(--muted-foreground)" }}>{t("stats.projects")}</span>
            </div>
            <div className="pt-6 sm:pt-0 sm:px-12 flex flex-col gap-2">
              <span className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>{t("stats.mobile_value")}</span>
              <span className="text-sm tracking-wide uppercase font-medium" style={{ color: "var(--muted-foreground)" }}>{t("stats.mobile")}</span>
            </div>
            <div className="pt-6 sm:pt-0 sm:px-12 flex flex-col gap-2">
              <span className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>{t("stats.response_value")}</span>
              <span className="text-sm tracking-wide uppercase font-medium" style={{ color: "var(--muted-foreground)" }}>{t("stats.response")}</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="px-6 py-32 sm:px-12 lg:px-24">
        <ScrollReveal className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "var(--foreground)" }}>
              {t("services_title")}
            </h2>
          </div>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {serviceCards.map((service, i) => (
              <div key={i} className="p-8 flex flex-col gap-4 bg-background transition-colors hover:bg-card">
                <service.icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                <h3 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────── */}
      <section className="px-6 py-32 sm:px-12 lg:px-24 border-t border-border/40">
        <ScrollReveal className="mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "var(--foreground)" }}>
              {t("process_title")}
            </h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              { num: t("process.step1_num"), title: t("process.step1_title"), desc: t("process.step1_desc") },
              { num: t("process.step2_num"), title: t("process.step2_title"), desc: t("process.step2_desc") },
              { num: t("process.step3_num"), title: t("process.step3_title"), desc: t("process.step3_desc") },
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4 border-t pt-8" style={{ borderColor: "var(--border)" }}>
                <span className="text-5xl font-light opacity-40" style={{ color: "var(--foreground)" }}>{step.num}</span>
                <h3 className="text-2xl font-semibold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                <p style={{ color: "var(--muted-foreground)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── SELECTED WORK ─────────────────────────────────── */}
      <section className="px-6 py-32 sm:px-12 lg:px-24 border-t border-border/40">
        <ScrollReveal className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "var(--foreground)" }}>
              {t("portfolio_title")}
            </h2>
            <Link
              to="/portfolio"
              className="text-sm font-semibold underline-offset-4 hover:underline transition-all whitespace-nowrap"
              style={{ color: "var(--primary)" }}
            >
              {t("portfolio_cta")}
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to="/portfolio/$projectId"
                params={{ projectId: project.id }}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl mb-4 aspect-video bg-card">
                  <img
                    src={project.mockupDesktop}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--primary)" }}>{project.category}</span>
                  <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="px-6 py-32 sm:px-12 lg:px-24 border-t border-border/40">
        <ScrollReveal className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-16" style={{ color: "var(--foreground)" }}>
            {t("testimonials_title")}
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="flex flex-col items-center gap-6 p-8 border rounded-2xl bg-background" style={{ borderColor: "var(--border)" }}>
                <p className="text-lg italic leading-relaxed" style={{ color: "var(--foreground)" }}>
                  "{isAr ? testimonial.quote_ar : testimonial.quote_en}"
                </p>
                <div className="text-center mt-auto">
                  <p className="font-bold" style={{ color: "var(--foreground)" }}>{testimonial.author}</p>
                  <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                    {isAr ? testimonial.role_ar : testimonial.role_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="px-6 py-40 text-center sm:px-12 lg:px-24 border-t border-border/40">
        <ScrollReveal className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl" style={{ color: "var(--foreground)" }}>
            {t("cta_title")}
          </h2>
          <Link
            to="/contact"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full px-12 text-sm font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--primary)", color: "#ffffff" }}
          >
            {t("cta_button")}
          </Link>
        </ScrollReveal>
      </section>
      </div>
    </div>
  );
}
