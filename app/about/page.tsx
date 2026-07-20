// app/about/page.tsx
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import AboutPage from "@/components/pages/About/RkAboutPage";
import { loadSite } from "@/lib/site-loader";

interface PageProps {
  searchParams: Promise<{ site?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const siteData = loadSite(params.site);

  const aboutData = siteData?.pages?.about || siteData?.about;
  const headerData = siteData?.header;
  const footerData = siteData?.footer;
  const theme = siteData?.theme;

  return (
    <div className="flex flex-col min-h-screen">
      <Header data={headerData} theme={theme} />
      
      <main className="flex-grow">
        <AboutPage 
          data={aboutData} 
          theme={theme} 
          header={headerData} 
          footer={footerData} 
        />
      </main>

      <Footer data={footerData} theme={theme} />
    </div>
  );
}