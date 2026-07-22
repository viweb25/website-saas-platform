"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Direct Static Imports
import rk1 from "@/sites/rk-construction/assets/rk1.png";
import rk2 from "@/sites/rk-construction/assets/rk2.png";
import rk3 from "@/sites/rk-construction/assets/rk3.png";
import rk4 from "@/sites/rk-construction/assets/rk4.png";
import rk5 from "@/sites/rk-construction/assets/rk5.png";
import rk6 from "@/sites/rk-construction/assets/rk6.png";

const LOCAL_PROJECT_IMAGES = [rk1, rk2, rk3, rk4, rk5, rk6];

export default function ProjectPage({ data }: any) {
  const title = data?.title || "OUR PROJECTS";

  // Raw list resolving fallback safely
  const rawList =
    Array.isArray(data?.items) && data.items.length > 0
      ? data.items
      : Array.isArray(data?.projects) && data.projects.length > 0
      ? data.projects
      : LOCAL_PROJECT_IMAGES;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Safe image resolution logic
  const resolveImage = useCallback((item: any, index: number) => {
    const fallback = LOCAL_PROJECT_IMAGES[index % LOCAL_PROJECT_IMAGES.length];

    if (!item) return fallback;

    // Direct StaticImageData object check (e.g., imported via ES modules)
    if (typeof item === "object" && item?.src) return item;

    // Nested image property containing StaticImageData
    if (typeof item?.image === "object" && item?.image?.src) return item.image;

    // String URL check (if external or public asset string)
    if (typeof item?.image === "string" && item.image.trim().length > 0) {
      return item.image;
    }

    if (typeof item === "string" && item.trim().length > 0) {
      return item;
    }

    return fallback;
  }, []);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = useCallback(() => {
    if (selectedIndex === null || rawList.length === 0) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % rawList.length : 0));
  }, [selectedIndex, rawList.length]);

  const prevImage = useCallback(() => {
    if (selectedIndex === null || rawList.length === 0) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + rawList.length) % rawList.length : 0
    );
  }, [selectedIndex, rawList.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <div className="w-full bg-white text-[#1a252c] min-h-screen pt-28 sm:pt-36 md:pt-40 pb-16 px-4 sm:px-8">
      {/* PAGE HEADER SECTION */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider mb-4">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="w-16 h-[1px] bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-16 h-[1px] bg-blue-500"></div>
        </div>
      </div>

      {/* PROJECT GALLERY GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rawList.map((item: any, index: number) => {
          const imageSrc = resolveImage(item, index);

          return (
            <div
              key={item?.id || index}
              onClick={() => openLightbox(index)}
              className="group relative h-80 sm:h-96 w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Project Image */}
              <Image
                src={imageSrc}
                alt={item?.title || `Project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Quick View Hover Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#3b82f6] text-white py-3.5 px-4 flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  Quick View
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX SLIDER MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-between p-4 md:p-8 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2 z-50"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-black/40 hover:bg-black/60 z-50"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-black/40 hover:bg-black/60 z-50"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Active Slide Display */}
          <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] mt-8 my-auto flex items-center justify-center">
            <Image
              src={resolveImage(rawList[selectedIndex], selectedIndex)}
              alt="Project Preview"
              fill
              className="object-contain transition-all duration-300 select-none"
              priority
            />
          </div>

          {/* Bottom Thumbnails Carousel Bar */}
          <div className="w-full max-w-3xl flex items-center justify-center gap-3 pt-4 overflow-x-auto">
            {rawList.map((item: any, idx: number) => (
              <button
                key={item?.id || idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                  selectedIndex === idx
                    ? "border-blue-500 scale-105 opacity-100"
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
              >
                <Image
                  src={resolveImage(item, idx)}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}