export function EngineeringExcellence() {
  const cards = [
    {
      title: "Custom Design",
      desc: "No templates. No compromises. Pure bespoke design tailored to your brand's unique DNA.",
    },
    {
      title: "Performance First",
      desc: "Lightning-fast load times. Optimized assets. A technical foundation built for speed.",
    },
    {
      title: "Conversion Focused",
      desc: "Every pixel is engineered to guide users towards your ultimate business goals.",
    },
    {
      title: "SEO Optimized",
      desc: "Built with technical SEO best practices to ensure you dominate search engine rankings.",
    },
  ];

  return (
    <section className="py-32 sm:py-48" style={{ backgroundColor: "var(--background)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-24">
        <div className="mb-32">
          <h2
            className="text-sm font-bold uppercase tracking-[0.4em] mb-6"
            style={{ color: "var(--muted-foreground)" }}
          >
            Engineering Excellence
          </h2>
          <h3
            className="text-4xl sm:text-6xl tracking-tight max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--foreground)" }}
          >
            The Architecture of{" "}
            <span className="italic" style={{ color: "var(--muted-foreground)" }}>
              Trust
            </span>
            .
          </h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Lighthouse Score */}
          <div
            className="flex flex-col items-start justify-between pt-8 lg:col-span-5"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span
              className="text-8xl sm:text-[10rem] font-bold tracking-tighter leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              100
            </span>
            <div className="mt-8">
              <h4 className="mb-2 text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                Flawless Performance
              </h4>
              <p className="max-w-sm" style={{ color: "var(--muted-foreground)" }}>
                Perfect Lighthouse scores. Mobile optimized. Instant load times. We build for the
                top 1%.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7">
            {cards.map((card) => (
              <div
                key={card.title}
                className="pt-8"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <h4 className="mb-4 text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                  {card.title}
                </h4>
                <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
