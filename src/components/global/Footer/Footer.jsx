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

const Footer = ({ data, trim }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterSpace trim={trim} />
          <FooterMenu>
            <FooterLogoWrap>
              <FooterLogoLink
                to={data.homeLink}
                aria-label={data.footer.label}
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
                    <FooterNavItem
                      to={menu.link}
                      aria-label={menu.label}
                    >
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
              <FooterContact
                href={data.contact.phoneLink}
                aria-label={data.contact.phoneLabel}
              >
                P: {data.contact.phone}
              </FooterContact>
              <FooterContact
                href={data.contact.emailLink}
                aria-label={data.contact.emailLabel}
              >
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
                    rel="noopener"
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
