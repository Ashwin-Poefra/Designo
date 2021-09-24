import React from "react";
import {
  HeroContainer,
  HeroWrap,
  HeroHeader,
  HeroSubHeader,
} from "./HeroSectionStyles";


const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrap>
          <HeroHeader>Web Design</HeroHeader>
          <HeroSubHeader>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </HeroSubHeader>
        </HeroWrap>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
