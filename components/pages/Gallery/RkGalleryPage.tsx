"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryData, Theme } from "./GalleryPage";

export default function RkGallery({ data, theme }: { data: GalleryData; theme: Theme }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? data.items
      : data.items.filter((item) => item.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-20 min-h-screen" style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="border-l-4 pl-6 mb-12" style={{ borderColor: theme.primary }}>
          <p className="uppercase tracking-[3px] text-xs font-bold mb-2" style={{ color: theme.primary }}>
            {data.badge}
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {data.title}
          </h1>
          <p className="mt-3 text-gray-400 max-w-xl text-sm md:text-base">
            {data.description}
          </p>
        </div>

        {/* Industrial Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-800 pb-6">
          {["All", ...data.categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className="px-5 py-2 text-xs uppercase font-bold tracking-wider border transition-all duration-300"
              style={{
                borderColor: activeTab === category ? theme.primary : `${theme.text}30`,
                backgroundColor: activeTab === category ? theme.primary : "transparent",
                color: activeTab === category ? theme.secondary : theme.text,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-Style Structural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-slate-900 border border-gray-800 h-[360px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-80 grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span 
                  className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-black/80 border inline-block mb-2"
                  style={{ borderColor: `${theme.primary}50`, color: theme.primary }}
                >
                  [{item.category}]
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}