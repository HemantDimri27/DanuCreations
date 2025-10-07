import FeaturedCourses from "@/componants/FeaturedCourses";
import HeroSection from "@/componants/HeroSection";
import MusicSchoolTestimonials from "@/componants/TestimonialCards";
import WhyChooseUs from "@/componants/WhyChooseUs";
import { main } from "motion/react-client";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
    </main>
  );
}
