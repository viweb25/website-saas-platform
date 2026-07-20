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
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p
            className="uppercase tracking-[4px] font-semibold mb-4"
            style={{ color: theme.primary }}
          >
            {data.badge}
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            {data.title}
          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {data.items.map((service) => (

            <div
              key={service.id}
              className="group border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div
                className="text-6xl font-extrabold mb-6"
                style={{
                  color: theme.primary,
                }}
              >
                {service.id}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8 mb-8">
                {service.description}
              </p>

              <Link
                href="#"
                className="font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                style={{
                  color: theme.primary,
                }}
              >
                {service.button}

                →

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}