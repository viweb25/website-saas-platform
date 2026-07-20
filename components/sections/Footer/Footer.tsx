import RkFooter from "./RkFooter";
import TimberFooter from "./TimberFooter";

interface FooterProps {
  data: any;
  theme: any;
}

export default function Footer(props: FooterProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberFooter {...props} />;

    case "rk":
    default:
      return <RkFooter {...props} />;
  }
}