import Link from "next/link";

type Props = {
  data: {
    logo: {
      title: string;
      highlight: string;
    };

    description: string;

    quickLinks: {
      label: string;
      href: string;
    }[];

    services: string[];

    contact: {
      address: string;
      phone: string;
      email: string;
    };

    social: {
      name: string;
      href: string;
    }[];

    copyright: string;
  };

  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function Footer({ data, theme }: Props) {
  return (
    <footer
      className="pt-20 pb-8"
      style={{
        background: theme.secondary,
        color: "#fff",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold mb-6">
              {data.logo.title}{" "}
              <span
                style={{
                  color: theme.primary,
                }}
              >
                {data.logo.highlight}
              </span>
            </h2>

            <p className="text-gray-300 leading-8">
              {data.description}
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              {data.quickLinks.map((link) => (

                <Link
                  key={link.label}
                  href={link.href}
                  className="block hover:text-yellow-400 transition"
                >
                  {link.label}
                </Link>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <div className="space-y-4">

              {data.services.map((service) => (

                <p key={service}>
                  {service}
                </p>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <p>{data.contact.address}</p>

            <p className="mt-4">
              {data.contact.phone}
            </p>

            <p className="mt-4">
              {data.contact.email}
            </p>

            <div className="flex gap-4 mt-8">

              {data.social.map((social) => (

                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition"
                >
                  {social.name.charAt(0)}
                </Link>

              ))}

            </div>

          </div>

        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center text-gray-400">

          {data.copyright}

        </div>

      </div>
    </footer>
  );
}