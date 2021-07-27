import styled from "styled-components";

//PROJECTS.JS
export const StyledProjects = styled.div`
  width: 80%;
  padding: 6rem 0;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const ProjectsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

//PROJECT.JS
export const ProjectContainer = styled.li`
  position: relative;
  width: 90%;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  border-radius: 1rem;
  text-decoration: none;
  overflow: hidden;

  &::before {
    content: "0" attr(data-number);
    color: ${({ theme }) => theme.light};
    opacity: 0.3;
    position: absolute;
    top: 5%;
    right: 1rem;
    line-height: 1rem;
    font-size: 8rem;
    font-family: "Zen Tokyo Zoo", cursive;
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0.1rem;
    background: ${({ theme }) => theme.medium};
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    overflow: visible;

    &::before {
      left: 0;
    }

    &::after {
      width: 60%;
    }
  }
`;

export const ProjectContent = styled.div`
  z-index: 2;
  padding: 1rem;
  margin: auto auto auto 0;

  @media only screen and (min-width: 768px) {
    width: 100%;
    padding: 3rem 3rem 3rem 0rem;
  }
`;

export const Name = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.special};
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0.1rem;
    background: ${({ theme }) => theme.special};
    transition: 200ms ease-in width;
  }

  &:hover::before {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  margin: 0.5rem 0 2rem;
`;

export const ProjectImage = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  cursor: pointer;

  img {
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.secondaryDark};
    opacity: 0.8;
    transition: 400ms ease-out all;
  }

  @media only screen and (min-width: 768px) {
    position: relative;
    width: 100%;
    margin: auto;
    pointer-events: all;

    &:hover::before {
      opacity: 0.2;
    }
  }
`;
