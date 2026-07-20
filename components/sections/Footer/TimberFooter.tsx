import React from "react";

type TimberFooterProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberFooter({ data, theme }: TimberFooterProps) {
  const brandName = data?.brandName || "Timber Crafts";
  const tagline =
    data?.tagline ||
    "Engineered wood architecture and custom timber framing built to endure.";
  const copyright =
    data?.copyright || `© ${new Date().getFullYear()} ${brandName}. All rights reserved.`;

  const navigation = data?.navigation || [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="py-12 px-6 sm:px-12 border-t transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        borderColor: `${theme.text}15`,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand & Mission */}
          <div className="space-y-3">
            <h3
              className="text-xl font-extrabold tracking-wide"
              style={{ color: theme.primary }}
            >
              {brandName}
            </h3>
            <p className="text-sm opacity-80 leading-relaxed max-w-sm">
              {tagline}
            </p>
          </div>

          {/* Dynamic Navigation Links */}
          <div className="flex flex-wrap gap-6 md:justify-center text-sm font-medium">
            {navigation.map((link: { label: string; href: string }, idx: number) => (
              <a
                key={idx}
                href={link.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: theme.text }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Timber Quality Badge / Note */}
          <div className="md:text-right space-y-1">
            <p className="text-xs uppercase font-semibold tracking-wider opacity-60">
              Sustainability Standard
            </p>
            <p className="text-sm font-medium" style={{ color: theme.primary }}>
              100% FSC-Certified Timber
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center text-xs opacity-60 gap-4"
          style={{ borderColor: `${theme.text}10` }}
        >
          <p>{copyright}</p>
          <p>Designed with Natural Precision</p>
        </div>
      </div>
    </footer>
  );
}