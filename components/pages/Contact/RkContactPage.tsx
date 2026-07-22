"use client";

import React, { useState } from "react";
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";

interface ContactPageProps {
  header?: any;
  footer?: any;
  theme?: any;
  data?: {
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
  };
}

export default function RkContactPage({ header, footer, data, theme }: ContactPageProps) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const primaryColor = theme?.primary || theme?.primaryColor || "#2563eb";

  const contactItems = [
    {
      label: "Call Us",
      value: data?.contact?.phone || "+1 (555) 019-2834",
      href: `tel:${data?.contact?.phone || "+15550192834"}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.6221a2.25 2.25 0 0 1 1.636-2.09l4.585-1.146a2.25 2.25 0 0 1 2.347 1.3l1.246 3.116a2.25 2.25 0 0 1-.582 2.442l-2.033 1.625a15.194 15.194 0 0 0 6.574 6.574l1.625-2.033a2.25 2.25 0 0 1 2.442-.582l3.116 1.246a2.25 2.25 0 0 1 1.3 2.347l-1.146 4.585a2.25 2.25 0 0 1-2.09 1.636h-1.622c-7.854 0-14.25-6.396-14.25-14.25V6.6221Z" />
      ),
    },
    {
      label: "Email Us",
      value: data?.contact?.email || "contact@rkconstruction.com",
      href: `mailto:${data?.contact?.email || "contact@rkconstruction.com"}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25 2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.92V6.75" />
      ),
    },
    {
      label: "Visit Us",
      value: data?.contact?.address || "123 Business Avenue, Suite 400, NY",
      href: null,
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </>
      ),
    },
    {
      label: "Hours",
      value: data?.contact?.officeHours || "Mon - Fri: 8:00 AM - 6:00 PM",
      href: null,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      ),
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 antialiased flex flex-col justify-between">
      <Header data={header} theme={theme} />

      <main className="pt-24 pb-16 flex-grow flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Simple Clean Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
              Get in Touch
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Have a question or requirement? Drop us a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Contact Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-4 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div
                    className="p-3 rounded-xl text-white flex-shrink-0"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      {item.icon}
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-slate-900 hover:opacity-80 transition-opacity truncate block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-900 truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Clean Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ backgroundColor: primaryColor }}
                  className="w-full text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-xs text-emerald-600 font-semibold text-center pt-2">
                    ✓ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-rose-600 font-semibold text-center pt-2">
                    ✕ Something went wrong. Try again.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer data={footer} theme={theme} />
    </div>
  );
}