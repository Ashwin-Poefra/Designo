import React from "react";
import HeroSection from "../components/Main/Home/Hero/HeroSection";
import { Main } from "../global/GlobalStyles";
import QualitySection from "../components/Main/Home/Qualities/QualitySection";
import PortfolioCard from "../components/Main/Portfolio/PortfolioCard/PortfolioCard";
import { homeData } from "../data/pages/Home/HomeData";
import { portfolioData } from "../data/pages/Portfolio/portfolioData";

const Home = () => {
  return (
    <>
      <Main>
        <HeroSection data={homeData} />
        <PortfolioCard data={portfolioData} />
        <QualitySection data={homeData} />
      </Main>
    </>
  );
};

export default Home;
