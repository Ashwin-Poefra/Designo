import React from "react";
import { Helmet } from "react-helmet";
import { Main, HiddenHeader } from "../global/GlobalStyles";
import LocationList from "../components/Main/Location/LocationList/LocationList";
import { locationListData } from "../data/pages/Location/LocationData";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - We Want to Hear From You</title>
        <meta
          name="description"
          content="We are always excited to hear from our esteemed customers. Contact us to kick-start your new project."
        />
      </Helmet>
      <Main>
        <HiddenHeader>Contact Us</HiddenHeader>
        <LocationList data={locationListData} />
      </Main>
    </>
  );
};

export default Contact;
