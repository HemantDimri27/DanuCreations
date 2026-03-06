'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/themes/minimal" },
  { label: "Services", href: "/themes/minimal/services" },
  { label: "Portfolio", href: "/themes/minimal/portfolio" },
  { label: "Contact", href: "/themes/minimal/contact" },
];

export default function MinNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ background: "#FAFAF8", borderBottom: "1px solid #E0E0E0" }}>
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/themes/minimal"
          className="text-sm tracking-[0.25em] uppercase"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontWeight: 400,
            color: "#1A1A1A",
            letterSpacing: "0.25em",
          }}
        >
          Danu Creations
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isActive ? "#1A1A1A" : "#6B6B6B",
                  borderBottom: isActive ? "1px solid #1A1A1A" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#1A1A1A" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid #E0E0E0", background: "#FAFAF8" }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm"
              style={{ fontFamily: "Inter, sans-serif", color: "#1A1A1A" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
