import styled, { css } from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";
import circleBg from "../../../../assets/images/about/desktop/bg-pattern-hero-about-desktop.svg";
import doubleCircleBg from "../../../../assets/images/shared/desktop/bg-pattern-two-circles.svg";

export const ContentContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;

  @media ${QUERIES.mobile} {
    padding: 1rem;
  }

  @media ${QUERIES.tablet} {
    ${({ gap }) =>
      gap &&
      css`
        margin-top: 2rem;
      `}
  }
`;

export const ContentWrap = styled.div`
  max-width: var(--max-container);
  min-height: 5rem;
  margin: var(--center-container);
  background-color: var(--color-pry-100);
  display: flex;
  flex-direction: column-reverse;
  text-align: center;

  ${({ light }) =>
    light &&
    css`
      background-color: #fdf3f0;
      background-image: none;

      h2 {
        color: var(--color-pry-100);
      }

      p {
        color: var(--color-pry-200);
      }
    `}

  @media ${QUERIES.mobile} {
    border-radius: 1rem;
  }

  @media ${QUERIES.tablet} {
    flex-direction: row;
    text-align: left;
    min-height: 0rem;

    ${({ reverse }) =>
      reverse &&
      css`
        flex-direction: row-reverse;

        img {
          border-radius: 1rem 0rem 0rem 1rem;
        }
      `}
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background-image: url(${circleBg});
  background-repeat: no-repeat;
  background-size: 20rem auto;
  background-position: 3rem -10rem;

  @media ${QUERIES.mobile} {
    padding: 3rem 4rem;
    background-size: 25rem auto;
    background-position: 3rem -12rem;
  }

  @media ${QUERIES.tablet} {
    padding: 3rem 4rem;
    align-items: flex-start;
    flex: 1 40rem;
    background-size: 40rem auto;
    background-position: 0rem -10rem;
  }

  ${({ light }) =>
    light &&
    css`
      background-image: url(${doubleCircleBg});
      background-repeat: no-repeat;
      background-position: 0rem 1rem;
      background-size: 36.5rem auto;

      @media ${QUERIES.tablet} {
        background-position: 0rem 22rem;
      }
    `}
`;

export const ContentHeader = styled.h2`
  color: var(--color-pry-300);
`;

export const ContentText = styled.p`
  color: var(--color-pry-300);
  margin-top: 1rem;

  @media ${QUERIES.tablet} {
    margin-top: 2rem;
  }
`;

export const ContentImageWrap = styled.div`
  display: flex;
  max-height: 20rem;

  @media ${QUERIES.tablet} {
    flex-direction: column;
    max-height: none;
  }

  & > * {
    flex: 1;
  }
`;

export const ContentImage = styled.img`
  object-fit: cover;

  @media ${QUERIES.mobile} {
    border-radius: 1rem 1rem 0rem 0rem;

    @media ${QUERIES.tablet} {
      border-radius: 0rem 1rem 1rem 0rem;
    }
  }
`;