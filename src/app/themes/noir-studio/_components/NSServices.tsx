import Link from "next/link";
import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function NSServices() {
  const featured = photographyServices.filter((s) => s.isFeatured);
  return (
    <section className="py-24 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.4em",
              color: "#888888",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Our Services
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#FFFFFF",
              lineHeight: 1,
            }}
          >
            Professional Photography
          </h2>
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", marginTop: "16px" }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden group transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
              }}
            >
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "18px",
                    color: "#FFFFFF",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-5 line-clamp-2"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#888888",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    paddingBottom: "1px",
                  }}
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/themes/noir-studio/services"
            className="inline-block px-8 py-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.25em",
            }}
          >
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
