import logoDark from "../../assets/images/shared/desktop/logo-dark.png";
import logoLight from "../../assets/images/shared/desktop/logo-light.png";
import facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import youtube from "../../assets/images/shared/desktop/icon-youtube.svg";
import twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import pinterest from "../../assets/images/shared/desktop/icon-pinterest.svg";
import instagram from "../../assets/images/shared/desktop/icon-instagram.svg";

export const menuData = {
  header: {
    headerLogo: logoDark,
    headerLogoAlt: "designo web agency",
  },
  footer: {
    footerLogo: logoLight,
    footerLogoAlt: "designo",
  },
  homeLink: "/",
  address: {
    office: "Designo Central Office",
    street: "3886 Wellington Street",
    city: "Toronto, Ontario M9C 3J5",
  },
  contact: {
    title: "Contact Us (Central Office)",
    phone: "+1 253-863-8967",
    phoneLink: "tel:+1 253-863-8967",
    email: "contact@designo.co",
    emailLink: "mailto:contact@designo.co",
  },
  social: [
    {
      label: "facebook",
      icon: facebook,
      link: "https://facebook.com.designo",
    },
    {
      label: "youtube",
      icon: youtube,
      link: "https://youtube.com.designo",
    },
    {
      label: "twitter",
      icon: twitter,
      link: "https://twitter.com.designo",
    },
    {
      label: "pinterest",
      icon: pinterest,
      link: "https://pinterest.com.designo",
    },
    {
      label: "instagram",
      icon: instagram,
      link: "https://instagram.com.designo",
    },
  ],
  menu: [
    {
      title: "our company",
      link: "/about",
    },
    {
      title: "locations",
      link: "/locations",
    },
    {
      title: "contact",
      link: "/portfolio",
    },
  ],
};
