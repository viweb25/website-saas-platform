// components/pages/Contact/ContactPage.tsx
import RkContactPage from "./RkContactPage";
import TimberContactPage from "./TimberContactPage";

interface ContactPageProps {
  header: any;
  footer: any;
  theme: any;
  data: any;
}

export default function ContactPage(props: ContactPageProps) {
  // Safe extraction with default fallback to "rk"
  const variant = props?.data?.variant ?? "rk";

  switch (variant) {
    case "timber":
      return <TimberContactPage {...props} />;

    case "rk":
    default:
      return <RkContactPage {...props} />;
  }
}