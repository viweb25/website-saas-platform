import RkAboutPage from "./RkAboutPage";
import TimberAboutPage from "./TimberAboutPage";

export default function AboutPage(props: AboutPageProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberAboutPage {...props} />;

    case "rk":
    default:
      return <RkAboutPage {...props} />;
  }
}