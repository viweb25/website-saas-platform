"use client";

import React, { useState } from "react";
import Image from "next/image";

type Props = {
  header?: any;
  footer?: any;
  theme?: any;
  data?: any;
};

// Helper SVG Symbol Switcher
function FeatureSymbol({ type, color }: { type: string; color: string }) {
  const iconMap: Record<string, JSX.Element> = {
    blueprint: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
    ),
    shield: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    ),
    calculator: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm-2.25 0h.008v.008h-.008v-.008Zm0-2.25h.008v.008h-.008v-.008Zm-2.25 0h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008ZM6.75 6h10.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 6.75 6ZM3.75 4.5h16.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5Z" />
    ),
    clock: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
    hammer: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a1.5 1.5 0 0 1-2.121-2.121l3.277-3.276a4.5 4.5 0 0 0-6.336 4.486c.048.58.024 1.193-.14 1.743" />
    ),
    leaf: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21V10.5m0-6.75A9 9 0 0 1 20.25 9m-16.5 0A9 9 0 0 1 12 3.75" />
    ),
    sparkles: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    ),
    briefcase: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H16.5M20.25 14.15v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25v2.25m16.5 0V15a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 15v-.85m16.5 0H3.75" />
    ),
    cube: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    ),
    home: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    ),
    key: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
    ),
    sun: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.243-1.591 1.591M5.25 12H3m4.243-4.773L5.65 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    )
  };

  return (
    <div
      className="p-2.5 rounded-xl text-white shadow-md flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        {iconMap[type] || (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        )}
      </svg>
    </div>
  );
}

