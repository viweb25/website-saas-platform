import RkHero from "./RkHero";
import TimberHero from "./TimberHero";

interface HeroProps {
  data: any;
  theme: any;
}

export default function Hero(props: HeroProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberHero {...props} />;

    case "rk":
    default:
      return <RkHero {...props} />;
  }
}