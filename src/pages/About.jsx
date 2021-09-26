import React from "react";
import { Helmet } from "react-helmet";
import { Main, HiddenHeader } from "../global/GlobalStyles";
import ContentCard from "../components/Main/About/ContentCard/ContentCard";
import LocationList from "../components/Main/Location/LocationList/LocationList";
import { locationListData } from "../data/pages/Location/LocationData";

const About = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>About - We Are More Than a Brand</title>
        <meta
          name="description"
          content="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact."
        />
      </Helmet>
      <Main>
        <HiddenHeader>About Us</HiddenHeader>
        {data && <ContentCard data={data.sectionOne} />}
        {data && <ContentCard reverse light gap data={data.sectionTwo} />}
        <LocationList data={locationListData} />
        {data && <ContentCard light data={data.sectionThree} />}
      </Main>
    </>
  );
};

export default About;
