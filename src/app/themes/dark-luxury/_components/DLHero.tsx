import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "@/componants/ui/Spotlight";
import { Button } from "@/componants/ui/moving-border";

export default function DLHero() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#C9A84C" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-6 pt-20">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo/danu-logo-3.png"
            alt="Danu Creations Logo"
            width={180}
            height={60}
            className="object-contain opacity-90"
            priority
          />
        </div>

        {/* Heading */}
        <h1
          className="mb-3"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          Danu Creations
        </h1>

        {/* Divider + subtitle */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.4)", width: "60px" }} />
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-playfair), serif", color: "rgba(201,168,76,0.7)" }}
          >
            Photography Studio
          </span>
          <hr style={{ border: "none", borderTop: "1px solid rgba(201,168,76,0.4)", width: "60px" }} />
        </div>

        <p
          className="mb-8 max-w-md mx-auto"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
        >
          Capturing life&apos;s most precious moments through our lens. From weddings to portraits, we transform memories into timeless visual stories.
        </p>

        <Link href="/themes/dark-luxury/portfolio">
          <Button
            borderRadius="1.75rem"
            className="bg-black text-white border-[#C9A84C] cursor-pointer"
            style={{ color: "#C9A84C", fontFamily: "Inter, sans-serif", fontSize: "14px" }}
          >
            View Our Work
          </Button>
        </Link>

        {/* Stat cards */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { label: "Weddings Captured", value: "500+" },
            { label: "Years of Experience", value: "8+" },
            { label: "Happy Clients", value: "1200+" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="px-6 py-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.15)",
                backdropFilter: "blur(10px)",
                minWidth: "140px",
              }}
            >
              <p
                style={{ fontFamily: "var(--font-playfair), serif", fontSize: "28px", color: "#C9A84C" }}
              >
                {value}
              </p>
              <p
                style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
