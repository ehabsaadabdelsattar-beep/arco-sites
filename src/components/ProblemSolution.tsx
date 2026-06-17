import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="py-32 sm:py-48" style={{ backgroundColor: "var(--background)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-24">
        <div className="mb-24 flex flex-col items-start gap-4">
          <span
            className="text-sm font-bold uppercase tracking-[0.4em]"
            style={{ color: "var(--muted-foreground)" }}
          >
            The Landscape
          </span>
          <h2
            className="text-3xl sm:text-5xl font-normal tracking-tight max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--muted-foreground)" }}
          >
            Slow load times, outdated designs, and poor mobile experiences are silently destroying
            conversion rates.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-end text-right"
        >
          <span
            className="mb-4 text-sm font-bold uppercase tracking-[0.4em]"
            style={{ color: "var(--foreground)" }}
          >
            The Solution
          </span>
          <h3
            className="text-5xl sm:text-7xl lg:text-[6rem] leading-[1.1] tracking-tight max-w-3xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--foreground)" }}
          >
            Arco Sites engineers <br />
            <span className="italic" style={{ color: "var(--muted-foreground)" }}>
              the standard.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
