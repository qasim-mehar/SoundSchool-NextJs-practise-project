"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I never thought I could learn music production online, but the interactive courses made it so easy. The step-by-step breakdown of mixing techniques is absolute gold.",
    name: "Michael Chen",
    title: "Music Production Student",
  },
  {
    quote:
      "The vocal training program completely changed my range. My instructor's personalized feedback on breath control gave me the confidence to finally perform live.",
    name: "Samantha Lee",
    title: "Vocal Arts Student",
  },
  {
    quote:
      "Joining this platform was the best decision for my guitar playing. The jazz improvisation module is challenging but incredibly rewarding. Highly recommended!",
    name: "Alex Johnson",
    title: "Advanced Guitarist",
  },
  {
    quote:
      "I was struggling with music theory for years until I took the 'Harmony 101' course here. The visual aids and real-world examples finally made it click for me.",
    name: "Emily Taylor",
    title: "Piano & Theory Student",
  },
  {
    quote:
      "The community here is amazing. Collaborating with other drummers and bassists on the platform has helped me tighten my rhythm and groove like never before.",
    name: "Chris Anderson",
    title: "Drum Student",
  },
];
