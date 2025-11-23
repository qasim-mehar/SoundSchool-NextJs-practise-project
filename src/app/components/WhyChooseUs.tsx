"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from industry professionals and award-winning musicians. Our mentors provide personalized guidance to help you master your instrument, refine your technique, and find your unique sound.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Expert Mentorship
      </div>
    ),
  },
  {
    title: "Interactive Practice",
    description:
      "See your progress as it happens. With our interactive platform, you get real-time feedback on pitch and rhythm. No more guessing if you are playing correctly—practice with confidence and accuracy.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Music practice demo
      </div>
    ),
  },
  {
    title: "Lifetime Access",
    description:
      "Experience total freedom in your learning journey. Gain lifetime access to all purchased courses and materials. Learn at your own pace, rewind difficult sections, and revisit lessons whenever you need a refresher.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Lifetime Access
      </div>
    ),
  },
  {
    title: "Diverse Genre Library",
    description:
      "Never run out of inspiration. Our expansive library covers everything from Classical and Jazz to Rock and Electronic. Whether you are a beginner or a pro, there is always a new genre to explore and master.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Diverse Genre Library
      </div>
    ),
  },
];
export function WhyChooseUs() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
