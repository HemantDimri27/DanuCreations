import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function MinPortfolio() {
  return (
    <section className="py-24 px-6" style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <div className="max-w-6xl mx-auto">
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#1A1A1A",
          }}
        >
          Portfolio
        </h1>
        <hr style={{ border: "none", borderTop: "1px solid #E0E0E0", marginBottom: "48px" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photographyServices.map((service) => (
            <div key={service.id} className="overflow-hidden group" style={{ aspectRatio: "4/3", position: "relative" }}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 60%)" }}
              >
                <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "18px", color: "#FFFFFF" }}>
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
