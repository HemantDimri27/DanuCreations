import Link from "next/link";

export default function WFHero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: "#F5F0E8", paddingTop: "64px" }}
    >
      {/* Film frame corners */}
      {["top-8 left-8", "top-8 right-8", "bottom-8 left-8", "bottom-8 right-8"].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-8 h-8 pointer-events-none`}
          style={{
            borderTop: i < 2 ? "2px solid rgba(201,96,58,0.4)" : "none",
            borderBottom: i >= 2 ? "2px solid rgba(201,96,58,0.4)" : "none",
            borderLeft: i % 2 === 0 ? "2px solid rgba(201,96,58,0.4)" : "none",
            borderRight: i % 2 === 1 ? "2px solid rgba(201,96,58,0.4)" : "none",
          }}
        />
      ))}

      <div className="relative z-10 max-w-2xl">
        {/* Script heading */}
        <h1
          className="leading-none mb-4"
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            color: "#C9603A",
          }}
        >
          Danu Creations
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div style={{ flex: 1, height: "1px", background: "rgba(44,24,16,0.2)", maxWidth: "60px" }} />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" fill="rgba(201,96,58,0.5)" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "rgba(44,24,16,0.2)", maxWidth: "60px" }} />
        </div>

        {/* Subtitle */}
        <p
          className="mb-3 tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "14px",
            color: "#2C1810",
            letterSpacing: "0.2em",
          }}
        >
          A Photography Studio
        </p>

        {/* Tagline */}
        <p
          className="mb-10 leading-relaxed"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic",
            fontSize: "16px",
            color: "#8B6552",
          }}
        >
          Where every frame tells a story worth remembering. Dehradun, India.
        </p>

        {/* CTA */}
        <Link
          href="/themes/warm-film/portfolio"
          className="inline-block px-8 py-3 rounded text-sm font-medium transition-colors duration-200"
          style={{
            background: "#C9603A",
            color: "#F5F0E8",
            fontFamily: "var(--font-playfair), serif",
          }}
        >
          Explore Our Work
        </Link>
      </div>
    </section>
  );
}
