import styled from "styled-components";
import { Button } from "../Button/Button.styled";
import { LinksList } from "../SocialMediaLinks/SocialMediaLinks.styled";

export const StyledHero = styled.div`
  color: white;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  ${LinksList} {
    right: "1rem";
    top: "50%";
    flex-direction: "column";
    transform: "translateY(-50%)";

    &::before {
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

  @media only screen and (max-width: 768px) {
    ${LinksList} {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  margin-left: 3rem;
  ${Button} {
    &:nth-of-type(even) {
      margin-left: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Welcome = styled.h4`
  color: ${({ theme }) => theme.medium};
  font-size: 1rem;
  font-weight: 600;
`;

export const Introduction = styled.div`
  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.special};
    font-weight: 800;
  }

  h2 {
    font-style: italic;
    font-weight: 300;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 576px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const Portrait = styled.div`
  width: 60%;
  height: 100%;
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
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  }
`;
