import Link from "next/link";
import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function EdServices() {
  const [first, ...rest] = photographyServices;
  return (
    <section className="py-20 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#0A0A0A",
                letterSpacing: "-0.02em",
              }}
            >
              SERVICES
            </h2>
            <div style={{ height: "4px", background: "#E63946", width: "60px", marginTop: "8px" }} />
          </div>
          <Link
            href="/themes/editorial/services"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "12px", color: "#E63946", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            All Services →
          </Link>
        </div>

        {/* Featured (first) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="relative overflow-hidden group" style={{ aspectRatio: "16/9" }}>
            <Image
              src={first.image}
              alt={first.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-102"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-6"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)" }}
            >
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", letterSpacing: "0.15em" }}>01</span>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "28px", color: "#FFFFFF", letterSpacing: "-0.02em" }}>{first.title}</h3>
              <Link href={`/services/${first.slug}`} style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.7)", marginTop: "8px" }}>
                Explore →
              </Link>
            </div>
          </div>

          {/* Second featured */}
          {rest[0] && (
            <div className="relative overflow-hidden group" style={{ aspectRatio: "16/9" }}>
              <Image
                src={rest[0].image}
                alt={rest[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)" }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", letterSpacing: "0.15em" }}>02</span>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "28px", color: "#FFFFFF", letterSpacing: "-0.02em" }}>{rest[0].title}</h3>
                <Link href={`/services/${rest[0].slug}`} style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "12px", color: "rgba(255,255,255,0.7)", marginTop: "8px" }}>Explore →</Link>
              </div>
            </div>
          )}
        </div>

        {/* Remaining 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.slice(1).map((service, i) => (
            <div key={service.id} className="relative overflow-hidden group" style={{ aspectRatio: "3/4" }}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)", border: "3px solid #E63946" }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "10px", color: "#E63946", letterSpacing: "0.15em" }}>0{i + 3}</span>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>{service.title}</h3>
                <Link href={`/services/${service.slug}`} style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Explore →</Link>
              </div>
              {/* Number always visible */}
              <div className="absolute top-3 left-3">
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946" }}>0{i + 3}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
