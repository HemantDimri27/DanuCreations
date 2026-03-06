const reasons = [
  { title: "Professional Camera Systems", body: "Canon EOS R5, Sony A7R IV, Nikon Z9 — 45+ megapixel resolution with dual card redundancy for every priceless moment." },
  { title: "Premium Lens Collection", body: "From f/1.2 primes for stunning bokeh to 70-200mm f/2.8 zooms for candid coverage — every focal length, every shot." },
  { title: "Professional Lighting", body: "Profoto and Godox studio strobes, speedlights and LED panels for perfect lighting in any environment, any time of day." },
  { title: "Advanced Post-Processing", body: "99% sRGB calibrated monitors. Lightroom Classic, Photoshop CC, and Capture One for meticulous, artful finishing." },
];

export default function EdWhyChooseUs() {
  return (
    <section className="py-20 px-6" style={{ background: "#F2F2F2" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-baseline gap-4">
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(5rem, 15vw, 12rem)",
                color: "#E63946",
                lineHeight: 1,
              }}
            >
              4
            </span>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                color: "#0A0A0A",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              REASONS TO<br />CHOOSE US
            </h2>
          </div>
          <div style={{ height: "4px", background: "#0A0A0A", width: "60px", marginTop: "12px" }} />
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <div key={r.title} className="border-t-2 border-[#0A0A0A] pt-6">
              <div className="flex items-start gap-4">
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "14px", color: "#E63946", minWidth: "24px" }}>
                  — 0{i + 1}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#0A0A0A",
                      marginBottom: "8px",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555", lineHeight: 1.6 }}>
                    {r.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-16 py-10 border-t border-b border-[#0A0A0A]">
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
              color: "#0A0A0A",
              maxWidth: "700px",
            }}
          >
            &ldquo;Every photograph is a certificate of presence — capturing a moment that will never come again.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
