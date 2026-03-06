import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";

export default function DLFooter() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      {/* Top glow line */}
      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Image src="/logo/danu-logo-3.png" alt="Danu Creations" width={140} height={48} className="object-contain opacity-80" />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
            Capturing life&apos;s most precious moments through our lens. Dehradun, India.
          </p>
          <div className="flex gap-4 mt-2">
            {[
              { icon: Instagram, href: "https://www.instagram.com/danucreation01" },
              { icon: Facebook, href: "https://www.facebook.com/share/p/Ai4YUJYDqUSkjZbx/" },
              { icon: Youtube, href: "https://www.youtube.com/@DanuCreation01" },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200" style={{ color: "rgba(255,255,255,0.35)" }}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
            Services
          </h3>
          <ul className="flex flex-col gap-2">
            {["Wedding Photography", "Portrait Photography", "Pre-Wedding Shoots", "Event Photography", "Product Photography"].map((s) => (
              <li key={s}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
            Navigation
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Home", href: "/themes/dark-luxury" },
              { label: "Portfolio", href: "/themes/dark-luxury/portfolio" },
              { label: "Contact", href: "/themes/dark-luxury/contact" },
              { label: "← Back to main site", href: "/" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <Phone size={14} style={{ color: "rgba(255,255,255,0.3)", marginTop: "2px", flexShrink: 0 }} />
              <a href="tel:+916397988226" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>+91 63979 88226</a>
            </li>
            <li className="flex gap-3">
              <MapPin size={14} style={{ color: "rgba(255,255,255,0.3)", marginTop: "2px", flexShrink: 0 }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>Mohkampur, Dehradun, Uttarakhand 248018</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Danu Creations. All rights reserved.</p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>Crafted with ♥ in Dehradun, India</p>
        </div>
      </div>
    </footer>
  );
}
