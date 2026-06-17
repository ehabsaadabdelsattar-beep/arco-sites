import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const footerLinks = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer
      className="px-6 py-16 sm:px-12 lg:px-24"
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Premium web design and development for hotels and businesses.
            </p>
            <div className="mt-6 space-y-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <p>Beni Suef, Egypt</p>
              <a
                href="tel:+201026296556"
                className="block transition-colors hover:opacity-70"
                style={{ color: "var(--muted-foreground)" }}
              >
                +20 102 629 6556
              </a>
              <a
                href="mailto:arcosites@gmail.com"
                className="block transition-colors hover:opacity-70"
                style={{ color: "var(--muted-foreground)" }}
              >
                arcosites@gmail.com
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--muted-foreground)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div
          className="mt-16 flex flex-col items-start justify-between gap-4 pt-8 text-xs sm:flex-row sm:items-center"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--muted-foreground)",
          }}
        >
          <p>© {new Date().getFullYear()} Arco Sites. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:opacity-70">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:opacity-70">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
