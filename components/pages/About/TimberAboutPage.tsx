import React from "react";

type TimberAboutPageProps = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberAboutPage({ data, theme }: TimberAboutPageProps) {
  // Fallbacks if dynamic content hasn't been added to JSON yet
  const title = data?.title || "Crafting Timeless Timber Architecture & Structures";
  const subtitle =
    data?.subtitle ||
    "We specialize in sustainable wood design, custom carpentry, and heavy timber framing engineered for durability and natural elegance.";
  const vision =
    data?.vision ||
    "To lead the industry in eco-friendly wood construction, blending traditional artisan woodworking with advanced structural engineering.";
  const stats = data?.stats || [
    { label: "Projects Built", value: "150+" },
    { label: "Years Experience", value: "18+" },
    { label: "Sustainable Timber", value: "100%" },
  ];

  return (
    <div
      className="min-h-screen py-16 px-6 sm:px-12 transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">{subtitle}</p>
        </div>

        {/* Vision & Mission Block */}
        <div
          className="p-8 sm:p-12 rounded-2xl border"
          style={{
            backgroundColor: `${theme.text}05`,
            borderColor: `${theme.text}15`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: theme.primary }}
              >
                Our Sustainable Craft
              </h2>
              <p className="opacity-80 leading-relaxed text-base">{vision}</p>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {stats.map((stat: any, index: number) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border"
                  style={{
                    backgroundColor: `${theme.text}08`,
                    borderColor: `${theme.text}10`,
                  }}
                >
                  <p
                    className="text-3xl font-extrabold mb-1"
                    style={{ color: theme.primary }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider opacity-70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}