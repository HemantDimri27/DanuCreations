'use client';

import { motion } from "motion/react";
import { Camera, Aperture, Zap, Monitor } from "lucide-react";

const reasons = [
  {
    icon: Camera,
    title: "Professional Camera Systems",
    body: "Canon EOS R5, Sony A7R IV, and Nikon Z9 — delivering 45+ megapixel resolution with dual card slot redundancy for your priceless moments.",
  },
  {
    icon: Aperture,
    title: "Premium Lens Collection",
    body: "Prime lenses at f/1.2–f/1.4 for stunning bokeh and professional zooms for any environment. Every focal length covered.",
  },
  {
    icon: Zap,
    title: "Professional Lighting",
    body: "Profoto and Godox studio strobes, portable speedlights, and LED continuous lights for perfect results in any setting.",
  },
  {
    icon: Monitor,
    title: "Advanced Post-Processing",
    body: "Calibrated 99% sRGB monitors, Lightroom, Photoshop & Capture One — every image meticulously refined to perfection.",
  },
];

export default function DLWhyChooseUs() {
  return (
    <section className="py-24 px-6" style={{ background: "#0D0D0D" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "Inter, sans-serif", color: "#C9A84C" }}
          >
            Our Equipment
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#FFFFFF",
            }}
          >
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(201,168,76,0.1)",
                borderLeft: "3px solid #C9A84C",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <r.icon size={20} style={{ color: "#C9A84C" }} />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "20px", color: "#FFFFFF" }}>
                  {r.title}
                </h3>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
