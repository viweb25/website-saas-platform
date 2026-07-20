import ContactPage from "@/components/pages/Contact/ContactPage";
import { loadSite } from "@/lib/site-loader";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ site?: string }>;
}) {
  const params = await searchParams;
  const site = loadSite(params?.site);

  return (
    <ContactPage
      header={site.header}
      footer={site.footer}
      theme={site.theme}
      data={site.pages.contact}
    />
  );
}