import { loadSite } from "@/lib/site-loader";
import AboutPage from "@/components/pages/About/AboutPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ site?: string }>;
}) {
  const params = await searchParams;
  const site = loadSite(params?.site);

  return (
    <AboutPage
      data={site.pages.about}
      theme={site.theme}
      header={site.header}
      footer={site.footer}
    />
  );
}