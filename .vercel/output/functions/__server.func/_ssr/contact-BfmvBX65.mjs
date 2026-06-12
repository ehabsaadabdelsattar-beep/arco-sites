import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as CircleCheckBig, f as Send, g as Mail, h as MessageSquare, i as Clock } from "../_libs/lucide-react.mjs";
const serviceOptions = ["Custom Website Design", "Website Development", "Hotel & Hospitality Website", "Business & Corporate Website", "Landing Page", "Website Redesign", "SEO Optimization", "Other"];
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex flex-1 items-center justify-center px-4 py-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-2xl font-bold tracking-tight text-foreground", style: {
        fontFamily: "var(--font-display)"
      }, children: "Message Sent!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Thank you for reaching out. We'll review your inquiry and get back to you within 24 hours." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl", style: {
        fontFamily: "var(--font-display)"
      }, children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-lg text-muted-foreground", children: "Ready to start your project? Fill out the form below and we'll get back to you with a free consultation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-border/40 bg-card/30 p-6 sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-foreground", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", type: "text", required: true, value: formData.name, onChange: (e) => setFormData({
            ...formData,
            name: e.target.value
          }), className: "mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary", placeholder: "Your name" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", type: "email", required: true, value: formData.email, onChange: (e) => setFormData({
            ...formData,
            email: e.target.value
          }), className: "mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary", placeholder: "you@company.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "block text-sm font-medium text-foreground", children: "Service Interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", required: true, value: formData.service, onChange: (e) => setFormData({
            ...formData,
            service: e.target.value
          }), className: "mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service" }),
            serviceOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: option }, option))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", rows: 5, required: true, value: formData.message, onChange: (e) => setFormData({
            ...formData,
            message: e.target.value
          }), className: "mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary", placeholder: "Tell us about your project..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto", children: [
          "Send Message",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", style: {
              fontFamily: "var(--font-display)"
            }, children: "Email Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "hello@arcosites.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", style: {
              fontFamily: "var(--font-display)"
            }, children: "Free Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Schedule a no-obligation call to discuss your project needs and goals." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", style: {
              fontFamily: "var(--font-display)"
            }, children: "Response Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We typically respond to all inquiries within 24 hours during business days." })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
