import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "./Magnetic";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Arsenal" },
  { to: "/portfolio", label: "Showroom" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "Manifesto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`fixed left-0 right-0 top-6 z-50 mx-auto w-full max-w-5xl px-4 transition-all duration-500 ${scrolled ? "top-4" : "top-8"}`}
    >
      <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
        <Magnetic>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-white" style={{ fontFamily: "var(--font-display)" }}>
              ARCO<span className="text-primary">.</span>
            </span>
          </Link>
        </Magnetic>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Magnetic key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                  pathname === link.to
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </Magnetic>
          ))}
        </nav>

        <div className="hidden md:block">
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
            >
              Start Project
            </Link>
          </Magnetic>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-bold tracking-tight transition-colors ${
                    pathname === link.to
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-white/10 pt-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white py-4 text-sm font-bold uppercase tracking-wider text-black"
                >
                  Start Project
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
