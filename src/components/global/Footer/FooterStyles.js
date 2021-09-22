import styled from "styled-components";
import { Link } from "react-router-dom";

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
    color: var(--color-pry-300);
  }
`;

export const FooterWrap = styled.div`
  /* background-color: blue; */
  max-width: var(--max-container);
  min-height: 10rem;
  margin: var(--center-container);
  padding: 0rem 1rem;
`;

export const FooterSpace = styled.div`
  /* background-color: black; */
  min-height: 6.25rem;
  max-width: 100%;
`;
export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* background-color: red; */
  padding-bottom: 2rem;
`;
export const FooterLogoWrap = styled.div`
  min-height: 6.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.05rem solid hsl(0, 0%, 19%);
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
`;
export const FooterNav = styled.div`
  margin-top: 2rem;
`;
export const FooterNavItem = styled(Link)`
  text-transform: uppercase;
`;

export const FooterInformation = styled.div`
  /* background-color: green; */
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
`;
export const FooterAddressWrap = styled.div`
  /* background-color: yellow; */
`;
export const FooterAddress = styled.p``;
export const FooterContactWrap = styled.div``;
export const FooterContactTitle = styled.p``;
export const FooterContact = styled.a`
  &:hover {
    border: none;
    transition: var(--transition);
    color: var(--color-pry-100) !important;
  }
`;

export const FooterSocialWrap = styled.div`
  flex-direction: row;
  width: 100%;
`;
export const FooterSocial = styled.a`
  margin: 0rem 0.5rem;
  &:hover {
    border: none;
  }
`;
export const Social = styled.img``;
