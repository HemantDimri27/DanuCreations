import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "Wedding Photography", href: "/services/wedding-photography" },
  { label: "Portrait Photography", href: "/services/portrait-photography" },
  { label: "Pre-Wedding Shoots", href: "/services/pre-wedding-shoots" },
  { label: "Event Photography", href: "/services/event-photography" },
  { label: "Product Photography", href: "/services/product-photography" },
  { label: "Commercial Photography", href: "/services/commercial-photography" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/danu.creations",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/danucreations",
    label: "Facebook",
    color: "hover:text-blue-400",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@danucreations",
    label: "YouTube",
    color: "hover:text-red-400",
  },
];

function Footer() {
  return (
    <footer className="relative bg-black border-t border-neutral-800 text-neutral-300">
      {/* Subtle gradient top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo/danu-logo-3.png"
            alt="Danu Creations Logo"
            width={160}
            height={55}
            className="object-contain opacity-90"
          />
          <p className="text-sm text-neutral-400 leading-relaxed">
            Capturing life&apos;s most precious moments through our lens. We transform your memories into timeless visual stories.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`transition-colors duration-200 text-neutral-400 ${color}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-neutral-500" />
              <a
                href="mailto:danucreations@gmail.com"
                className="hover:text-white transition-colors"
              >
                danucreations@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-neutral-500" />
              <a
                href="tel:+919876543210"
                className="hover:text-white transition-colors"
              >
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-neutral-500" />
              <span>Dehra Dun, Uttarakhand, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Danu Creations. All rights reserved.</p>
          <p>
            Crafted with <span className="text-red-500">♥</span> in Dehradun, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
