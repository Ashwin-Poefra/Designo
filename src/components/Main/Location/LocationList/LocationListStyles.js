import styled from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";

export const ListContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 3rem 1rem;

  @media ${QUERIES.tablet} {
    padding: 0rem 1rem 4rem 1rem;
  }
`;
export const ListWrap = styled.div`
  max-width: var(--max-container);
  min-height: 5rem;
  margin: var(--center-container);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media ${QUERIES.tablet} {
    flex-direction: row;
  }

  & > * {
    flex: 1;
  }
`;
export const List = styled.div`
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${QUERIES.tablet} {
    min-height: 30rem;
  }
`;
export const ListImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15rem;
`;
export const ListImage = styled.img``;
export const ListName = styled.h3`
  margin-bottom: 2rem;
  text-transform: uppercase;
`;
export const ListButton = styled.div`
  a {
    border: none;
  }
`;
