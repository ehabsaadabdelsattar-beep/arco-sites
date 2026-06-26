import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { Magnetic } from "../components/Magnetic";
import { useTranslation } from "react-i18next";

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
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
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
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
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
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: "var(--foreground)" }}
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

        {/* Gallery for New Projects */}
        {project.projectType === "new" && (
          <div className="mb-32">
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold sm:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
              >
                {isAr ? "معرض" : "Project "}
                <span className={isAr ? "text-primary" : "italic text-primary"}>{isAr ? " الصور" : "Gallery"}</span>
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div
                className="relative overflow-hidden rounded-2xl lg:col-span-2"
                style={{ border: "1px solid var(--border-subtle)", aspectRatio: "16/9" }}
              >
                <img
                  src={project.mockupDesktop}
                  alt={`${project.title} Desktop`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* 3. Goals & Key Improvements */}
        <div className="mb-32 grid gap-16 lg:grid-cols-2">
          {/* Goals */}
          <div
            className="rounded-3xl p-10 sm:p-12"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border-subtle)" }}
          >
            <h3
              className="mb-8 text-2xl font-bold sm:text-4xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              {isAr ? "أهداف المشروع" : "Project Goals"}
            </h3>
            <ul className="space-y-6">
              {(isAr && project.clientGoals_ar ? project.clientGoals_ar : project.clientGoals).map((goal, i) => (
                <li
                  key={i}
                  className="flex items-start text-lg sm:text-xl"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <CheckCircle2 className={`mt-1 h-6 w-6 flex-shrink-0 text-primary ${isAr ? "ml-4" : "mr-4"}`} />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Improvements */}
          <div
            className="rounded-3xl p-10 sm:p-12"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border-subtle)" }}
          >
            <h3
              className="mb-8 text-2xl font-bold sm:text-4xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              {t("case_study.key_improvements", "Key Improvements")}
            </h3>
            <ul className="space-y-6">
              {(isAr && project.keyImprovements_ar ? project.keyImprovements_ar : project.keyImprovements).map((improvement, i) => (
                <li
                  key={i}
                  className="flex items-start text-lg sm:text-xl"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <CheckCircle2 className={`mt-1 h-6 w-6 flex-shrink-0 text-primary ${isAr ? "ml-4" : "mr-4"}`} />
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Results Section */}
        <div className="mb-32 text-center">
          <h2
            className="mb-12 text-3xl font-bold sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            {isAr ? "الـ " : "The "}
            <span className={isAr ? "text-primary" : "italic text-primary"}>
              {t("case_study.results", "Results")}
            </span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(isAr && project.results_ar ? project.results_ar : project.results).map((result, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 rounded-3xl p-8"
                style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--card)" }}
              >
                <span className="text-4xl">✨</span>
                <h4
                  className="text-lg font-bold text-center"
                  style={{ color: "var(--foreground)" }}
                >
                  {result}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Live Links Section */}
        <div className="mb-12 text-center">
          <h2
            className="mb-8 text-2xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
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
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
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
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            {isAr ? (nextProject.title_ar || nextProject.title) : nextProject.title}
          </h3>
        </Link>
      </section>
    </div>
  );
}
