"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";

type ServicesPageProps = {
  header?: any;
  footer?: any;
  theme?: any;
  data?: any;
};

function ServiceIcon({ type, color }: { type: string; color: string }) {
  const icons: Record<string, JSX.Element> = {
    process: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 01-1.022-.547l-2.387-.477A2 2 0 011 12.158V6.842a2 2 0 011.191-1.838l2.387-.477a2 2 0 001.022-.547l.318-.158a6 6 0 013.86-.517l2.387.477a6 6 0 003.86-.517l.318-.158A2 2 0 0118.4 3.12l2.387.477A2 2 0 0122 5.435v5.316a2 2 0 01-1.191 1.838l-1.381.276" />
    ),
    construction: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
    ),
    civil: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.818V8.052a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
    electrical: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    metallurgy: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 01-1.022-.547l-2.387-.477A2 2 0 011 12.158V6.842" />
    ),
    specialty: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    )
  };

  return (
    <div
      className="p-3.5 rounded-xl shadow-sm flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#0f172a">
        {icons[type?.toLowerCase()] || icons["construction"]}
      </svg>
    </div>
  );
}

export default function ServicesPage({ header, footer, theme, data }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const primaryColor = theme?.primary || theme?.primaryColor || "#ffb703";

  // Forced contrast configuration:
  // Set heroBgColor to "#ffffff" if your hero section should have a light background instead
  const heroBgColor = theme?.background || "#0f172a";
  const heroTextColor = heroBgColor === "#ffffff" || heroBgColor === "white" ? "#0f172a" : "#ffffff";
  const heroSubtitleColor = heroBgColor === "#ffffff" || heroBgColor === "white" ? "#334155" : "#cbd5e1";

  const heroBadge = data?.hero?.badge || data?.badge || "What We Do";
  const heroTitle =
    data?.hero?.title ||
    data?.title ||
    "Engineering Solutions Built Around Your Vision";
  const heroSubtitle =
    data?.hero?.subtitle ||
    data?.subtitle ||
    data?.description ||
    "Delivering sustainable, safety-compliant, and high-precision engineering services for complex projects.";

  const rawList = Array.isArray(data)
    ? data
    : data?.items || data?.services || data?.list || [];

  const serviceList = rawList.map((item: any, idx: number) => ({
    id: item.id || `0${idx + 1}`,
    title: item.title || item.name || `Service ${idx + 1}`,
    description: item.description || item.details || item.desc || "",
    category: item.category || "ENGINEERING",
    button: item.button || item.buttonText || "Details",
    href: item.href || item.link || "#",
    type: item.type || item.icon || "construction"
  }));

  const processSteps = data?.process || [
    { step: "01", title: "Feasibility & Assessment", desc: "Conducting structural, environmental, and cost-efficiency diagnostics." },
    { step: "02", title: "Precision Design & BIM", desc: "Developing 3D structural blueprints and engineering parameters." },
    { step: "03", title: "Execution & Oversight", desc: "Deploying certified machinery and project managers on-site." },
    { step: "04", title: "Testing & Handover", desc: "Final quality audits, code certification, and facility commissioning." }
  ];

  const statsData = data?.stats || [
    { number: "100%", label: "Safety Compliance" },
    { number: "250+", label: "Heavy Industrial Builds" },
    { number: "15+", label: "Engineering Disciplines" },
    { number: "24/7", label: "Project Monitoring" }
  ];

  const extractedCategories = Array.from(
    new Set(serviceList.map((s: any) => s.category?.toUpperCase()).filter(Boolean))
  );
  const categories = ["ALL", ...extractedCategories];

  const filteredServices =
    activeCategory === "ALL"
      ? serviceList
      : serviceList.filter((s: any) => s.category?.toUpperCase() === activeCategory);

  return (
    <div className="w-full bg-slate-50 min-h-screen flex flex-col justify-between antialiased">
    

      <main className="pt-20 flex-grow">
        
        {/* HERO BANNER SECTION */}
        <section
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{ backgroundColor: heroBgColor }}
        >
          <div className="w-[90%] max-w-7xl mx-auto relative z-10 text-center">
            {heroBadge && (
              <span
                className="inline-block text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-md mb-6 shadow-md"
                style={{ backgroundColor: primaryColor, color: "#0f172a" }}
              >
                {heroBadge}
              </span>
            )}

            {/* HERO TITLE - DYNAMIC CONTRAST COLOR */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black max-w-4xl mx-auto leading-tight mb-6 tracking-tight uppercase"
              style={{ color: heroTextColor }}
            >
              {heroTitle}
            </h1>

            {/* HERO SUBTITLE */}
            {heroSubtitle && (
              <p
                className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
                style={{ color: heroSubtitleColor }}
              >
                {heroSubtitle}
              </p>
            )}
          </div>
        </section>

        {/* METRICS BANNER */}
        <section className="bg-white border-b border-slate-200 py-8 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
          <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statsData.map((stat: any, idx: number) => (
              <div key={idx} className="border-r last:border-r-0 border-slate-200 pr-2">
                <span className="block text-2xl sm:text-4xl font-black" style={{ color: primaryColor }}>
                  {stat.number}
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: "#0f172a" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES CATEGORY FILTER & GRID */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="w-[90%] max-w-7xl mx-auto">
            
            {/* Filter Tabs */}
            {categories.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                {categories.map((cat: any) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 border ${
                      activeCategory === cat
                        ? "border-transparent shadow-md"
                        : "bg-white border-slate-300 hover:bg-slate-100"
                    }`}
                    style={{
                      backgroundColor: activeCategory === cat ? primaryColor : "#ffffff",
                      color: "#0f172a"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Grid display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service: any, index: number) => (
                <div
                  key={service.id || index}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <ServiceIcon type={service.type} color={primaryColor} />
                      <span className="text-xs font-black tracking-wider" style={{ color: "#64748b" }}>
                        #{service.id}
                      </span>
                    </div>

                    {/* CARD TITLE - DARK SLATE FOR WHITE BG */}
                    <h3
                      className="text-xl font-black mb-3 tracking-tight"
                      style={{ color: "#0f172a" }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* CARD DESCRIPTION */}
                    {service.description && (
                      <p
                        className="text-xs sm:text-sm leading-relaxed mb-6 font-medium"
                        style={{ color: "#334155" }}
                      >
                        {service.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                      style={{ backgroundColor: "#f1f5f9", color: "#334155" }}
                    >
                      {service.category}
                    </span>
                    <Link
                      href={service.href}
                      className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <span className="font-extrabold" style={{ color: "#0f172a" }}>
                        {service.button}
                      </span>
                      <span className="font-extrabold" style={{ color: primaryColor }}>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORKFLOW PROCESS TIMELINE */}
        <section className="py-20 bg-slate-900 border-t border-slate-800" style={{ backgroundColor: "#0f172a" }}>
          <div className="w-[90%] max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: "#94a3b8" }}>
                WORKFLOW EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight" style={{ color: "#ffffff" }}>
                HOW WE EXECUTE OUR PROJECTS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item: any, idx: number) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative">
                  <span
                    className="text-sm font-black tracking-widest px-3 py-1 rounded-md inline-block mb-4"
                    style={{ backgroundColor: primaryColor, color: "#0f172a" }}
                  >
                    STEP {item.step || `0${idx + 1}`}
                  </span>
                  <h4 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>{item.title}</h4>
                  <p className="text-xs leading-relaxed font-medium" style={{ color: "#cbd5e1" }}>
                    {item.desc || item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-16 text-center bg-white border-t border-slate-200" style={{ backgroundColor: "#ffffff" }}>
          <div className="w-[90%] max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black uppercase" style={{ color: "#0f172a" }}>
              READY TO LAUNCH YOUR NEXT ENGINEERING PROJECT?
            </h2>
            <p className="text-sm sm:text-base font-medium" style={{ color: "#334155" }}>
              Consult with our engineering team today for project assessments and quotes.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: primaryColor, color: "#0f172a" }}
              >
                REQUEST A PROJECT ESTIMATE
              </Link>
            </div>
          </div>
        </section>

      </main>

  
    </div>
  );
}