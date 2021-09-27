import styled from "styled-components";
import { QUERIES } from "../../../../helpers/MediaQueries";

export const Form = styled.form`
  /* background-color: yellow; */
  max-width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    min-height: 3.875rem;
    padding: 1rem;
    border: none;
    background-color: transparent;
    color: var(--color-pry-300);
    font-weight: var(--font-weight-200);
    border-bottom: 0.1rem solid var(--color-pry-300);

    &:focus {
        outline: none;
    }
  }
`;

export const FormInput = styled.div``;
export const FormMessage = styled.div`
  input {
    min-height: 7.9375rem;
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
