import RkAboutPage from "./RkAboutPage";
import TimberAboutPage from "./TimberAboutPage";

interface AboutPageProps {
  data: any;
  theme: any;
  header?: any;
  footer?: any;
}

export default function AboutPage(props: AboutPageProps) {
  // Ensure header and footer are always provided as safe fallbacks
  const safeProps = {
    ...props,
    header: props.header ?? {},
    footer: props.footer ?? {},
  };

  switch (props.data?.variant) {
    case "timber":
      return <TimberAboutPage {...safeProps} />;

    case "rk":
    default:
      return <RkAboutPage {...safeProps} />;
  }
}