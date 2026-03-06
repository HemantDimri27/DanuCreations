import Link from "next/link";
import { photographyServices } from "@/data/services";

export default function WFServicesList() {
  return (
    <section className="min-h-screen py-24 px-6" style={{ background: "#F5F0E8" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <h1
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#C9603A",
            }}
          >
            Our Services
          </h1>
          <div style={{ width: "60px", height: "1px", background: "rgba(201,96,58,0.4)", marginTop: "16px" }} />
        </div>

        <div>
          {photographyServices.map((service, i) => (
            <div key={service.id}>
              <div className="py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-baseline gap-5">
                  <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "13px", color: "#C9603A", minWidth: "28px" }}>
                    0{service.id}
                  </span>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "24px", color: "#2C1810", marginBottom: "6px" }}>
                      {service.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "14px", color: "#8B6552", lineHeight: 1.6, maxWidth: "480px" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link href={`/services/${service.slug}`} className="text-sm whitespace-nowrap self-start md:self-center" style={{ fontFamily: "var(--font-playfair), serif", color: "#C9603A", borderBottom: "1px solid rgba(201,96,58,0.3)" }}>
                  Learn more →
                </Link>
              </div>
              {i < photographyServices.length - 1 && (
                <div style={{ height: "1px", background: "linear-gradient(to right, rgba(201,96,58,0.3), rgba(201,96,58,0.05), transparent)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
