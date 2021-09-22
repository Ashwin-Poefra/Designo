import React from "react";
import Button from "../Button/Button";
import {
  CtaContainer,
  CtaWrap,
  CtaContent,
  CtaHeader,
  CtaSubHeader,
  CtaButton,
  MobileButton
} from "./CtaSectionStyles";
import { handleScrollToTop } from "../../../helpers/Config";

const CtaSection = ({ ctaData }) => {
  return (
    <>
      <CtaContainer>
        <CtaWrap>
          <CtaContent>
            <CtaHeader>{ctaData.header}</CtaHeader>
            <CtaSubHeader>{ctaData.subHeader}</CtaSubHeader>
            <MobileButton>
              <Button
                link={ctaData.button.link}
                primary="true"
                click={handleScrollToTop}
              >
                {ctaData.button.title}
              </Button>
            </MobileButton>
          </CtaContent>
          <CtaButton>
            <Button
              link={ctaData.button.link}
              primary="true"
              click={handleScrollToTop}
            >
              {ctaData.button.title}
            </Button>
          </CtaButton>
        </CtaWrap>
      </CtaContainer>
    </>
  );
};

export default CtaSection;
