import styled from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";

export const QualityContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding-top: 2rem;
`;

export const QualityWrap = styled.div`
  max-width: var(--max-container);
  min-height: 4rem;
  margin: var(--center-container);
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tablet} {
    flex-direction: row;
  }
`;

export const Quality = styled.div`
  flex: 1;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0rem;
  background-color: white;

  @media ${QUERIES.tabletMini} {
    flex-direction: row;

    & > * {
      flex: 1;
    }
  }

  @media ${QUERIES.tablet} {
    flex-direction: column;

    & > * {
      flex: 1;
    }
  }
`;
export const QualityImageWrap = styled.div``;
export const QualityImage = styled.img``;

export const QualityContent = styled.div`
  flex: 2.5;

  @media ${QUERIES.tabletMini} {
    text-align: left;
  }

  @media ${QUERIES.tablet} {
    text-align: center;
  }
`;

export const QualityContentHeader = styled.h3`
  text-transform: uppercase;
  margin-top: 1rem;
`;

export const QualityContentText = styled.p`
  margin-top: 1rem;
  max-width: 20rem;

  @media ${QUERIES.tabletMini} {
    max-width: 50rem;
  }
`;