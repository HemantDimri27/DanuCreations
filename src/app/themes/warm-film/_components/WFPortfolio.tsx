import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function WFPortfolio() {
  return (
    <section className="min-h-screen py-24 px-6" style={{ background: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#C9603A",
            }}
          >
            Our Portfolio
          </h1>
          <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "15px", color: "#8B6552", marginTop: "8px" }}>
            Moments preserved in warmth and light
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photographyServices.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "4/3", boxShadow: "4px 4px 0 rgba(201,96,58,0.15)" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ filter: "sepia(15%) saturate(0.95)" }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
                style={{ background: "rgba(44,24,16,0.55)" }}
              >
                <p style={{ fontFamily: "var(--font-great-vibes), cursive", fontSize: "26px", color: "#F5F0E8" }}>
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
