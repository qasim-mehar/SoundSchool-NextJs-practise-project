import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
export const upcomingWebinars = [
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to grow your fanbase, navigate Spotify playlists, and effectively promote your music on social media in 2025.",
    link: "/webinars/digital-marketing",
  },
  {
    title: "The Art of Live Performance",
    description:
      "Join our expert panel as they discuss overcoming stage fright, commanding the stage, and connecting with your audience during live shows.",
    link: "/webinars/live-performance",
  },
  {
    title: "Home Studio Mastery",
    description:
      "A deep dive into acoustic treatment, gear selection, and recording techniques to get professional-quality sound from your bedroom studio.",
    link: "/webinars/home-studio",
  },
  {
    title: "Songwriting Workshop: Lyrics",
    description:
      "An interactive session focused on storytelling, rhyme schemes, and overcoming writer's block to craft compelling and emotional lyrics.",
    link: "/webinars/lyric-writing",
  },
  {
    title: "Understanding Music Royalties",
    description:
      "Get paid for your work. We break down the complex world of copyright, licensing, and distribution to help you maximize your earnings.",
    link: "/webinars/music-business",
  },
  {
    title: "Advanced Jazz Harmony",
    description:
      "For experienced players: explore complex chord substitutions, reharmonization techniques, and modal improvisation strategies.",
    link: "/webinars/jazz-harmony",
  },
];
export default function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={upcomingWebinars} />
        </div>
        <div className="text-center mt-5">
          <Link
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            href={"/"}
          >
            {" "}
            VIEW ALL WEBINARS
          </Link>
        </div>
      </div>
    </div>
  );
}
