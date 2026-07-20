import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    badge: string;
    title: string;
    description: string;
    button: {
      text: string;
      href: string;
    };
    image: string;
    blueprint: string;
    stats: {
      value: string;
      label: string;
    }[];
    highlight: {
      title: string;
      value: string;
      subtitle: string;
      image: string;
    };
  };

  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function Hero({ data, theme }: Props) {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] mt-20 overflow-hidden flex items-center py-6 md:py-10"
      style={{ background: theme.background, color: theme.text }}
    >
      {/* Blueprint background - reduced opacity for clean blending */}
      {data.blueprint && (
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-15 pointer-events-none mix-blend-multiply flex justify-end items-start overflow-hidden">
          <Image
            src={data.blueprint}
            alt="Blueprint Background"
            width={500}
            height={500}
            priority
            className="object-contain object-top-right"
          />
        </div>
      )}

      <div className="w-[92%] max-w-7xl mx-auto flex flex-col justify-between h-full gap-6 relative z-10">

        {/* Main Split Grid (Content + Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* Text Content Block */}
          <div className="flex flex-col justify-center order-1 text-left">
            <span
              className="uppercase tracking-widest font-semibold text-xs md:text-sm mb-2"
              style={{ color: theme.primary }}
            >
              {data.badge}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              {data.title}
            </h1>

            <p className="mb-5 text-sm sm:text-base opacity-85 leading-relaxed max-w-xl">
              {data.description}
            </p>

            <Link
              href={data.button.href}
              className="inline-block px-6 py-3 rounded-md font-bold text-sm w-fit transition-all duration-300 hover:shadow-md active:scale-95"
              style={{
                background: theme.button,
                color: theme.secondary,
              }}
            >
              {data.button.text}
            </Link>
          </div>

          {/* Hero Image Container - Scaled Down for Mobile */}
          <div className="flex items-center justify-center order-2">
            <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] max-w-lg rounded-xl overflow-hidden shadow-lg border border-white/10">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar (Stats + Highlight Card) */}
        <div 
          className="border-t pt-5 mt-2 flex flex-col md:flex-row justify-between gap-4 md:gap-8 items-start md:items-center"
          style={{ borderColor: `${theme.text}20` }}
        >
          {/* Key Statistics */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {data.stats.map((item) => (
              <div key={item.label} className="flex flex-col">
                <h2
                  className="text-2xl sm:text-3xl font-bold leading-tight"
                  style={{ color: theme.primary }}
                >
                  {item.value}
                </h2>
                <p className="text-xs sm:text-sm opacity-80 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Highlight Badge Card */}
          <div 
            className="rounded-lg p-3 sm:p-4 w-full md:w-72 backdrop-blur-sm border shadow-sm flex md:flex-col justify-between items-center md:items-start gap-2"
            style={{ 
              backgroundColor: `${theme.primary}08`, 
              borderColor: `${theme.primary}20` 
            }}
          >
            <div>
              <h3 className="text-xs sm:text-sm font-bold opacity-90">
                {data.highlight.title}
              </h3>
              <p className="text-[10px] sm:text-xs opacity-75">{data.highlight.subtitle}</p>
            </div>

            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ color: theme.primary }}
            >
              {data.highlight.value}
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}