import RkServices from "./RkServices";
import TimberServices from "./TimberService";

interface ServicesProps {
  data: any;
  theme: any;
}

export default function Services(props: ServicesProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberServices {...props} />;

    default:
      return <RkServices {...props} />;
  }
}      