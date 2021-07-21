import styled from "styled-components";
import { Button } from "../Styled/styled";

export const ButtonBase = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.1rem solid ${({ theme }) => theme.special};
  background: transparent;
  transition: 400ms ease-out all;

  &::before,
  &::after {
    display: none;
  }

  &:hover {
    background: ${({ theme }) => theme.special};
  }

  &:hover span {
    color: ${({ theme }) => theme.mainDark};
  }

  &:hover svg {
    stroke: ${({ theme }) => theme.mainDark};
    fill: ${({ theme }) => theme.mainDark};
  }

  span {
    color: ${({ theme }) => theme.special};
    margin-right: 1rem;
    transition: 400ms ease-out all;
  }

  svg {
    transition: 400ms ease-out all;
    stroke: ${({ theme }) => theme.special};
    fill: ${({ theme }) => theme.special};
  }
`;
