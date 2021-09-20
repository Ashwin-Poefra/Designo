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
import Overlay from "../Overlay/Overlay";

const Header = ({ menuData }) => {
  const [navOpen, setNavOpen] = useState(false);

  //TODO: Handle => Change nav state on click (true === open || false === close)
  const handleNavOpen = () => {
    setNavOpen(!navOpen);

    if (navOpen) {
      document.body.style.overlay = "hidden";
    } else {
      document.body.style.overlay = "auto";
    }
  };

  //TODO: Handle => Close nav when menu item is clicked
  const handleMenuClick = () => {
    if (navOpen) {
      setNavOpen(!navOpen);
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogoWrap>
            <HeaderLogoLink to={menuData.homeLink}>
              <HeaderLogo
                src={menuData.header.headerLogo}
                alt={menuData.header.headLogoAlt}
                onClick={handleMenuClick}
              ></HeaderLogo>
            </HeaderLogoLink>
          </HeaderLogoWrap>
          <HeaderMenu>
            <HeaderMobileNav>
              <MobileNav onClick={handleNavOpen}>
                {navOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </MobileNav>
            </HeaderMobileNav>
            <HeaderMenuItems navOpen={navOpen}>
              {menuData.menu.map((menu, index) => {
                return (
                  <HeaderMenuItem
                    key={index}
                    to={menu.link}
                    onClick={handleMenuClick}
                  >
                    {menu.title}
                  </HeaderMenuItem>
                );
              })}
            </HeaderMenuItems>
          </HeaderMenu>
        </HeaderWrap>
      </HeaderContainer>
      <Overlay navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  );
};

export default Header;