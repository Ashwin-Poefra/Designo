import styled from "styled-components";
// import { QUERIES } from "../../../../../helpers/MediaQueries";

export const CardsContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 4rem 1rem 1rem 1rem;
`;
export const CardsWrap = styled.div`
  max-width: var(--max-container);
  min-height: 40rem;
  margin: var(--center-container);
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
export const Card = styled.div`
  flex: 1 23.1483rem;
  max-width: 22rem;
  min-height: 29.875rem;
  background-color: var(--color-sec-300);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;

  & > * {
    flex: 1;
  }
`;
export const CardImageWrap = styled.div`
  height: 20rem;
`;
export const CardImage = styled.img`
  border-radius: 1rem 1rem 0rem 0rem;
  object-fit: cover;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const CardName = styled.h3`
  font-weight: var(--font-weight-200);
  color: var(--color-pry-100);
`;
export const CardText = styled.p`
  margin-top: 1rem;
`;