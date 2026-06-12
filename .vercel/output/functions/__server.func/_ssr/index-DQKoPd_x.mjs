import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as projects } from "./router-BBTJEIzg.mjs";
import { D as DeviceMockup } from "./DeviceMockup-DzY7XQKJ.mjs";
import { m as motion, b as useScroll, c as useTransform, u as useMotionValue, a as useSpring, d as useInView } from "../_libs/framer-motion.mjs";
import { d as ArrowRight } from "../_libs/lucide-react.mjs";
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
function AnimatedCounter({ value, suffix = "", prefix = "" }) {
  const ref = reactExports.useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  reactExports.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  reactExports.useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex", children: [
    prefix,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, children: "0" }),
    suffix
  ] });
}
function ProblemSolution() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#000000] py-32 sm:py-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-12 lg:px-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-24 flex flex-col items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold uppercase tracking-[0.4em] text-white/40", children: "The Landscape" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-normal tracking-tight text-white/40 max-w-2xl leading-tight", style: { fontFamily: "var(--font-display)" }, children: "Slow load times, outdated designs, and poor mobile experiences are silently destroying conversion rates." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8 },
        className: "flex flex-col items-end text-right",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-4 text-sm font-bold uppercase tracking-[0.4em] text-white", children: "The Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-5xl sm:text-7xl lg:text-[6rem] leading-[1.1] tracking-tight text-white max-w-3xl", style: { fontFamily: "var(--font-serif)" }, children: [
            "Arco Sites engineers ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-white/70", children: "the standard." })
          ] })
        ]
      }
    )
  ] }) });
}
function EngineeringExcellence() {
  const cards = [
    { title: "Custom Design", desc: "No templates. No compromises. Pure bespoke design tailored to your brand's unique DNA." },
    { title: "Performance First", desc: "Lightning-fast load times. Optimized assets. A technical foundation built for speed." },
    { title: "Conversion Focused", desc: "Every pixel is engineered to guide users towards your ultimate business goals." },
    { title: "SEO Optimized", desc: "Built with technical SEO best practices to ensure you dominate search engine rankings." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#000000] py-32 sm:py-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-12 lg:px-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold uppercase tracking-[0.4em] text-white/40 mb-6", children: "Engineering Excellence" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl sm:text-6xl tracking-tight text-white max-w-3xl leading-tight", style: { fontFamily: "var(--font-serif)" }, children: [
        "The Architecture of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-white/60", children: "Trust" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between border-t border-[#222] pt-8 lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-8xl sm:text-[10rem] font-bold tracking-tighter text-white leading-none", style: { fontFamily: "var(--font-display)" }, children: "100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-2xl font-bold text-white", children: "Flawless Performance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-sm", children: "Perfect Lighthouse scores. Mobile optimized. Instant load times. We build for the top 1%." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-12 sm:grid-cols-2 lg:col-span-7", children: cards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[#222] pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-2xl font-bold text-white", children: card.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/50", children: card.desc })
      ] }, card.title)) })
    ] })
  ] }) });
}
function ScrollableMockup({ imageSrc }) {
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: "mx-auto w-full max-w-4xl pt-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-t-2xl border-[2px] border-b-0 border-[#222] bg-[#111] p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#333]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] w-full overflow-hidden rounded bg-black relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              style: { y },
              src: imageSrc,
              alt: "Live Preview",
              className: "w-full object-cover origin-top"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 -ml-[2.5%] h-4 w-[105%] rounded-b-2xl bg-[#222]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-1.5 w-1/4 -translate-x-1/2 rounded-b-md bg-[#111]" }) })
      ]
    }
  );
}
const featuredProjects = projects.slice(0, 3);
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#000000] text-white selection:bg-white selection:text-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative flex min-h-[100svh] flex-col justify-center px-4 pt-24 sm:px-12 lg:px-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-8 block text-xs font-bold uppercase tracking-[0.4em] text-white/50", children: "Arco Sites" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-5xl text-[12vw] font-normal leading-[1.05] tracking-tight sm:text-7xl lg:text-[7.5rem]", style: {
          fontFamily: "var(--font-serif)"
        }, children: [
          "We build digital ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-white/70", children: "experiences" }),
          " that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "demand ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-white", children: "attention." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 1,
        delay: 0.4
      }, className: "mt-24 flex flex-col items-start justify-between gap-12 sm:flex-row sm:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8 text-xl leading-relaxed text-white/50", children: "Award-winning web development and design for global brands. No templates. Pure engineering." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-l-2 border-[#333] pl-4 text-lg font-medium text-white/90", children: [
            `"We don't build websites. `,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            'We build digital trust."'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "inline-flex items-center justify-center border-b border-white pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-70", children: "Explore Portfolio" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSolution, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-[#000000]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-12 max-w-7xl px-4 py-32 sm:px-12 lg:px-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/40", children: "Selected Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-[#222]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-32 pb-32", children: featuredProjects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 50
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-100px"
      }, transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-7xl px-4 sm:px-12 lg:px-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold uppercase tracking-widest text-white/50", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-12 bg-[#333]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-white/50", children: project.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-8 text-5xl tracking-tight sm:text-6xl lg:text-7xl", style: {
            fontFamily: "var(--font-serif)"
          }, children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 space-y-6 border-l border-[#222] pl-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-xs font-bold uppercase tracking-widest text-white/40", children: "The Challenge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60", children: project.clientGoals[0] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-xs font-bold uppercase tracking-widest text-white", children: "The Result" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-white", children: project.results[0] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/portfolio/${project.id}`, className: "group inline-flex items-center gap-4 border-b border-white/30 pb-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white", children: [
            "Read Case Study",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-2" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeviceMockup, { type: "desktop", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.mockupDesktop, alt: project.title, className: "h-full w-full object-cover", loading: "lazy" }) }) })
      ] }) }) }, project.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#000000] py-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-12 lg:px-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold uppercase tracking-[0.4em] text-white/40 mb-6", children: "Interactive Reality" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl sm:text-6xl tracking-tight", style: {
          fontFamily: "var(--font-serif)"
        }, children: [
          "Experience the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-white/60", children: "Live Feel" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollableMockup, { imageSrc: "https://images.unsplash.com/photo-1542314831-c6a4d2748651?q=80&w=2500&auto=format&fit=crop" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EngineeringExcellence, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#000000] px-4 py-32 text-white sm:px-12 lg:px-24 border-t border-[#111]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 border-t border-[#222] pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-bold tracking-tighter text-white sm:text-7xl", style: {
          fontFamily: "var(--font-display)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: 25, suffix: "+" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Projects Delivered" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 border-t border-[#222] pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-bold tracking-tighter text-white sm:text-7xl", style: {
          fontFamily: "var(--font-display)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: 100, suffix: "%" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Client Satisfaction" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 border-t border-[#222] pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-bold tracking-tighter text-white sm:text-7xl", style: {
          fontFamily: "var(--font-display)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: 5, suffix: "+" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Industries Served" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 border-t border-[#222] pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-bold tracking-tighter text-white sm:text-7xl", style: {
          fontFamily: "var(--font-display)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: 24, suffix: "/7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Support Availability" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#000000] py-48 border-t border-[#111]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 text-center sm:px-12 lg:px-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-12 text-5xl sm:text-7xl lg:text-[7rem] tracking-tight", style: {
        fontFamily: "var(--font-serif)"
      }, children: [
        "Ready to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-white/60", children: "dominate" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-8 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center bg-white px-12 py-5 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-80", children: "Start a Project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "inline-flex items-center justify-center border-b border-white/30 pb-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white", children: "View All Work" })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
