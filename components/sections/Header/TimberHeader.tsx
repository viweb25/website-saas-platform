import React from "react";

type TimberHeaderProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberHeader({ data, theme }: TimberHeaderProps) {
  const logo = data?.logo || "Timber Craft";
  const navLinks = data?.links || [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: `${theme.background}CC`,
        borderColor: `${theme.text}15`,
        color: theme.text,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold tracking-tight" style={{ color: theme.primary }}>
          {logo}
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {navLinks.map((link: any, idx: number) => (
            <a
              key={idx}
              href={link.href}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="px-5 py-2.5 rounded-lg text-sm font-bold transition-transform hover:scale-[1.02]"
          style={{
            backgroundColor: theme.button || theme.primary,
            color: theme.background,
          }}
        >
          Get Quote
        </a>
      </div>
    </header>
  );
}