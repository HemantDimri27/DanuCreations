const testimonials = [
  {
    quote: "Danu Creations made our wedding day absolutely magical. The team captured every emotion perfectly — from the nervous excitement to the joyful tears during the ceremony.",
    name: "Priya & Rahul Sharma",
    title: "Wedding Photography",
  },
  {
    quote: "Professional product photos that significantly improved my online store sales. Their attention to detail and understanding of lighting is truly exceptional.",
    name: "Vikram Malhotra",
    title: "Product Photography",
  },
  {
    quote: "Our pre-wedding shoot was an amazing experience. They took us to beautiful locations and the photos came out like a fairy tale. Worth every rupee.",
    name: "Neha & Arjun Kapoor",
    title: "Pre-Wedding Shoot",
  },
];

export default function NSTestimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.4em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
            Client Stories
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#FFFFFF", lineHeight: 1 }}>
            Capturing Memories
          </h2>
          <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", marginTop: "16px" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 flex flex-col justify-between"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Large open quote */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "72px",
                    color: "rgba(255,255,255,0.15)",
                    lineHeight: 0.8,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.7,
                  }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Client */}
              <div className="mt-6 flex items-center gap-3">
                {/* Shutter / aperture dot */}
                <div className="relative w-5 h-5 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.4)" }} />
                  <div className="absolute inset-[5px] rounded-full" style={{ background: "rgba(255,255,255,0.4)" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "13px", color: "#FFFFFF", letterSpacing: "0.05em" }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "#888888", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
