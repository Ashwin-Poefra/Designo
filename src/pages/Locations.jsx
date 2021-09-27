import React from "react";
import { Helmet } from "react-helmet";
import { HiddenHeader } from "../global/GlobalStyles";
import MapCard from "../components/Main/Location/MapCard/MapCard";
import CtaSection from "../components/global/Cta/CtaSection";
import { ctaData } from "../data/global/CtaData";

const Locations = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Locations - Find Our Closest Offices</title>
        <meta
          name="description"
          content="Designo has offices in major cities around the world. Feel free to contact any of our offices to start your project."
        />
      </Helmet>
      <main>
        <HiddenHeader>Locate Our Offices</HiddenHeader>
        <MapCard data={data.canada} />
        <MapCard data={data.australia} reverse />
        <MapCard data={data.uk} />
        <CtaSection data={ctaData} />
      </main>
    </>
  );
};

export default Locations;
