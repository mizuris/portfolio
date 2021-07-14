import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: 0;
  cursor: pointer;
  background: ${({ theme }) => theme.special};
  position: relative;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.mainDark};
  transition: 800ms all;
  font-weight: ${({ bold }) => (bold ? "bold" : "regular")};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.light};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 0.1rem;
    width: 0;
    background: ${({ theme }) => theme.light};
    transition: 400ms ease all;
  }

  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    transition: 800ms ease all;
  }
`;
