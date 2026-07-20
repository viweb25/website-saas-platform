import RkProjectsPage from "./RkProjectPage";
import TimberProjectsPage from "./TimberProjectPage";

interface ProjectsPageProps {
  header?: any;
  footer?: any;
  theme: any;
  data: any;
}

export default function ProjectsPage(props: ProjectsPageProps) {
  switch (props.data?.variant) {
    case "timber":
      return <TimberProjectsPage {...props} />;

    case "rk":
    default:
      return <RkProjectsPage {...props} />;
  }
}