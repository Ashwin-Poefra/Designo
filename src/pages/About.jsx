import React from "react";
import { Main } from "../global/GlobalStyles";
import ContentCard from "../components/Main/About/ContentCard/ContentCard";

const About = ({ data }) => {
  return (
    <>
      <Main>
        {data && <ContentCard data={data.sectionOne} />}
        {data && <ContentCard reverse light gap data={data.sectionTwo} />}
        {data && <ContentCard light data={data.sectionThree} />}
      </Main>
    </>
  );
};

export default About;
