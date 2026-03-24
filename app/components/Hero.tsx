"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const words = ["Automatically.", "Effortlessly.", "Intelligently."];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const [index, setIndex] = useState(0);

  // ✅ word animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // ✅ gsap animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* 🔥 BACKGROUND BLOBS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      {/* CONTENT */}
      <div className="text-center px-4">
        <h1 className="hero-title text-5xl font-bold">
          Turn Emails Into Revenue
          <span className="block text-blue-600 mt-2">
            {words[index]}
          </span>
        </h1>

        <p className="hero-sub mt-4 text-lg text-gray-600">
          Create, automate and grow faster 🚀
        </p>
      </div>
    </section>
  );
}