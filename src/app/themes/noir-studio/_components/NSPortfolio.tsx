import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function NSPortfolio() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.4em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
            Our Portfolio
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#FFFFFF", lineHeight: 1 }}>
            Our Work
          </h1>
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", marginTop: "16px" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photographyServices.map((service, i) => (
            <div
              key={service.id}
              className="relative overflow-hidden group"
              style={{
                aspectRatio: i === 0 ? "16/9" : "4/3",
                gridColumn: i === 0 ? "span 2" : "span 1",
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "18px", color: "#FFFFFF", fontStyle: "italic" }}>
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
