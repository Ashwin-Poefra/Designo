import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-pry-300);
  min-height: 3rem;
  display: ${({ remove }) => (remove ? "none" : "flex")};
  align-items: center;
  padding: 1rem;
`;
export const Message = styled.p`
  font-weight: var(--font-weight-200);
`;
export const Icon = styled.span`
  margin-right: 0.5rem;
  i {
    font-size: 1.2rem;
    color: green;
  }
`;
