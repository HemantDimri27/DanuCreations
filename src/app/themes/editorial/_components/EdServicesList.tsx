import Link from "next/link";
import { photographyServices } from "@/data/services";

export default function EdServicesList() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#0A0A0A", padding: "40px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1 }}>
            ALL SERVICES
          </h1>
          <div style={{ height: "4px", background: "#E63946", width: "60px", marginTop: "12px" }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {photographyServices.map((service, i) => (
          <div
            key={service.id}
            style={{
              borderTop: i === 0 ? "2px solid #0A0A0A" : "none",
              borderBottom: "2px solid #0A0A0A",
              padding: "32px 0",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
              <div className="md:col-span-1">
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "48px", color: "#E63946", lineHeight: 1, display: "block" }}>
                  0{service.id}
                </span>
              </div>
              <div className="md:col-span-3">
                <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "24px", color: "#0A0A0A", letterSpacing: "-0.02em", marginBottom: "8px" }}>
                  {service.title}
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555", lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
              <div className="md:col-span-1 flex md:justify-end items-start">
                <Link href={`/services/${service.slug}`} className="inline-block px-5 py-2 font-bold text-xs uppercase tracking-wider" style={{ background: "#E63946", color: "#FFFFFF", fontFamily: "Inter, sans-serif" }}>
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
