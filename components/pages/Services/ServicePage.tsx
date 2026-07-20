import RkServicesPage from "./RkServicePage";
import TimberServicesPage from "./TimberServicePage";

interface ServicesPageProps {
  header?: any; // <-- Add ?
  footer?: any; // <-- Add ?
  theme: any;
  data: any;
}
export default function ServicesPage(props: ServicesPageProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberServicesPage {...props} />;

    case "rk":
    default:
      return <RkServicesPage {...props} />;
  }
}