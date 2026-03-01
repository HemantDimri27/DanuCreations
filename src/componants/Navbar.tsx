'use client';                     // to change in client side

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";           // prevent from @-tag, reload

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  // Decide which tab is "current" based on the pathname
  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");
  const isContact = pathname === "/contact";

  return (
    <div 
    className={cn("fixed top-6 right-6 z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" isActive={isHome} />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Services" isActive={isServices}>
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
    </div>
  )
}

export default Navbar