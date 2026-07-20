import Link from "next/link";

type Props = {
  data?: {
    logo?: {
      title?: string;
      highlight?: string;
    };
    description?: string;
    quickLinks?: {
      label: string;
      href: string;
    }[];
    services?: string[];
    contact?: {
      address?: string;
      phone?: string;
      email?: string;
    };
    social?: {
      name: string;
      href: string;
    }[];
    copyright?: string;
  };
  theme?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    button?: string;
  };
};

export default function Footer({ data, theme }: Props) {
  // Safe fallbacks to prevent runtime crashes
  const primaryColor = theme?.primary || "#EAB308";
  const textColor = theme?.text || "#FFFFFF";
  const backgroundColor = theme?.background || "#111827";

  const logoTitle = data?.logo?.title || "RK";
  const logoHighlight = data?.logo?.highlight || "Construction";
  const description =
    data?.description ||
    "Building quality structures with excellence and modern engineering.";

  const quickLinks = data?.quickLinks || [];
  const services = data?.services || [];
  const social = data?.social || [];

  return (
    <footer
      className="pt-16 pb-8 border-t transition-colors duration-300"
      style={{
        background: backgroundColor,
        color: textColor,
        borderColor: `${textColor}15`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {logoTitle}{" "}
              <span style={{ color: primaryColor }}>{logoHighlight}</span>
            </h2>

            <p className="text-sm leading-relaxed opacity-80 max-w-sm">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-xs opacity-75">
              Quick Links
            </h3>

            <div className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <Link
                  key={link.label || idx}
                  href={link.href || "#"}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                  style={{
                    color: textColor,
                  }}
                >
                  <span
                    className="hover:underline"
                    style={{ color: "inherit" }}
                  >
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
              {services.map((service, idx) => (
                <p key={idx} className="text-sm opacity-80">
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
              {data?.contact?.address && (
                <p className="leading-relaxed">{data.contact.address}</p>
              )}
              {data?.contact?.phone && <p>{data.contact.phone}</p>}
              {data?.contact?.email && (
                <p className="break-all">{data.contact.email}</p>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {social.map((item, idx) => (
                <Link
                  key={item.name || idx}
                  href={item.href || "#"}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: `${textColor}10`,
                    color: textColor,
                    border: `1px solid ${textColor}20`,
                  }}
                  title={item.name}
                >
                  {item.name ? item.name.charAt(0).toUpperCase() : "#"}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Divider */}
        <div
          className="border-t mt-12 pt-6 text-center text-xs opacity-60"
          style={{ borderColor: `${textColor}15` }}
        >
          {data?.copyright ||
            `© ${new Date().getFullYear()} All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}