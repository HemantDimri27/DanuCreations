'use client';

import { InfiniteMovingCards } from "@/componants/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Danu Creations made our wedding day absolutely magical! The team captured every emotion perfectly — from the nervous excitement of getting ready to the joyful tears during the ceremony.",
    name: "Priya & Rahul Sharma",
    title: "Wedding Photography Client",
  },
  {
    quote: "We hired Danu Creations for our daughter's first birthday party and they exceeded all expectations. The photographs are so vibrant and full of life.",
    name: "Anjali Patel",
    title: "Event Photography Client",
  },
  {
    quote: "As a small business owner, I needed professional product photos for my online store. Danu Creations delivered stunning images that significantly improved my sales.",
    name: "Vikram Malhotra",
    title: "Product Photography Client",
  },
  {
    quote: "Our pre-wedding shoot was an amazing experience! They took us to beautiful locations and made us feel so comfortable. The photos came out like a fairy tale.",
    name: "Neha & Arjun Kapoor",
    title: "Pre-Wedding Shoot Client",
  },
  {
    quote: "I needed professional headshots and Danu Creations delivered beyond my expectations. The photographer made the session fun and relaxed.",
    name: "Rohan Verma",
    title: "Portrait Photography Client",
  },
  {
    quote: "We organized a corporate event and hired Danu Creations for coverage. They were professional, punctual, and captured all the important moments.",
    name: "Meera Desai",
    title: "Corporate Event Client",
  },
];

export default function DLTestimonials() {
  return (
    <section
      className="py-24"
      style={{ background: "#080808" }}
    >
      <div className="text-center mb-12">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-3"
          style={{ fontFamily: "Inter, sans-serif", color: "#C9A84C" }}
        >
          Client Stories
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#FFFFFF",
          }}
        >
          Capturing Memories, Creating Smiles
        </h2>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}
