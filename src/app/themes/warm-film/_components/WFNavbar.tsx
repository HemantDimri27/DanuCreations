'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useThemeContainer } from "../../layout";

export default function WFNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useThemeContainer();
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;
    const handleScroll = () => {
      setScrolled(container.scrollTop > 40);
      lastScrollY.current = container.scrollTop;
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  const navLinks = [
    { label: "Home", href: "/themes/warm-film" },
    { label: "Services", href: "/themes/warm-film/services" },
    { label: "Portfolio", href: "/themes/warm-film/portfolio" },
    { label: "Contact", href: "/themes/warm-film/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: "#F5F0E8",
        borderBottom: "1px solid rgba(44,24,16,0.12)",
        boxShadow: scrolled ? "0 2px 20px rgba(44,24,16,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/themes/warm-film"
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            fontSize: "28px",
            color: "#C9603A",
          }}
        >
          Danu Creations
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors duration-200"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: pathname === href ? "#C9603A" : "#2C1810",
                borderBottom: pathname === href ? "1px solid #C9603A" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/themes/warm-film/contact"
            className="hidden md:inline-block px-5 py-2 rounded text-sm transition-colors duration-200"
            style={{
              border: "1px solid #C9603A",
              color: "#C9603A",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            Book Now
          </Link>
          <button className="md:hidden" style={{ color: "#2C1810" }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(44,24,16,0.1)", background: "#F5F0E8" }}>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{ fontFamily: "var(--font-playfair), serif", fontSize: "15px", color: "#2C1810" }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
