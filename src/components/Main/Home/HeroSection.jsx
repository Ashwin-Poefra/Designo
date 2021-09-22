import React from "react";
import {
  HeroContainer,
  HeroWrap,
  HeroContent,
  HeroHeader,
  HeroSubHeader,
  HeroImageContainer,
  HeroImage,
} from "./HeroSectionStyles";
import Button from "../../../components/global/Button/Button";
import { handleScrollToTop } from "../../../helpers/Config";

const HeroSection = ({ data }) => {
  console.log(data);
  return ( 
    <>
      <HeroContainer>
        <HeroWrap>
          <HeroContent>
            <HeroHeader>{data.header}</HeroHeader>
            <HeroSubHeader>{data.subHeader}</HeroSubHeader>
            <Button
              primary={true}
              link={data.button.link}
              click={handleScrollToTop}
            >
              {data.button.title}
            </Button>
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
