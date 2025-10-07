'use client';                     // to change in client side

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";           // prevent from @-tag, reload

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Services">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/portfolio">Full Portfolio</HoveredLink>
          <HoveredLink href="/services/wedding">Wedding Photography</HoveredLink>
          <HoveredLink href="/services/portrait">Portrait Photography</HoveredLink>
          <HoveredLink href="/services/commercial">Commercial Shoots</HoveredLink>
          <HoveredLink href="/services/events">Event Photography</HoveredLink>
        </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar