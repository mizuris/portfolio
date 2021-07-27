import styled from "styled-components";
import { Wrapper, Button } from "../Styled/styled";

export const StyledAboutMe = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 4rem 0;

  ${Wrapper} {
    margin: 0 auto;

    a {
      text-decoration: none;

      ${Button} {
        display: flex;
        align-items: center;

        &:hover svg {
          fill: ${({ theme }) => theme.light};
        }

        svg {
          fill: ${({ theme }) => theme.mainDark};
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    ${Wrapper} {
      width: 100%;
      padding: 0 4rem;
    }
  }
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  width: fit-content;
  color: ${({ theme }) => theme.special};
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40%;
    height: 0.05rem;
    background: ${({ theme }) => theme.medium};
  }
`;

export const Text = styled.div`
  width: 100%;
  line-height: 1.5rem;

  p {
    margin-bottom: 1rem;
    text-align: justify;
    text-justify: inter-word;

    em {
      color: ${({ theme }) => theme.special};
      position: relative;
      font-weight: 500;
    }
  }
`;

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Photo = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 4rem;

  img {
    filter: grayscale(100%);
    max-width: 100%;
    max-height: 100%;
    transition: 600ms ease-out all;
  }

  span {
    position: absolute;
    font-size: 0.8rem;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
    transition: 400ms ease-in all;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 0.3rem solid ${({ theme }) => theme.special};
    width: 10rem;
    height: 10rem;
    z-index: -1;
    transition: 500ms ease-out all;
  }

  &::before {
    top: -1rem;
    left: -1rem;
  }

  &::after {
    bottom: -1rem;
    right: -1rem;
  }

  &:hover img {
    filter: grayscale(0);
  }

  &:hover span {
    opacity: 1;
  }

  &:hover::before {
    transform: translate(0.5rem, 0.5rem);
    background: ${({ theme }) => theme.special};
  }

  &:hover::after {
    transform: translate(-0.5rem, -0.7rem);
    background: ${({ theme }) => theme.special};
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  margin: 2rem 0 1rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, minmax(8rem, 12rem));

  li {
    position: relative;
    margin-bottom: 1rem;
    padding-left: 1.5rem;

    &::before {
      content: "⊳";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.special};
    }
  }
`;

export const Note = styled.p`
  font-size: 0.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.medium};
`;
