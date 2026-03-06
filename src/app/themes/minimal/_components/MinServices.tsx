import Link from "next/link";
import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function MinServices() {
  const featured = photographyServices.filter((s) => s.isFeatured);
  return (
    <section className="py-24 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#1A1A1A",
            }}
          >
            Services
          </h2>
          <hr style={{ border: "none", borderTop: "1px solid #E0E0E0", marginTop: "16px" }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden"
              style={{ background: "#FFFFFF", border: "1px solid #E8E8E8" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#1A1A1A",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4 line-clamp-2"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B6B6B", lineHeight: 1.6 }}
                >
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#6B6B6B",
                    borderBottom: "1px solid #E8B4B8",
                  }}
                >
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/themes/minimal/services"
            className="text-sm transition-colors duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#1A1A1A",
              border: "1px solid #1A1A1A",
              padding: "10px 28px",
              display: "inline-block",
            }}
          >
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
