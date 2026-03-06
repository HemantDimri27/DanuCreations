import type { Metadata } from "next";
import NSNavbar from "./_components/NSNavbar";
import NSFooter from "./_components/NSFooter";

export const metadata: Metadata = {
  title: "Noir Studio | Danu Creations",
  description: "Monochrome, lens-inspired studio theme — pure black and white, directly from the Danu Creation logo.",
};

export default function NoirStudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <NSNavbar />
      <main>{children}</main>
      <NSFooter />
    </div>
  );
}
