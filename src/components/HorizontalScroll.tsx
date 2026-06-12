import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, ReactNode } from "react";

export function HorizontalScroll({ children }: { children: ReactNode }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps scroll progress to an x-translation. 
  // We translate leftwards by subtracting a percentage.
  // The exact percentage might need to be tweaked depending on the number of cards.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-4 sm:px-24">
          {children}
        </motion.div>
      </div>
    </section>
  );
}
