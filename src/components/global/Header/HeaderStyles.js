import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  max-width: 100%;
  min-height: 0rem;
  background-color: yellow;
  padding: 0rem 1rem;
  z-index: 1000;
`;
export const HeaderWrap = styled.div`
  max-width: var(--max-container);
  min-height: 4rem;
  margin: var(--center-container);
  background-color: white;
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
  }
`;
export const HeaderLogoWrap = styled.div``;
export const HeaderLogoLink = styled(Link)``;
export const HeaderLogo = styled.img`
  max-width: 12.25rem;
  height: auto;
`;
export const HeaderMenu = styled.nav`
  flex: 5;
  /* background-color: green; */
`;
export const HeaderMobileNav = styled.div`
  display: none;

  @media screen and (max-width: 686px) {
    display: flex;
    justify-content: flex-end;
  }
`;
export const MobileNav = styled.button`
  border: none;
  background-color: transparent;

  i {
    font-size: 1.25rem;
  }
  &:hover {
    background-color: transparent;
  }
`;

export const HeaderMenuItems = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 686px) {
    background-color: var(--color-pry-200);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin-top: 4rem;
    padding: 1.5rem 1rem;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    min-height: 14.6875rem;
    transition: 0.5s ease-in-out;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-1rem);

    ${({ navOpen }) =>
      navOpen &&
      css`
        pointer-events: auto;
        opacity: 1;
        transform: translateY(0rem);
      `}
  }
`;

export const HeaderMenuItem = styled(Link)`
  text-transform: uppercase;
  margin-left: 2.6875rem;

  @media screen and (max-width: 686px) {
    margin-left: 0rem;
    color: var(--color-pry-300);
    font-size: 1.5rem;

    &:hover {
      transition: var(--transition);
      color: var(--color-pry-300);
      border-color: var(--color-pry-300);
    }
  }
`;
