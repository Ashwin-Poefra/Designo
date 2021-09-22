import React from 'react'
import HeroSection from '../components/Main/Home/HeroSection';
import { Main } from "../global/GlobalStyles";
import { homeData } from '../data/pages/Home/HomeData';

const Home = () => {
    return (
        <>
        <Main>
            <HeroSection data={homeData}/>
        </Main>
        </>
    )
}

export default Home
