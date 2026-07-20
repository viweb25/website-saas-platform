// @/components/sections/Projects/RkProjects.tsx
import Image from "next/image";

interface ProjectItem {
  id: string | number;
  title: string;
  image: string;
  location: string;
  button: string;
  size?: "small" | "medium" | "large";
}

interface RkProjectsProps {
  data: {
    badge: string;
    title: string;
    items: ProjectItem[];
  };
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
}

export default function RkProjects({ data, theme }: RkProjectsProps) {
  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: theme.background }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Bold Left-aligned Header */}
        <div className="border-l-4 pl-4 md:pl-6 mb-10 md:mb-16" style={{ borderColor: theme.primary }}>
          <p className="uppercase tracking-[3px] text-xs font-bold mb-2" style={{ color: theme.primary }}>
            {data.badge}
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: theme.text }}>
            {data.title}
          </h2>
        </div>

        {/* Dynamic Container: Horizontal Snap Slider on Mobile / Masonry-style Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
          {data.items.map((project: ProjectItem) => {
            // Height logic applies to desktop; mobile uses a uniform responsive aspect ratio for consistent swiping
            const desktopHeight =
              project.size === "large"
                ? "md:h-[500px]"
                : project.size === "medium"
                ? "md:h-[400px]"
                : "md:h-[320px]";

            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden bg-slate-900 border border-gray-800 
                  min-w-[85%] sm:min-w-[65%] md:min-w-0 w-full aspect-[4/5] md:aspect-auto ${desktopHeight} 
                  snap-center shrink-0 md:shrink transition-all duration-300`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-85 grayscale contrast-125 transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Harsh Industrial Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 text-white flex flex-col justify-end">
                  <span
                    className="text-[10px] md:text-xs font-mono uppercase tracking-widest px-2.5 py-1 bg-black/70 border inline-block mb-2 md:mb-3 w-max"
                    style={{ borderColor: `${theme.primary}50` }}
                  >
                    Site Entry #{project.id}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1 md:mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mb-4">
                    {project.location}
                  </p>

                  <button
                    className="w-full py-2.5 md:py-3 font-bold uppercase tracking-wider text-xs border transition-all duration-300 hover:bg-white hover:text-black"
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: theme.button,
                      color: theme.secondary,
                    }}
                  >
                    {project.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint Indicator */}
        <div className="flex items-center justify-center mt-2 md:hidden">
          <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
            Swipe projects →
          </p>
        </div>

      </div>
    </section>
  );
}