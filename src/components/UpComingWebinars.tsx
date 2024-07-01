"use client";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
export const projects = [
  {
    title: "Jazz Improvisation Techniques",
    description:
      "Learn the art of jazz improvisation with expert musicians. Explore scales, modes, and creative expression.",
    link: "/",
    isFeatured: true,
  },
  {
    title: "Classical Music Theory",
    description:
      "Dive deep into the fundamentals of classical music theory. Understand harmony, counterpoint, and composition.",
    link: "/",

    isFeatured: false,
  },
  {
    title: "Electronic Music Production",
    description:
      "Master the tools and techniques for creating electronic music. From DAWs to sound design and mixing.",
    link: "/",

    isFeatured: true,
  },
  {
    title: "Guitar Techniques for Beginners",
    description:
      "Start your guitar journey with basic techniques and exercises. Learn chords, strumming patterns, and songs.",
    link: "/",

    isFeatured: false,
  },
  {
    title: "Vocal Training and Performance",
    description:
      "Enhance your vocal abilities with professional training. Focus on breath control, pitch, and stage presence.",
    link: "/",

    isFeatured: true,
  },
  {
    title: "Music Business Essentials",
    description:
      "Understand the music industry with insights on marketing, contracts, and career management.",
    link: "/",

    isFeatured: false,
  },
];

function UpComingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-7">
        <div className="text-center ">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="m-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className=" text-center mt-10">
          <Link
            href={"/courses"}
            className=" px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-50 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpComingWebinars;
