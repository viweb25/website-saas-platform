import React from "react";

type TimberHeroProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberHero({ data, theme }: TimberHeroProps) {
  const title = data?.title || "Architectural Wood & Structural Timber Engineering";
  const subtitle =
    data?.subtitle ||
    "Crafting durable timber frames, heavy wood trusses, and bespoke joinery with sustainable wood architecture.";

  return (
    <section
      className="pt-32 pb-20 px-6 sm:px-12 transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <span
          className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
          style={{
            borderColor: `${theme.primary}40`,
            color: theme.primary,
            backgroundColor: `${theme.primary}10`,
          }}
        >
          {data?.badge || "100% FSC Certified Wood"}
        </span>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-lg sm:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="/projects"
            className="px-8 py-3.5 rounded-xl font-bold text-base transition-transform hover:scale-[1.02]"
            style={{
              backgroundColor: theme.button || theme.primary,
              color: theme.background,
            }}
          >
            Explore Projects
          </a>
          <a
            href="/services"
            className="px-8 py-3.5 rounded-xl font-bold text-base border transition-colors"
            style={{
              borderColor: `${theme.text}30`,
              color: theme.text,
            }}
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}