import Link from "next/link";
import Image from "next/image";
import { photographyServices } from "@/data/services";

export default function WFServices() {
  const featured = photographyServices.filter((s) => s.isFeatured);
  return (
    <section className="py-24 px-6" style={{ background: "#EDE7DA" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#C9603A",
              lineHeight: 1.1,
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "14px",
              color: "#8B6552",
              marginTop: "8px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Photography tailored to your story
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden group"
              style={{
                background: "#F5F0E8",
                border: "1px solid rgba(44,24,16,0.1)",
                boxShadow: "4px 4px 0 rgba(201,96,58,0.12)",
              }}
            >
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ filter: "sepia(20%) saturate(0.9)" }}
                />
              </div>
              <div className="p-5">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "19px",
                    color: "#2C1810",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4 line-clamp-2"
                  style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "13px", color: "#8B6552", lineHeight: 1.6 }}
                >
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    color: "#C9603A",
                    borderBottom: "1px solid rgba(201,96,58,0.3)",
                  }}
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/themes/warm-film/services"
            className="inline-block px-8 py-3 text-sm transition-colors duration-200"
            style={{
              border: "1px solid #C9603A",
              color: "#C9603A",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
