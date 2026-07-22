import rk1 from "@/sites/rk-construction/assets/rk1.png";
import rk2 from "@/sites/rk-construction/assets/rk2.png";
import rk3 from "@/sites/rk-construction/assets/rk3.png";
import rkp1 from "@/sites/rk-construction/assets/rkp1.png";
import rkp2 from "@/sites/rk-construction/assets/rkp2.png";

const about = {
  // 1. VARIANT KEY
  variant: "rk",

  // 2. HERO SECTION
  hero: {
    badge: "About RK Construction",
    title: "ABOUT US",
    subtitle: "Building Tomorrow With Innovation, Uncompromised Quality, and Architectural Excellence.",
    buttonText: "EXPLORE PROJECTS",
    buttonHref: "#core-features",
    image: rk1,
  },

  // 3. QUOTE / INTRO SECTION
  quoteSection: {
    headline: "WHERE VISION MEETS PRECISION, THERE IS NO COMPROMISE.",
    description: "For over 25 years, RK Construction has transformed urban landscapes through precision engineering, modern equipment, and an unwavering commitment to structural integrity. We bridge the gap between bold architectural visions and real-world durability.",
    subnote: "Discover our core capabilities below",
    linkText: "Learn More About Our Core Features",
    linkHref: "#core-features",
  },

  // 4. CORE FEATURES SECTION
  featuresSection: {
    title: "OUR CORE FEATURES",
    tabs: [
      {
        id: "planning",
        label: "PLANNING & MANAGEMENT",
        contentTitle: "Streamlined Project Management & Feasibility",
        image: rkp1,
        items: [
          {
            icon: "blueprint",
            title: "Comprehensive Structural Blueprinting",
            desc: "Certified civil & structural engineers designing foolproof project execution pathways."
          },
          {
            icon: "shield",
            title: "Strict Safety & Regulatory Compliance",
            desc: "100% adherence to national building codes, safety protocols, and quality audits."
          },
          {
            icon: "calculator",
            title: "Transparent Cost & Risk Assessment",
            desc: "Zero hidden costs with precise material estimation and timeline management."
          },
          {
            icon: "clock",
            title: "On-Time Delivery Milestone System",
            desc: "Agile construction tracking ensuring every phase is delivered on schedule."
          }
        ]
      },
      {
        id: "renovation",
        label: "RENOVATION & IMPROVEMENTS",
        contentTitle: "Modernizing Existing Infrastructures & Facelifts",
        image: rk2,
        items: [
          {
            icon: "hammer",
            title: "Structural Retrofitting & Strengthening",
            desc: "Upgrading foundation stability and load capacity for modern demands."
          },
          {
            icon: "leaf",
            title: "Eco-Friendly & Sustainable Materials",
            desc: "Integration of green technology, thermal insulation, and solar energy channels."
          },
          {
            icon: "sparkles",
            title: "Interior & Exterior Modernization",
            desc: "Transforming outdated commercial and residential spaces with sleek glass & steel finishes."
          },
          {
            icon: "briefcase",
            title: "Zero-Interruption Workspace Upgrades",
            desc: "Phase-by-phase renovation allowing active businesses to operate smoothly."
          }
        ]
      },
      {
        id: "architecture",
        label: "ARCHITECTURE & DESIGN",
        contentTitle: "Bespoke Architectural Engineering & Turnkey Design",
        image: rkp2,
        items: [
          {
            icon: "cube",
            title: "3D BIM & Virtual Reality Walkthroughs",
            desc: "Visualize your entire project in 3D CAD modeling before groundbreaking."
          },
          {
            icon: "home",
            title: "Custom Residential & Commercial Layouts",
            desc: "Tailor-made floor plans optimizing spatial utility, ventilation, and natural light."
          },
          {
            icon: "key",
            title: "End-to-End Turnkey Contracting",
            desc: "Complete oversight from foundation digging to interior handover."
          },
          {
            icon: "sun",
            title: "Climate-Responsive Architecture",
            desc: "Designs customized for regional weather endurance and maximum energy savings."
          }
        ]
      }
    ]
  },

  // 5. LEGACY STORY SECTION
  story: {
    title: "OUR LEGACY STORY",
    subtitle: "25+ Years of Engineering Trust",
    description: "Founded with a mission to redefine construction standards, RK Construction has grown from a local engineering firm into a full-scale construction powerhouse. Over two decades, we have successfully delivered over 500+ residential, commercial, and industrial landmarks.",
    image: rk3,
    stats: [
      { number: "25+", label: "Years Experience" },
      { number: "500+", label: "Projects Completed" },
      { number: "100%", label: "Client Satisfaction" },
      { number: "50+", label: "Certified Engineers" },
    ]
  }
};

export default about;