import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";


export const Route = createFileRoute("/pricing")({
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
    description:
      "Ideal for growing businesses that need a professional, multi-page online presence.",
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
  const { t } = useTranslation("pricing");

  const pricingPlans = [
    {
      name: t("plans.landing_name"),
      description: t("plans.landing_desc"),
      price: t("plans.landing_price"),
      features: [
        { name: t("features.single_page"), included: true },
        { name: t("features.mobile_responsive"), included: true },
        { name: t("features.basic_seo"), included: true },
        { name: t("features.contact_form"), included: true },
        { name: t("features.fast_load"), included: true },
        { name: t("features.cms"), included: false },
        { name: t("features.ecommerce_func"), included: false },
        { name: t("features.custom_animations"), included: false },
      ],
      cta: t("plans.landing_cta"),
      popular: false,
    },
    {
      name: t("plans.corporate_name"),
      description: t("plans.corporate_desc"),
      price: t("plans.corporate_price"),
      features: [
        { name: t("features.up_to_10"), included: true },
        { name: t("features.mobile_responsive"), included: true },
        { name: t("features.advanced_seo"), included: true },
        { name: t("features.cms_blog"), included: true },
        { name: t("features.interactions"), included: true },
        { name: t("features.fast_2s"), included: true },
        { name: t("features.ecommerce_func"), included: false },
        { name: t("features.payment"), included: false },
      ],
      cta: t("plans.corporate_cta"),
      popular: true,
    },
    {
      name: t("plans.ecommerce_name"),
      description: t("plans.ecommerce_desc"),
      price: t("plans.ecommerce_price"),
      features: [
        { name: t("features.unlimited_products"), included: true },
        { name: t("features.mobile_responsive"), included: true },
        { name: t("features.advanced_ecommerce_seo"), included: true },
        { name: t("features.cms"), included: true },
        { name: t("features.ecommerce_func"), included: true },
        { name: t("features.payment"), included: true },
        { name: t("features.inventory"), included: true },
        { name: t("features.interactions"), included: true },
      ],
      cta: t("plans.ecommerce_cta"),
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/30 px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("page_title")}
          </h1>
          <p className="mx-auto mt-6 text-lg text-muted-foreground">
            {t("page_desc")}
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
                plan.popular
                  ? "border-primary bg-card shadow-xl shadow-primary/10"
                  : "border-border/40 bg-card/50"
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-foreground">
                  {t("popular_badge")}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 border-b border-border/40 pb-8">
                <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t("quote_note")}</div>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-muted-foreground/40" />
                    )}
                    <span
                      className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/60"}`}
                    >
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
          <h2
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("custom_title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("custom_desc")}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {t("custom_cta")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
