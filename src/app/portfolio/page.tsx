import OurWork from "@/componants/OurWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Danu Creations",
  description: "Explore Danu Creations' portfolio — timeless wedding, portrait, pre-wedding, event, product and commercial photography in Dehradun, India.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black antialiased">
      <OurWork />
    </main>
  );
}
