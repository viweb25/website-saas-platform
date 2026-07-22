import rk1 from "@/sites/rk-construction/assets/rk1.png";
import rk2 from "@/sites/rk-construction/assets/rk2.png";
import rk3 from "@/sites/rk-construction/assets/rk3.png";
import rkp1 from "@/sites/rk-construction/assets/rkp1.png";
import rkp2 from "@/sites/rk-construction/assets/rkp2.png";

const aboutPage = {
  hero: {
    badge: "About Us",
    title: "About RK Construction",
    subtitle: "Building Strong Foundations Since 1998",
    buttonText: "Explore Projects",
    buttonHref: "#core-features",
    image: rk1,
  },

  quoteSection: {
    headline: "Where Vision Meets Precision, There Is No Compromise.",
    description:
      "RK Construction provides complete engineering and construction services for residential, commercial, and industrial projects with a steadfast commitment to safety and excellence.",
    subnote: "Discover our core capabilities below",
    linkText: "Learn More About Our Core Features",
    linkHref: "#core-features",
  },

  story: {
    title: "Our Story",
    description:
      "RK Construction has delivered residential, commercial and industrial projects with a focus on quality, innovation and customer satisfaction.",
    image: rk3,
    experience: "28+",
    experienceText: "Years of Experience",
    stats: [
      { number: "28+", label: "Years Experience" },
      { number: "500+", label: "Projects Completed" },
      { number: "100%", label: "Client Satisfaction" },
      { number: "50+", label: "Expert Engineers" },
    ],
  },

  featuresSection: {
    title: "Our Core Features",
    tabs: [
      {
        id: "planning",
        label: "Planning & Management",
        contentTitle: "Streamlined Project Management & Feasibility",
        image: rkp1,
        items: [
          { icon: "blueprint", title: "Certified Engineers", desc: "Civil & structural experts." },
          { icon: "shield", title: "Safety & Compliance", desc: "100% adherence to building codes." },
          { icon: "calculator", title: "Quality Materials", desc: "Zero hidden costs, premium sourcing." },
          { icon: "clock", title: "On-Time Delivery", desc: "Delivered strictly on schedule." },
        ],
      },
      {
        id: "renovation",
        label: "Renovation & Improvements",
        contentTitle: "Modernizing Existing Infrastructures",
        image: rk2,
        items: [
          { icon: "hammer", title: "Structural Retrofitting", desc: "Upgrading foundation stability." },
          { icon: "leaf", title: "Eco-Friendly Materials", desc: "Green tech & thermal insulation." },
          { icon: "sparkles", title: "Interior Modernization", desc: "Sleek and contemporary finishes." },
          { icon: "briefcase", title: "Workspace Upgrades", desc: "Zero-interruption business upgrades." },
        ],
      },
      {
        id: "architecture",
        label: "Architecture & Design",
        contentTitle: "Bespoke Architectural Engineering",
        image: rkp2,
        items: [
          { icon: "cube", title: "3D BIM Modeling", desc: "CAD modeling before groundbreaking." },
          { icon: "home", title: "Custom Layouts", desc: "Optimizing spatial utility & light." },
          { icon: "key", title: "Turnkey Contracting", desc: "From design to final handover." },
          { icon: "sun", title: "Climate-Responsive", desc: "Max energy savings and weather endurance." },
        ],
      },
    ],
  },
};

export default aboutPage;