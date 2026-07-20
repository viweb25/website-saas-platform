import RkAboutPage from "./RkAboutPage";
import TimberAboutPage from "./TimberAboutPage";

interface AboutPageProps {
  data: any;
  theme: any;
  header?: any;
  footer?: any;
}

export default function AboutPage(props: AboutPageProps) {
  switch (props.data?.variant) {
    case "timber":
      return <TimberAboutPage {...props} />;

    case "rk":
    default:
      return <RkAboutPage {...props} />;
  }
}