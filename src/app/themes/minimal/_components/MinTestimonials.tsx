const testimonials = [
  {
    quote: "Danu Creations made our wedding day absolutely magical! The team captured every emotion perfectly — from the nervous excitement of getting ready to the joyful tears during the ceremony.",
    name: "Priya & Rahul Sharma",
    title: "Wedding Photography",
  },
  {
    quote: "I needed professional headshots and Danu Creations delivered beyond my expectations. The photographer guided me through poses and expressions, making the session fun and relaxed.",
    name: "Rohan Verma",
    title: "Portrait Photography",
  },
  {
    quote: "Our pre-wedding shoot was an amazing experience! They took us to beautiful locations and made us feel so comfortable. The photos came out like a fairy tale.",
    name: "Neha & Arjun Kapoor",
    title: "Pre-Wedding Shoot",
  },
];

export default function MinTestimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="mb-14"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#1A1A1A",
          }}
        >
          Client Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6"
              style={{ borderLeft: "1px solid #E8E8E8", background: "#FAFAF8" }}
            >
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "17px",
                  color: "#3A3A3A",
                  fontWeight: 400,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#1A1A1A",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#9B9B9B",
                    marginTop: "2px",
                  }}
                >
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
