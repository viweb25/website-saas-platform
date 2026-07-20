import RkGallery from "./RkGallery";
import TimberGallery from "./TimberGallery";

interface GalleryProps {
  data: any;
  theme: any;
}

export default function Gallery(props: GalleryProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberGallery {...props} />;

    case "rk":
    default:
      return <RkGallery {...props} />;
  }
}