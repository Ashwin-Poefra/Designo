import styled, { css } from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";
import webDesign from "../../../../assets/images/home/desktop/image-web-design-large.jpg";
import appDesign from "../../../../assets/images/home/desktop/image-app-design.jpg";
import graphicDesign from "../../../../assets/images/home/desktop/image-graphic-design.jpg";
import { Link } from "react-router-dom";

export const CardContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 4rem 1rem 1rem 1rem;

  h3,
  p {
    color: var(--color-pry-300);
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.75rem;
    line-height: 2.25rem;
    font-weight: var(--font-weight-200);

    @media ${QUERIES.tabletMini} {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
`;

export const CardWrap = styled.div`
  max-width: var(--max-container);
  min-height: 10rem;
  margin: var(--center-container);
  display: flex;
  flex-direction: column;

  & > * {
    min-height: 15.625rem;
    margin: 1rem 0rem;
  }

  @media ${QUERIES.tablet} {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 19.25rem;
    grid-auto-rows: 19.25rem;
    grid-template-areas:
      "a b"
      "a c";

    & > * {
      min-height: 0rem;
      margin: 0rem;
    }
  }

  ${({ twoColumns }) =>
    twoColumns &&
    css`
      @media ${QUERIES.tablet} {
        display: flex;
        flex-direction: row;

        & > * {
          flex: 1;
          min-height: 19.25rem;
          margin: 0rem;
        }
      }

      
    `}
`;

export const Card = styled(Link)`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &:hover {
    & > * {
      transition: var(--transition);
      background-color: hsla(11, 73%, 66%, 0.785);
    }

    h3,
    p {
      background-color: transparent;
    }

    i {
      transition: var(--transition);
      transform: translateX(1rem) translateY(-0.1rem);
      color: var(--color-pry-300);
    }
  }

  ${({ className }) =>
    className === "large" &&
    css`
      grid-area: a;
      background-image: url(${webDesign});
    `}

  ${({ className }) =>
    className === "small-1" &&
    css`
      grid-area: b;
      background-image: url(${appDesign});
    `}
    
  ${({ className }) =>
    className === "small-2" &&
    css`
      grid-area: c;
      background-image: url(${graphicDesign});
    `}
`;

export const CardOverlay = styled.div`
  background-color: hsla(0, 0%, 0%, 0.667);
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  position: absolute;
  z-index: 100;
`;

export const CardHeader = styled.h3`
  z-index: 1000;
`;
export const CardCta = styled.p`
  margin: 1rem 2rem;
  z-index: 1000;

  i {
    font-size: 0.5rem;
    transform: translateX(0.5rem) translateY(-0.1rem);
    color: var(--color-pry-100);
  }
`;
