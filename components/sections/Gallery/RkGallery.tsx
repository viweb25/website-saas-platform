// @/components/sections/Gallery/Gallery.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Static local imports fallback
import rk1 from "@/sites/rk-construction/assets/rk1.png";
import rk2 from "@/sites/rk-construction/assets/rk2.png";
import rk3 from "@/sites/rk-construction/assets/rk3.png";

const LOCAL_IMAGES = [rk1, rk2, rk3];

type Props = {
  data?: {
    badge?: string;
    title?: string;
    items?: {
      title?: string;
      category?: string;
      description?: string;
      image?: any;
    }[];
  };
  theme?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    button?: string;
  };
};

export default function Gallery({ data, theme }: Props) {
  const primaryColor = theme?.primary || "#3B82F6";
  const backgroundColor = theme?.background || "#FFFFFF";
  const textColor = theme?.text || "#111827";

  // Default content matching the Mason template screenshot if data isn't provided
  const defaultItems = [
    {
      title: "BEST QUALITY",
      category: "INTERIOR",
      description:
        "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
      image: rk1,
    },
    {
      title: "NEW STANDARDS",
      category: "DESIGN",
      description:
        "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
      image: rk2,
    },
    {
      title: "CONSTRUCTION",
      category: "BUILDING",
      description:
        "Our object in the construction of the state is the greatest happiness of the whole, and not that of any one class.",
      image: rk3,
    },
  ];

  const items = data?.items?.length ? data.items : defaultItems;

  return (
    <section
      className="py-20 sm:py-28 transition-colors"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-gray-900">
            {data?.title || "WORK IN PROCESS"}
          </h2>
          {/* Blue line divider matching Mason design */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: primaryColor }}
            />
            <div
              className="w-24 h-[2px]"
              style={{ backgroundColor: `${primaryColor}40` }}
            />
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, index) => {
            const imageSrc =
              item.image && typeof item.image === "object"
                ? item.image
                : LOCAL_IMAGES[index % LOCAL_IMAGES.length];

            return (
              <Link key={index} href="/gallery" className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                >
                  {/* Top Image Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={imageSrc}
                      alt={item.title || `Gallery Item ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Content Card */}
                  <div className="p-8 flex-1 flex flex-col justify-between bg-white relative">
                    {/* Blue Icon Box */}
                    <div
                      className="w-10 h-10 -mt-13 mb-4 rounded flex items-center justify-center text-white shadow-md relative z-10"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold uppercase text-gray-900 tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description ||
                          "Our object in the construction of the state is the greatest happiness of the whole."}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* View More Button linking to /gallery */}
        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900"
            style={{
              borderColor: primaryColor,
              color: primaryColor,
            }}
          >
            <span>+</span> VIEW MORE SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}