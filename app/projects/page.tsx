// app/projects/page.tsx
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import ProjectPage from "@/components/pages/Project/ProjectPage"; // Fixed to plural 'Projects' to match your component folder

import { loadSite } from "@/lib/site-loader";

interface PageProps {
  searchParams: Promise<{ site?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const siteData = loadSite(params.site);

  // Extract the specific page content chunk and layout assets
  const projectsData = siteData?.pages?.projects;
  const headerData = siteData?.header;
  const footerData = siteData?.footer;
  const theme = siteData?.theme;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Shared Site Navigation Header */}
      <Header data={headerData} theme={theme} />
      
      {/* Core Dynamic Portfolio Screen content wrapper */}
      <main className="flex-grow">
        <ProjectPage data={projectsData} theme={theme} />
      </main>

      {/* Shared Site Information Footer */}
      <Footer data={footerData} theme={theme} />
    </div>
  );
}