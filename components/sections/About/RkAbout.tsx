// @/components/sections/About/About.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  data?: {
    title?: string;
    stats?: {
      value: string | number;
      label: string;
      icon?: string;
    }[];
    ctaText?: string;
    ctaLinkText?: string;
    ctaHref?: string;
  };

  theme?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    button?: string;
  };
};

export default function About({ data, theme }: Props) {
  const primaryColor = theme?.primary || "#3B82F6";
  const backgroundColor = theme?.background || "#F9FAFB";
  const textColor = theme?.text || "#111827";

  // Default Stats matching the Webflow Mason layout in the screenshot
  const defaultStats = [
    {
      value: "325",
      label: "CLIENTS",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      value: "2056",
      label: "PROJECTS",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      value: "560",
      label: "WORKERS",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: "156",
      label: "COFFEE",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
    },
  ];

  const stats = data?.stats?.length ? data.stats : defaultStats;

  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor }}>
      {/* Top Banner (Blue Colored Background) */}
      <div
        className="w-full pt-16 pb-36 px-6 text-center text-white relative"
        style={{ backgroundColor: primaryColor }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
          {data?.title || "WHY CHOOSE US?"}
        </h2>

        {/* White Accent Line with Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-white" />
          <div className="w-28 h-[2px] bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>

      {/* Floating Overlapping Card */}
      <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-10 pb-20">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Stats Grid Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 p-8 sm:p-12 text-center">
            {stats.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4 flex flex-col items-center justify-center"
              >
                <div style={{ color: primaryColor }} className="mb-3">
                  {item.icon || (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-500 uppercase mt-2">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <hr className="border-gray-100" />

          {/* Sub Banner Link */}
          <div className="py-8 px-6 text-center bg-gray-50/50">
            <div className="inline-block px-6 py-3 rounded-md bg-blue-50/60 border border-blue-100 text-sm text-gray-600">
              {data?.ctaText || "Find out What Our Clients Say About us?"}{" "}
              <Link
                href={data?.ctaHref || "/about"}
                className="font-bold hover:underline transition-all"
                style={{ color: primaryColor }}
              >
                {data?.ctaLinkText || "Do want to Learn More"}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}