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
      className="pt-16 pb-8 border-t transition-colors duration-300"
      style={{
        background: theme.background,
        color: theme.text,
        borderColor: `${theme.text}15`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {data.logo.title}{" "}
              <span style={{ color: theme.primary }}>
                {data.logo.highlight}
              </span>
            </h2>

            <p className="text-sm leading-relaxed opacity-80 max-w-sm">
              {data.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-xs opacity-75">
              Quick Links
            </h3>

            <div className="space-y-2.5">
              {data.quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                  style={{
                    color: theme.text,
                  }}
                >
                  <span className="hover:underline" style={{ color: "inherit" }}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-xs opacity-75">
              Services
            </h3>

            <div className="space-y-2.5">
              {data.services.map((service) => (
                <p key={service} className="text-sm opacity-80">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-xs opacity-75">
              Contact
            </h3>

            <div className="space-y-3 text-sm opacity-80">
              <p className="leading-relaxed">{data.contact.address}</p>
              <p>{data.contact.phone}</p>
              <p className="break-all">{data.contact.email}</p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {data.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: `${theme.text}10`,
                    color: theme.text,
                    border: `1px solid ${theme.text}20`,
                  }}
                  title={social.name}
                >
                  {social.name.charAt(0).toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright Divider */}
        <div
          className="border-t mt-12 pt-6 text-center text-xs opacity-60"
          style={{ borderColor: `${theme.text}15` }}
        >
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}