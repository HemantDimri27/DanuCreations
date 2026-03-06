import Link from "next/link";
import CameraIcon from "./CameraIcon";

export default function NSHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Giant camera SVG background decoration */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <CameraIcon size={600} opacity={1} />
      </div>

      {/* Lens rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[320, 260, 200, 140].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: `1px solid rgba(255,255,255,${0.03 + i * 0.02})`,
              animation: i === 1 ? "ns-spin 30s linear infinite" : undefined,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-16">
        {/* Logo-inspired wordmark */}
        <div className="flex flex-col items-center mb-8">
          <h1
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(5rem, 13vw, 11rem)",
              color: "#FFFFFF",
              lineHeight: 0.9,
            }}
          >
            Danu
          </h1>
          {/* Flowing line — like in the logo */}
          <svg
            viewBox="0 0 300 30"
            fill="none"
            className="w-full max-w-xs -mt-2 mb-1"
            style={{ opacity: 0.5 }}
          >
            <path
              d="M10 20 Q80 5 150 15 Q220 25 290 8"
              stroke="white"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.6em",
              textTransform: "uppercase",
            }}
          >
            Creation
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div style={{ width: "50px", height: "1px", background: "rgba(255,255,255,0.25)" }} />
          <CameraIcon size={18} opacity={0.4} />
          <div style={{ width: "50px", height: "1px", background: "rgba(255,255,255,0.25)" }} />
        </div>

        {/* Tagline */}
        <p
          className="mb-10 max-w-sm mx-auto"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "#888888",
            lineHeight: 1.7,
            letterSpacing: "0.05em",
          }}
        >
          Capturing life&apos;s most precious moments through our lens. Dehradun, India.
        </p>

        {/* CTA */}
        <Link
          href="/themes/noir-studio/portfolio"
          className="inline-block px-10 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 group"
          style={{
            border: "1px solid rgba(255,255,255,0.5)",
            color: "#FFFFFF",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.25em",
          }}
        >
          View Our Work
        </Link>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2" style={{ opacity: 0.3 }}>
          <div style={{ width: "1px", height: "40px", background: "#FFFFFF" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#FFFFFF", textTransform: "uppercase" }}>Scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes ns-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
