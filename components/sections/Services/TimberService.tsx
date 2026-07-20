import React from "react";

type TimberServicesProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberServices({ data, theme }: TimberServicesProps) {
  const services = data?.items || [
    {
      title: "Custom Timber Framing",
      desc: "Engineered heavy timber structures designed for high structural loads and natural warmth.",
    },
    {
      title: "Wood Joinery & Milling",
      desc: "Precision millwork, bespoke beams, and decorative wooden trusses milled to architectural specs.",
    },
    {
      title: "Outdoor & Structural Decking",
      desc: "Durable weather-resistant timber decking, wooden pergolas, and landscape structures.",
    },
  ];

  return (
    <section
      className="py-20 px-6 sm:px-12 border-t transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        borderColor: `${theme.text}10`,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: theme.primary }}>
            {data?.title || "Our Timber Services"}
          </h2>
          <p className="opacity-80">
            {data?.subtitle || "End-to-end timber engineering, custom fabrication, and structural installation."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service: any, idx: number) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border transition-transform duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: `${theme.text}05`,
                borderColor: `${theme.text}15`,
              }}
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}