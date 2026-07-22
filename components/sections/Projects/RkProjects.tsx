// @/components/sections/Projects/RkProjects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

// Static imports directly from your source directory
import rk1 from "@/sites/rk-construction/assets/rk1.png";
import rk2 from "@/sites/rk-construction/assets/rk2.png";
import rk3 from "@/sites/rk-construction/assets/rk3.png";
import rk4 from "@/sites/rk-construction/assets/rk4.png";
import rk5 from "@/sites/rk-construction/assets/rk5.png";
import rk6 from "@/sites/rk-construction/assets/rk6.png";

const LOCAL_PROJECT_IMAGES = [rk1, rk2, rk3, rk4, rk5, rk6];

export default function RkProjects({ data, theme }: any) {
  const primaryColor = theme?.primary || "#3B82F6";
  const backgroundColor = theme?.background || "#FFFFFF";
  const textColor = theme?.text || "#111827";

  // Use dynamic items array length or default to 6 items
  const items = data?.items?.length ? data.items : LOCAL_PROJECT_IMAGES;

  // Helper function to resolve static asset imports vs broken string paths
  const resolveImage = (item: any, index: number) => {
    const fallback = LOCAL_PROJECT_IMAGES[index % LOCAL_PROJECT_IMAGES.length];
    
    // If item itself is a static import object (e.g., direct import)
    if (typeof item === "object" && item?.src) return item;

    // If item has a string path like "/projects/project-1.jpg" or broken URL, force local fallback
    if (
      !item?.image ||
      typeof item.image !== "string" ||
      item.image.includes("/projects/") ||
      item.image.includes("unsplash")
    ) {
      return fallback;
    }

    return item.image;
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-28 transition-colors"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="w-[92%] max-w-7xl mx-auto">
        
        {/* Optional Section Title */}
        {(data?.title || data?.badge) && (
          <div className="text-center mb-12 sm:mb-16">
            {data?.badge && (
              <p
                className="uppercase tracking-[3px] text-xs font-bold mb-2"
                style={{ color: primaryColor }}
              >
                {data.badge}
              </p>
            )}
            {data?.title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
                {data.title}
              </h2>
            )}
          </div>
        )}

        {/* 3-Column Edge-to-Edge Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.slice(0, 6).map((item: any, index: number) => {
            const imageSrc = resolveImage(item, index);

            return (
              <div
                key={item?.id || index}
                className="group relative h-[300px] sm:h-[360px] md:h-[420px] w-full overflow-hidden bg-gray-100 shadow-sm"
              >
                {/* Project Image */}
                <Image
                  src={imageSrc}
                  alt={item?.title || `RK Project ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Mask */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {item?.location && (
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-1">
                      {item.location}
                    </span>
                  )}
                  <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                    {item?.title || `Project 0${index + 1}`}
                  </h3>
                  <Link
                    href="#"
                    className="mt-3 text-xs font-bold uppercase tracking-widest text-white border-b border-white self-start pb-0.5 hover:text-blue-400 hover:border-blue-400 transition-colors"
                  >
                    {item?.button || "VIEW PROJECT"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}