import { useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "arco-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Read the actual current state of the DOM, which was already set by the flash-prevention script in __root.tsx
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("light") ? "light" : "dark";
    }
    return "dark";
  });

  // Apply class to <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
