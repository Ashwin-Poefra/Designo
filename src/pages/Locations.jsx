import React from "react";
import { Helmet } from "react-helmet";
import { Main } from "../global/GlobalStyles";
import MapCard from "../components/Main/Location/MapCard/MapCard";

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
      <Main>
        <MapCard data={data.canada} />
        <MapCard data={data.australia} reverse />
        <MapCard data={data.uk} />
      </Main>
    </>
  );
};

export default Locations;
