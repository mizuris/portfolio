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
    transform: rotate(90deg);
  }

  span {
    color: ${({ theme }) => theme.special};
    margin-right: 1rem;
  }

  svg {
    stroke: ${({ theme }) => theme.special};
    transition: 400ms ease-out all;
  }
`;
