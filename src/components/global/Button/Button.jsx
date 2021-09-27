import React from "react";
import { ButtonContainer } from "./ButtonSyles";

const Button = ({ primary, link, click, fixed, label, children }) => {
  return (
    <>
      <ButtonContainer
        onClick={click}
        primary={primary}
        to={link}
        fixed={fixed}
        aria-label={label}
      >
        {children}
      </ButtonContainer>
    </>
  );
};

export default Button;