import React from "react";
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
              <Card
                key={index}
                className={portfolio.class}
                to="/about"
                onClick={handleScrollToTop}
              >
                <CardHeader>{portfolio.header}</CardHeader>
                <CardCta>
                  view projects
                  <span>
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </CardCta>
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
