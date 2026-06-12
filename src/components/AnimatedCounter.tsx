"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span className="inline-flex">
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
