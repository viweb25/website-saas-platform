import heroImage from "../assets/rk5.png";
import blueprintImage from "../assets/plan.jpg";
import miniImage from "../assets/plan.jpg";

const hero = {
  badge: "Professional. Innovative. Reliable.",
  title: "Exceptional Service Exceeding Expectations",
  description:
    "Our civil and structural team is committed to providing sustainable, creative and efficient engineering solutions for our communities.",

  button: {
    text: "Consult Now",
    href: "#",
  },

  image: heroImage,
  blueprint: blueprintImage,

  stats: [
    {
      value: "128+",
      label: "Projects / Year",
    },
    {
      value: "4.253",
      label: "Million Euros Turnover",
    },
  ],

  highlight: {
    title: "Residential House",
    value: "78 000 m²",
    subtitle: "Amount work done",
    image: miniImage,
  },
};

export default hero;