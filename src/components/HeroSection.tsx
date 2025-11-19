import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative">
      <div className="p-4 relative z-10 w-full text-center">
        <h1>Mater the art of music</h1>
        <p>
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>Explore all courses</Link>
        </div>
      </div>
    </div>
  );
}
