import styled, { css } from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";
import  bgCircles from "../../../../assets/images/shared/desktop/bg-pattern-two-circles.svg"

export const MapCardContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  margin-bottom: 2.5rem;

  h2 {
    font-size: 2rem;
    line-height: 2.25rem;
    color: var(--color-pry-100);
  }

  h3 {
    font-size: 0.9rem;
    line-height: 1.625rem;
    color: var(--color-pry-200);
    font-weight: var(--font-weight-200);
  }

  @media ${QUERIES.tabletMini} {
    margin: 1rem 1rem 5rem 1rem;
    border-radius: 1rem;
  }

  @media ${QUERIES.tablet} {
    margin: 1rem;
    border-radius: 1rem;
  }
`;

export const MapCardWrap = styled.div`
  max-width: var(--max-container);
  min-height: 4rem;
  margin: var(--center-container);
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  text-align: center;
  & > * {
    flex: 1;
  }

  @media ${QUERIES.tabletMini} {
    gap: 1rem;
    text-align: left;
    justify-content: flex-start;
  }

  @media ${QUERIES.tablet} {
    flex-direction: row;

    ${({ reverse }) =>
      reverse &&
      css`
        flex-direction: row-reverse;
      `}

    & > * {
      flex: 2;
    }
  }
`;

export const MapContent = styled.div`
  min-height: 24.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(14, 76%, 97%);
  background-image: url(${bgCircles});
  background-repeat: no-repeat;
  background-position: 0rem 1rem;

  @media ${QUERIES.tabletMini} {
    border-radius: 1rem;
    min-height: 20rem;
    align-items: flex-start;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const MapContentHeader = styled.h2`
  margin-bottom: 1rem;
`;
export const MapContentWrap = styled.div`

  @media ${QUERIES.tabletMini} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > * {
      flex: 1;
    }
  }
`;
export const MapContentAddress = styled.div``;
export const AddressHeader = styled.h3``;
export const Address = styled.p``;
export const MapContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 6.25rem;

  @media ${QUERIES.tabletMini} {
    align-items: flex-start;
  }
`;
export const ContactHeader = styled.h3``;
export const Contact = styled.a`
  border: none !important;
  cursor: pointer;

  &:hover {
    transition: var(--transition);
    color: var(--color-pry-100);
  }
`;

export const Map = styled.div`
  max-width: 100%;
  min-height: 20rem;
  display: flex;
  background-color: var(--color-pry-100);

  @media ${QUERIES.tabletMini} {
    border-radius: 1rem;
  }

  & > * {
    flex: 1;
  }

  @media ${QUERIES.tabletMini} {
    flex: 1;
  }
`;

export const MapFrame = styled.iframe`
  border: none;

  @media ${QUERIES.tabletMini} {
    border-radius: 1rem;
  }
`;

export const Wrap = styled.div`
  @media ${QUERIES.tabletMini} {
    width: 38rem;
  }
`;