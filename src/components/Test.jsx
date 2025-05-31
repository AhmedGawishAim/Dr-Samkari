"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MobileScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate translateY with max 500px cap
  const translateY = Math.min(scrollY * 0.1, 50);

  return (
    <div className="min-h-[200vh] hidden bg-gradient-to-b from-[#f0f4f8] via-[#e0f7fa] to-[#b2ebf2] overflow-x-hidden font-sans">
      <div
        className="fixed top-[50px] left-[60%] w-[250px] z-10 transition-transform duration-200 ease-in-out"
        style={{ transform: `translate(-50%, ${translateY}px)` }}
      >
        <Image
          src="https://dr-samkari.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiphone1.f393ab0d.png&w=640&q=75"
          alt="Mobile"
          width={500}
          height={800}
          className="!w-[550px] h-[600px]"
        />
      </div>

      <div className="mt-[600px] px-4 text-center text-xl text-gray-800 space-y-12">
        <p>Scroll down to see the mobile phone move with you.</p>
        <p>It will stop moving after translating 500px down.</p>
        <p>Keep scrolling for demo purposes.</p>
      </div>
    </div>
  );
}
