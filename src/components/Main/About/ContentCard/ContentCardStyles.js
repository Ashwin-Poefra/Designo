import styled, { css } from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";

export const ContentContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;

  @media ${QUERIES.mobile} {
    padding: 1rem;
  }

  @media ${QUERIES.tablet} {
    ${
      ({gap}) => gap && css`
      margin-top: 2rem; 
      `
    }
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
    min-height: 30rem;

    ${({ reverse }) =>
      reverse &&
      css`
        flex-direction: row-reverse;
        min-height: 636.75px;

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

  @media ${QUERIES.mobile} {
    padding: 3rem 4rem;
  }

  @media ${QUERIES.tablet} {
    padding: 3rem 4rem;
    align-items: flex-start;
    flex: 1 40rem;
  }
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
  height: 20rem;

  @media ${QUERIES.tablet} {
    min-height: 0rem;
    flex-direction: column;
    height: 30rem;
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