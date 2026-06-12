export function EngineeringExcellence() {
  const cards = [
    { title: "Custom Design", desc: "No templates. No compromises. Pure bespoke design tailored to your brand's unique DNA." },
    { title: "Performance First", desc: "Lightning-fast load times. Optimized assets. A technical foundation built for speed." },
    { title: "Conversion Focused", desc: "Every pixel is engineered to guide users towards your ultimate business goals." },
    { title: "SEO Optimized", desc: "Built with technical SEO best practices to ensure you dominate search engine rankings." },
  ];

  return (
    <section className="bg-[#000000] py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-24">
        
        <div className="mb-32">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-white/40 mb-6">
            Engineering Excellence
          </h2>
          <h3 className="text-4xl sm:text-6xl tracking-tight text-white max-w-3xl leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
            The Architecture of <span className="italic text-white/60">Trust</span>.
          </h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Lighthouse Score */}
          <div className="flex flex-col items-start justify-between border-t border-[#222] pt-8 lg:col-span-5">
            <span className="text-8xl sm:text-[10rem] font-bold tracking-tighter text-white leading-none" style={{ fontFamily: "var(--font-display)" }}>
              100
            </span>
            <div className="mt-8">
              <h4 className="mb-2 text-2xl font-bold text-white">Flawless Performance</h4>
              <p className="text-white/50 max-w-sm">Perfect Lighthouse scores. Mobile optimized. Instant load times. We build for the top 1%.</p>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7">
            {cards.map((card) => (
              <div key={card.title} className="border-t border-[#222] pt-8">
                <h4 className="mb-4 text-2xl font-bold text-white">
                  {card.title}
                </h4>
                <p className="text-lg text-white/50">
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
