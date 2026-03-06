const reasons = [
  { num: "01", title: "Professional Camera Systems", body: "Canon EOS R5, Sony A7R IV, and Nikon Z9 delivering 45+ megapixel resolution — every precious moment preserved in flawless detail." },
  { num: "02", title: "Premium Lens Collection", body: "Prime lenses at f/1.2–f/1.4 and professional zooms for every occasion. Beautiful bokeh for portraits, versatile coverage for events." },
  { num: "03", title: "Professional Lighting", body: "Profoto and Godox studio strobes alongside portable setups ensure warm, flattering light whether indoors or under the open sky." },
  { num: "04", title: "Artisan Post-Processing", body: "Every image is hand-edited with warmth and intention on 99% sRGB calibrated monitors, using Lightroom and Capture One for that perfect film feel." },
];

export default function WFWhyChooseUs() {
  return (
    <section className="py-24 px-6" style={{ background: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#2C1810",
            }}
          >
            Why Choose Us
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div style={{ width: "40px", height: "1px", background: "rgba(201,96,58,0.4)" }} />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(201,96,58,0.6)">
              <circle cx="6" cy="6" r="3" />
            </svg>
            <div style={{ width: "40px", height: "1px", background: "rgba(201,96,58,0.4)" }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div key={r.num} className="flex gap-5">
              {/* Numbered circle */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                style={{
                  background: "#C9603A",
                  color: "#F5F0E8",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                {r.num}
              </div>
              <div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif", fontSize: "19px", color: "#2C1810" }}
                >
                  {r.title}
                </h3>
                <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "14px", color: "#8B6552", lineHeight: 1.7 }}>
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
