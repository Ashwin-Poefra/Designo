import React from 'react'
import HeroSection from '../components/Main/Home/Hero/HeroSection';
import { Main } from "../global/GlobalStyles";
import QualitySection from '../components/Main/Home/Qualities/QualitySection';
import { homeData } from '../data/pages/Home/HomeData';

const Home = () => {
    return (
        <>
        <Main>
            <HeroSection data={homeData}/>
            <QualitySection data={homeData}/>
        </Main>
        </>
    )
}

export default Home
