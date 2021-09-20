import React from "react";
import styled from "styled-components";


//TODO: Overlay Styling

const OverlayContainer = styled.div`
  background-color: hsla(0, 0%, 0%, 0.616);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 0;
  transition: 0.5s ease-in-out;
  display: ${({ navOpen }) => (navOpen ? "block" : "none")};
`;

const Overlay = ({ navOpen, setNavOpen }) => {

  //TODO: Handle => Close mobile navigation dropdown on click of overlay
  const handleCloseNav = () => {
      setNavOpen(!navOpen);
  };

  return (
    <>
      <OverlayContainer navOpen={navOpen} onClick={handleCloseNav} />
    </>
  );
};

export default Overlay;
