import React from "react";
import {
  HeroContainer,
  HeroWrap,
  HeroContent,
  HeroHeader,
  HeroSubHeader,
  HeroImageContainer,
  HeroImageWrap,
  HeroImage,
} from "./HeroSectionStyles";
import Button from "../../../components/global/Button/Button";

const HeroSection = ({ data }) => {
  console.log(data);
  return (
    <>
      <HeroContainer>
        <HeroWrap>
          <HeroContent>
            <HeroHeader>{data.header}</HeroHeader>
            <HeroSubHeader>{data.subHeader}</HeroSubHeader>
            <Button primary>{data.button.title}</Button>
          </HeroContent>
          <HeroImageContainer>
            <HeroImage
              src={data.image.src}
              alt={data.image.imageAlt}
            ></HeroImage>
          </HeroImageContainer>
        </HeroWrap>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
