import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { useTranslation } from "react-i18next";


export function Header() {
  const { t } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const navLinks = [
    { to: "/services", label: t("nav.services") },
    { to: "/portfolio", label: t("nav.work") },
    { to: "/pricing", label: t("nav.pricing") },
    { to: "/about", label: t("nav.about") },
  ];


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 transition-all duration-300 sm:px-12 lg:px-24"
        style={{
          backgroundColor: scrolled ? "var(--surface-overlay)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: pathname === link.to ? "var(--nav-text-active)" : "var(--nav-text)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <LangSwitcher />
          <Link
            to="/contact"
            className="inline-flex h-9 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "var(--primary)",
              color: "#ffffff",
            }}
          >
            {t("nav.start_project")}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
            style={{ color: "var(--nav-text-active)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 md:hidden"
          style={{ color: "var(--nav-text-active)" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-14"
            style={{
              backgroundColor: "var(--surface-overlay-strong)",
              backdropFilter: "blur(30px) saturate(180%)",
              borderBottom: "1px solid var(--nav-border)",
            }}
          >
            <div className="mx-auto max-w-7xl px-6 py-8 sm:px-12 lg:px-24">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center py-3 text-2xl font-semibold tracking-tight transition-colors duration-200"
                    style={{
                      color: pathname === link.to ? "var(--nav-text-active)" : "var(--nav-text)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div
                className="mt-8 flex flex-col gap-4 pt-8"
                style={{ borderTop: "1px solid var(--nav-border)" }}
              >
                <LangSwitcher />
                <ThemeToggle />
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full py-4 text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#ffffff",
                  }}
                >
                  {t("nav.start_project")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
