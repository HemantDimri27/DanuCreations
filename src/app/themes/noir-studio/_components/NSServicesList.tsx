import Link from "next/link";
import { photographyServices } from "@/data/services";

export default function NSServicesList() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.4em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
            What We Offer
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1 }}>
            All Services
          </h1>
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", marginTop: "16px" }} />
        </div>

        <div>
          {photographyServices.map((service, i) => (
            <div key={service.id}>
              <div className="py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-baseline gap-6">
                  <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "48px", color: "rgba(255,255,255,0.08)", lineHeight: 1, fontWeight: 700 }}>
                    0{service.id}
                  </span>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px", color: "#FFFFFF", marginBottom: "6px" }}>
                      {service.title}
                    </h2>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888888", lineHeight: 1.6, maxWidth: "420px" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs whitespace-nowrap self-start md:self-center"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    paddingBottom: "1px",
                  }}
                >
                  Explore →
                </Link>
              </div>
              {i < photographyServices.length - 1 && (
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
