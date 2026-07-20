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

export default function TimberProjectsPage({ data, theme }: Props) {
  const projectsList = data?.items || [
    {
      title: "The Pine Ridge Pavilion",
      category: "Commercial Timber",
      description: "Heavy glulam timber truss structure engineered for high structural load and natural aesthetic integration.",
    },
    {
      title: "Highland Cedar Residence",
      category: "Residential Architecture",
      description: "Full timber-frame estate featuring reclaimed white oak flooring, exposed rafters, and custom wooden cabinetry.",
    },
    {
      title: "Eco Valley Boardwalk & Decking",
      category: "Landscape Architecture",
      description: "Over 500 meters of sustainable, weather-sealed outdoor walkway constructed using FSC-certified timber.",
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
            {data?.title || "Featured Timber Projects"}
          </h1>
          <p className="text-lg opacity-80">
            {data?.subtitle || "Explore our gallery of timber framing, custom woodwork, and sustainable structural designs."}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project: any, idx: number) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:shadow-lg"
              style={{
                backgroundColor: `${theme.text}05`,
                borderColor: `${theme.text}15`,
              }}
            >
              <div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider block mb-2"
                  style={{ color: theme.primary }}
                >
                  {project.category}
                </span>
                <h2 className="text-xl font-bold mb-3">{project.title}</h2>
                <p className="text-sm opacity-80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}