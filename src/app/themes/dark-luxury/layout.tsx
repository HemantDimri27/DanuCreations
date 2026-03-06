import type { Metadata } from "next";
import DLNavbar from "./_components/DLNavbar";
import DLFooter from "./_components/DLFooter";

export const metadata: Metadata = {
  title: "Dark Luxury | Danu Creations",
  description: "Cinematic, high-fashion dark luxury theme for Danu Creations Photography Studio.",
};

export default function DarkLuxuryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <DLNavbar />
      <main>{children}</main>
      <DLFooter />
    </div>
  );
}
