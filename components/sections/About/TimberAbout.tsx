import React from "react";

type TimberAboutProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberAbout({ data, theme }: TimberAboutProps) {
  const title = data?.title || "Crafting Timeless Timber Structures";
  const description =
    data?.description ||
    "We blend traditional woodworking craftsmanship with modern architectural engineering to deliver sustainable, durable timber solutions.";

  return (
    <section
      className="py-16 px-6 sm:px-12 transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: theme.primary }}
          >
            {title}
          </h2>
          <p className="opacity-80 leading-relaxed text-base sm:text-lg">
            {description}
          </p>
        </div>

        <div
          className="p-8 rounded-2xl border"
          style={{
            backgroundColor: `${theme.text}05`,
            borderColor: `${theme.text}15`,
          }}
        >
          <h3 className="text-xl font-bold mb-3">Sustainable & Built to Last</h3>
          <p className="opacity-75 text-sm leading-relaxed">
            Every beam and joinery element is selected with structural integrity and ecological impact in mind, giving your property a distinct aesthetic that endures.
          </p>
        </div>
      </div>
    </section>
  );
}