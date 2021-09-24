import React from "react";
import { Main } from "../global/GlobalStyles";
import HeroSection from "../components/Main/Portfolio/Portfolio/Hero/HeroSection";
import CardsSection from "../components/Main/Portfolio/Portfolio/Cards/CardsSection";

const Portfolio = () => {
  return (
    <>
      <Main>
        <HeroSection />
        <CardsSection />
      </Main>
    </>
  );
};

export default Portfolio;
