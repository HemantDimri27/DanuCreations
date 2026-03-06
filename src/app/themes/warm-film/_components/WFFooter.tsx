import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function WFFooter() {
  return (
    <footer style={{ background: "#2C1810" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Brand */}
        <div className="text-center mb-10">
          <p style={{ fontFamily: "var(--font-great-vibes), cursive", fontSize: "60px", color: "#C9603A", lineHeight: 1 }}>
            Danu Creations
          </p>
          <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: "14px", color: "rgba(245,240,232,0.5)", marginTop: "8px" }}>
            Capturing life&apos;s warmest moments — Dehradun, India
          </p>
        </div>

        <div style={{ height: "1px", background: "rgba(201,96,58,0.25)", marginBottom: "40px" }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Services */}
          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "11px", color: "#C9603A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>Services</h3>
            <ul className="flex flex-col gap-2">
              {["Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots", "Event Photography", "Product Photography"].map((s) => (
                <li key={s}><span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "11px", color: "#C9603A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>Navigation</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/themes/warm-film" },
                { label: "Portfolio", href: "/themes/warm-film/portfolio" },
                { label: "Contact", href: "/themes/warm-film/contact" },
                { label: "← Main Site", href: "/" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} style={{ fontFamily: "var(--font-playfair), serif", fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "11px", color: "#C9603A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/danucreation01" },
                { icon: Facebook, href: "https://www.facebook.com/share/p/Ai4YUJYDqUSkjZbx/" },
                { icon: Youtube, href: "https://www.youtube.com/@DanuCreation01" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,240,232,0.4)" }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "12px", color: "rgba(245,240,232,0.3)" }}>
            © {new Date().getFullYear()} Danu Creations · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
