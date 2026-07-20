"use client";

import React, { useState } from "react";
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";

interface ContactPageProps {
  header?: any;
  footer?: any;
  theme?: any;
  data?: {
    hero?: {
      badge?: string;
      title?: string;
      subtitle?: string;
    };
    contact?: {
      phone?: string;
      email?: string;
      address?: string;
      officeHours?: string;
    };
    form?: {
      title?: string;
      button?: string;
    };
    map?: {
      embedUrl?: string;
    };
    socials?: Array<{
      name: string;
      url: string;
    }>;
  };
}

export default function RkContactPage({ header, footer, data, theme }: ContactPageProps) {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const accentColor = theme?.primary || theme?.primaryColor || "#0f172a"; 
  const badgeTextColor = theme?.primary || theme?.primaryColor || "#2563eb";
  const badgeBgColor = (theme?.primary || theme?.primaryColor) ? `${theme?.primary || theme?.primaryColor}10` : "#eff6ff";

  return (
    <div className="w-full bg-slate-50/50 min-h-screen text-slate-800 antialiased selection:bg-blue-100 flex flex-col justify-between">
      
      {/* 1. RENDER HEADER HERE */}
      <Header data={header} theme={theme} />

      {/* Main Content Area */}
      <main className="pt-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          
          {/* Header Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            {data?.hero?.badge && (
              <span 
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 transition-all duration-300"
                style={{ color: badgeTextColor, backgroundColor: badgeBgColor }}
              >
                {data.hero.badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 md:mb-6">
              {data?.hero?.title || "Let's Build Something Great Together"}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              {data?.hero?.subtitle}
            </p>
          </div>

          {/* Master Responsive Grid split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Panel: Info Cards Container */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)]">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Connect Directly</h2>
                <p className="text-sm text-slate-500 mb-8 font-medium">
                  Reach our headquarters through our direct contact options or working hours.
                </p>

                <div className="space-y-6">
                  {data?.contact?.phone && (
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 shadow-sm mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.6221a2.25 2.25 0 0 1 1.636-2.09l4.585-1.146a2.25 2.25 0 0 1 2.347 1.3l1.246 3.116a2.25 2.25 0 0 1-.582 2.442l-2.033 1.625a15.194 15.194 0 0 0 6.574 6.574l1.625-2.033a2.25 2.25 0 0 1 2.442-.582l3.116 1.246a2.25 2.25 0 0 1 1.3 2.347l-1.146 4.585a2.25 2.25 0 0 1-2.09 1.636h-1.622c-7.854 0-14.25-6.396-14.25-14.25V6.6221Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Phone Call</span>
                        <a href={`tel:${data.contact.phone}`} className="font-semibold text-base text-slate-900 hover:text-blue-600 transition-colors">{data.contact.phone}</a>
                      </div>
                    </div>
                  )}

                  {data?.contact?.email && (
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 shadow-sm mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25 2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.92V6.75" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email Address</span>
                        <a href={`mailto:${data.contact.email}`} className="font-semibold text-base text-slate-900 hover:text-blue-600 transition-colors break-all">{data.contact.email}</a>
                      </div>
                    </div>
                  )}

                  {data?.contact?.address && (
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 shadow-sm mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Main Office</span>
                        <p className="font-semibold text-slate-800 text-sm sm:text-base mt-0.5 leading-relaxed">{data.contact.address}</p>
                      </div>
                    </div>
                  )}

                  {data?.contact?.officeHours && (
                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 shadow-sm mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Working Hours</span>
                        <p className="font-semibold text-slate-800 text-sm sm:text-base mt-0.5">{data.contact.officeHours}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Link Chips */}
                {data?.socials && data.socials.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Channels</span>
                    <div className="flex flex-wrap gap-2">
                      {data.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 active:scale-95 shadow-sm"
                        >
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Map Embed Frame */}
              {data?.map?.embedUrl && !data.map.embedUrl.includes("YOUR_MAP_URL") && (
                <div className="w-full h-52 sm:h-60 bg-white border border-slate-100 rounded-2xl overflow-hidden p-2 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)]">
                  <iframe
                    title="Office Map Location Reference"
                    src={data.map.embedUrl}
                    className="w-full h-full border-0 rounded-xl grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
            </div>

            {/* Right Panel: Form */}
            <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8">
                {data?.form?.title || "Request A Consultation"}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-slate-900 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-900 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-slate-900 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Requirements</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-slate-900 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none min-h-[120px]"
                    placeholder="Describe your project details..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{ backgroundColor: accentColor }}
                    className="w-full text-white py-3.5 px-6 rounded-xl font-semibold text-sm shadow-[0_4px_12px_rgba(15,23,42,0.1)] hover:opacity-90 active:scale-[0.99] disabled:opacity-50 transition-all duration-200"
                  >
                    {status === "sending" ? "Processing Submission..." : (data?.form?.button || "Send Message")}
                  </button>
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-100 px-4 py-3 rounded-xl text-sm font-semibold mt-3">
                    <span>✓</span>
                    <p>Consultation request submitted successfully!</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-100 px-4 py-3 rounded-xl text-sm font-semibold mt-3">
                    <span>✕</span>
                    <p>Failed to deliver message. Please retry.</p>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </main>

      {/* 2. RENDER FOOTER HERE */}
      <Footer data={footer} theme={theme} />
    </div>
  );
}