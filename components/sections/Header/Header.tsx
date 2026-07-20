// components/sections/Header/Header.tsx
import RkHeader from "./RkHeader";
// Import other header variants if you have them (e.g. TimberHeader)

export default function Header(props: any) {
  // Safe extraction with fallback to "default" or "rk" variant
  const variant = props?.data?.variant ?? "rk";

  switch (variant) {
    case "timber":
      // return <TimberHeader {...props} />;
      return <RkHeader {...props} />; // fallback if TimberHeader isn't imported
    case "rk":
    default:
      return <RkHeader {...props} />;
  }
}