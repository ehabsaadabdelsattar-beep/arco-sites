import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as Magnetic } from "./router-BBTJEIzg.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { B as Building, a as Briefcase, S as ShoppingCart, F as FileText, Z as Zap, b as Search, R as RefreshCw, c as Smartphone, W as Wrench, d as ArrowRight } from "../_libs/lucide-react.mjs";
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
const servicesHero = "/assets/services-hero-TUFpsbFq.jpg";
const allServices = [{
  icon: Building,
  title: "Hotel & Hospitality Websites",
  description: "Booking-focused sites designed to drive reservations. Showcase your rooms, amenities, and experiences with stunning visuals that convert visitors into guests."
}, {
  icon: Briefcase,
  title: "Business & Corporate Websites",
  description: "Professional sites that build credibility and communicate your value proposition clearly to potential clients and partners."
}, {
  icon: ShoppingCart,
  title: "E-Commerce Solutions",
  description: "Scalable online stores designed to maximize sales. We integrate secure payment gateways, inventory management, and intuitive shopping experiences."
}, {
  icon: FileText,
  title: "Landing Pages",
  description: "High-converting pages focused on a single goal—whether that's lead generation, product launches, or event signups. Optimized for maximum ROI."
}, {
  icon: Zap,
  title: "Site Speed Optimization",
  description: "Lightning-fast load times through code optimization, asset compression, caching strategies, and modern frontend frameworks like React and Vite."
}, {
  icon: Search,
  title: "Search Engine Optimization (SEO)",
  description: "SEO-friendly structure from day one. Clean markup, semantic HTML, fast loading, and optimized metadata to help you rank higher on Google."
}, {
  icon: RefreshCw,
  title: "Redesign & Modernization",
  description: "Refresh outdated sites with modern design standards, improved performance, and updated technology stacks."
}, {
  icon: Smartphone,
  title: "Mobile-Responsive Design",
  description: "Every website we build looks and performs flawlessly on phones, tablets, and desktops—no exceptions."
}, {
  icon: Wrench,
  title: "Maintenance & Support",
  description: "Post-delivery technical support to keep your site secure, up-to-date, and running smoothly. We handle updates so you can focus on your business."
}];
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[500px] items-center justify-center overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        scale: 1.1,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        duration: 1.5,
        ease: "easeOut"
      }, className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: servicesHero, alt: "Digital services illustration", className: "h-full w-full object-cover opacity-20 mix-blend-screen", width: 1200, height: 800 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: staggerContainer, className: "relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeInUp, className: "text-5xl font-bold tracking-tight text-foreground sm:text-6xl", style: {
          fontFamily: "var(--font-display)"
        }, children: [
          "Digital ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Excellence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeInUp, className: "mx-auto mt-6 max-w-2xl text-xl text-muted-foreground", children: "Comprehensive web solutions tailored to your unique business needs. From design to deployment and beyond." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
      once: true,
      margin: "-100px"
    }, variants: staggerContainer, className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: allServices.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeInUp, whileHover: {
      y: -8,
      scale: 1.02
    }, className: "group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-[30px] transition-all group-hover:bg-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
        rotate: 5,
        scale: 1.1
      }, className: "relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative z-10 mt-8 text-2xl font-bold text-foreground", style: {
        fontFamily: "var(--font-display)"
      }, children: service.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 mt-4 text-base leading-relaxed text-muted-foreground", children: service.description })
    ] }, service.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden border-t border-border/40 bg-card/20 px-4 py-32 text-center sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: {
      once: true,
      margin: "-100px"
    }, variants: fadeInUp, className: "relative z-10 mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl", style: {
        fontFamily: "var(--font-display)"
      }, children: "Not Sure What You Need?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-xl text-muted-foreground", children: "Every project is unique. Let's discuss your goals and find the right solution for your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-base font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(var(--primary),0.5)]", children: [
        "Get a Free Consultation",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
      ] }) }) })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
