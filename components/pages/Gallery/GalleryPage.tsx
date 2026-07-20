import RkGallery from "./RkGalleryPage";
import TimberGallery from "./TimberGallery";
import GangaGallery from "./GangaGallery";

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface GalleryData {
  badge: string;
  title: string;
  description: string;
  variant: "rk" | "timber" | "ganga" | string;
  categories: string[];
  items: GalleryItem[];
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  button: string;
}

interface GalleryPageProps {
  data: GalleryData;
  theme: Theme;
}

export default function GalleryPage({ data, theme }: GalleryPageProps) {
  switch (data.variant) {
    case "rk":
      return <RkGallery data={data} theme={theme} />;
    case "timber":
      return <TimberGallery data={data} theme={theme} />;
    case "ganga":
    default:
      return <GangaGallery data={data} theme={theme} />;
  }
}