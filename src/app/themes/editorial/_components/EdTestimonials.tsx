const testimonials = [
  {
    quote: "Danu Creations made our wedding day absolutely magical! The team captured every emotion perfectly. The candid shots are so natural and beautiful.",
    name: "Priya & Rahul Sharma",
    title: "Wedding Photography",
  },
  {
    quote: "Professional product photos that significantly improved my online store sales. Their attention to detail and understanding of lighting is exceptional.",
    name: "Vikram Malhotra",
    title: "Product Photography",
  },
  {
    quote: "Our pre-wedding shoot was an amazing experience. They took us to beautiful locations and the photos came out like a fairy tale. Worth every rupee!",
    name: "Neha & Arjun Kapoor",
    title: "Pre-Wedding Shoot",
  },
];

export default function EdTestimonials() {
  return (
    <section className="py-20 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "#0A0A0A", letterSpacing: "-0.02em" }}>
            CLIENT STORIES
          </h2>
          <div style={{ height: "4px", background: "#E63946", width: "60px", marginTop: "8px" }} />
        </div>

        {/* Testimonials */}
        <div className="flex flex-col gap-0">
          {testimonials.map((t, i) => (
            <div key={t.name} style={{ borderTop: i === 0 ? "2px solid #0A0A0A" : "none", borderBottom: "2px solid #0A0A0A", padding: "32px 0" }}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "64px", color: "#E63946", lineHeight: 1, display: "block" }}>
                    0{i + 1}
                  </span>
                  {/* Stars */}
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#E63946", letterSpacing: "0.1em" }}>★★★★★</span>
                </div>
                {/* Quote */}
                <div className="lg:col-span-3">
                  <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "#0A0A0A", lineHeight: 1.5 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                {/* Name */}
                <div className="lg:col-span-1">
                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "14px", color: "#0A0A0A" }}>{t.name}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#E63946", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
