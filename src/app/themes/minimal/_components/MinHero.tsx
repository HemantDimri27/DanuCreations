import Link from "next/link";
import Image from "next/image";

export default function MinHero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ background: "#FAFAF8" }}
    >
      {/* Small logo */}
      <div className="mb-8 opacity-70">
        <Image
          src="/logo/danu-logo-3.png"
          alt="Danu Creations"
          width={120}
          height={40}
          className="object-contain mx-auto"
          style={{ filter: "invert(1)" }}
        />
      </div>

      {/* Main heading */}
      <h1
        className="leading-none tracking-tight mb-6"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontWeight: 300,
          fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
          color: "#1A1A1A",
          maxWidth: "800px",
        }}
      >
        Capturing Life&apos;s
        <br />
        Most Precious Moments
      </h1>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #D4D4D4",
          width: "80px",
          margin: "0 auto 24px",
        }}
      />

      {/* Tagline */}
      <p
        className="mb-10 max-w-sm"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          color: "#6B6B6B",
          lineHeight: 1.7,
        }}
      >
        Wedding, portrait, pre-wedding &amp; commercial photography in Dehradun, India.
      </p>

      {/* CTA */}
      <Link
        href="/themes/minimal/portfolio"
        className="inline-block rounded px-8 py-3 text-sm font-medium transition-colors duration-200"
        style={{
          background: "#E8B4B8",
          color: "#1A1A1A",
          fontFamily: "Inter, sans-serif",
        }}
      >
        View Our Work
      </Link>
    </section>
  );
}