export default function RkAboutPage({ header, footer, theme, data }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  const primaryColor = theme?.primary || theme?.primaryColor || "#3b82f6";

  // --- FALLBACK DATA ---
  const heroData = data?.hero || {
    badge: data?.badge || "About Us",
    title: data?.title || "ABOUT US",
    subtitle: data?.description || "Building Tomorrow With Innovation, Uncompromised Quality, and Architectural Excellence.",
    buttonText: data?.button?.text || "EXPLORE PROJECTS",
    buttonHref: data?.button?.href || "#core-features",
    image: data?.image || "/assets/rk1.png"
  };

  const quoteData = data?.quoteSection || {
    headline: "WHERE VISION MEETS PRECISION, THERE IS NO COMPROMISE.",
    description: data?.description || "RK Construction provides complete engineering and construction services for residential, commercial and industrial projects.",
    subnote: "Discover our core capabilities below",
    linkText: "Learn More About Our Core Features",
    linkHref: "#core-features"
  };

  const featuresData = data?.featuresSection || {
    title: "OUR CORE FEATURES",
    tabs: [
      {
        id: "planning",
        label: "PLANNING & MANAGEMENT",
        contentTitle: "Streamlined Project Management & Feasibility",
        image: "/assets/rkp1.png",
        items: [
          { icon: "blueprint", title: "Certified Engineers", desc: "Civil & structural experts." },
          { icon: "shield", title: "Safety & Compliance", desc: "100% adherence to building codes." },
          { icon: "calculator", title: "Quality Materials", desc: "Zero hidden costs, premium sourcing." },
          { icon: "clock", title: "On-Time Delivery", desc: "Delivered on schedule." }
        ]
      },
      {
        id: "renovation",
        label: "RENOVATION & IMPROVEMENTS",
        contentTitle: "Modernizing Existing Infrastructures",
        image: "/assets/rk2.png",
        items: [
          { icon: "hammer", title: "Structural Retrofitting", desc: "Upgrading foundation stability." },
          { icon: "leaf", title: "Eco-Friendly Materials", desc: "Green tech & thermal insulation." }
        ]
      },
      {
        id: "architecture",
        label: "ARCHITECTURE & DESIGN",
        contentTitle: "Bespoke Architectural Engineering",
        image: "/assets/rkp2.png",
        items: [
          { icon: "cube", title: "3D BIM Modeling", desc: "CAD modeling before groundbreaking." },
          { icon: "home", title: "Custom Layouts", desc: "Optimizing spatial utility & light." }
        ]
      }
    ]
  };

  const storyData = data?.story || {
    title: "OUR LEGACY STORY",
    subtitle: `${data?.experience || "25+"} ${data?.experienceText || "Years of Experience"}`,
    description: data?.description || "Our experienced engineers and skilled workforce ensure every project is delivered with quality, safety and innovation.",
    stats: [
      { number: data?.experience || "25+", label: "Years Experience" },
      { number: "500+", label: "Projects Completed" },
      { number: "100%", label: "Client Satisfaction" },
      { number: "50+", label: "Expert Engineers" }
    ]
  };

  // Safe image helper to support both static import objects and string paths coming from `data` props
  const getImageUrl = (imgObjOrStr: any, fallback: string) => {
    if (!imgObjOrStr) return fallback;
    if (typeof imgObjOrStr === "string") return imgObjOrStr;
    if (typeof imgObjOrStr === "object" && imgObjOrStr.src) return imgObjOrStr.src;
    return fallback;
  };

  const heroImageSrc = getImageUrl(heroData?.image, "/assets/rk1.png");
  const activeTabImageSrc = getImageUrl(featuresData?.tabs?.[activeTab]?.image, "/assets/rkp1.png");

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 antialiased flex flex-col justify-between">
      <main className="pt-28 sm:pt-36 md:pt-40 flex-grow">
        
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div
            className="relative rounded-3xl overflow-hidden px-6 py-12 sm:p-12 lg:p-16 shadow-2xl min-h-[480px] flex items-center"
            style={{ backgroundColor: primaryColor }}
          >
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-[3rem] border-[40px] border-white/10 pointer-events-none transform -rotate-12" />
            <div className="absolute -bottom-28 -right-20 w-[30rem] h-[30rem] rounded-[4rem] border-[50px] border-white/10 pointer-events-none transform rotate-12" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-7 text-white space-y-6">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider">
                  {heroData?.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight">
                  {heroData?.title}
                </h1>
                <p className="text-base sm:text-lg text-white/90 max-w-xl font-medium leading-relaxed">
                  {heroData?.subtitle}
                </p>
                {heroData?.buttonText && (
                  <div className="pt-2">
                    <a
                      href={heroData.buttonHref || "#"}
                      className="inline-block bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-slate-100 transition-all duration-200"
                    >
                      {heroData.buttonText}
                    </a>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/5]">
                  <Image
                    src={heroImageSrc}
                    alt="RK Construction Safety Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE & STORY SECTION */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase leading-snug tracking-tight">
                  {quoteData?.headline}
                </h2>
                <div className="bg-slate-100/80 p-5 rounded-2xl border border-slate-200/60 max-w-md">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {quoteData?.subnote}
                  </p>
                  <a
                    href={quoteData?.linkHref || "#"}
                    className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    {quoteData?.linkText} &rarr;
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                <p>{quoteData?.description}</p>
                <p className="pt-2">{storyData?.description}</p>
              </div>
            </div>

            {/* Metrics */}
            {storyData?.stats && (
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                {storyData.stats.map((stat: any, idx: number) => (
                  <div key={idx} className="space-y-1">
                    <span className="block text-3xl sm:text-4xl font-black text-slate-900" style={{ color: primaryColor }}>
                      {stat.number}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200/60" id="core-features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl py-12 px-6 text-center text-white relative overflow-hidden mb-10 shadow-xl"
              style={{ backgroundColor: primaryColor }}
            >
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-wider mb-3">
                {featuresData?.title}
              </h2>
              <div className="w-24 h-1 bg-white/60 mx-auto rounded-full" />
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-200">
                {featuresData?.tabs?.map((tab: any, idx: number) => (
                  <button
                    key={tab.id || idx}
                    onClick={() => setActiveTab(idx)}
                    className={`py-5 px-6 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 text-center ${
                      activeTab === idx
                        ? "text-white shadow-inner"
                        : "text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100"
                    }`}
                    style={{ backgroundColor: activeTab === idx ? primaryColor : undefined }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {featuresData?.tabs?.[activeTab] && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96 w-full relative border border-slate-100">
                      <Image
                        src={activeTabImageSrc}
                        alt={featuresData.tabs[activeTab].label}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-5">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-wide">
                      {featuresData.tabs[activeTab].contentTitle}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {featuresData.tabs[activeTab].items?.map((item: any, itemIdx: number) => (
                        <div key={itemIdx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 flex items-start gap-3.5">
                          <FeatureSymbol type={item.icon} color={primaryColor} />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}