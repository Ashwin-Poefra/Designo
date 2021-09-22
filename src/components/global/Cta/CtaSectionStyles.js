import styled from "styled-components";
import ctaBackground from "../../../assets/images/shared/desktop/bg-pattern-call-to-action.svg";
import { QUERIES } from "../../../helpers/MediaQueries";

export const CtaContainer = styled.section`
  background-color: red;
  max-width: 100%;
  min-height: 10rem;
  padding: 1rem;

  h2,
  p {
    color: var(--color-pry-300);
  }
`;
export const CtaWrap = styled.div`
  background-color: var(--color-pry-100);
  background-image: url(${ctaBackground});
  background-position: -34rem -9rem;
  background-repeat: no-repeat;
  max-width: var(--max-container);
  min-height: 23.6875rem;
  margin: var(--center-container);
  transform: translateY(6rem);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${QUERIES.tabletMini} {
    min-height: 18.25rem;
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
    padding: 0rem 2.8125rem;
  }

  @media ${QUERIES.tablet} {
    padding: 0rem 5.8125rem;
  }
`;

export const CtaContent = styled.div`
  padding: 0rem 1rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
export const CtaHeader = styled.h2`
  max-width: 24.75rem;
  margin: var(--center-container);

  @media ${QUERIES.tabletMini} {
    max-width: 24.75rem;
    margin: 0;
  }
`;
export const CtaSubHeader = styled.p`
  margin: 1.5rem auto 2rem auto;
  max-width: 26.75rem;

  @media ${QUERIES.tabletMini} {
      margin: 0;
    margin-top: 1.5rem;
  }
`;
export const MobileButton = styled.div`
  @media ${QUERIES.tabletMini} {
    display: none;
  }
`;
export const CtaButton = styled.div`
  display: none;
  align-items: flex-end;

  @media ${QUERIES.tabletMini} {
    display: flex;
  }
`;
