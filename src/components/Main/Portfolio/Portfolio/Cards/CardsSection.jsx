import React from "react";
import image from "../../../../../assets/images/app-design/desktop/image-todo.jpg";
import temp from "../../../../../assets/images/app-design/desktop/image-eyecam.jpg";
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

const CardsSection = () => {
  return (
    <CardsContainer>
      <CardsWrap>
        <Card>
          <CardImageWrap>
            <CardImage src={image} alt="sample image" />
          </CardImageWrap>
          <CardContent>
            <CardName>Express</CardName>
            <CardText>
              A multi-carrier shipping website for ecommerce businesses
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardImageWrap>
            <CardImage src={image} alt="sample image" />
          </CardImageWrap>
          <CardContent>
            <CardName>Express</CardName>
            <CardText>
              A multi-carrier shipping website for ecommerce businesses
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardImageWrap>
            <CardImage src={image} alt="sample image" />
          </CardImageWrap>
          <CardContent>
            <CardName>Express</CardName>
            <CardText>
              A multi-carrier shipping website for ecommerce businesses
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardImageWrap>
            <CardImage src={temp} alt="sample image" />
          </CardImageWrap>
          <CardContent>
            <CardName>Express</CardName>
            <CardText>
              A multi-carrier shipping website for ecommerce businesses
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardImageWrap>
            <CardImage src={image} alt="sample image" />
          </CardImageWrap>
          <CardContent>
            <CardName>Express</CardName>
            <CardText>
              A multi-carrier shipping website for ecommerce businesses
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardImageWrap>
            <CardImage src={image} alt="sample image" />
          </CardImageWrap>
          <CardContent>
            <CardName>Express</CardName>
            <CardText>
              A multi-carrier shipping website for ecommerce businesses
            </CardText>
          </CardContent>
        </Card>
      </CardsWrap>
    </CardsContainer>
  );
};

export default CardsSection;
