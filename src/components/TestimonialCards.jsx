"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2
      className="text-3xl font-bold text-center mb-8 z-10"
      >Hear our Harmony : voices of Success</h2>
      <div className=" flex justify-center w-full overflow-hidden px-4 sm:px-6 lgpx8
      ">
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

export default TestimonialCards;

const testimonials = [
  {
    quote:
      "This album changed my life. The melodies and lyrics are truly inspiring. Every track brings a new emotion and the production quality is outstanding. I've never heard anything quite like it before.",
    name: "John Doe",
    title: "Music Enthusiast",
  },
  {
    quote:
      "A breathtaking musical journey from start to finish. Highly recommended! The depth and complexity of the arrangements are impressive, and the artist's unique style shines through in every song. This is a masterpiece.",
    name: "Jane Smith",
    title: "Music Critic",
  },
  {
    quote:
      "The band's performance was electrifying. I can't wait for their next release. Their energy on stage is contagious, and they have a remarkable ability to connect with the audience. Truly a memorable experience.",
    name: "Emily Johnson",
    title: "Concert Goer",
  },
  {
    quote:
      "An exceptional mix of genres and sounds. This music stands out in every way. The fusion of traditional and modern elements creates a fresh and innovative listening experience. I am thoroughly impressed.",
    name: "Michael Brown",
    title: "DJ and Producer",
  },
  {
    quote:
      "Beautiful compositions and powerful vocals. A must-listen for everyone. The artist's voice is captivating, and the lyrics are deeply meaningful. This album has touched my heart and soul.",
    name: "Sarah Wilson",
    title: "Singer-Songwriter",
  },
];
