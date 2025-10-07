"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description: 'Embark on a musical journey that uniquently yours. Our personalized instruction adapts to your individual needs, setting the stage for unparelleled growth and creativity. At ou music school. your aspirations meet out dedicated support, createing a harmoiuous path to mastery'
    },
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description: 'Embark on a musical journey that uniquently yours. Our personalized instruction adapts to your individual needs, setting the stage for unparelleled growth and creativity. At ou music school. your aspirations meet out dedicated support, createing a harmoiuous path to mastery'
    },
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description: 'Embark on a musical journey that uniquently yours. Our personalized instruction adapts to your individual needs, setting the stage for unparelleled growth and creativity. At ou music school. your aspirations meet out dedicated support, createing a harmoiuous path to mastery'
    },
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description: 'Embark on a musical journey that uniquently yours. Our personalized instruction adapts to your individual needs, setting the stage for unparelleled growth and creativity. At ou music school. your aspirations meet out dedicated support, createing a harmoiuous path to mastery'
    },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs