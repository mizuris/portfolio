import styled from "styled-components";
import { Button } from "../Styled/styled";
import { LinksList } from "../SocialMediaLinks/SocialMediaLinks.styled";
import { Section } from "../Styled/styled";

export const StyledHeader = styled(Section)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 769px) {
    ${LinksList} {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      flex-direction: column;

      &::after {
        content: "";
        position: absolute;
        bottom: -500%;
        left: 50%;
        transform: translateX(-50%);
        width: 0.1rem;
        height: 500%;
        background: ${({ theme }) => theme.special};
      }
    }
  }

  @media screen and (max-width: 768px) {
    ${LinksList} {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: row;

      li {
        padding: 0.6rem;
      }

      a {
        font-size: 1.3rem;
      }

      &::after {
        display: none;
      }
    }
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 70%;
  z-index: 2;
  padding: 4rem 0;  

  ${Button} {
    padding: 1rem 2rem;
    margin: 1rem 0;

    &:hover svg {
      transform: rotate(90deg);
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    ${Button} {
      width: 100%;
    }
  }
`;

export const Welcome = styled.p`
  color: ${({ theme }) => theme.light};
  font-weight: 500;
  margin: 0 0 0.3rem;
`;

export const Introduction = styled.div`
  /* margin-bottom: 1rem; */

  h1 {
    font-size: 6rem;
    color: ${({ theme }) => theme.special};
    font-weight: 800;
    margin-bottom: 0.5rem;
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
