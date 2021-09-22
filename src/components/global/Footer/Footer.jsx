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
import { handleScrollToTop } from "../../../helpers/Config";

const Footer = ({ data }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterSpace />
          <FooterMenu>
            <FooterLogoWrap>
              <FooterLogoLink
                to={data.homeLink}
                onClick={handleScrollToTop}
              >
                <FooterLogo
                  src={data.footer.footerLogo}
                  alt={data.footer.footerLogoAlt}
                ></FooterLogo>
              </FooterLogoLink>
            </FooterLogoWrap>
            <FooterNavWrap>
              {data.menu.map((menu, index) => {
                return (
                  <FooterNav key={index}>
                    <FooterNavItem to={menu.link} onClick={handleScrollToTop}>
                      {menu.title}
                    </FooterNavItem>
                  </FooterNav>
                );
              })}
            </FooterNavWrap>
          </FooterMenu>
          <FooterInformation>
            <FooterAddressWrap>
              <FooterAddress>{data.address.office}</FooterAddress>
              <FooterAddress>{data.address.street}</FooterAddress>
              <FooterAddress>{data.address.city}</FooterAddress>
            </FooterAddressWrap>
            <FooterContactWrap>
              <FooterContactTitle>{data.contact.title}</FooterContactTitle>
              <FooterContact href={data.contact.phoneLink}>
                P: {data.contact.phone}
              </FooterContact>
              <FooterContact href={data.contact.emailLink}>
                M: {data.contact.email}
              </FooterContact>
            </FooterContactWrap>
            <FooterSocialWrap>
              {data.social.map((social, index) => {
                return (
                  <FooterSocial
                    key={index}
                    href={social.link}
                    target="_blank"
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
