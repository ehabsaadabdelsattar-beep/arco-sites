import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const heights = {
    sm: "h-8",
    md: "h-14",
    lg: "h-20",
  };

  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      {/* Dark theme logo (shown by default, hidden when .light is active) */}
      <img
        src="/arco-logo-white.png"
        alt="ARCO SITES"
        className={`${size === "sm" ? "h-8" : size === "md" ? "h-14" : "h-20"} w-auto transition-opacity duration-300 block light:hidden`}
      />

      {/* Light theme logo (hidden by default, shown when .light is active) */}
      <img
        src="/arco-logo-purple.png"
        alt="ARCO SITES"
        className={`${size === "sm" ? "h-8" : size === "md" ? "h-14" : "h-20"} w-auto transition-opacity duration-300 hidden light:block`}
      />
    </Link>
  );
}
