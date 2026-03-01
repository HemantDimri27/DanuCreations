'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Portfolio items using existing public images
const categories = ["All", "Wedding", "Portrait", "Pre-Wedding", "Event", "Product", "Commercial"] as const;
type Category = typeof categories[number];

interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  src: string;
  span?: "large" | "normal";
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Wedding Moments", category: "Wedding", src: "/ourServices/Wedding_Photography.jfif", span: "large" },
  { id: 2, title: "Portrait Sessions", category: "Portrait", src: "/ourServices/Portrait_Photography.jfif" },
  { id: 3, title: "Pre-Wedding Magic", category: "Pre-Wedding", src: "/ourServices/Pre-Wedding_Shoots.jfif", span: "large" },
  { id: 4, title: "Event Coverage", category: "Event", src: "/ourServices/Event_Photography.jfif" },
  { id: 5, title: "Product Showcase", category: "Product", src: "/ourServices/Product_Photography.jfif" },
  { id: 6, title: "Commercial Work", category: "Commercial", src: "/ourServices/Commercial_Photography.jfif", span: "large" },
  { id: 7, title: "Bridal Stories", category: "Wedding", src: "/whyChooseUs/Premium_Lens_Collection.jfif" },
  { id: 8, title: "Studio Portraits", category: "Portrait", src: "/whyChooseUs/Professional_Camera_Systems.jfif" },
  { id: 9, title: "Candid Moments", category: "Pre-Wedding", src: "/whyChooseUs/Advanced_Post-Processing_Technology.jfif" },
];

function OurWork() {
  const [active, setActive] = useState<Category>("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === active);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-amber-400 tracking-[0.3em] text-xs uppercase mb-3"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Portfolio
        </p>
        <h1
          className="text-5xl md:text-7xl text-amber-300/90 leading-none"
          style={{ fontFamily: "var(--font-great-vibes), cursive" }}
        >
          Our Work
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <hr className="w-16 border-amber-400/40" />
          <span className="text-amber-400/60 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Danu Creations
          </span>
          <hr className="w-16 border-amber-400/40" />
        </div>
        <p className="mt-5 text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Every frame tells a story. Explore our collection of timeless photography across weddings, portraits, events and more.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border ${
              active === cat
                ? "bg-amber-400 text-black border-amber-400 font-semibold"
                : "bg-transparent text-neutral-400 border-neutral-700 hover:border-amber-400 hover:text-amber-400"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer ${
              item.span === "large" ? "row-span-2" : ""
            }`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div className={`relative w-full ${item.span === "large" ? "h-80" : "h-56"}`}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
            </div>

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 transition-all duration-500 ${
                hovered === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <span className="text-amber-400 text-xs tracking-widest uppercase mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.category}
              </span>
              <h3 className="text-white font-semibold text-lg leading-snug">{item.title}</h3>
            </div>

            {/* Gold border on hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-amber-400/50 transition-all duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className="mt-16 text-center">
        <Link href="/">
          <button className="px-8 py-3 rounded-full border border-amber-400/60 text-amber-400 text-sm tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-all duration-300"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            ← Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
}

export default OurWork;
