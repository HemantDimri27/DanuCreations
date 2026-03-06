import Link from "next/link";
import { photographyServices } from "@/data/services";

export default function MinServicesList() {
  return (
    <section className="py-24 px-6" style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#1A1A1A",
          }}
        >
          Our Services
        </h1>
        <hr style={{ border: "none", borderTop: "1px solid #E0E0E0", marginBottom: "48px" }} />

        <div>
          {photographyServices.map((service, i) => (
            <div key={service.id}>
              <div className="py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-baseline gap-5">
                  <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "13px", color: "#9B9B9B", minWidth: "28px" }}>
                    0{service.id}
                  </span>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "26px",
                        fontWeight: 400,
                        color: "#1A1A1A",
                        marginBottom: "8px",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B6B6B", lineHeight: 1.6, maxWidth: "480px" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm whitespace-nowrap self-start md:self-center"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B6B6B", borderBottom: "1px solid #E8B4B8" }}
                >
                  Learn more →
                </Link>
              </div>
              {i < photographyServices.length - 1 && (
                <hr style={{ border: "none", borderTop: "1px solid #E0E0E0" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
