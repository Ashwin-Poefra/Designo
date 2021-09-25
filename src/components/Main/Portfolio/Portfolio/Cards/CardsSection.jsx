import React from "react";
import {
  CardsContainer,
  CardsWrap,
  Card,
  CardImageWrap,
  CardImage,
  CardContent,
  CardName,
  CardText,
} from "./CardsSectionStyles";

const CardsSection = ({ data }) => {

  return (
    <CardsContainer>
      <CardsWrap>
        {data && data.map((project, index) => {
          return (
            <Card key={index}>
              <CardImageWrap>
                <CardImage src={project.image} alt={project.imageAlt} />
              </CardImageWrap>
              <CardContent>
                <CardName>{project.name}</CardName>
                <CardText>{project.description}</CardText>
              </CardContent>
            </Card>
          );
        })}
      </CardsWrap>
    </CardsContainer>
  );
};

export default CardsSection;
