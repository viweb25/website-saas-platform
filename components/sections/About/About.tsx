import RkAbout from "./RkAbout";
import TimberAbout from "./TimberAbout";

interface AboutProps {
  data: any;
  theme: any;
  header?: any;
  footer?: any;
}

export default function About(props: AboutProps) {
  const safeProps = {
    ...props,
    header: props.header ?? {},
    footer: props.footer ?? {},
  };

  switch (props.data?.variant) {
    case "timber":
      return <TimberAbout {...safeProps} />;

    case "rk":
    default:
      return <RkAbout {...safeProps} />;
  }
}