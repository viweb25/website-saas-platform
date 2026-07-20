import RkContactPage from "./RkContactPage";
import TimberContactPage from "./TimberContactPage";

interface ContactPageProps {
  header: any;
  footer: any;
  theme: any;
  data: any;
}

export default function ContactPage(props: ContactPageProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberContactPage {...props} />;

    case "rk":
    default:
      return <RkContactPage {...props} />;
  }
}