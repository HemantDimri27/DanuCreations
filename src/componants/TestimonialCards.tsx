'use client'



import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const photographyTestimonials = [
    {
      quote:
        "Danu Creations made our wedding day absolutely magical! The team captured every emotion perfectly - from the nervous excitement of getting ready to the joyful tears during the ceremony. The candid shots are so natural and beautiful. We couldn't have asked for better photographers!",
      name: "Priya & Rahul Sharma",
      title: "Wedding Photography Client",
    },
    {
      quote:
        "We hired Danu Creations for our daughter's first birthday party and they exceeded all expectations. The photographs are so vibrant and full of life. They captured her smile, the decorations, and all the precious moments with family. Highly recommended!",
      name: "Anjali Patel",
      title: "Event Photography Client",
    },
    {
      quote:
        "As a small business owner, I needed professional product photos for my online store. Danu Creations delivered stunning images that have significantly improved my sales. Their attention to detail and understanding of lighting is exceptional. Worth every rupee!",
      name: "Vikram Malhotra",
      title: "Product Photography Client",
    },
    {
      quote:
        "Our pre-wedding shoot with Danu Creations was an amazing experience! They took us to beautiful locations in Agra and made us feel so comfortable. The photos came out like a fairy tale. These memories will be cherished forever. Thank you for your creativity and patience!",
      name: "Neha & Arjun Kapoor",
      title: "Pre-Wedding Shoot Client",
    },
    {
      quote:
        "I needed professional headshots for my portfolio and Danu Creations delivered beyond my expectations. The photographer guided me through poses and expressions, making the session fun and relaxed. The final images are crisp, professional, and have helped me land several auditions!",
      name: "Rohan Verma",
      title: "Portrait Photography Client",
    },
    {
      quote:
        "We organized a corporate event and hired Danu Creations for coverage. They were professional, punctual, and captured all the important moments without being intrusive. The photos perfectly showcase our company culture and the success of our event. Excellent work!",
      name: "Meera Desai",
      title: "Corporate Event Client",
    },
  ];

function Testimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">
            Client Stories: Capturing Memories, Creating Smiles
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={photographyTestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>
  )
}

export default Testimonials