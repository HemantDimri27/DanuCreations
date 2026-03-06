import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function EdPortfolio() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#0A0A0A", padding: "40px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1 }}>
            OUR WORK
          </h1>
          <div style={{ height: "4px", background: "#E63946", width: "60px", marginTop: "12px" }} />
        </div>
      </div>

      {/* Mosaic grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
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
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
                style={{ background: "rgba(10,10,10,0.75)", border: "4px solid #E63946" }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  0{service.id}
                </span>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "20px", color: "#FFFFFF" }}>{service.title}</h3>
              </div>
              {/* Corner label */}
              <div className="absolute top-3 left-3" style={{ background: "#E63946", padding: "2px 8px" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#FFFFFF" }}>0{service.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
