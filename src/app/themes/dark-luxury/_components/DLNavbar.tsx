'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useThemeContainer } from "../../layout";

const services = [
  { label: "Wedding Photography", href: "/services/wedding-photography" },
  { label: "Portrait Photography", href: "/services/portrait-photography" },
  { label: "Pre-Wedding Shoots", href: "/services/pre-wedding-shoots" },
  { label: "Event Photography", href: "/services/event-photography" },
  { label: "Product Photography", href: "/services/product-photography" },
  { label: "Commercial Photography", href: "/services/commercial-photography" },
];

export default function DLNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const containerRef = useThemeContainer();
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;
    const handleScroll = () => {
      const currentY = container.scrollTop;
      const delta = currentY - lastScrollY.current;
      if (currentY < 80) {
        controls.start({ y: 0, opacity: 1 });
      } else if (delta > 6) {
        controls.start({ y: -100, opacity: 0 });
        setServicesOpen(false);
      } else if (delta < -6) {
        controls.start({ y: 0, opacity: 1 });
      }
      lastScrollY.current = currentY;
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [controls, containerRef]);

  const navLinkStyle = (href: string) => ({
    fontFamily: "Inter, sans-serif",
    fontSize: "13px",
    color: pathname === href ? "#C9A84C" : "rgba(255,255,255,0.75)",
    letterSpacing: "0.05em",
    transition: "color 0.2s",
    cursor: "pointer",
  });

  return (
    <motion.header
      animate={controls}
      initial={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/themes/dark-luxury"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "#C9A84C",
          }}
        >
          Danu Creations
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/themes/dark-luxury" style={navLinkStyle("/themes/dark-luxury")}>Home</Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1"
              style={navLinkStyle("/themes/dark-luxury/services")}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services <ChevronDown size={12} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 py-2 rounded"
                style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.2)" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-sm transition-colors duration-200"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)" }}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/themes/dark-luxury/services"
                  className="block px-4 py-2 text-sm mt-1 transition-colors duration-200"
                  style={{ fontFamily: "Inter, sans-serif", color: "#C9A84C", borderTop: "1px solid rgba(201,168,76,0.15)" }}
                >
                  All Services →
                </Link>
              </div>
            )}
          </div>

          <Link href="/themes/dark-luxury/portfolio" style={navLinkStyle("/themes/dark-luxury/portfolio")}>Portfolio</Link>
          <Link href="/themes/dark-luxury/contact" style={navLinkStyle("/themes/dark-luxury/contact")}>Contact</Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" style={{ color: "#C9A84C" }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)", background: "#080808" }}>
          {[
            { label: "Home", href: "/themes/dark-luxury" },
            { label: "Services", href: "/themes/dark-luxury/services" },
            { label: "Portfolio", href: "/themes/dark-luxury/portfolio" },
            { label: "Contact", href: "/themes/dark-luxury/contact" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
