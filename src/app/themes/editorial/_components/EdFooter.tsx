import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function EdFooter() {
  return (
    <footer style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Big display wordmark */}
        <div className="mb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "40px" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 10vw, 8rem)", color: "#FFFFFF", letterSpacing: "-0.04em", lineHeight: 1 }}>
            DANU<span style={{ color: "#E63946" }}>CREATIONS</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>
            Photography Studio · Dehradun, Uttarakhand, India
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>Services</h3>
            <ul className="flex flex-col gap-2">
              {["Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots", "Event Photography", "Product Photography"].map((s) => (
                <li key={s}><span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{s}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>Navigate</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/themes/editorial" },
                { label: "Portfolio", href: "/themes/editorial/portfolio" },
                { label: "Contact", href: "/themes/editorial/contact" },
                { label: "← Main Site", href: "/" },
              ].map(({ label, href }) => (
                <li key={href}><Link href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "11px", color: "#E63946", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>Follow</h3>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/danucreation01" },
                { icon: Facebook, href: "https://www.facebook.com/share/p/Ai4YUJYDqUSkjZbx/" },
                { icon: Youtube, href: "https://www.youtube.com/@DanuCreation01" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.4)" }}><Icon size={18} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Danu Creations. All rights reserved.</p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>Crafted with ♥ in Dehradun, India</p>
        </div>
      </div>
    </footer>
  );
}
