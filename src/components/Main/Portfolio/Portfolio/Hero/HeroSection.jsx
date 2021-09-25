import React from "react";
import {
  HeroContainer,
  HeroWrap,
  HeroHeader,
  HeroSubHeader,
} from "./HeroSectionStyles";


const HeroSection = ({data}) => {
  return (
    <>
      <HeroContainer>
        <HeroWrap>
          <HeroHeader>{data.header}</HeroHeader>
          <HeroSubHeader>{data.subHeader}</HeroSubHeader>
        </HeroWrap>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
