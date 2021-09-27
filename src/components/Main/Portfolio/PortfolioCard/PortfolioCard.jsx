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

const PortfolioCard = ({ data, twoColumns }) => {
  return (
    <>
      <CardContainer>
        <CardWrap twoColumns={twoColumns}>
          {data && data.map((portfolio, index) => {
            return (
              <Card
                key={index}
                className={portfolio.class}
                to={`/services/${portfolio.id}`}
                onClick={handleScrollToTop}
                aria-label={portfolio.label}
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
