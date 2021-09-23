import React from "react";
import {
  QualityContainer,
  QualityWrap,
  Quality,
  QualityImageWrap,
  QualityImage,
  QualityContent,
  QualityContentHeader,
  QualityContentText,
} from "./QualitySectionStyles";

const QualitySection = ({ data }) => {
  return (
    <>
      <QualityContainer>
        <QualityWrap>
          {data.qualities.map((quality, index) => {
            return (
              <Quality key={index}>
                <QualityImageWrap>
                  <QualityImage src={quality.image} alt={quality.imageAlt} />
                </QualityImageWrap>
                <QualityContent>
                  <QualityContentHeader>{quality.header}</QualityContentHeader>
                  <QualityContentText>{quality.description}</QualityContentText>
                </QualityContent>
              </Quality>
            );
          })}
        </QualityWrap>
      </QualityContainer>
    </>
  );
};

export default QualitySection;
