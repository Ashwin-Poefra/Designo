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

const CtaSection = ({ data }) => {
  return (
    <>
      <CtaContainer>
        <CtaWrap>
          <CtaContent>
            <CtaHeader>{data.header}</CtaHeader>
            <CtaSubHeader>{data.subHeader}</CtaSubHeader>
            <MobileButton>
              <Button
                link={data.button.link}
                primary="true"
                click={handleScrollToTop}
              >
                {data.button.title}
              </Button>
            </MobileButton>
          </CtaContent>
          <CtaButton>
            <Button
              link={data.button.link}
              primary="true"
              click={handleScrollToTop}
            >
              {data.button.title}
            </Button>
          </CtaButton>
        </CtaWrap>
      </CtaContainer>
    </>
  );
};

export default CtaSection;
