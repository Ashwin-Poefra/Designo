import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Main } from "../global/GlobalStyles";
import { portfolioData } from "../data/pages/Portfolio/portfolioData";
import HeroSection from "../components/Main/Portfolio/Portfolio/Hero/HeroSection";
import CardsSection from "../components/Main/Portfolio/Portfolio/Cards/CardsSection";
import PortfolioCard from "../components/Main/Portfolio/PortfolioCard/PortfolioCard";

const Portfolio = () => {
  const [projectData, setProjectData] = useState(portfolioData);
  const [portfolio, setPortfolio] = useState(" ");
  const { id } = useParams();

  useEffect(() => {
    const newPortfolio = projectData.find((port) => {
      return port.id === id;
    });
    setPortfolio(newPortfolio);
  });

  return (
    <>
      <Main>
        <HeroSection data={portfolio} />
        <CardsSection data={portfolio.projects} />
        <PortfolioCard twoColumns data={portfolio.more} />
      </Main>
    </>
  );
};

export default Portfolio;
