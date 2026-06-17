import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extended duration to 1800ms to allow the full cinematic animation to play out elegantly
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "var(--background)" }}
        >
          {/* Animated Logos */}
          <div className="relative flex items-center justify-center">
            {/* Dark Theme Logo */}
            <motion.img
              src="/arco-logo-white.png"
              alt="Arco Sites"
              initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.15, filter: "blur(12px)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="h-28 sm:h-32 w-auto block light:hidden"
            />
            {/* Light Theme Logo */}
            <motion.img
              src="/arco-logo-purple.png"
              alt="Arco Sites"
              initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.15, filter: "blur(12px)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="h-28 sm:h-32 w-auto hidden light:block"
            />
          </div>

          {/* Elegant Progress Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-[2px] w-64 overflow-hidden rounded-full" 
            style={{ backgroundColor: "var(--border)" }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1],
                repeat: Infinity,
              }}
              className="h-full w-full"
              style={{ backgroundColor: "var(--primary)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
