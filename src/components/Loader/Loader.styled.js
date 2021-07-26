import styled, { keyframes } from "styled-components";

const draw = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const collapse = keyframes`
    to {
        width: 0;
    }
`;

export const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background-color: ${({ theme }) => theme.mainDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 800ms;
  transform: ${({ loader }) =>
    loader ? "translateY(0)" : "translateY(-100%)"};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${collapse} 300ms forwards linear;
  }

  &::before {
    background-color: ${({ theme }) => theme.medium};
    animation-delay: 600ms;
  }

  &::after {
    background-color: ${({ theme }) => theme.secondaryDark};
    animation-delay: 400ms;
  }

  svg {
    stroke-dasharray: 26523;
    stroke-dashoffset: 26523;
    fill: none;
    stroke: ${({ theme }) => theme.light};
    animation: ${draw} 1500ms linear forwards;
    animation-delay: 800ms;
    stroke-width: 3rem;
  }
`;
