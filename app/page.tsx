import Header from "@/components/sections/Header/Header";
import { loadSite } from "@/lib/site-loader";
import Footer from "@/components/sections/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Projects from "@/components/sections/Projects/Projects";
import About from "@/components/sections/About/About";
import Gallery from "@/components/sections/Gallery/Gallery";
import AboutPage from "@/components/pages/About/AboutPage";
type Props = {
  searchParams: Promise<{ site?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const site = loadSite(params.site);

  return (
    <>
    <Header
  data={site.header}
  theme={site.theme}
/>
 <Hero
    data={site.hero}
    theme={site.theme}
  />
  <Services
  data={site.services}
  theme={site.theme}
/>


<Projects
  data={site.projects}
  theme={site.theme}
/>
<About
  data={site.about}
  theme={site.theme}
/>
<AboutPage

data={site.pages.about}

theme={site.theme}

/>
<Gallery data={site.gallery}
 theme={site.theme}
  />

   
      <Footer
    data={site.footer}
    theme={site.theme}
/>
    </>
  );
}