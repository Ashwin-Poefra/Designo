import React from "react";
import { Main } from "../global/GlobalStyles";
import MapCard from "../components/Main/Location/MapCard/MapCard";

const Locations = ({ data }) => {
  return (
    <>
      <Main>
        <MapCard data={data.canada} />
        <MapCard data={data.australia} reverse/>
        <MapCard data={data.uk} />
      </Main>
    </>
  );
};

export default Locations;
