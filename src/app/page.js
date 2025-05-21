"use client";

import React, { useState, useEffect } from "react";
import Header from "@/src/common/Header";
import Hero from "../components/HeroSection";
import Book from "../components/BookSection";
import TrackBookSection from "../components/TrackProgressSection";
import NotifiedSection from "../components/NotifiedSection";
import PointsSection from "../components/PointsSection";
import LatestNewsSection from "../components/LatestNewsSection";

import Img8 from "@/public/assets/img-loading.png";
import Image from "next/image";
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // loading page func.
  useEffect(() => {
    // Disable scrolling during load
    document.body.classList.add("overflow-hidden");
    // loading page timer
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("overflow-hidden");
    }, 3000); 
    // clean memory for setimeout
    return () => {
      clearTimeout(timer);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
        <div className="image-loader w-[300px]  relative  h-[110px] ">
          <Image
            src={Img8}
            alt="Small Ball"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-contain"
          />
          <span className="loader"></span>
        </div>
        <span className="loader2 text-4xl">Loading</span>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <Hero />
      <Book />
      <TrackBookSection />
      <NotifiedSection />
      <PointsSection />
      <LatestNewsSection />


    </div>
  );
}
