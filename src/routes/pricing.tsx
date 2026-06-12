import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Arco Sites" },
      { name: "description", content: "Transparent pricing for professional web development services. Choose the right plan for your business." },
    ],
  }),
  component: PricingPage,
});

const pricingPlans = [
  {
    name: "Landing Page",
    description: "Perfect for marketing campaigns, product launches, or single-product businesses.",
    price: "Starting at $999",
    features: [
      { name: "Single Page Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "Fast Load Times", included: true },
      { name: "CMS Integration", included: false },
      { name: "E-Commerce Functionality", included: false },
      { name: "Custom Animations", included: false },
    ],
    cta: "Start with a Landing Page",
    popular: false,
  },
  {
    name: "Corporate Website",
    description: "Ideal for growing businesses that need a professional, multi-page online presence.",
    price: "Starting at $2,499",
    features: [
      { name: "Up to 10 Pages", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Advanced SEO Optimization", included: true },
      { name: "CMS Integration (Blog/News)", included: true },
      { name: "Custom Animations & Interactions", included: true },
      { name: "Fast Load Times (< 2s)", included: true },
      { name: "E-Commerce Functionality", included: false },
      { name: "Payment Gateway Integration", included: false },
    ],
    cta: "Build Your Corporate Site",
    popular: true,
  },
  {
    name: "E-Commerce Store",
    description: "Full-featured online store to sell products and manage inventory efficiently.",
    price: "Starting at $4,999",
    features: [
      { name: "Unlimited Products & Categories", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "Advanced E-Commerce SEO", included: true },
      { name: "CMS Integration", included: true },
      { name: "E-Commerce Functionality", included: true },
      { name: "Payment Gateway Integration", included: true },
      { name: "Inventory & Order Management", included: true },
      { name: "Custom Animations & Interactions", included: true },
    ],
    cta: "Launch Your Online Store",
    popular: false,
  },
];

function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/30 px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
            Transparent Pricing
          </h1>
          <p className="mx-auto mt-6 text-lg text-muted-foreground">
            No hidden fees. We provide clear, upfront pricing based on your project's scope and requirements. Every project is unique, so these prices serve as a starting point.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-3xl border ${
                plan.popular ? "border-primary bg-card shadow-xl shadow-primary/10" : "border-border/40 bg-card/50"
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-foreground">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8 border-b border-border/40 pb-8">
                <div className="text-3xl font-bold text-foreground">
                  {plan.price}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Custom quote required</div>
              </div>
              
              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-muted-foreground/40" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/60"}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Support Info */}
      <section className="border-t border-border/40 bg-card/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-muted-foreground">
            If your project requires complex web applications, custom databases, or specialized API integrations, we offer custom development services tailored specifically to your needs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
