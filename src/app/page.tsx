import { h1, main } from "motion/react-client";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import FeaturedCourses from "@/app/components/FeaturedCourses";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TestimonialCards } from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import { AnimatedTooltipPreview } from "./components/AnimatedTooltipPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <AnimatedTooltipPreview />
    </main>
  );
}
