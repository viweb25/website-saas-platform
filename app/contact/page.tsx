import ContactPage from "@/components/pages/Contact/ContactPage";
import { loadSite } from "@/lib/site-loader";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    site?: string;
  };
}) {
  const site = loadSite(searchParams?.site);

  return (
    <ContactPage
      header={site.header}
      footer={site.footer}
      theme={site.theme}
      data={site.pages.contact}
    />
  );
}