import styled, { css } from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";

export const Form = styled.form`
  /* background-color: yellow; */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;

  input {
    width: 100%;
    min-height: 3.875rem;
    padding: 1rem;
    border: none;
    background-color: transparent;
    color: var(--color-pry-300);
    font-weight: var(--font-weight-200);
    font-family: var(--font-pry-100);

    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
    }

    &::placeholder {
      color: var(--color-sec-300);
      letter-spacing: 0.1rem;
    }

    ${({ error }) =>
      error &&
      css`
        width: 40%;
      `}
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.1rem solid var(--color-pry-300);
`;

export const Error = styled.p`
  width: 60%;
  display: flex;
  align-items: center;
  color: var(--color-pry-300);
  font-weight: var(--font-weight-200);
  font-size: 0.8rem;

  span {
    margin-left: 0.5rem;
  }
`;

export const FormMessage = styled.div`
  border-bottom: 0.1rem solid var(--color-pry-300);
  textarea {
    min-height: 7.9375rem;
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    border: none;
    color: var(--color-pry-300);
    letter-spacing: 0.1rem;
    font-family: var(--font-pry-100);

    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
    }
  }
`;

export const FormButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  @media ${QUERIES.tabletMini} {
    justify-content: flex-end;
  }
`;

export const FormButton = styled.button`
  text-transform: uppercase;
  border: none;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: var(--font-weight-200);
  letter-spacing: 0.1rem;
  cursor: pointer;
  width: 9.5rem;
  height: 3rem;
  display: grid;
  place-items: center;
  background-color: var(--color-pry-300);
  color: var(--color-pry-200);
  font-family: var(--font-pry-100);

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-100);
    color: var(--color-pry-300);
    border: none;
  }

  @media ${QUERIES.tablet} {
    width: 9.5rem;
    height: 3.5rem;
  }
`;

export const HiddenLabel = styled.label`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;
