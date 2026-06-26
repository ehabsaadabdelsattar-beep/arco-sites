import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");

  const footerLinks = [
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.work"), to: "/portfolio" },
    { label: t("nav.pricing"), to: "/pricing" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.contact"), to: "/contact" },
  ];

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
              {t("footer.tagline")}
            </p>
            <div className="mt-6 space-y-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <p>{t("footer.location")}</p>
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
          <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
