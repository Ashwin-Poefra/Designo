import styled from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";
import circleBg from "../../../../assets/images/about/desktop/bg-pattern-hero-about-desktop.svg";

export const CardContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  /* padding: 1rem; */

  @media ${QUERIES.tabletMini} {
    padding: 1rem;
  }
`;
export const CardWrap = styled.div`
  max-width: var(--max-container);
  min-height: 30rem;
  margin: var(--center-container);
  background-color: var(--color-pry-100);
  display: flex;
  flex-direction: column;
  background-image: url(${circleBg});
  background-repeat: no-repeat;
  background-size: 15rem auto;
  background-position: 3rem 0rem;
  padding: 1rem 1rem 3rem 1rem;

  & > * {
    flex: 1 100%;
  }

  @media ${QUERIES.mobile} {
    background-size: 25rem auto;
    background-position: 3rem -12rem;
  }

  @media ${QUERIES.tabletMini} {
    border-radius: 1rem;
    padding: 3rem 4rem;
  }

  @media ${QUERIES.tablet} {
    padding: 0rem 1rem;
    align-items: center;
    border-radius: 1rem;
    flex-direction: row;
    background-size: 40rem auto;
    background-position: -2rem -10rem;
  }
`;
export const CardContent = styled.div`
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media ${QUERIES.mobile} {
    text-align: left;
  }

  @media ${QUERIES.tablet} {
    padding: 0rem 1rem 0rem 4rem;
  }
`;
export const CardForm = styled.div`
  @media ${QUERIES.tablet} {
    padding: 0rem 4rem;
  }
`;
export const CardHeader = styled.h1`
  color: var(--color-pry-300);
`;
export const CardText = styled.p`
  color: var(--color-pry-300);
  margin-top: 2rem;
`;
