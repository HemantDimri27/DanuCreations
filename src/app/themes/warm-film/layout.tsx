import type { Metadata } from "next";
import WFNavbar from "./_components/WFNavbar";
import WFFooter from "./_components/WFFooter";

export const metadata: Metadata = {
  title: "Warm Film | Danu Creations",
  description: "Analog warmth, vintage soul, and modern craft — Warm Film theme for Danu Creations.",
};

export default function WarmFilmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh", position: "relative" }}>
      {/* Film grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          backgroundImage: "url('/textures/grain.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.06,
        }}
      />
      <div style={{ position: "relative", zIndex: 3 }}>
        <WFNavbar />
        <main>{children}</main>
        <WFFooter />
      </div>
    </div>
  );
}
