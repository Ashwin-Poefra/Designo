import React from "react";
import { Main } from "../global/GlobalStyles";
import ContentCard from "../components/Main/About/ContentCard/ContentCard";
import LocationList from "../components/Main/Location/LocationList/LocationList";
import { locationListData } from "../data/pages/Location/LocationData";

const About = ({ data }) => {
  return (
    <>
      <Main>
        {data && <ContentCard data={data.sectionOne} />}
        {data && <ContentCard reverse light gap data={data.sectionTwo} />}
        <LocationList data={locationListData} />
        {data && <ContentCard light data={data.sectionThree} />}
      </Main>
    </>
  );
};

export default About;
