import { ReactNode } from "react";

// ─── Context Themes ────────────────────────────────────────────────────────
const themes: Record<string, { bg: string; accent: string; label: string }> = {
  hotel: {
    bg: "linear-gradient(135deg, #1a0f0a 0%, #2d1a12 40%, #1a2030 100%)",
    accent: "#c9a96e",
    label: "Hotel & Hospitality",
  },
  coastal: {
    bg: "linear-gradient(135deg, #050e1d 0%, #0a2540 40%, #0d4a6e 100%)",
    accent: "#4db8e8",
    label: "Resort & Coastal",
  },
  boutique: {
    bg: "linear-gradient(135deg, #1c1008 0%, #2e1d10 40%, #1a1520 100%)",
    accent: "#d4a87a",
    label: "Boutique Hotel",
  },
  realestate: {
    bg: "linear-gradient(135deg, #080c10 0%, #101820 40%, #1a2030 100%)",
    accent: "#7eb8a4",
    label: "Real Estate",
  },
};

// ─── iMac Mockup ────────────────────────────────────────────────────────────
function IMacMockup({ children }: { children: ReactNode }) {
  return (
    <div className="w-full" style={{ perspective: "1200px" }}>
      <div
        style={{
          transform: "rotateY(-3deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
        }}
        className="group hover:[transform:rotateY(0deg)_rotateX(0deg)] hover:transition-all"
      >
        {/* Monitor */}
        <div
          className="relative rounded-2xl"
          style={{
            background: "linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 50%, #2c2c2e 100%)",
            padding: "10px 10px 6px 10px",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Top bezel with camera */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: "18px", marginBottom: "6px" }}
          >
            <div
              className="rounded-full"
              style={{
                width: "7px",
                height: "7px",
                background: "radial-gradient(circle, #4a4a4c 30%, #2a2a2c 100%)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 2px rgba(0,0,0,0.8)",
              }}
            />
          </div>
          {/* Screen */}
          <div
            className="overflow-hidden rounded-md relative"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.8), inset 0 2px 4px rgba(0,0,0,0.5)",
              background: "#000",
            }}
          >
            {children}
          </div>
        </div>
        {/* Stand neck */}
        <div className="flex justify-center">
          <div
            style={{
              width: "60px",
              height: "28px",
              background: "linear-gradient(to bottom, #2c2c2e, #3a3a3c)",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
              boxShadow: "inset 0 2px 4px rgba(255,255,255,0.05)",
            }}
          />
        </div>
        {/* Stand base */}
        <div className="flex justify-center">
          <div
            style={{
              width: "160px",
              height: "12px",
              borderRadius: "0 0 80px 80px",
              background: "linear-gradient(to bottom, #3a3a3c, #2a2a2c)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Laptop Mockup ──────────────────────────────────────────────────────────
function LaptopMockup({ children }: { children: ReactNode }) {
  return (
    <div className="w-full" style={{ perspective: "1200px" }}>
      <div
        style={{
          transform: "rotateY(-4deg) rotateX(3deg)",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
        }}
        className="group hover:[transform:rotateY(0deg)_rotateX(0deg)]"
      >
        {/* Lid */}
        <div
          className="relative rounded-t-xl"
          style={{
            background: "linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 100%)",
            padding: "8px 8px 4px 8px",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Camera dot */}
          <div
            className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full"
            style={{
              width: "5px",
              height: "5px",
              background: "#1a1a1c",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
            }}
          />
          {/* Screen */}
          <div
            className="overflow-hidden rounded-md mt-3 relative"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.9)",
              background: "#000",
            }}
          >
            {children}
          </div>
        </div>
        {/* Base */}
        <div
          style={{
            background: "linear-gradient(to bottom, #2c2c2e 0%, #3e3e40 100%)",
            height: "14px",
            marginLeft: "-2%",
            width: "104%",
            borderRadius: "0 0 6px 6px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)",
          }}
        >
          {/* Trackpad indent */}
          <div
            className="mx-auto"
            style={{
              width: "20%",
              height: "7px",
              marginTop: "2px",
              borderRadius: "3px",
              background: "rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Scene Decorator Elements ────────────────────────────────────────────────
function FloatingOrb({ x, y, size, color, opacity }: { x: string; y: string; size: string; color: string; opacity: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x, top: y, width: size, height: size,
        background: color, opacity, filter: "blur(60px)",
      }}
    />
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function ProjectShowcase({
  imageUrl,
  projectTheme,
  projectTitle,
  variant = "laptop",
}: {
  imageUrl: string;
  projectTheme: keyof typeof themes;
  projectTitle: string;
  variant?: "laptop" | "imac";
}) {
  const theme = themes[projectTheme];

  const orbColors: Record<string, string[]> = {
    hotel: ["rgba(201,169,110,0.35)", "rgba(180,100,60,0.25)", "rgba(60,80,130,0.2)"],
    coastal: ["rgba(77,184,232,0.3)", "rgba(20,100,180,0.25)", "rgba(0,200,150,0.15)"],
    boutique: ["rgba(212,168,122,0.3)", "rgba(160,80,40,0.2)", "rgba(80,60,100,0.15)"],
    realestate: ["rgba(126,184,164,0.3)", "rgba(60,120,180,0.2)", "rgba(200,200,200,0.08)"],
  };

  const orbs = orbColors[projectTheme];

  const screenContent = (
    <img
      src={imageUrl}
      alt={projectTitle}
      className="block w-full h-auto"
      loading="lazy"
      style={{ display: "block" }}
    />
  );

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl"
      style={{
        background: theme.bg,
        padding: "48px 40px 32px",
        boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 60px 120px rgba(0,0,0,0.6)`,
        minHeight: "320px",
      }}
    >
      {/* Background orbs */}
      <FloatingOrb x="-5%" y="-10%" size="280px" color={orbs[0]} opacity={1} />
      <FloatingOrb x="60%" y="40%" size="220px" color={orbs[1]} opacity={1} />
      <FloatingOrb x="80%" y="-20%" size="180px" color={orbs[2]} opacity={1} />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40%",
          background: `linear-gradient(to top, ${theme.bg.split(",")[0].replace("linear-gradient(135deg, ", "")} 0%, transparent 100%)`,
          zIndex: 1,
        }}
      />

      {/* Accent badge */}
      <div
        className="absolute top-4 right-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest z-10"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: theme.accent,
          backdropFilter: "blur(10px)",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse"
          style={{ background: theme.accent }}
        />
        {theme.label}
      </div>

      {/* Device */}
      <div className="relative z-10">
        {variant === "imac" ? (
          <IMacMockup>{screenContent}</IMacMockup>
        ) : (
          <LaptopMockup>{screenContent}</LaptopMockup>
        )}
      </div>

      {/* Reflection line */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: "1px",
          background: `linear-gradient(to right, transparent, ${theme.accent}40, transparent)`,
        }}
      />
    </div>
  );
}

export { themes as projectThemes };
