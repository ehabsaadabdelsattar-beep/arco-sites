import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TextReveal({ text }: { text: string }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={container}
      className="flex flex-wrap text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        // make the end a bit further out for a smoother blend
        const end = start + (1 / words.length) * 2;
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        const y = useTransform(scrollYProgress, [start, end], [20, 0]);

        return (
          <span key={i} className="mr-[2vw] relative inline-block">
            <motion.span style={{ opacity, y }} className="inline-block">
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
