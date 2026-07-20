"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryData, Theme } from "./GalleryPage";

export default function TimberGallery({ data, theme }: { data: GalleryData; theme: Theme }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? data.items
      : data.items.filter((item) => item.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-20 min-h-screen" style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Serif Elegant Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-xs font-serif italic tracking-widest mb-2" style={{ color: theme.primary }}>
            {data.badge}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide">
            {data.title}
          </h1>
          <div className="h-[1px] w-16 mx-auto my-4" style={{ backgroundColor: theme.primary }} />
          <p className="text-stone-500 text-sm font-light">
            {data.description}
          </p>
        </div>

        {/* Soft Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", ...data.categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className="px-6 py-2 rounded-full text-xs font-serif tracking-widest transition-all duration-300"
              style={{
                backgroundColor: activeTab === category ? theme.button : `${theme.text}08`,
                color: activeTab === category ? theme.secondary : theme.text,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Organic Curved Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-[400px] overflow-hidden rounded-[2rem] shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 m-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-white">
                <p className="text-[10px] tracking-widest uppercase opacity-75 font-serif mb-1">
                  {item.category}
                </p>
                <h3 className="text-lg font-serif font-medium">
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