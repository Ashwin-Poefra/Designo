import React from "react";
import { ButtonContainer } from "./ButtonSyles";

const Button = ({ primary, link, click, fixed, children }) => {

  return (
    <>
      <ButtonContainer onClick={click} primary={primary} to={link} fixed={fixed} >{children}</ButtonContainer>
    </>
  );
};

export default Button;
