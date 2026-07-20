import { loadSite } from "@/lib/site-loader";
import AboutPage from "@/components/pages/About/AboutPage";

export default function Page({
  searchParams,
}: {
  searchParams?: { site?: string };
}) {
  const site = loadSite(searchParams?.site);

  return (
    <AboutPage
      data={site.pages.about}
      theme={site.theme}
      header={site.header}
      footer={site.footer}
    />
  );
}