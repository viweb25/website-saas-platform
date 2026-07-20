import RkProjects from "./RkProjects";
import TimberProjects from "./TimberProjects";

interface ProjectsProps {
  data: any;
  theme: any;
}

export default function Projects(props: ProjectsProps) {
  switch (props.data.variant) {
    case "timber":
      return <TimberProjects {...props} />;

    case "rk":
    default:
      return <RkProjects {...props} />;
  }
}