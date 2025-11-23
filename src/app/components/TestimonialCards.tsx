"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
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
