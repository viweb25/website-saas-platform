// app/services/page.tsx
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import ServicesPage from "@/components/pages/Services/RkServicePage";
import { loadSite } from "@/lib/site-loader";

interface PageProps {
  searchParams: Promise<{ site?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const siteData = loadSite(params.site);

  // Extract page content chunk and layout assets
  const servicesData = siteData?.pages?.services || siteData?.services;
  const headerData = siteData?.header;
  const footerData = siteData?.footer;
  const theme = siteData?.theme;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Shared Site Navigation Header */}
      <Header data={headerData} theme={theme} />
      
      {/* Services Content Wrapper */}
      <main className="flex-grow">
        <ServicesPage data={servicesData} theme={theme} />
      </main>

      {/* Shared Site Information Footer */}
      <Footer data={footerData} theme={theme} />
    </div>
  );
}