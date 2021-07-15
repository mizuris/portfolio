import styled, { keyframes } from "styled-components";
import { Button } from "../Styled/styled";
import { LinksList } from "../SocialMediaLinks/SocialMediaLinks.styled";
import { Section } from "../Styled/styled";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-40%);
  }
  30%, 100% {
    transform: translateY(0);
  }
`;

export const StyledHeader = styled(Section)`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &::before {
    display: none;
  }

  ${LinksList} {
    right: "1rem";
    top: "50%";
    flex-direction: "column";
    transform: "translateY(-50%)";

    &::after {
      content: "";
      position: absolute;
      bottom: -500%;
      right: 50%;
      transform: translateX(-50%);
      width: 0.1rem;
      height: 500%;
      background: ${({ theme }) => theme.medium};
    }
  }

  @media only screen and (max-width: 576px) {
    justify-content: space-between;

    ${LinksList} {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  margin-left: 6rem;

  ${Button} {
    padding: 1rem 2rem;

    &:nth-of-type(even) {
      margin-left: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    ${Button} {
      &:nth-of-type(even) {
        margin: 1rem 0 0;
      }
    }
  }
`;

export const Welcome = styled.p`
  color: ${({ theme }) => theme.medium};
  font-weight: 600;
  margin: 0 0 0.3rem;

  span {
    color: ${({ theme }) => theme.light};
  }

  @media only screen and (max-width: 786px) {
    font-size: 0.8rem;
  }
`;

export const Introduction = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: 6rem;
    color: ${({ theme }) => theme.special};
    font-weight: 800;
  }

  h2 {
    font-style: italic;
    font-weight: 300;
    font-size: 2rem;
  }

  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const Portrait = styled.div`
  width: 60%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(100%);
    z-index: 3;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.special};
    width: 100%;
    height: 100%;
    clip-path: polygon(100% 8%, 100% 0, 100% 100%, 0% 100%);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ScrollDown = styled.div`
  display: none;
  height: 1.5rem;
  width: 0.1rem;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.medium};
  animation: ${bounce} 3s linear infinite;
  transition: 300ms ease;

  &::before,
  &::after {
    transition: 300ms ease;
    content: "";
    position: absolute;
    bottom: 0;
    width: 0.5rem;
    height: 0.1rem;
    background: ${({ theme }) => theme.medium};
  }

  &::before {
    left: calc(50% - 0.25rem);
    transform: rotate(45deg) translateX(-50%);
  }

  &::after {
    right: calc(50% - 0.32rem);
    transform: rotate(135deg) translateX(-50%);
  }

  &:hover,
  &:hover::after,
  &:hover::before {
    background: ${({ theme }) => theme.light};
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
