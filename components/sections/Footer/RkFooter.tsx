import Link from "next/link";

type Props = {
  data?: {
    logo?: {
      title?: string;
      highlight?: string;
    };
    description?: string;
    contactColumns?: {
      title: string;
      address?: string;
      phone?: string;
      email?: string;
    }[];
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
  // Theme & Fallbacks matching Mason template aesthetics
  const primaryBg = theme?.primary || "#3B82F6"; // Default vibrant blue
  const textColor = theme?.text || "#FFFFFF";

  const description =
    data?.description ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare.";

  // Default contact office locations matching the screenshot if not provided
  const contactLocations = data?.contactColumns || [
    {
      title: "CALIFORNIA",
      address: data?.contact?.address || "San Francisco, CA 94111",
      phone: data?.contact?.phone || "+1 202 234 567 890",
      email: data?.contact?.email || "ibuild@gmail.com",
    },
    {
      title: "NEW YORK",
      address: "Manhattan, NY 10001",
      phone: "+1 202 234 567 890",
      email: "ibuild@gmail.com",
    },
  ];

  return (
    <footer className="w-full bg-blue-600 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Main Floating Footer Card Container */}
        <div 
          className="w-full rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl"
          style={{ backgroundColor: primaryBg }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* COLUMN 1: About Mason (Lg: 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                ABOUT MASON
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/90 max-w-sm">
                {description}
              </p>
            </div>

            {/* LOCATION / CONTACT COLUMNS (Lg: 7 Cols split between items) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {contactLocations.map((location, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    {location.title}
                  </h3>

                  <div className="flex flex-col gap-3 text-sm text-white/90">
                    {/* Address Line */}
                    {location.address && (
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 shrink-0 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{location.address}</span>
                      </div>
                    )}

                    {/* Phone Line */}
                    {location.phone && (
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 shrink-0 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${location.phone}`} className="hover:underline transition-all">
                          {location.phone}
                        </a>
                      </div>
                    )}

                    {/* Email Line */}
                    {location.email && (
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 shrink-0 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <a href={`mailto:${location.email}`} className="hover:underline transition-all break-all">
                          {location.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM COPYRIGHT & ATTRIBUTION BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 px-2">
          <div>
            Powered by{" "}
            <Link
              href="https://webflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Webflow
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <span>Template design by</span>{" "}
            <Link
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Dorian Hoxha
            </Link>{" "}
            <span>View</span>{" "}
            <Link href="#" className="underline hover:text-white transition-colors">
              Style-Guide
            </Link>{" "}
            <span>&</span>{" "}
            <Link href="#" className="underline hover:text-white transition-colors">
              Licensing
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}