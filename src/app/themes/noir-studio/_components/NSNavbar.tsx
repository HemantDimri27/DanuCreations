'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "motion/react";
import { Menu, X } from "lucide-react";
import { useThemeContainer } from "../../layout";
import CameraIcon from "./CameraIcon";

const navLinks = [
  { label: "HOME", href: "/themes/noir-studio" },
  { label: "SERVICES", href: "/themes/noir-studio/services" },
  { label: "PORTFOLIO", href: "/themes/noir-studio/portfolio" },
  { label: "CONTACT", href: "/themes/noir-studio/contact" },
];

export default function NSNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
        setMobileOpen(false);
      } else if (delta < -6) {
        controls.start({ y: 0, opacity: 1 });
      }
      lastScrollY.current = currentY;
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [controls, containerRef]);

  return (
    <motion.header
      animate={controls}
      initial={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo mark — mirrors the actual logo */}
        <Link href="/themes/noir-studio" className="flex items-center gap-3">
          <CameraIcon size={36} opacity={0.9} />
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "var(--font-great-vibes), cursive",
                fontSize: "22px",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              Danu
            </span>
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "9px",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginTop: "2px",
              }}
            >
              Creation
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                  borderBottom: isActive ? "1px solid #FFFFFF" : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button className="md:hidden" style={{ color: "#FFFFFF" }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: "#FFFFFF" }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
