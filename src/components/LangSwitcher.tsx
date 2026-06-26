import { useTranslation } from "react-i18next";
import i18n from "../lib/i18n";
import { useEffect } from "react";

export function LangSwitcher() {
  const { i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language?.startsWith("ar") ? "ar" : "en";

  const toggle = () => {
    const next = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(next);
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };

  // Sync dir on mount
  useEffect(() => {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="inline-flex h-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition-all hover:opacity-80"
      style={{
        border: "1px solid var(--border)",
        color: "var(--foreground)",
        backgroundColor: "var(--card)",
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.03em",
      }}
    >
      {currentLang === "ar" ? "EN" : "AR"}
    </button>
  );
}
