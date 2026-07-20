// sites/rk-construction/content/pages/projects.ts
const rkProjectsPage = {
  hero: {
    badge: "Our Portfolio",
    title: "Masterpieces Built to Last Generations",
    subtitle:
      "Explore our landmark civil engineering, architectural designs, and commercial structures across the region.",
    backgroundImage: "/sites/rk-construction/projects/banner.webp",
  },

  intro: {
    title: "Delivering Excellence Across Diverse Sectors",
    description:
      "From high-end residential spaces to massive industrial developments, our portfolio shows our commitment to precision, structural integrity, and modern engineering aesthetics.",
  },

  categories: [
    { slug: "all", name: "All Projects" },
    { slug: "residential", name: "Residential" },
    { slug: "commercial", name: "Commercial" },
    { slug: "industrial", name: "Industrial" },
  ],

  projects: [
    {
      id: 1,
      title: "Skyline Premium Apartments",
      category: "residential",
      location: "Adyar, Chennai",
      stats: "78,000 m² Completed",
      image: "/img/building.png",
      description: "A luxury multi-story residential complex featuring sustainable structural concrete design and modern amenities.",
    },
    {
      id: 2,
      title: "TechPark Plaza Corporate Hub",
      category: "commercial",
      location: "OMR, Chennai",
      stats: "120,000 m² Structural Framing",
      image: "/img/building_mini.png",
      description: "State-of-the-art commercial tech hub prioritizing steel framing efficiency and complex glass facades.",
    },
    {
      id: 3,
      title: "Apex Logistics & Warehousing Complex",
      category: "industrial",
      location: "Sriperumbudur",
      stats: "210,000 m² High-Load Flooring",
      image: "/img/plan.png",
      description: "Heavy industrial facility built with high-performance foundations tailored for automated warehousing load distributions.",
    },
    {
      id: 4,
      title: "Green Meadows Eco-Villas",
      category: "residential",
      location: "ECR, Chennai",
      stats: "12 Luxury Units Delivered",
      image: "/img/building.png",
      description: "Premium sustainable living spaces incorporating green construction engineering and localized water management.",
    },
    {
      id: 5,
      title: "Grand Retail Galleria",
      category: "commercial",
      location: "Anna Nagar, Chennai",
      stats: "4-Floor Retail Span",
      image: "/img/building_mini.png",
      description: "A grand scale commercial retail mall highlighting open architectural floor concepts and robust MEP system zones.",
    },
  ],

  cta: {
    title: "Have a Vision for Your Next Construction Venture?",
    description:
      "Let our team of structural engineering experts and certified contractors map your requirements to architectural milestones.",
    button: {
      text: "Discuss Your Project",
      href: "/contact",
    },
  },
};

export default rkProjectsPage;