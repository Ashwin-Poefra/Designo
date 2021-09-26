//TODO: Function that scolls page to the header section when a route link is clicked

export const handleScrollToTop = () => {
  document.getElementById("root").scrollIntoView({ behavior: "smooth" });
  // document.querySelector(".header")
};
