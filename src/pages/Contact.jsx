import React from "react";
import { Main } from "../global/GlobalStyles";
import LocationList from "../components/Main/Location/LocationList/LocationList";
import { locationListData } from "../data/pages/Location/LocationData";

const Contact = () => {
  return (
    <>
      <Main>
        <h1>Contact Page</h1>
        <LocationList data={locationListData} />
      </Main>
    </>
  );
};

export default Contact;
