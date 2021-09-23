import phoneMobile from "../../../assets/images/home/desktop/mobile-hero-image.png"
import phoneDesktop from "../../../assets/images/home/desktop/desktop-hero-image.png";
import passionate from "../../../assets/images/home/desktop/illustration-passionate.svg";
import resourceful from "../../../assets/images/home/desktop/illustration-resourceful.svg";
import friendly from "../../../assets/images/home/desktop/illustration-friendly.svg";


export const homeData = {
  header: "Award-winning custom designs and digital branding solutions",
  subHeader:
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
  button: {
    title: "learn more",
    link: "/about",
  },
  image: {
    srcMobile: phoneMobile,
    srcDesktop: phoneDesktop,
    imageAlt: "a mobile phone displaying an animated graphics",
  },
  qualities: [
    {
      image: passionate,
      imageAlt: "a man passionately executing a design task on his laptop",
      header: "passionate",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      image: resourceful,
      imageAlt: "a lady excuting a design project on her computer",
      header: "resourceful",
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      image: friendly,
      imageAlt: "a happy customer receiving her completed web project from a project manager",
      header: "friendly",
      description:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    },
  ],
};
