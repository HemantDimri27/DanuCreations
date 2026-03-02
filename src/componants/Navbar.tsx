'use client';                     // to change in client side

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "motion/react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";           // prevent from @-tag, reload

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Scroll hide / show
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY < 80) {
          // Always show near top
          controls.start({ y: 0, opacity: 1 });
        } else if (delta > 6) {
          // Scrolling down → hide
          controls.start({ y: -120, opacity: 0 });
          setActive(null); // also close any open dropdown
        } else if (delta < -6) {
          // Scrolling up → show
          controls.start({ y: 0, opacity: 1 });
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Decide which tab is "current" based on the pathname
  const isHome     = pathname === "/";
  const isServices = pathname.startsWith("/services");
  const isContact  = pathname === "/contact";

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", mass: 1.2, stiffness: 120, damping: 30 }}
      className={cn("fixed top-6 right-6 z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" isActive={isHome} />
        </Link>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Our Services"
          isActive={isServices}
          onClose={() => setActive(null)}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/wedding-photography">Wedding Photography</HoveredLink>
            <HoveredLink href="/services/portrait-photography">Portrait Photography</HoveredLink>
            <HoveredLink href="/services/pre-wedding-shoots">Pre-Wedding Shoots</HoveredLink>
            <HoveredLink href="/services/event-photography">Event Photography</HoveredLink>
            <HoveredLink href="/services/product-photography">Product Photography</HoveredLink>
            <HoveredLink href="/services/commercial-photography">Commercial Photography</HoveredLink>
            <HoveredLink href="/services">All Services →</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" isActive={isContact} />
        </Link>
      </Menu>
    </motion.div>
  )
}

export default Navbar