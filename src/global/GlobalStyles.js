import styled, { createGlobalStyle } from "styled-components";
import { QUERIES } from "../helpers/MediaQueries";

export const GlobalStyles = createGlobalStyle`
    ///////////////////////////////////////////////////////
    // TODO: ROOT VALUES
    :root {
        // COLORS
        --color-pry-100: hsl(11, 73%, 66%);
        --color-pry-200: hsl(270, 3%, 11%);
        --color-pry-300: hsl(0, 0%, 100%);
        --color-sec-100: hsl(11, 100%, 80%);
        --color-sec-200: hsl(264, 5%, 20%);
        --color-sec-300: hsl(210, 17%, 95%);

        // FONTS
        --font-pry-100: 'Jost', sans-serif;
        --font-weight-100: 400;
        --font-weight-200: 500; 
        // WIDTH
        --max-container: 69.4375rem;
        --center-container: 0 auto;
        //BORDER
        --border-radius: 0.5rem;
        //ANIMATION 
        --transition: 0.25s ease-in-out;
    }
    ///////////////////////////////////////////////////////
    //TODO: DEFAULT STYLE RESETS
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    ///////////////////////////////////////////////////////
    //TODO: BASE STYLES
    body {
        max-width: 100%;
        min-height: 100vh;
        font-family: var(--font-pry-100);
        font-weight: var(--font-weight-100);
        background-color: var(--color-pry-300);
        color: var(--color-pry-200);
        letter-spacing: 0.1rem;
    }
    ///////////////////////////////////////////////////////
    //TODO: TYPOGRAPHY
    a {
        color: var(--color-pry-200);
        font-weight: var(--font-weight-100);
        font-size: 0.9rem;
        line-height: 1.625rem;
        &:hover {
            transition: var(--transition);
            color: var(--color-sec-200);
            border-bottom: 0.1rem solid var(--color-sec-200);
        }
    }
    
    p {
        font-size: 0.9rem;
        line-height: 1.625rem;
        color: var(--color-pry-200);
        font-weight: var(--font-weight-100);
    }

    h2 {
        font-size: 2rem;
        line-height: 2.25rem;
        @media ${QUERIES.tabletMini} {
            font-size: 2.5rem;
            line-height: 2.5rem;
        }
    }
`;

export const Main = styled.main`
  max-width: var(--max-container);
  margin: var(--center-container);
  min-height: 30rem;
  background-color: var(--color-pry-100);
  color: white;
  text-align: center;
`;
