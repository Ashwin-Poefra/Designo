import React from "react";
import {
  HeroContainer,
  HeroWrap,
  HeroContent,
  HeroHeader,
  HeroSubHeader,
  HeroImageContainer,
  HeroImageMobile,
  HeroImageDesktop,
} from "./HeroSectionStyles";
import Button from "../../../../components/global/Button/Button";
import { handleScrollToTop } from "../../../../helpers/Config";

const HeroSection = ({ data }) => {
  return (
    <>
      <HeroContainer>
        <HeroWrap>
          <HeroContent>
            <HeroHeader>{data.header}</HeroHeader>
            <HeroSubHeader>{data.subHeader}</HeroSubHeader>
            <Button
              click={handleScrollToTop}
              primary="true"
              link={data.button.link}
            >
              {data.button.title}
            </Button>
          </HeroContent>
          <HeroImageContainer>
            <HeroImageMobile
              src={data.image.srcMobile}
              alt={data.image.imageAlt}
            ></HeroImageMobile>
            <HeroImageDesktop
              src={data.image.srcDesktop}
              alt={data.image.imageAlt}
            ></HeroImageDesktop>
          </HeroImageContainer>
        </HeroWrap>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
