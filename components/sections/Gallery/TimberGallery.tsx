import React from "react";

type TimberGalleryProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberGallery({ data, theme }: TimberGalleryProps) {
  const title = data?.title || "Timber Crafts Gallery";
  const items = data?.items || [
    { title: "Heavy Timber Beams", tag: "Framing" },
    { title: "Custom Wood Roof Trusses", tag: "Engineering" },
    { title: "Architectural Wall Paneling", tag: "Interiors" },
    { title: "Outdoor Cedar Pergola", tag: "Exterior" },
    { title: "Reclaimed Oak Joinery", tag: "Craftsmanship" },
    { title: "Glulam Timber Canopy", tag: "Commercial" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-6 sm:px-12 border-t transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        borderColor: `${theme.text}10`,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: theme.primary }}>
            {title}
          </h2>
          <p className="opacity-80 text-base max-w-2xl mx-auto">
            {data?.subtitle || "A visual showcase of structural timber joinery and precision custom woodwork."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item: any, idx: number) => (
            <div
              key={idx}
              className="group relative h-64 rounded-2xl p-6 flex flex-col justify-end border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: `${theme.text}08`,
                borderColor: `${theme.text}15`,
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: theme.primary }}
              >
                {item.tag}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}