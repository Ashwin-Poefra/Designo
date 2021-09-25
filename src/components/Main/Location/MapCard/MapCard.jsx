import React from "react";
import {
  MapCardContainer,
  MapCardWrap,
  MapContent,
  MapContentHeader,
  MapContentWrap,
  MapContentContainer,
  AddressHeader,
  Address,
  ContactHeader,
  Contact,
  Map,
  MapFrame,
  Wrap
} from "./MapCardStyles";

const MapCard = ({data, reverse}) => {
  return (
    <>
      <MapCardContainer>
        <MapCardWrap reverse={reverse}>
          <MapContent>
            <Wrap>
              <MapContentHeader>{data.country}</MapContentHeader>
              <MapContentWrap>
                <MapContentContainer>
                  <AddressHeader>{data.address.office}</AddressHeader>
                  <Address>{data.address.street}</Address>
                  <Address>{data.address.state}</Address>
                </MapContentContainer>
                <MapContentContainer>
                  <ContactHeader>{data.contact.header}</ContactHeader>
                  <Contact href={`tel:${data.contact.phone}`}>
                    P: {data.contact.phone}
                  </Contact>
                  <Contact href={`mailto:${data.contact.mail}`}>M: {data.contact.mail}</Contact>
                </MapContentContainer>
              </MapContentWrap>
            </Wrap>
          </MapContent>
          <Map>
            <MapFrame
              src={data.map.src}
              allowfullscreen=""
              loading="lazy"
            ></MapFrame>
          </Map>
        </MapCardWrap>
      </MapCardContainer>
    </>
  );
};

export default MapCard;
