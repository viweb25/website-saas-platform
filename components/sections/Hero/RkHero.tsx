"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    badge?: string;
    title: string;
    description: string;
    button: {
      text: string;
      href: string;
    };
    image: string;
    blueprint?: string;
    stats?: {
      value: string;
      label: string;
    }[];
    highlight?: {
      title: string;
      value: string;
      subtitle: string;
      image?: string;
    };
  };

  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function Hero({ data, theme }: Props) {
  return (
    <section 
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
      style={{ backgroundColor: theme.primary }}
    >
      {/* Background Image Layer - Covers Right Half on Desktop / Full Screen on Mobile */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full lg:w-[60%] lg:ml-auto">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
          {/* Overlay gradient for enhanced contrast on mobile */}
          <div className="absolute inset-0 bg-black/40 lg:hidden" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-[92%] max-w-7xl mx-auto py-16 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Framed White Box Container */}
          <div className="p-8 sm:p-12 md:p-16 border-4 border-white bg-transparent backdrop-blur-sm lg:backdrop-blur-none text-white shadow-2xl lg:shadow-none">
            
            {/* Optional Badge */}
            {data.badge && (
              <p className="text-xs sm:text-sm uppercase tracking-[4px] font-bold mb-3 text-white/90">
                {data.badge}
              </p>
            )}

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-6 text-white">
              {data.title}
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-8 max-w-md">
              {data.description}
            </p>

            {/* Call To Action Button */}
            <div>
              <Link
                href={data.button.href}
                className="inline-block w-full sm:w-auto text-center px-8 py-4 bg-white font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg active:scale-95"
                style={{ color: theme.primary }}
              >
                {data.button.text}
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}