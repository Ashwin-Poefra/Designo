import styled from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";
import heroBackground from "../../../../assets/images/home/desktop/bg-pattern-hero-home.svg";

export const HeroContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;

  h1,
  p {
    color: var(--color-pry-300);
  }

  @media ${QUERIES.mobile} {
    margin: 1rem;
  }
`;

export const HeroWrap = styled.div`
  max-width: var(--max-container);
  margin: var(--center-container);
  background-color: var(--color-pry-100);
  display: flex;
  flex-direction: column;
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-position: 0rem 6rem;

  @media ${QUERIES.mobile} {
    border-radius: 1rem;
    background-size: 50rem auto;
    background-position: 10rem 8rem;
  }

  @media ${QUERIES.tablet} {
    flex-direction: row;
    height: 40rem;
    padding: 0rem 2.8125rem;
    background-size: 40rem auto;
    background-position: 29rem 0rem;

    & > * {
      flex: 1;
      text-align: left;
    }
  }

  @media ${QUERIES.desktop} {
    padding: 0rem 5.8125rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1rem 0rem 1rem;

  @media ${QUERIES.tablet} {
    flex: 2;
    align-items: flex-start;
    text-align: left;
    padding: 0rem;
  }
`;
export const HeroHeader = styled.h1`
  max-width: 29rem;

  @media ${QUERIES.tablet} {
    max-width: 40rem;
  }
`;
export const HeroSubHeader = styled.p`
  margin: 1.5rem 0rem;
  max-width: 25rem;
`;
export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  @media ${QUERIES.tablet} {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
export const HeroImageMobile = styled.img`
  box-shadow: 1.2rem -0.6rem 2rem hsla(0, 0%, 0%, 0.331);
  border-radius: 2.2rem 2.2rem 0rem 0rem;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;
export const HeroImageDesktop = styled.img`
  box-shadow: 1.2rem -0.6rem 2rem hsla(0, 0%, 0%, 0.331);
  border-radius: 2.2rem 2.2rem 0rem 0rem;
  display: none;
  height: 33rem;
  max-width: auto;

  @media ${QUERIES.tablet} {
    display: flex;
  }
`;
