import React from "react";
import { HeaderContainer, HeaderWrap, HeaderLogoWrap, HeaderLogo, HeaderMenu, HeaderMenuItems, HeaderMenuItem } from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogoWrap>
            <HeaderLogoLink>
              <HeaderLogo></HeaderLogo>
            </HeaderLogoLink>
          </HeaderLogoWrap>
          <HeaderMenu>
            <HeaderMenuItems>
              <HeaderMenuItem to="/">our company</HeaderMenuItem>
            </HeaderMenuItems>
          </HeaderMenu>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
};

export default Header;
