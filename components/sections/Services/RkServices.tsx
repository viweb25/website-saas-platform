import Link from "next/link";

type Props = {
  data: {
    badge: string;
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      button: string;
    }[];
  };

  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function Services({ data, theme }: Props) {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <p
            className="uppercase tracking-[4px] text-sm md:text-base font-semibold mb-3 md:mb-4"
            style={{ color: theme.primary }}
          >
            {data.badge}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {data.title}
          </h2>
        </div>

        {/* Mobile Swipe / Desktop Grid Container */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
          {data.items.map((service) => (
            <div
              key={service.id}
              className="group border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2 min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-center flex flex-col justify-between shrink-0 md:shrink bg-white"
            >
              <div>
                <div
                  className="text-5xl md:text-6xl font-extrabold mb-4 md:mb-6"
                  style={{ color: theme.primary }}
                >
                  {service.id}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed md:leading-8 text-sm md:text-base mb-6 md:mb-8">
                  {service.description}
                </p>
              </div>

              <Link
                href="#"
                className="font-semibold flex items-center gap-2 group-hover:gap-4 transition-all text-sm md:text-base mt-auto"
                style={{ color: theme.primary }}
              >
                <span>{service.button}</span>
                <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-2 md:hidden">
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            Swipe to explore →
          </p>
        </div>

      </div>
    </section>
  );
}