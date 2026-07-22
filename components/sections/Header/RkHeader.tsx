"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import defaultHeaderData from "@/sites/rk-construction/content/header";

import logoImg from "@/sites/rk-construction/assets/rklogo.png";

type HeaderProps = {
  data?: any;
  theme?: {
    background?: string;
    text?: string;
    primary?: string;
  };
};

export default function RkHeader({ data, theme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Optimized Scroll Lock with Smooth Cleanup
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const activeData = data?.logo ? data : defaultHeaderData;
  const menus = activeData?.menus ?? [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const ctaText = activeData?.cta?.text ?? "SIGN UP";
  const ctaHref = activeData?.cta?.href ?? "#";

  const backgroundColor = theme?.background ?? "#FFFFFF";
  const textColor = theme?.text ?? "#111827";
  const primaryColor = theme?.primary ?? "#3B82F6";

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-16 sm:h-20 z-50 flex items-center border-b border-gray-100/80 shadow-sm transition-colors duration-200"
        style={{ backgroundColor }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          
          {/* Logo - Larger display bounded inside header height */}
          <Link
            href="/"
            className="flex items-center group relative z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1"
            onClick={closeMenu}
            aria-label="Go to homepage"
          >
            {/* Height capped so it never breaks header height (h-16/h-20) */}
            <div className="relative h-12 sm:h-14 lg:h-16 w-36 sm:w-48 lg:w-56 flex items-center">
              <Image
                src={logoImg}
                alt="RK Construction Logo"
                fill
                priority
                quality={100}
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 220px"
                className="object-contain object-left transform-gpu transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Styled Links with Animated Underline */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-9">
            {menus.map((menu: any, index: number) => {
              const isActive = pathname === menu.href;
              return (
                <Link
                  key={menu.label || index}
                  href={menu.href || "#"}
                  className="relative text-sm font-semibold tracking-wide transition-all duration-200 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                  style={{ color: textColor }}
                >
                  <span className={`transition-opacity duration-200 ${isActive ? "font-bold opacity-100" : "opacity-85 group-hover:opacity-100"}`}>
                    {menu.label}
                  </span>

                  {/* Animated Bottom Line Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full transform origin-center transition-transform duration-300 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{ backgroundColor: primaryColor }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href={ctaHref}
              className="px-6 lg:px-8 py-2.5 sm:py-3 text-xs font-black uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110 active:scale-95 inline-block shadow-md rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ backgroundColor: primaryColor }}
            >
              {ctaText}
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] relative z-50 focus:outline-none rounded-md"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`h-[2.5px] w-full rounded-full transition-all duration-300 transform-gpu origin-left ${
                  isOpen ? "rotate-45 translate-x-[2px] -translate-y-[1px]" : ""
                }`}
                style={{ backgroundColor: textColor }}
              />
              <span
                className={`h-[2.5px] w-full rounded-full transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundColor: textColor }}
              />
              <span
                className={`h-[2.5px] w-full rounded-full transition-all duration-300 transform-gpu origin-left ${
                  isOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""
                }`}
                style={{ backgroundColor: textColor }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-16 sm:top-20 z-40 md:hidden transition-all duration-300 ease-in-out transform-gpu ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        style={{ backgroundColor }}
      >
        <div className="flex flex-col h-full justify-between p-6 sm:p-8 overflow-y-auto">
          <nav className="flex flex-col gap-3 w-full max-w-md mx-auto pt-4">
            {menus.map((menu: any, index: number) => {
              const isActive = pathname === menu.href;
              return (
                <Link
                  key={menu.label || index}
                  href={menu.href || "#"}
                  className={`w-full text-center py-3.5 px-4 text-base transition-all duration-200 rounded-xl ${
                    isActive ? "font-extrabold bg-gray-100/80" : "font-semibold hover:bg-gray-50 active:scale-98"
                  }`}
                  style={{ color: isActive ? primaryColor : textColor }}
                  onClick={closeMenu}
                >
                  {menu.label}
                </Link>
              );
            })}
          </nav>

          <div className="w-full max-w-md mx-auto pb-8 pt-4">
            <Link
              href={ctaHref}
              className="w-full text-center py-4 px-6 text-xs font-black uppercase tracking-widest text-white shadow-md rounded-xl transition-all duration-200 active:scale-95 block"
              style={{ backgroundColor: primaryColor }}
              onClick={closeMenu}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}