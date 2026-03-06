import type { Metadata } from "next";
import MinNavbar from "./_components/MinNavbar";
import MinFooter from "./_components/MinFooter";

export const metadata: Metadata = {
  title: "Minimal | Danu Creations",
  description: "Clean, gallery-inspired minimal theme for Danu Creations Photography Studio.",
};

export default function MinimalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <MinNavbar />
      <main>{children}</main>
      <MinFooter />
    </div>
  );
}
