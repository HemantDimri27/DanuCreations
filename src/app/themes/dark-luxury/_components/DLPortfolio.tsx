'use client';

import { useState } from "react";
import Image from "next/image";
import { photographyServices } from "@/data/services";

const categories = ["All", "Wedding", "Portrait", "Pre-Wedding", "Events", "Product", "Commercial"];

export default function DLPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="min-h-screen pt-24 pb-16 px-6" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#C9A84C", fontFamily: "Inter, sans-serif" }}>
            Our Portfolio
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#FFFFFF" }}>
            Our Work
          </h1>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 text-xs rounded-full transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.05em",
                background: activeCategory === cat ? "#C9A84C" : "transparent",
                color: activeCategory === cat ? "#080808" : "rgba(255,255,255,0.5)",
                border: activeCategory === cat ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photographyServices.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-lg group"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center"
                style={{ background: "rgba(8,8,8,0.7)" }}
              >
                <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px", color: "#C9A84C", fontStyle: "italic" }}>
                  {service.title}
                </p>
              </div>
              {/* Bottom label always visible */}
              <div
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{ background: "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 100%)" }}
              >
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
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
