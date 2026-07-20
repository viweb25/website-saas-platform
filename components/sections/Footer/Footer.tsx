// components/sections/Footer/Footer.tsx
import RkFooter from "./RkFooter"; 
// Import your other footer variants if applicable (e.g., TimberFooter)

export default function Footer(props: any) {
  // Safe extraction with optional chaining and a fallback variant
  const variant = props?.data?.variant ?? "rk";

  switch (variant) {
    case "timber":
      // return <TimberFooter {...props} />;
      return <RkFooter {...props} />; // fallback if TimberFooter isn't imported
    case "rk":
    default:
      return <RkFooter {...props} />;
  }
}