import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterSpace,
  FooterMenu,
  FooterLogoWrap,
  FooterLogoLink,
  FooterLogo,
  FooterNavWrap,
  FooterNav,
  FooterNavItem,
  FooterInformation,
  FooterAddressWrap,
  FooterAddress,
  FooterContactWrap,
  FooterContactTitle,
  FooterContact,
  FooterSocialWrap,
  FooterSocial,
  Social,
} from "./FooterStyles";

const Footer = ({ menuData }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterSpace />
          <FooterMenu>
            <FooterLogoWrap>
              <FooterLogoLink to={menuData.homeLink}>
                <FooterLogo
                  src={menuData.footer.footerLogo}
                  alt={menuData.footer.footerLogoAlt}
                ></FooterLogo>
              </FooterLogoLink>
            </FooterLogoWrap>
            <FooterNavWrap>
              {menuData.menu.map((menu, index) => {
                return (
                  <FooterNav key={index}>
                    <FooterNavItem to={menu.link}>{menu.title}</FooterNavItem>
                  </FooterNav>
                );
              })}
            </FooterNavWrap>
          </FooterMenu>
          <FooterInformation>
            <FooterAddressWrap>
              <FooterAddress>{menuData.address.office}</FooterAddress>
              <FooterAddress>{menuData.address.street}</FooterAddress>
              <FooterAddress>{menuData.address.city}</FooterAddress>
            </FooterAddressWrap>
            <FooterContactWrap>
              <FooterContactTitle>{menuData.contact.title}</FooterContactTitle>
              <FooterContact to={menuData.contact.phoneLink}>
                P: {menuData.contact.phone}
              </FooterContact>
              <FooterContact to={menuData.contact.emailLink}>
                M: {menuData.contact.email}
              </FooterContact>
            </FooterContactWrap>
            <FooterSocialWrap>
              {menuData.social.map((social, index) => {
                return (
                  <FooterSocial
                    key={index}
                    to={social.link}
                    aria-label={social.label}
                  >
                    <Social src={social.icon} alt={social.label}></Social>
                  </FooterSocial>
                );
              })}
            </FooterSocialWrap>
          </FooterInformation>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
