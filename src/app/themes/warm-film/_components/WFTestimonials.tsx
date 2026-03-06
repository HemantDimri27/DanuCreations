const testimonials = [
  {
    quote: "Danu Creations made our wedding day absolutely magical. The team captured every emotion perfectly — from the nervous excitement to the joyful tears during the ceremony.",
    name: "Priya & Rahul Sharma",
    title: "Wedding Photography",
  },
  {
    quote: "Our pre-wedding shoot was an amazing experience! They took us to beautiful locations and made us feel so comfortable. The photos came out like a fairy tale.",
    name: "Neha & Arjun Kapoor",
    title: "Pre-Wedding Shoot",
  },
  {
    quote: "The photographs are warm, timeless and filled with life. They captured our daughter's smile, the decorations, and all the precious family moments perfectly.",
    name: "Anjali Patel",
    title: "Event Photography",
  },
];

export default function WFTestimonials() {
  return (
    <section className="py-24 px-6" style={{ background: "#EDE7DA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#C9603A",
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6"
              style={{
                background: "#F5F0E8",
                borderLeft: "4px solid #C9603A",
                boxShadow: "3px 3px 0 rgba(201,96,58,0.1)",
              }}
            >
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "#3A2010",
                  lineHeight: 1.8,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-great-vibes), cursive",
                    fontSize: "20px",
                    color: "#C9603A",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "12px",
                    color: "#8B6552",
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
