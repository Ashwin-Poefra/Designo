import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/Main/Home/Hero/HeroSection";
import { Main } from "../global/GlobalStyles";
import QualitySection from "../components/Main/Home/Qualities/QualitySection";
import PortfolioCard from "../components/Main/Portfolio/PortfolioCard/PortfolioCard";
import { homeData } from "../data/pages/Home/HomeData";
import { portfolioData } from "../data/pages/Portfolio/portfolioData";

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
        <QualitySection data={homeData} />
      </Main>
    </>
  );
};

export default Home;
