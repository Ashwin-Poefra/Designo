import styled from "styled-components";
import { QUERIES } from "../../../../../helpers/MediaQueries";
import heroBackground from "../../../../../assets/images/web-design/desktop/bg-pattern-intro-web.svg";

export const HeroContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;

  @media ${QUERIES.mobile} {
    padding: 1rem;
  }
`;

export const HeroWrap = styled.div`
  background-color: var(--color-pry-100);
  max-width: var(--max-container);
  min-height: 15.75rem;
  margin: var(--center-container);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${heroBackground});
  background-position: 7rem 0rem;
  background-size: 45rem auto;
  background-repeat: no-repeat;

  @media ${QUERIES.mobile} {
    border-radius: 1rem;
    background-position: 1rem -7rem;
  }

  @media ${QUERIES.tablet} {
    background-position: 25rem -7rem;
  }

  h1,
  p {
    color: var(--color-pry-300);
  }
`;

export const HeroHeader = styled.h1``;
export const HeroSubHeader = styled.p`
  max-width: 25.75rem;
  margin: 1rem;
`;