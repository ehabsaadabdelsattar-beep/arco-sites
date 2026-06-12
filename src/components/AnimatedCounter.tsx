import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useMotionValueEvent(springValue, "change", (latest) => {
    if (ref.current) {
      ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
    }
  });

  return (
    <span className="inline-flex">
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
