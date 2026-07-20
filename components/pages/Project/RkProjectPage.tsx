// components/pages/Projects/ProjectPage.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectItem = {
  id: number;
  title: string;
  category: string;
  location: string;
  stats: string;
  image: string;
  description: string;
};

type ProjectPageProps = {
  data: {
    hero: { badge: string; title: string; subtitle: string; backgroundImage: string };
    intro: { title: string; description: string };
    categories: Array<{ slug: string; name: string }>;
    projects: ProjectItem[];
    cta: { title: string; description: string; button: { text: string; href: string } };
  };
  theme?: any;
};

export default function ProjectPage({ data }: ProjectPageProps) {
  // 1. Guard check to gracefully handle entirely missing content or empty states
  if (!data || !data.hero) {
    return (
      <div className="w-full bg-[#f4f7f6] text-[#333333] min-h-screen flex flex-col items-center justify-center py-20 text-center px-4">
        <h2 className="text-2xl font-bold text-[#1a252c] mb-2">Portfolio Content Unavailable</h2>
        <p className="text-gray-500 max-w-md text-sm">
          The projects schema could not be loaded for this configuration. Please verify your data files are registered correctly in the system loader.
        </p>
      </div>
    );
  }

  // 2. Safe extraction with default structural fallbacks to prevent runtime crashes
  const { 
    hero = { badge: "", title: "", subtitle: "", backgroundImage: "" }, 
    intro = { title: "", description: "" }, 
    categories = [], 
    projects = [], 
    cta = { title: "", description: "", button: { text: "", href: "" } } 
  } = data;

  const [activeTab, setActiveTab] = useState("all");

  // Filter items safely matching selected category slug
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="w-full bg-[#f4f7f6] text-[#333333] min-h-screen">
      
      {/* Hero Section Banner */}
      <section 
        className="relative bg-[#1a252c] text-white py-24 md:py-32 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(26, 37, 44, 0.85), rgba(26, 37, 44, 0.85)), url(${hero.backgroundImage})` }}
      >
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          {hero.badge && (
            <span className="inline-block bg-[#ffb703] text-[#1a252c] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
              {hero.badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-[#ced4da] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Narrative Section Intro */}
      <section className="py-16 w-[90%] max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1a252c] mb-4">{intro.title}</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          {intro.description}
        </p>
      </section>

      {/* Category Filter Controls Section */}
      {categories.length > 0 && (
        <section className="pb-8 w-[90%] max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 border-b border-gray-200 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(cat.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.slug
                    ? "bg-[#ffb703] text-[#1a252c] shadow-sm"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Portfolio Presentation Grid */}
      <section className="py-8 w-[90%] max-w-7xl mx-auto min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm flex flex-col group transition-all duration-300 hover:shadow-md"
            >
              {/* Card Thumbnail Box */}
              <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No Image Available
                  </div>
                )}
                <span className="absolute bottom-4 left-4 bg-[#1a252c]/90 text-white backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Card Meta Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-gray-500 mb-2">
                    <span>📍 {project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a252c] mb-3 group-hover:text-[#ffb703] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-2 flex justify-between items-center">
                  <span className="text-xs font-bold text-[#ffb703] uppercase tracking-wide bg-[#f4f7f6] px-2.5 py-1 rounded">
                    {project.stats}
                  </span>
                  <Link href="#" className="text-xs font-bold text-[#1a252c] hover:underline flex items-center gap-1">
                    View Case Study <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No projects found in this configuration category.
          </div>
        )}
      </section>

      {/* Action Pipeline Conversion Zone */}
      <section className="bg-[#1a252c] text-white py-16 text-center mt-12 border-t border-white/5">
        <div className="w-[90%] max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="text-[#ced4da] mb-8 leading-relaxed">{cta.description}</p>
          <Link 
            href={cta.button?.href || "#"}
            className="inline-block bg-[#ffb703] text-[#1a252c] font-bold px-8 py-3.5 rounded hover:bg-[#e5a100] transition-colors"
          >
            {cta.button?.text || "Contact Us"}
          </Link>
        </div>
      </section>

    </div>
  );
}