"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const photographyEquipmentContent = [
    {
        title: 'Professional Camera Systems',
        description: 'We use top-tier full-frame cameras including Canon EOS R5, Sony A7R IV, and Nikon Z9 to ensure crystal-clear images with exceptional detail. Our advanced mirrorless systems deliver 45+ megapixel resolution, perfect for large prints and commercial use. With dual card slots and weather-sealed bodies, we guarantee your precious moments are captured safely in any condition.',
        content: (
            <div className="relative h-full w-full">
                <Image
                    src="/whyChooseUs/Professional_Camera_Systems.jfif"
                    alt="Professional Camera Systems"
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    {
        title: 'Premium Lens Collection',
        description: 'Our extensive lens arsenal includes prime lenses (24mm f/1.4, 35mm f/1.4, 50mm f/1.2, 85mm f/1.2) for stunning portraits with beautiful bokeh, and professional zoom lenses (16-35mm f/2.8, 24-70mm f/2.8, 70-200mm f/2.8) for versatile coverage. We also use specialized macro lenses for intricate detail shots and telephoto lenses for candid moments without intrusion.',
        content: (
            <div className="relative h-full w-full">
                <Image
                    src="/whyChooseUs/Premium_Lens_Collection.jfif"
                    alt="Premium Lens Collection"
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    {
        title: 'Professional Lighting Equipment',
        description: 'We employ state-of-the-art lighting systems including Profoto and Godox studio strobes, portable speedlights, LED continuous lights, and reflectors. Our equipment ensures perfect lighting in any environment - whether indoor studio sessions or outdoor shoots. With wireless triggers and light shapers, we create the perfect ambiance for every shot.',
        content: (
            <div className="relative h-full w-full">
                <Image
                    src="/whyChooseUs/Professional_Lighting_Equipment.jfif"
                    alt="Professional Lighting Equipment"
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    {
        title: 'Advanced Post-Processing Technology',
        description: 'Every image is meticulously edited using industry-standard software including Adobe Lightroom Classic, Photoshop CC, and Capture One Pro. We work on calibrated monitors with 99% sRGB color accuracy to ensure your photos look stunning on any device. Professional color grading, skin retouching, and enhancement techniques bring out the best in every photograph.',
        content: (
            <div className="relative h-full w-full">
                <Image
                    src="/whyChooseUs/Advanced_Post-Processing_Technology.jfif"
                    alt="Advanced Post-Processing Technology"
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={photographyEquipmentContent}/>
    </div>
  )
}

export default WhyChooseUs