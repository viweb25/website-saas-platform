import RkAbout from "./RkAbout";
import TimberAbout from "./TimberAbout";

interface AboutProps {
  data: any;
  theme: any;
}

export default function About(props: AboutProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberAbout {...props} />;

    case "rk":
    default:
      return <RkAbout {...props} />;
  }
}