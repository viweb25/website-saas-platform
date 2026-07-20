import React from "react";

type TimberProjectsProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberProjects({ data, theme }: TimberProjectsProps) {
  const projects = data?.items || [
    {
      title: "Pine Ridge Commercial Pavilion",
      type: "Commercial",
      desc: "Heavy glulam timber structure built with custom steel tie rod assemblies.",
    },
    {
      title: "Highland Cedar Residence",
      type: "Residential",
      desc: "Exposed white oak rafters, custom timber posts, and exterior cedar cladding.",
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
            {data?.title || "Featured Projects"}
          </h2>
          <p className="opacity-80">
            {data?.subtitle || "A look at our completed heavy timber framings and custom woodwork builds."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj: any, idx: number) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border transition-transform duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: `${theme.text}05`,
                borderColor: `${theme.text}15`,
              }}
            >
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: theme.primary }}>
                {proj.type}
              </span>
              <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}