// @/components/sections/Services/Services.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  button: string;
};

type Props = {
  data: {
    badge?: string;
    title?: string;
    videoImage?: string; // Optional tall center image/video thumbnail
    items: ServiceItem[];
  };

  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function Services({ data, theme }: Props) {
  const items = data.items || [];
  
  // Split items into left and right columns (2 on left, rest on right)
  const leftItems = items.slice(0, 2);
  const rightItems = items.slice(2, 4);

  // Fallback high-res architecture/crane image matching Screenshot 2
  const centerImage =
    data.videoImage ||
    "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80";

  return (
    <section
      className="py-16 sm:py-20 md:py-28 transition-colors border-t border-b border-gray-100"
      style={{ background: theme.background || "#FFFFFF", color: theme.text || "#111827" }}
    >
      <div className="w-[92%] max-w-7xl mx-auto">
        
        {/* Optional Badge Header Divider */}
        <div className="w-16 h-0.5 mx-auto mb-12 sm:mb-16" style={{ backgroundColor: theme.primary }} />

        {/* Mason Split 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: First 2 Services (Lg: 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8 md:gap-10">
            {leftItems.map((service, idx) => (
              <div
                key={service.id || idx}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Architectural Icon */}
                <div className="mb-4 text-blue-600">
                  {idx === 0 ? (
                    <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m2 0h2" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
                  {service.description}
                </p>

                {/* Read More Link */}
                <Link
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  {service.button || "READ MORE"}
                </Link>
              </div>
            ))}
          </div>

          {/* CENTER COLUMN: Tall Video/Image Banner (Lg: 4 Cols) */}
          <div className="lg:col-span-4 relative min-h-[420px] sm:min-h-[500px] lg:min-h-full rounded-none overflow-hidden group">
            <Image
              src={centerImage}
              alt="Construction Video Showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark Overlay Filter */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

            {/* Central Video Play Trigger */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Play Construction Video"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Remaining Services (Lg: 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8 md:gap-10">
            {rightItems.map((service, idx) => (
              <div
                key={service.id || idx + 2}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Architectural Icon */}
                <div className="mb-4 text-blue-600">
                  {idx === 0 ? (
                    <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
                  {service.description}
                </p>

                {/* Read More Link */}
                <Link
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  {service.button || "READ MORE"}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}