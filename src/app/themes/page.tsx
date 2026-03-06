import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme Gallery | Danu Creations",
  description: "Browse and preview 5 distinct design themes for Danu Creations Photography Studio.",
};

const themes = [
  {
    slug: "dark-luxury",
    name: "Dark Luxury",
    tagline: "Cinematic. High-fashion. Premium.",
    font: "Playfair Display",
    swatches: ["#080808", "#C9A84C", "#FFFFFF"],
    card: {
      bg: "#0D0D0D",
      border: "#C9A84C",
      text: "#FFFFFF",
      sub: "#C9A84C",
      btn: "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black",
    },
    preview: '"Aa" — Playfair Display',
    previewStyle: { fontFamily: "var(--font-playfair), serif", fontStyle: "italic" },
  },
  {
    slug: "minimal",
    name: "Minimal",
    tagline: "Gallery-clean. Typography-first. Serene.",
    font: "Cormorant Garamond",
    swatches: ["#FAFAF8", "#1A1A1A", "#E8B4B8"],
    card: {
      bg: "#FAFAF8",
      border: "#D4D4D4",
      text: "#1A1A1A",
      sub: "#6B6B6B",
      btn: "border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
    },
    preview: '"Aa" — Cormorant Garamond',
    previewStyle: { fontFamily: "var(--font-cormorant), serif", fontWeight: 300 },
  },
  {
    slug: "editorial",
    name: "Editorial",
    tagline: "Bold. High-contrast. Magazine-worthy.",
    font: "Inter Bold",
    swatches: ["#FFFFFF", "#0A0A0A", "#E63946"],
    card: {
      bg: "#FFFFFF",
      border: "#0A0A0A",
      text: "#0A0A0A",
      sub: "#E63946",
      btn: "bg-[#E63946] text-white hover:bg-[#c0303c]",
    },
    preview: '"Aa" — Inter Black',
    previewStyle: { fontFamily: "Inter, sans-serif", fontWeight: 900 },
  },
  {
    slug: "warm-film",
    name: "Warm Film",
    tagline: "Analog warmth. Vintage soul. Modern craft.",
    font: "Playfair + Great Vibes",
    swatches: ["#F5F0E8", "#2C1810", "#C9603A"],
    card: {
      bg: "#F5F0E8",
      border: "#C9603A",
      text: "#2C1810",
      sub: "#8B6552",
      btn: "border border-[#C9603A] text-[#C9603A] hover:bg-[#C9603A] hover:text-white",
    },
    preview: '"Aa" — Great Vibes',
    previewStyle: { fontFamily: "var(--font-great-vibes), cursive" },
  },
  {
    slug: "noir-studio",
    name: "Noir Studio",
    tagline: "Monochrome. Lens-inspired. Studio-pure.",
    font: "Great Vibes + Playfair",
    swatches: ["#0A0A0A", "#888888", "#FFFFFF"],
    card: {
      bg: "#0A0A0A",
      border: "#FFFFFF",
      text: "#FFFFFF",
      sub: "#888888",
      btn: "border border-white text-white hover:bg-white hover:text-black",
    },
    preview: '"Aa" — Great Vibes',
    previewStyle: { fontFamily: "var(--font-great-vibes), cursive", color: "#FFFFFF" },
  },
];

export default function ThemeSelectorPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0A0A0A" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-800">
        <Link
          href="/"
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          ← Back to main site
        </Link>
        <span
          className="text-xs tracking-[0.3em] uppercase text-neutral-500"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Danu Creations
        </span>
      </div>

      {/* Title */}
      <div className="text-center pt-16 pb-12 px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4">Design Preview</p>
        <h1
          className="text-5xl md:text-6xl text-white"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Choose a Theme
        </h1>
        <p className="mt-4 text-neutral-500 text-sm max-w-md mx-auto">
          Five distinct visual identities for Danu Creations Photography Studio. Preview each one in full.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div
            key={theme.slug}
            className="rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: theme.card.bg,
              border: `1px solid ${theme.card.border}`,
              boxShadow: `0 0 0 0 ${theme.card.border}`,
            }}
          >
            <div className="p-8">
              {/* Swatches */}
              <div className="flex gap-2 mb-6">
                {theme.swatches.map((color) => (
                  <div
                    key={color}
                    className="w-7 h-7 rounded-full border border-black/10"
                    style={{ background: color }}
                    title={color}
                  />
                ))}
              </div>

              {/* Theme name */}
              <h2
                className="text-2xl font-bold mb-1"
                style={{ color: theme.card.text }}
              >
                {theme.name}
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: theme.card.sub }}
              >
                {theme.tagline}
              </p>

              {/* Font preview */}
              <div
                className="text-4xl mb-8"
                style={{ ...theme.previewStyle, color: theme.card.text, opacity: 0.7 }}
              >
                Aa
              </div>
              <p
                className="text-xs mb-8"
                style={{ color: theme.card.sub }}
              >
                {theme.font}
              </p>

              {/* CTA */}
              <Link
                href={`/themes/${theme.slug}`}
                className={`inline-block px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${theme.card.btn}`}
              >
                Preview Theme →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
