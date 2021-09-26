//TODO: Function that scolls page to the header section when a route link is clicked

export const handleScrollToTop = () => {
  document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
};
