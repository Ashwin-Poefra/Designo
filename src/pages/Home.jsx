import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import HeroSection from "../components/Main/Home/Hero/HeroSection";
import QualitySection from "../components/Main/Home/Qualities/QualitySection";
import PortfolioCard from "../components/Main/Portfolio/PortfolioCard/PortfolioCard";
import { homeData } from "../data/pages/Home/HomeData";
import { portfolioData } from "../data/pages/Portfolio/portfolioData";
import CtaSection from "../components/global/Cta/CtaSection";
import { ctaData } from "../data/global/CtaData";
import { Main } from "../global/GlobalStyles";
import bgImage from "./../assets/images/shared/desktop/bg-pattern-leaf.svg";
import {QUERIES} from "../helpers/MediaQueries"

const Wrap = styled.section`
  @media ${QUERIES.tablet} {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: 40rem 20rem;
  }
  @media ${QUERIES.megaDesktop} {
    background-image: none;
  }
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Designo - Software Development Agency</title>
        <meta
          name="description"
          content="Designo is a world-class software development agency that focuses on building innovative tch solutions like web apps, mobile apps and graphics design."
        />
      </Helmet>
      <Main>
        <HeroSection data={homeData} />
        <PortfolioCard data={portfolioData} />
        <Wrap>
          <QualitySection data={homeData} />
          <CtaSection data={ctaData} />
        </Wrap>
      </Main>
    </>
  );
};

export default Home;