import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CtaSection from "../components/global/Cta/CtaSection";
import { ctaData } from "../data/global/CtaData";
import { Main } from "../global/GlobalStyles";
import { QUERIES } from "../helpers/MediaQueries";

const Container = styled.section`
  max-width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.h1`
  color: var(--color-pry-100);
  font-size: 9rem;
  line-height: 9rem;
  margin-top: 5rem;

  @media ${QUERIES.tablet} {
    font-size: 15rem;
    line-height: 15rem;
  }
`;
const SubHeader = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 4rem;
`;

const Text = styled.p``;
const RedirectLink = styled(Link)`
  transition: var(--transition);
  color: var(--color-pry-100);
  font-weight: var(--font-weight-200);
`;

const Error = () => {
  return (
    <Main adjustBg>
      <Container>
        <Header>404</Header>
        <SubHeader>page not found!</SubHeader>
        <Text>
          Go back to the <RedirectLink to="/" aria-label="link to homepage">Homepage</RedirectLink>
        </Text>
      </Container>
      <CtaSection data={ctaData} />
    </Main>
  );
};

export default Error;