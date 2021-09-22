import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../../helpers/MediaQueries";

export const FooterContainer = styled.footer`
  background-color: var(--color-pry-200);
  max-width: 100%;
  min-height: 0rem;

  a {
    color: var(--color-pry-300);

    &:hover {
      color: var(--color-pry-300);
      border-color: var(--color-pry-300);
    }
  }

  p {
    font-weight: var(--font-weight-200);
    color: hsl(0, 0%, 59%);
  }
`;

export const FooterWrap = styled.div`
  max-width: var(--max-container);
  min-height: 10rem;
  margin: var(--center-container);
  padding: 0rem 1rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem 1rem;
  }

  @media ${QUERIES.tablet} {
    padding: 0rem;
  }
`;

export const FooterSpace = styled.div`
  min-height: 6.25rem;
  max-width: 100%;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;

  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    padding-bottom: 0rem;
    min-height: 6.25rem;
    border-bottom: 0.05rem solid hsl(0, 0%, 19%);

    & > * {
      flex: 1;
    }
  }
`;

export const FooterLogoWrap = styled.div`
  min-height: 6.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.05rem solid hsl(0, 0%, 19%);

  @media ${QUERIES.tabletMini} {
    min-height: 0rem;
    border: none;
    justify-content: flex-start;
  }
`;

export const FooterLogoLink = styled(Link)`
  &:hover {
    border: none;
  }
`;

export const FooterLogo = styled.img`
  max-width: 12.625rem;
  min-height: 0rem;
`;

export const FooterNavWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletMini} {
    flex: 3;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const FooterNav = styled.div`
  margin-top: 2rem;

  @media ${QUERIES.tabletMini} {
    margin-top: 0rem;
    margin-left: 2rem;
  }
`;
export const FooterNavItem = styled(Link)`
  text-transform: uppercase;
`;

export const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    padding-bottom: 3.8rem;

    & > * {
      flex: 1;
      align-items: flex-start;
    }
  }
`;

export const FooterAddressWrap = styled.div``;
export const FooterAddress = styled.p``;
export const FooterContactWrap = styled.div``;
export const FooterContactTitle = styled.p``;

export const FooterContact = styled.a`
  font-weight: var(--font-weight-200);
  color: hsl(0, 0%, 59%) !important;

  &:hover {
    border: none;
    transition: var(--transition);
    color: var(--color-pry-100) !important;
  }
`;

export const FooterSocialWrap = styled.div`
  flex-direction: row;
  width: 100%;

  @media ${QUERIES.tabletMini} {
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 2rem;
  }

  @media ${QUERIES.tablet} {
    flex: 2;
  }
`;

export const FooterSocial = styled.a`
  margin: 0rem 0.5rem;
  &:hover {
    border: none;
  }
`;

export const Social = styled.img``;