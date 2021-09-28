import React from "react";
import { ButtonContainer } from "./ButtonSyles";

const Button = ({ primary, link, fixed, click, label, children }) => {
  return (
    <>
      <ButtonContainer
        primary={primary}
        to={link}
        fixed={fixed}
        aria-label={label}
        onClick={click}
      >
        {children}
      </ButtonContainer>
    </>
  );
};

export default Button;