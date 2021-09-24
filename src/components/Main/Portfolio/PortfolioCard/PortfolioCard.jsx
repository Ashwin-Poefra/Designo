import React from "react";
import { portfolioData } from "../../../../data/pages/Portfolio/portfolioData";
import {
  CardContainer,
  CardWrap,
  Card,
  CardOverlay,
  CardHeader,
  CardCta,
} from "./PortfolioCardStyles";
import { handleScrollToTop } from "../../../../helpers/Config";


const PortfolioCard = ({ data }) => {
  return (
    <>
      <CardContainer>
        <CardWrap>
          {data.map((portfolio, index) => {
            return (
              <Card key={index} className={portfolio.class} to="/about" onClick={handleScrollToTop}>
                <CardHeader>{portfolio.header}</CardHeader>
                <CardCta>view projects</CardCta>
                <CardOverlay />
              </Card>
            );
          })}
        </CardWrap>
      </CardContainer>
    </>
  );
};

export default PortfolioCard;
