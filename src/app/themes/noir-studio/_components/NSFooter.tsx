import Link from "next/link";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import CameraIcon from "./CameraIcon";

export default function NSFooter() {
  return (
    <footer style={{ background: "#000000" }}>
      {/* Top rule */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

      {/* Large logo mark */}
      <div className="text-center pt-14 pb-10">
        <div className="flex flex-col items-center gap-2">
          <CameraIcon size={56} opacity={0.6} />
          <p
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "56px",
              color: "#FFFFFF",
              lineHeight: 1,
              opacity: 0.9,
            }}
          >
            Danu
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.6em",
              textTransform: "uppercase",
            }}
          >
            Creation
          </p>
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#888888", marginTop: "12px" }}>
          Photography Studio · Dehradun, Uttarakhand, India
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", maxWidth: "900px", margin: "0 auto" }} />

      {/* Columns */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Services */}
        <div>
          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "16px" }}>Services</h3>
          <ul className="flex flex-col gap-2">
            {["Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots", "Event Photography", "Product Photography"].map((s) => (
              <li key={s}><span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{s}</span></li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "16px" }}>Navigate</h3>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Home", href: "/themes/noir-studio" },
              { label: "Portfolio", href: "/themes/noir-studio/portfolio" },
              { label: "Contact", href: "/themes/noir-studio/contact" },
              { label: "← Main Site", href: "/" },
            ].map(({ label, href }) => (
              <li key={href}><Link href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "16px" }}>Contact</h3>
          <ul className="flex flex-col gap-3 mb-6">
            <li className="flex gap-2 items-start">
              <Phone size={13} style={{ color: "rgba(255,255,255,0.25)", marginTop: "1px", flexShrink: 0 }} />
              <a href="tel:+916397988226" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>+91 63979 88226</a>
            </li>
            <li className="flex gap-2 items-start">
              <MapPin size={13} style={{ color: "rgba(255,255,255,0.25)", marginTop: "1px", flexShrink: 0 }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>Mohkampur, Dehradun, Uttarakhand</span>
            </li>
          </ul>
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/danucreation01" },
              { icon: Facebook, href: "https://www.facebook.com/share/p/Ai4YUJYDqUSkjZbx/" },
              { icon: Youtube, href: "https://www.youtube.com/@DanuCreation01" },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.25)" }}>
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Danu Creations. All rights reserved.</p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>Dehradun, India</p>
        </div>
      </div>
    </footer>
  );
}
