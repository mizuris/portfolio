import styled from "styled-components";
import { Wrapper } from "../Styled/styled";

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
  font-size: 1.3rem;
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

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5rem;
    text-align: justify;
    text-justify: inter-word;

    em {
      color: ${({ theme }) => theme.special};
      position: relative;
      font-weight: 500;
      cursor: pointer;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0.05rem;
        background: ${({ theme }) => theme.special};
        transition: 200ms ease width;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
`;

export const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Photo = styled.div`
  width: 90%;
  position: relative;
  z-index: 3;

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

  img {
    filter: grayscale(100%);
    max-width: 100%;
    max-height: 100%;
    transition: 600ms ease-out all;
  }

  &:hover img {
    filter: grayscale(0);
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
  margin: 2rem 0 4rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, minmax(8rem, 12rem));

  li {
    position: relative;
    font-size: 0.8rem;
    line-height: 1rem;
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
