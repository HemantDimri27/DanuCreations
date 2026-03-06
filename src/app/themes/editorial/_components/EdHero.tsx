import Link from "next/link";
import Image from "next/image";

export default function EdHero() {
  return (
    <section
      className="flex flex-col lg:flex-row min-h-[calc(100vh-70px)]"
      style={{ background: "#FFFFFF" }}
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-16 relative">
        {/* Red vertical rule */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-1"
          style={{ background: "#E63946" }}
        />

        <p
          className="mb-2"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            color: "#E63946",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Photography Studio · Dehradun, India
        </p>

        <div className="mb-6">
          <h1
            className="leading-none"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4rem, 10vw, 9rem)",
              color: "#0A0A0A",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            DANU
          </h1>
          <h1
            className="leading-none"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4rem, 10vw, 9rem)",
              color: "#E63946",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            CREATIONS
          </h1>
        </div>

        <p
          className="mb-8 max-w-xs"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          Capturing life&apos;s most precious moments. From weddings to commercial shoots — bold, authentic, timeless.
        </p>

        <Link
          href="/themes/editorial/portfolio"
          className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest self-start"
          style={{
            background: "#E63946",
            color: "#FFFFFF",
            fontFamily: "Inter, sans-serif",
          }}
        >
          View Portfolio →
        </Link>
      </div>

      {/* Right: Image */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-0">
        <Image
          src="/ourServices/Wedding_Photography.jfif"
          alt="Photography showcase"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Red label overlay */}
        <div
          className="absolute top-6 left-6 px-3 py-1"
          style={{ background: "#E63946" }}
        >
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#FFFFFF", letterSpacing: "0.1em" }}>
            FEATURED
          </span>
        </div>
      </div>
    </section>
  );
}
