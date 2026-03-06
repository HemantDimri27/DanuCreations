import type { Metadata } from "next";
import EdNavbar from "./_components/EdNavbar";
import EdFooter from "./_components/EdFooter";

export const metadata: Metadata = {
  title: "Editorial | Danu Creations",
  description: "Bold, high-contrast editorial magazine theme for Danu Creations Photography Studio.",
};

export default function EditorialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <EdNavbar />
      <main>{children}</main>
      <EdFooter />
    </div>
  );
}
