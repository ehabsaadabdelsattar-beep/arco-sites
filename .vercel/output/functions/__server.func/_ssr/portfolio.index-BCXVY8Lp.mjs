import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as projects } from "./router-BBTJEIzg.mjs";
import { m as motion, A as AnimatePresence, u as useMotionValue, a as useSpring, c as useTransform } from "../_libs/framer-motion.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function TiltCard({ children, className = "" }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      },
      className: `relative ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "translateZ(50px)" }, className: "h-full w-full", children })
    }
  );
}
const filters = ["All", "Hospitality", "Corporate", "E-Commerce", "Digital Platforms"];
const getCategoryGroup = (category) => {
  const cat = category.toLowerCase();
  if (cat.includes("hotel") || cat.includes("resort") || cat.includes("restaurant") || cat.includes("travel")) return "Hospitality";
  if (cat.includes("corporate") || cat.includes("construction") || cat.includes("medical") || cat.includes("real estate") || cat.includes("law")) return "Corporate";
  if (cat.includes("e-commerce") || cat.includes("furniture") || cat.includes("gym")) return "E-Commerce";
  return "Digital Platforms";
};
function PortfolioIndexPage() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const filteredProjects = projects.filter((project) => activeFilter === "All" ? true : getCategoryGroup(project.category) === activeFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative px-4 sm:px-12 lg:px-24 mb-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.8
    }, className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-6xl font-bold tracking-tighter text-white sm:text-8xl lg:text-[8rem]", style: {
        fontFamily: "var(--font-display)"
      }, children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "Showroom" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xl text-white/50 max-w-2xl mx-auto", children: "Explore 15 distinct, award-winning case studies representing our finest engineering and design achievements across global industries." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 sm:px-12 lg:px-24 mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4", children: filters.map((filter) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveFilter(filter), className: `rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === filter ? "bg-white text-black" : "border border-white/10 bg-black text-white/50 hover:border-white/30 hover:text-white"}`, children: filter }, filter)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 sm:px-12 lg:px-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: filteredProjects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, initial: {
      opacity: 0,
      scale: 0.9
    }, animate: {
      opacity: 1,
      scale: 1
    }, exit: {
      opacity: 0,
      scale: 0.9
    }, transition: {
      duration: 0.5
    }, className: `relative ${i % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/portfolio/${project.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TiltCard, { className: "group h-[500px] w-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#050505]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.heroImage, alt: project.title, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between p-8 sm:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md", children: project.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xl", children: "↗" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "translate-y-8 transition-transform duration-500 group-hover:translate-y-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-white sm:text-5xl", style: {
            fontFamily: "var(--font-display)"
          }, children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100", children: [
            project.technologies.slice(0, 3).map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-primary uppercase tracking-wider", children: tech }, tech)),
            project.technologies.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-white/40 uppercase tracking-wider", children: [
              "+",
              project.technologies.length - 3,
              " MORE"
            ] })
          ] })
        ] })
      ] })
    ] }) }) }, project.id)) }) }) })
  ] });
}
export {
  PortfolioIndexPage as component
};
