import CameraIcon from "./CameraIcon";

const reasons = [
  { title: "Professional Camera Systems", body: "Canon EOS R5, Sony A7R IV, and Nikon Z9 — 45+ megapixel resolution with dual card slot redundancy for every priceless moment." },
  { title: "Premium Lens Collection", body: "Prime lenses at f/1.2–f/1.4 for stunning bokeh and professional zooms for complete versatile coverage in any environment." },
  { title: "Professional Lighting", body: "Profoto and Godox studio strobes, portable speedlights, and LED continuous lights for perfect results in any setting." },
  { title: "Advanced Post-Processing", body: "99% sRGB calibrated monitors, Lightroom, Photoshop & Capture One — every image meticulously refined to absolute perfection." },
];

export default function NSWhyChooseUs() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#111111" }}>
      {/* Aperture decoration — top right */}
      <div className="absolute -top-20 -right-20 pointer-events-none" style={{ opacity: 0.04 }}>
        {[300, 240, 180, 120, 60].map((size) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: "1px solid white",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        <CameraIcon size={300} opacity={1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.4em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
            Our Equipment
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#FFFFFF", lineHeight: 1 }}>
            Why Choose Us
          </h2>
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", marginTop: "16px" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="p-8"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              {/* Aperture symbol */}
              <div className="mb-4 relative w-8 h-8">
                <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.4)" }} />
                <div className="absolute inset-[6px] rounded-full" style={{ border: "1px solid rgba(255,255,255,0.2)" }} />
                <div className="absolute inset-[11px] rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "19px",
                  color: "#FFFFFF",
                }}
              >
                {r.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888888", lineHeight: 1.7 }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      </div>
    </section>
  );
}
