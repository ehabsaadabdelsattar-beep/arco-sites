import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route, p as projects, M as Magnetic } from "./router-BBTJEIzg.mjs";
import { D as DeviceMockup } from "./DeviceMockup-DzY7XQKJ.mjs";
import { b as useScroll, c as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { j as ArrowLeft, k as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CaseStudyPage() {
  const {
    project
  } = Route.useLoaderData();
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const heroRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: heroRef, className: "relative flex h-[80vh] items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y,
        opacity
      }, className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.heroImage, alt: project.title, className: "h-full w-full object-cover mix-blend-luminosity opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md", children: project.category }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
          opacity: 0,
          y: 40
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 0.2
        }, className: "text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl", style: {
          fontFamily: "var(--font-display)"
        }, children: project.title })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-24 sm:px-12 lg:px-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-32 rounded-3xl border border-white/5 bg-[#050505] p-8 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "group mb-12 inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" }),
          "Back to Showroom"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-white", children: project.year })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-lg font-medium text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "UI/UX Design" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Frontend Engineering" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Motion Design" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "Tech Stack" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80", children: tech }, tech)) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-24 lg:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-8 text-3xl font-bold text-white sm:text-5xl", style: {
            fontFamily: "var(--font-display)"
          }, children: [
            "The ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary italic", children: "Vision" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl leading-relaxed text-white/60 sm:text-2xl", children: project.overview })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 text-3xl font-bold text-white sm:text-5xl", style: {
            fontFamily: "var(--font-display)"
          }, children: "Client Goals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: project.clientGoals.map((goal, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start text-lg text-white/70 sm:text-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: goal })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/5 bg-[#0a0a0a] p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "The Approach" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-white/70", children: project.designProcess })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-white/5 bg-[#0a0a0a] p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "The Challenge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-white/70", children: project.challenges })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceMockup, { type: "desktop", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.mockupDesktop, alt: "Desktop Preview", className: "h-full w-full object-cover" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 lg:order-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-8 text-3xl font-bold text-white sm:text-5xl", style: {
              fontFamily: "var(--font-display)"
            }, children: [
              "The ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary italic", children: "Impact" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-6", children: project.results.map((result, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-l-2 border-primary pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-white sm:text-3xl", style: {
                fontFamily: "var(--font-display)"
              }, children: result.split(" ")[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg text-white/60", children: result.substring(result.indexOf(" ") + 1) })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceMockup, { type: "mobile", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.mockupMobile, alt: "Mobile Preview", className: "h-full w-full object-cover" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white sm:text-5xl", style: {
            fontFamily: "var(--font-display)"
          }, children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: project.gallery.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden rounded-3xl border border-white/5 ${i === 0 ? "sm:col-span-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `Gallery ${i}`, className: "h-full w-full object-cover transition-transform duration-1000 hover:scale-105", style: {
            aspectRatio: i === 0 ? "16/9" : "4/3"
          } }) }, i)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-t border-white/5 bg-[#050505] px-4 py-48 text-center sm:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0%,transparent_50%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white/40", children: "Next Case Study" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-16 text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl", style: {
          fontFamily: "var(--font-display)"
        }, children: nextProject.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/portfolio/${nextProject.id}`, className: "group flex h-32 w-32 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold uppercase tracking-widest text-xs", children: "Explore" }) }) })
      ] })
    ] })
  ] });
}
export {
  CaseStudyPage as component
};
