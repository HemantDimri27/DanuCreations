import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componants/Navbar";             // @ refers to global directory
import LocatorSetup from "@/componants/LocatorSetup";
import Footer from "@/componants/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danu Creations | Photography Studio",
  description: "Danu Creations — capturing life's most precious moments through our lens. Wedding, portrait, event, and commercial photography in Dehradun, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocatorSetup />
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

