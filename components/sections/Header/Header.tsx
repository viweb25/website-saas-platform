import RKHeader from "./RkHeader";
import TimberHeader from "./TimberHeader";

interface HeaderProps {
  data: any;
  theme: any;
}

export default function Header(props: HeaderProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberHeader {...props} />;

    case "rk":
    default:
      return <RKHeader {...props} />;
  }
}