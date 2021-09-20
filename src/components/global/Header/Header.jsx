import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLogoWrap,
  HeaderLogoLink,
  HeaderLogo,
  HeaderMenu,
  HeaderMobileNav,
  MobileNav,
  HeaderMenuItems,
  HeaderMenuItem,
} from "./HeaderStyles";

const Header = ({ menuData }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogoWrap>
            <HeaderLogoLink to={menuData.homeLink}>
              <HeaderLogo
                src={menuData.header.headerLogo}
                alt={menuData.header.headLogoAlt}
              ></HeaderLogo>
            </HeaderLogoLink>
          </HeaderLogoWrap>
          <HeaderMenu>
            <HeaderMobileNav>
              <MobileNav onClick={handleNavOpen}>
                {navOpen ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </MobileNav>
            </HeaderMobileNav>
            <HeaderMenuItems navOpen={navOpen}>
              {menuData.menu.map((menu, index) => {
                return (
                  <HeaderMenuItem key={index} to={menu.link}>
                    {menu.title}
                  </HeaderMenuItem>
                );
              })}
            </HeaderMenuItems>
          </HeaderMenu>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
};

export default Header;
