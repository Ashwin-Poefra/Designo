import styled from "styled-components";

export const HeroContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  /* background-color: red; */
  /* padding: 1rem; */

  h1,
  p {
    color: var(--color-pry-300);
  }
`;

export const HeroWrap = styled.div`
  max-width: var(--max-container);
  /* min-height: 10rem; */
  margin: var(--center-container);
  background-color: var(--color-pry-100);
  /* background-color: yellow; */
  /* border-radius: 1rem; */
  display: flex;
  flex-direction: column;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1rem 0rem 1rem;
`;
export const HeroHeader = styled.h1`
  max-width: 29rem;
`;
export const HeroSubHeader = styled.p`
  margin: 1.5rem 0rem;
  max-width: 25rem;
`;
export const HeroImageContainer = styled.div`
  /* background-color: gray; */
`;
export const HeroImage = styled.img`
`;
