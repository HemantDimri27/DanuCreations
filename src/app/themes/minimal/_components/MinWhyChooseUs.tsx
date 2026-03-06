const reasons = [
  {
    num: "01",
    title: "Professional Camera Systems",
    body: "Full-frame Canon EOS R5, Sony A7R IV, and Nikon Z9 bodies — delivering 45+ megapixel resolution with dual card slot redundancy.",
  },
  {
    num: "02",
    title: "Premium Lens Collection",
    body: "Prime lenses from f/1.2 through f/1.4 for stunning bokeh, and professional zoom lenses for versatile coverage in any environment.",
  },
  {
    num: "03",
    title: "Professional Lighting",
    body: "Profoto and Godox studio strobes, portable speedlights, and LED continuous lights ensure perfect results indoors or outdoors.",
  },
  {
    num: "04",
    title: "Advanced Post-Processing",
    body: "Every image meticulously edited on 99% sRGB-calibrated monitors using Lightroom, Photoshop, and Capture One.",
  },
];

export default function MinWhyChooseUs() {
  return (
    <section className="py-24 px-6" style={{ background: "#FAFAF8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2
          className="mb-14"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#1A1A1A",
          }}
        >
          Why Choose Us
        </h2>

        {/* Items */}
        <div>
          {reasons.map((r, i) => (
            <div key={r.num}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
                {/* Left: number + title */}
                <div className="flex items-baseline gap-4">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "13px",
                      color: "#9B9B9B",
                      minWidth: "28px",
                    }}
                  >
                    {r.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "22px",
                      fontWeight: 400,
                      color: "#1A1A1A",
                    }}
                  >
                    {r.title}
                  </h3>
                </div>
                {/* Right: body */}
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#6B6B6B",
                    lineHeight: 1.7,
                  }}
                >
                  {r.body}
                </p>
              </div>
              {i < reasons.length - 1 && (
                <hr style={{ border: "none", borderTop: "1px solid #E0E0E0" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
