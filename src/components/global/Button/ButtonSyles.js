import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../../helpers/MediaQueries";

export const ButtonContainer = styled(Link)`
  padding: 0.9rem 1rem;
  text-transform: uppercase;
  background-color: var(--color-pry-100);
  color: var(--color-pry-300);
  border: none;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: var(--font-weight-200);
  letter-spacing: 0.1rem;
  cursor: pointer;

  @media ${QUERIES.tabletMini} {
    padding: 1.125rem 1.5rem;
  }

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-100);
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--color-pry-300);
      color: var(--color-pry-200);

      &:hover {
        color: var(--color-pry-300);
        border: none;
      }
    `}
`;
