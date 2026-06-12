import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useLocation, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent, e as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion, u as useMotionValue, a as useSpring } from "../_libs/framer-motion.mjs";
import { X, M as Menu, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BPPb4VMp.css";
function Magnetic({ children, className = "" }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
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
      style: { x: springX, y: springY },
      className: `inline-flex ${className}`,
      children
    }
  );
}
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Arsenal" },
  { to: "/portfolio", label: "Showroom" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "Manifesto" }
];
function Header() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
      className: `fixed left-0 right-0 top-6 z-50 mx-auto w-full max-w-5xl px-4 transition-all duration-500 ${scrolled ? "top-4" : "top-8"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold tracking-tighter text-white", style: { fontFamily: "var(--font-display)" }, children: [
            "ARCO",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 md:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.to,
              className: `text-sm font-semibold uppercase tracking-widest transition-colors ${pathname === link.to ? "text-white" : "text-white/50 hover:text-white"}`,
              children: link.label
            }
          ) }, link.to)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-105",
              children: "Start Project"
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "inline-flex items-center justify-center rounded-full p-2 text-white md:hidden",
              onClick: () => setMobileOpen(!mobileOpen),
              "aria-label": "Toggle menu",
              children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            className: "absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-2xl md:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-6 text-center", children: [
              navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: link.to,
                  onClick: () => setMobileOpen(false),
                  className: `text-2xl font-bold tracking-tight transition-colors ${pathname === link.to ? "text-white" : "text-white/50 hover:text-white"}`,
                  style: { fontFamily: "var(--font-display)" },
                  children: link.label
                },
                link.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 border-t border-white/10 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setMobileOpen(false),
                  className: "inline-flex w-full items-center justify-center rounded-full bg-white py-4 text-sm font-bold uppercase tracking-wider text-black",
                  children: "Start Project"
                }
              ) })
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative w-full overflow-hidden border-t border-white/5 bg-black pt-32 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-12 lg:px-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-24 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h2",
        {
          className: "text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-[7rem] leading-none",
          style: { fontFamily: "var(--font-display)" },
          children: [
            "Let's build ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
            "the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "future." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          className: "group flex h-32 w-32 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 sm:h-40 sm:w-40",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col items-center font-bold uppercase tracking-widest", children: [
            "Get in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " Touch",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-2 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold tracking-tighter text-white", style: { fontFamily: "var(--font-display)" }, children: [
          "ARCO",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50 max-w-xs", children: "An award-winning digital studio engineering reality-bending web experiences for elite brands worldwide." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: [
          { to: "/about", label: "Manifesto" },
          { to: "/services", label: "Arsenal" },
          { to: "/portfolio", label: "Showroom" },
          { to: "/pricing", label: "Pricing" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.to, className: "group flex items-center text-sm font-medium text-white transition-colors hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:-translate-y-full", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-primary", children: item.label })
        ] }) }) }, item.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "Socials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: ["Twitter", "LinkedIn", "Instagram", "Awwwards"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group flex items-center text-sm font-medium text-white transition-colors hover:text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:-translate-y-full", children: item }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-primary", children: item })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" })
        ] }) }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/60", children: [
          "San Francisco, CA",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Remote Worldwide"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/60", children: "hello@arcosites.dev" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Arco Sites. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-6 sm:mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Terms of Service" })
      ] })
    ] })
  ] }) });
}
function Preloader() {
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, y: -50 },
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-bold tracking-tighter text-foreground", style: { fontFamily: "var(--font-display)" }, children: [
          "Arco",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: " Sites" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { x: "-100%" },
            animate: { x: "100%" },
            transition: { duration: 1.5, ease: "easeInOut" },
            className: "h-full w-full bg-primary"
          }
        ) })
      ] })
    }
  ) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arco Sites — Professional Website Design & Development" },
      { name: "description", content: "Arco Sites creates modern, high-performance websites that help businesses build trust, strengthen their online presence, and convert visitors into customers." },
      { name: "author", content: "Arco Sites" },
      { property: "og:title", content: "Arco Sites — Professional Website Design & Development" },
      { property: "og:description", content: "Modern, high-performance websites that help businesses build trust and convert visitors into customers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@arcosites" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Preloader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
const $$splitComponentImporter$6 = () => import("./services-BGFS9QFP.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Our Services — Arco Sites"
    }, {
      name: "description",
      content: "Explore our comprehensive web design and development services tailored to hotels, businesses, and startups."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./pricing-DOhHQN6B.mjs");
const Route$5 = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — Arco Sites"
    }, {
      name: "description",
      content: "Transparent pricing for professional web development services. Choose the right plan for your business."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-BfmvBX65.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Arco Sites"
    }, {
      name: "description",
      content: "Get in touch with Arco Sites to discuss your next web project. Free consultation available."
    }, {
      property: "og:title",
      content: "Contact — Arco Sites"
    }, {
      property: "og:description",
      content: "Get in touch with Arco Sites to discuss your next web project. Free consultation available."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-D80cIe6v.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Arco Sites"
    }, {
      name: "description",
      content: "Learn about Arco Sites' mission, vision, and commitment to delivering professional web solutions."
    }, {
      property: "og:title",
      content: "About Us — Arco Sites"
    }, {
      property: "og:description",
      content: "Learn about Arco Sites' mission, vision, and commitment to delivering professional web solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DQKoPd_x.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./portfolio.index-BCXVY8Lp.mjs");
const Route$1 = createFileRoute("/portfolio/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const projects = [
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
const $$splitComponentImporter = () => import("./portfolio._projectId-C84cyauW.mjs");
const Route = createFileRoute("/portfolio/$projectId")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: ({
    params
  }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw new Error("Project not found");
    return {
      project
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData.project.title} — Case Study`
    }, {
      name: "description",
      content: loaderData.project.overview
    }]
  })
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const PricingRoute = Route$5.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const PortfolioIndexRoute = Route$1.update({
  id: "/portfolio/",
  path: "/portfolio/",
  getParentRoute: () => Route$7
});
const PortfolioProjectIdRoute = Route.update({
  id: "/portfolio/$projectId",
  path: "/portfolio/$projectId",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PricingRoute,
  ServicesRoute,
  PortfolioProjectIdRoute,
  PortfolioIndexRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Magnetic as M,
  Route as R,
  projects as p,
  router as r
};
