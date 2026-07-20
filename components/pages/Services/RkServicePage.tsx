"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";

type ServicesPageProps = {
  header?: any;
  footer?: any;
  theme?: any;
  data?: any;
};

export default function ServicesPage({ header, footer, theme, data }: ServicesPageProps) {
  // 1. Universal Data Fallbacks
  // Check if `data` itself is an array OR contains a nested array
  const serviceList = Array.isArray(data)
    ? data
    : data?.services || data?.items || data?.list || [];

  // Hero & General Content Normalization
  const hero = data?.hero || {};
  const intro = data?.intro || {};
  const whyChoose = data?.whyChoose || {};
  const process = data?.process || [];
  const cta = data?.cta || {};

  // Text fallbacks (handles both flat data and nested hero objects)
  const pageTitle = hero.title || data?.title || "Our Services";
  const pageBadge = hero.badge || data?.badge || "What We Do";
  const pageSubtitle = hero.subtitle || data?.subtitle || data?.description || "";

  // 2. Dynamic Theme Colors (consistent across Header, Content, and Footer)
  const primaryColor = theme?.primary || theme?.primaryColor || "#ffb703";
  const bgColor = theme?.background || "#ffffff";
  const textColor = theme?.text || "#1e293b";

  return (
    <div className="w-full min-h-screen flex flex-col justify-between" style={{ backgroundColor: bgColor, color: textColor }}>
      
      {/* HEADER */}
      <Header data={header} theme={theme} />

      {/* MAIN BODY */}
      <main className="flex-grow pt-20">
        
        {/* HERO BANNER */}
        <section 
          className="relative bg-slate-900 text-white py-20 md:py-28 bg-cover bg-center flex items-center"
          style={{ 
            backgroundImage: hero?.backgroundImage 
              ? `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${hero.backgroundImage})` 
              : undefined 
          }}
        >
          <div className="w-[90%] max-w-7xl mx-auto text-center">
            {pageBadge && (
              <span 
                className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded mb-4 shadow-sm"
                style={{ backgroundColor: primaryColor, color: "#0f172a" }}
              >
                {pageBadge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto leading-tight mb-6 tracking-tight">
              {pageTitle}
            </h1>
            {pageSubtitle && (
              <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                {pageSubtitle}
              </p>
            )}
          </div>
        </section>

        {/* INTRO SECTION */}
        {(intro.title || intro.description) && (
          <section className="py-12 w-[90%] max-w-5xl mx-auto text-center">
            {intro.title && <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{intro.title}</h2>}
            {intro.description && (
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                {intro.description}
              </p>
            )}
          </section>
        )}

        {/* SERVICES GRID */}
        {serviceList.length > 0 && (
          <section className="py-16 bg-white border-y border-slate-200/80">
            <div className="w-[90%] max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceList.map((service: any, index: number) => (
                  <div 
                    key={service.id || index} 
                    className="p-8 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start bg-slate-50/50"
                  >
                    {service.icon && (
                      <span className="text-4xl mb-4 block">{service.icon}</span>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title || service.name || `Service ${index + 1}`}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description || service.details || ""}
                    </p>
                    {(service.button || service.href) && (
                      <Link 
                        href={service.href || "#"} 
                        className="font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                        style={{ color: primaryColor }}
                      >
                        {service.button || "Learn More"} →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* WHY CHOOSE US & PROCESS */}
        {(whyChoose.title || process.length > 0) && (
          <section className="py-20 w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Why Choose Us */}
            {whyChoose.title && (
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{whyChoose.title}</h2>
                {whyChoose.description && <p className="text-slate-600 mb-8 leading-relaxed font-medium">{whyChoose.description}</p>}
                {whyChoose.items && Array.isArray(whyChoose.items) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {whyChoose.items.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                        <span style={{ color: primaryColor }} className="text-lg font-bold">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Process */}
            {process.length > 0 && (
              <div className="lg:col-span-7 space-y-5">
                {process.map((step: any, idx: number) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/70 flex gap-5 items-start">
                    {(step.step || step.number) && (
                      <span 
                        className="text-lg font-extrabold tracking-wider px-3 py-1 rounded border border-slate-200/50"
                        style={{ color: primaryColor, backgroundColor: "#f8fafc" }}
                      >
                        {step.step || step.number || idx + 1}
                      </span>
                    )}
                    <div>
                      {step.title && <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>}
                      {step.description && <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* CTA SECTION */}
        {cta.title && (
          <section className="bg-slate-900 text-white py-16 text-center border-t border-slate-800">
            <div className="w-[90%] max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{cta.title}</h2>
              {cta.description && <p className="text-slate-300 mb-8 leading-relaxed font-medium">{cta.description}</p>}
              <Link 
                href={cta.button?.href || cta.href || "#"}
                className="inline-block font-bold px-8 py-3.5 rounded-lg shadow-md hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: primaryColor, color: "#0f172a" }}
              >
                {cta.button?.text || cta.buttonText || "Contact Us"}
              </Link>
            </div>
          </section>
        )}

      </main>

      {/* FOOTER */}
      <Footer data={footer} theme={theme} />
    </div>
  );
}