// components/sections/Header/RkHeader.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import defaultHeaderData from "@/sites/rk-construction/content/header"; // Import your header config directly as a fallback

export default function RkHeader({ data, theme }: any) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock main page scrolling when the mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // If props.data or props.data.logo is missing, fall back to defaultHeaderData
  const activeData = data?.logo ? data : defaultHeaderData;

  const logoTitle = activeData?.logo?.title ?? "RK";
  const logoHighlight = activeData?.logo?.highlight ?? "Construction";
  const menus = activeData?.menus ?? [];
  const ctaText = activeData?.cta?.text ?? "Get a Quote";
  const ctaHref = activeData?.cta?.href ?? "#";

  const backgroundColor = theme?.background ?? "#111827";
  const textColor = theme?.text ?? "#FFFFFF";
  const primaryColor = theme?.primary ?? "#EAB308";
  const secondaryColor = theme?.secondary ?? "#000000";
  const buttonColor = theme?.button ?? "#EAB308";

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-20 shadow-md z-50 flex items-center"
        style={{ background: backgroundColor }}
      >
        <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold uppercase tracking-wider relative z-50"
            style={{ color: textColor }}
            onClick={() => setIsOpen(false)}
          >
            {logoTitle}{" "}
            <span style={{ color: primaryColor }}>{logoHighlight}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menus.map((menu: any, index: number) => (
              <Link
                key={menu.label || index}
                href={menu.href || "#"}
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: textColor }}
              >
                {menu.label}
              </Link>
            ))}

            <Link
              href={ctaHref}
              className="px-5 py-2.5 rounded font-semibold transition-all hover:brightness-105"
              style={{ background: buttonColor, color: secondaryColor }}
            >
              {ctaText}
            </Link>
          </nav>

          {/* Hamburger Toggle Button (Mobile) */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] relative z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
              style={{ backgroundColor: textColor }}
            />
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 scale-0" : "opacity-100"
              }`}
              style={{ backgroundColor: textColor }}
            />
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
              style={{ backgroundColor: textColor }}
            />
          </button>

          {/* Mobile Overlay Navigation Drawer */}
          <div
            className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] flex flex-col justify-between items-center p-8 transition-all duration-300 ease-in-out md:hidden z-40 overflow-y-auto ${
              isOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-4"
            }`}
            style={{ background: backgroundColor }}
          >
            <nav className="flex flex-col items-center gap-6 text-center my-auto w-full">
              {menus.map((menu: any, index: number) => (
                <Link
                  key={menu.label || index}
                  href={menu.href || "#"}
                  className="text-xl font-semibold transition-colors hover:opacity-70 py-1 w-full"
                  style={{ color: textColor }}
                  onClick={() => setIsOpen(false)}
                >
                  {menu.label}
                </Link>
              ))}

              <Link
                href={ctaHref}
                className="mt-4 px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:brightness-105 inline-block"
                style={{ background: buttonColor, color: secondaryColor }}
                onClick={() => setIsOpen(false)}
              >
                {ctaText}
              </Link>
            </nav>
          </div>

        </div>
      </header>
    </>
  );
}