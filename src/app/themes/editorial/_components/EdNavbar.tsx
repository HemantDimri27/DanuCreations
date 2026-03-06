'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function EdNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/themes/editorial" },
    { label: "Services", href: "/themes/editorial/services" },
    { label: "Portfolio", href: "/themes/editorial/portfolio" },
    { label: "Contact", href: "/themes/editorial/contact" },
  ];

  return (
    <header style={{ background: "#FFFFFF", position: "sticky", top: 0, zIndex: 50 }}>
      {/* Main bar */}
      <div style={{ borderBottom: "3px solid #0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/themes/editorial" className="flex items-baseline gap-0">
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "22px", color: "#0A0A0A", letterSpacing: "-0.02em" }}>DANU</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "22px", color: "#E63946", letterSpacing: "-0.02em" }}>CREATIONS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: pathname === href ? "#E63946" : "#0A0A0A",
                  borderBottom: pathname === href ? "2px solid #E63946" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} style={{ color: "#0A0A0A" }} /> : <Menu size={20} style={{ color: "#0A0A0A" }} />}
          </button>
        </div>
      </div>

      {/* Ticker */}
      <div
        style={{
          background: "#E63946",
          overflow: "hidden",
          height: "28px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="animate-scroll flex shrink-0"
          style={{ gap: "0", whiteSpace: "nowrap" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                color: "#FFFFFF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0 40px",
              }}
            >
              Wedding Photography · Portrait Sessions · Pre-Wedding Shoots · Event Photography · Product Photography · Commercial Photography
            </span>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ background: "#FFFFFF", borderBottom: "1px solid #E0E0E0" }}>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "14px", color: "#0A0A0A" }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
