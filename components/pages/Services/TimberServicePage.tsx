import React from "react";

type Props = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberServicesPage({ data, theme }: Props) {
  const servicesList = data?.items || [
    {
      title: "Heavy Timber Framing",
      description: "Custom-engineered heavy timber trusses, beams, and structural joinery designed for residential and commercial structures.",
    },
    {
      title: "Custom Architectural Woodwork",
      description: "Tailored interior wall paneling, ceiling treatments, and bespoke wooden elements crafted to fit high-end architectural plans.",
    },
    {
      title: "Outdoor & Landscape Timber Structures",
      description: "Durable wooden pergolas, exterior decking, timber bridges, and weather-resistant outdoor pavilions.",
    },
    {
      title: "Sustainable Wood Restoration",
      description: "Expert restoration and reinforcement of historic timber framing and reclaimed wood installations.",
    },
  ];

  return (
    <div
      className="min-h-screen py-16 px-6 sm:px-12 transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {data?.title || "Specialized Timber Services"}
          </h1>
          <p className="text-lg opacity-80">
            {data?.subtitle || "Sustainable engineering, timber craftsmanship, and bespoke architectural woodwork."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service: any, idx: number) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: `${theme.text}05`,
                borderColor: `${theme.text}15`,
              }}
            >
              <h2 className="text-2xl font-bold mb-3" style={{ color: theme.primary }}>
                {service.title}
              </h2>
              <p className="opacity-80 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}