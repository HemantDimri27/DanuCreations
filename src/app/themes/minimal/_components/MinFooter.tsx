import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function MinFooter() {
  return (
    <footer style={{ background: "#FAFAF8", borderTop: "1px solid #E0E0E0" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="text-sm tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "#1A1A1A" }}
        >
          Danu Creations
        </span>

        <div className="flex items-center gap-8">
          {[
            { label: "Home", href: "/themes/minimal" },
            { label: "Services", href: "/themes/minimal/services" },
            { label: "Portfolio", href: "/themes/minimal/portfolio" },
            { label: "Contact", href: "/themes/minimal/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-xs transition-colors duration-200"
              style={{ color: "#6B6B6B", fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Instagram, href: "https://www.instagram.com/danucreation01", label: "Instagram" },
            { icon: Facebook, href: "https://www.facebook.com/share/p/Ai4YUJYDqUSkjZbx/", label: "Facebook" },
            { icon: Youtube, href: "https://www.youtube.com/@DanuCreation01", label: "YouTube" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: "#9B9B9B" }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div
        className="text-center pb-4 text-xs"
        style={{ color: "#9B9B9B", fontFamily: "Inter, sans-serif" }}
      >
        © {new Date().getFullYear()} Danu Creations · Dehradun, India
      </div>
    </footer>
  );
}
