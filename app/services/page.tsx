// app/services/page.tsx
import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import ServicesPage from "@/components/pages/Services/ServicePage";
import { loadSite } from "@/lib/site-loader";

type Props = {
  searchParams: Promise<{ site?: string }>;
};

export default async function ServicesRoute({ searchParams }: Props) {
  const params = await searchParams;
  const site = loadSite(params.site);

  return (
    <>
      <Header data={site.header} theme={site.theme} />
      
      <main className="mt-20">
        {/* Pass the dynamic loaded tenant content data into your page UI component */}
        <ServicesPage data={site.pages.services} theme={site.theme} />
      </main>

      <Footer data={site.footer} theme={site.theme} />
    </>
  );
}