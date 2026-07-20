"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  data: {
    logo: {
      title: string;
      highlight: string;
    };
    menus: {
      label: string;
      href: string;
    }[];
    cta: {
      text: string;
      href: string;
    };
  };
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function Header({ data, theme }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-20 shadow-md z-50 flex items-center transition-colors duration-300"
        style={{
          background: theme.background,
        }}
      >
        <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold uppercase tracking-wider z-50"
            style={{ color: theme.text }}
            onClick={() => setIsOpen(false)}
          >
            {data.logo.title}{" "}
            <span style={{ color: theme.primary }}>
              {data.logo.highlight}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {data.menus.map((menu) => (
              <Link
                key={menu.label}
                href={menu.href}
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: theme.text }}
              >
                {menu.label}
              </Link>
            ))}

            <Link
              href={data.cta.href}
              className="px-5 py-2.5 rounded font-semibold transition-all hover:brightness-105 active:scale-95"
              style={{
                background: theme.button,
                color: theme.secondary,
              }}
            >
              {data.cta.text}
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center md:hidden w-10 h-10 rounded-lg focus:outline-none z-50 gap-[6px] relative"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[3px] w-7 rounded-full transform transition-all duration-300 origin-center`}
              style={{
                backgroundColor: theme.text,
                transform: isOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
              }}
            />
            <span
              className={`h-[3px] w-7 rounded-full transition-all duration-200`}
              style={{
                backgroundColor: theme.text,
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              className={`h-[3px] w-7 rounded-full transform transition-all duration-300 origin-center`}
              style={{
                backgroundColor: theme.text,
                transform: isOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Slide-out Drawer */}
    <aside
  className="fixed top-0 right-0 h-full w-[280px] max-w-[85vw] shadow-2xl z-40 p-6 pt-28 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden"
  style={{
    background: theme.background,
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
  }}
>
        <div className="flex flex-col gap-6">
          {data.menus.map((menu) => (
            <Link
              key={menu.label}
              href={menu.href}
              className="text-lg font-medium tracking-wide transition-colors border-b pb-2 hover:opacity-70"
              style={{
                color: theme.text,
                borderColor: `${theme.text}15`, // adds light transparent border
              }}
              onClick={toggleMenu}
            >
              {menu.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA Button at the bottom */}
        <div className="mb-6">
          <Link
            href={data.cta.href}
            className="block w-full text-center px-5 py-3 rounded-lg font-semibold transition-all active:scale-95 shadow-md"
            style={{
              background: theme.button,
              color: theme.secondary,
            }}
            onClick={toggleMenu}
          >
            {data.cta.text}
          </Link>
        </div>
      </aside>
    </>
  );
}