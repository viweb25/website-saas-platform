import site from "./site";
import theme from "../theme/theme";

import header from "../content/header";
import hero from "../content/hero";
import services from "../content/services";
import projects from "../content/projects";
import about from "../content/about";
import gallery from "../content/gallery";
import footer from "../content/footer";

import aboutPage from "../content/pages/about";
import servicesPage from "../content/pages/services";
import projectsPage from "../content/pages/projectrk";
import contactPage from "../content/pages/contact";

export default {
  ...site,

  theme,

  header,
  hero,
  services,
  projects,
  about,
  gallery,
  footer,

  pages: {
    about: aboutPage,
    services: servicesPage,
    projects: projectsPage,
    contact: contactPage,
  },
};