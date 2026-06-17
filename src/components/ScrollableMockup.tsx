import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollableMockupProps {
  imageSrc: string;
}

export function ScrollableMockup({ imageSrc }: ScrollableMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-4xl pt-8">
      {/* Laptop Frame */}
      <div className="relative rounded-t-2xl border-[2px] border-b-0 border-[#222] bg-[#111] p-2">
        <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#333]" />

        {/* Screen */}
        <div className="aspect-[16/10] w-full overflow-hidden rounded bg-black relative">
          <motion.img
            style={{ y }}
            src={imageSrc}
            alt="Live Preview"
            className="w-full object-cover origin-top"
          />
        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative z-10 -ml-[2.5%] h-4 w-[105%] rounded-b-2xl bg-[#222]">
        <div className="absolute left-1/2 top-0 h-1.5 w-1/4 -translate-x-1/2 rounded-b-md bg-[#111]" />
      </div>
    </div>
  );
}
