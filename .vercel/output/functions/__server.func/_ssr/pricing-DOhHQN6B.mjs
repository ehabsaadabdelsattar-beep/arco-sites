import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Check, X } from "../_libs/lucide-react.mjs";
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
const pricingPlans = [{
  name: "Landing Page",
  description: "Perfect for marketing campaigns, product launches, or single-product businesses.",
  price: "Starting at $999",
  features: [{
    name: "Single Page Design",
    included: true
  }, {
    name: "Mobile Responsive",
    included: true
  }, {
    name: "Basic SEO Setup",
    included: true
  }, {
    name: "Contact Form Integration",
    included: true
  }, {
    name: "Fast Load Times",
    included: true
  }, {
    name: "CMS Integration",
    included: false
  }, {
    name: "E-Commerce Functionality",
    included: false
  }, {
    name: "Custom Animations",
    included: false
  }],
  cta: "Start with a Landing Page",
  popular: false
}, {
  name: "Corporate Website",
  description: "Ideal for growing businesses that need a professional, multi-page online presence.",
  price: "Starting at $2,499",
  features: [{
    name: "Up to 10 Pages",
    included: true
  }, {
    name: "Mobile Responsive",
    included: true
  }, {
    name: "Advanced SEO Optimization",
    included: true
  }, {
    name: "CMS Integration (Blog/News)",
    included: true
  }, {
    name: "Custom Animations & Interactions",
    included: true
  }, {
    name: "Fast Load Times (< 2s)",
    included: true
  }, {
    name: "E-Commerce Functionality",
    included: false
  }, {
    name: "Payment Gateway Integration",
    included: false
  }],
  cta: "Build Your Corporate Site",
  popular: true
}, {
  name: "E-Commerce Store",
  description: "Full-featured online store to sell products and manage inventory efficiently.",
  price: "Starting at $4,999",
  features: [{
    name: "Unlimited Products & Categories",
    included: true
  }, {
    name: "Mobile Responsive",
    included: true
  }, {
    name: "Advanced E-Commerce SEO",
    included: true
  }, {
    name: "CMS Integration",
    included: true
  }, {
    name: "E-Commerce Functionality",
    included: true
  }, {
    name: "Payment Gateway Integration",
    included: true
  }, {
    name: "Inventory & Order Management",
    included: true
  }, {
    name: "Custom Animations & Interactions",
    included: true
  }],
  cta: "Launch Your Online Store",
  popular: false
}];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 px-4 py-20 text-center sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl", style: {
        fontFamily: "var(--font-display)"
      }, children: "Transparent Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 text-lg text-muted-foreground", children: "No hidden fees. We provide clear, upfront pricing based on your project's scope and requirements. Every project is unique, so these prices serve as a starting point." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 lg:grid-cols-3", children: pricingPlans.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col rounded-3xl border ${plan.popular ? "border-primary bg-card shadow-xl shadow-primary/10" : "border-border/40 bg-card/50"} p-8`, children: [
      plan.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-foreground", children: "Most Popular" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", style: {
          fontFamily: "var(--font-display)"
        }, children: plan.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground min-h-[40px]", children: plan.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 border-b border-border/40 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-foreground", children: plan.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: "Custom quote required" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-8 flex-1 space-y-4", children: plan.features.map((feature, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        feature.included ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 shrink-0 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 shrink-0 text-muted-foreground/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/60"}`, children: feature.name })
      ] }, j)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: `inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold transition-colors ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`, children: plan.cta })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/40 bg-card/30 px-4 py-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl", style: {
        fontFamily: "var(--font-display)"
      }, children: "Need a Custom Solution?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "If your project requires complex web applications, custom databases, or specialized API integrations, we offer custom development services tailored specifically to your needs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground", children: "Request a Custom Quote" }) })
    ] }) })
  ] });
}
export {
  PricingPage as component
};
