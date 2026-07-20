// components/pages/Services/ServicesPage.tsx
import Link from 'next/link';

type ServicesPageProps = {
  data: {
    hero: { badge: string; title: string; subtitle: string; backgroundImage: string };
    intro: { title: string; description: string };
    services: Array<{ id: number; icon: string; title: string; description: string }>;
    whyChoose: { title: string; description: string; items: string[] };
    process: Array<{ step: string; title: string; description: string }>;
    cta: { title: string; description: string; button: { text: string; href: string } };
  };
  theme?: any; // Add your theme typing if required for background/accent color swaps
};

export default function ServicesPage({ data }: ServicesPageProps) {
  // Graceful fallback destructuring if data hasn't loaded completely
  const { hero, intro, services, whyChoose, process, cta } = data || {};

  if (!data) return <div className="py-20 text-center">Loading Content...</div>;

  return (
    <div className="w-full bg-[#f4f7f6] text-[#333333] min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-[#1a252c] text-white py-24 md:py-32 bg-cover bg-center flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(26, 37, 44, 0.85), rgba(26, 37, 44, 0.85)), url(${hero.backgroundImage})` }}
      >
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#ffb703] text-[#1a252c] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-[#ced4da] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 w-[90%] max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1a252c] mb-4">{intro.title}</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          {intro.description}
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#f4f7f6] p-8 rounded-lg border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col items-start"
              >
                <span className="text-4xl mb-4 block" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
                <h3 className="text-xl font-bold text-[#1a252c] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Process */}
      <section className="py-20 w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#1a252c] mb-4">{whyChoose.title}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{whyChoose.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.items.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-semibold text-[#1a252c]">
                <span className="text-[#ffb703] text-lg">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {process.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-5 items-start">
              <span className="text-2xl font-extrabold text-[#ffb703] tracking-wider bg-[#f4f7f6] px-3 py-1 rounded">
                {step.step}
              </span>
              <div>
                <h4 className="text-lg font-bold text-[#1a252c] mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a252c] text-white py-16 text-center border-t border-white/5">
        <div className="w-[90%] max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="text-[#ced4da] mb-8 leading-relaxed">{cta.description}</p>
          <Link 
            href={cta.button.href}
            className="inline-block bg-[#ffb703] text-[#1a252c] font-bold px-8 py-3.5 rounded hover:bg-[#e5a100] transition-colors"
          >
            {cta.button.text}
          </Link>
        </div>
      </section>
    </div>
  );
}