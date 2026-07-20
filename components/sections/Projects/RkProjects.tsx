// @/components/sections/Projects/RkProjects.tsx
import Image from "next/image";

export default function RkProjects({ data, theme }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: theme.background }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Bold Left-aligned Header for industrial layout */}
        <div className="border-l-4 pl-6 mb-16" style={{ borderColor: theme.primary }}>
          <p className="uppercase tracking-[3px] text-xs font-bold mb-2" style={{ color: theme.primary }}>
            {data.badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ color: theme.text }}>
            {data.title}
          </h2>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {data.items.map((project: any) => {
            const height =
              project.size === "large" ? "h-[500px]" : project.size === "medium" ? "h-[400px]" : "h-[320px]";

            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden bg-slate-900 border border-gray-800 ${height}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-85 grayscale contrast-125 transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Harsh Industrial Shadow Emulsion Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 bg-black/60 border inline-block mb-3" style={{ borderColor: `${theme.primary}50` }}>
                    Site Entry #{project.id}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.location}
                  </p>
                  <button
                    className="w-full py-3 font-bold uppercase tracking-wider text-xs border transition-all duration-300 hover:bg-white hover:text-black"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: theme.button,
                      color: theme.secondary
                    }}
                  >
                    {project.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}