import React, { useState, useEffect } from "react";
import {
  ContentContainer,
  ContentWrap,
  Content,
  ContentHeader,
  ContentText,
  ContentImageWrap,
  ContentImage,
} from "./ContentCardStyles";

const ContentCard = ({reverse, light, gap, data }) => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  //TODO: Monitor the screen size to enable image responsiveness
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      {data && (
        <ContentContainer gap={gap}>
          <ContentWrap reverse={reverse} light={light}>
            <Content light={light}>
              <ContentHeader>{data.header}</ContentHeader>
              <ContentText>{data.content.p1}</ContentText>
              <ContentText>{data.content.p2}</ContentText>
            </Content>
            <ContentImageWrap>
              {size <= 372 && (
                <ContentImage
                  src={data.image.imgMobile}
                  alt={data.image.imgAlt}
                ></ContentImage>
              )}
              {size > 372 && size <= 720 && (
                <ContentImage
                  src={data.image.imgTablet}
                  alt={data.image.imgAlt}
                ></ContentImage>
              )}
              {size > 720 && (
                <ContentImage
                  src={data.image.imgDesktop}
                  alt={data.image.imgAlt}
                ></ContentImage>
              )}
            </ContentImageWrap>
          </ContentWrap>
        </ContentContainer>
      )}
    </>
  );
};

export default ContentCard;
