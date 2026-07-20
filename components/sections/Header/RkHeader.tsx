// components/sections/Header/RkHeader.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import defaultHeaderData from "@/sites/rk-construction/content/header"; // Import your header config directly as a fallback

export default function RkHeader({ data, theme }: any) {
  const [isOpen, setIsOpen] = useState(false);

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
            className="text-2xl font-bold uppercase tracking-wider"
            style={{ color: textColor }}
            onClick={() => setIsOpen(false)}
          >
            {logoTitle}{" "}
            <span style={{ color: primaryColor }}>{logoHighlight}</span>
          </Link>

          {/* Nav Items (Desktop) */}
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
        </div>
      </header>
    </>
  );
}