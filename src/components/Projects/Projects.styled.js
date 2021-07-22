import styled from "styled-components";

//PROJECTS.JS
export const StyledProjects = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 6rem 0;
`;

export const ProjectsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

//PROJECT.JS
export const ProjectContainer = styled.li`
  text-decoration: none;
  min-height: 20rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  width: 80%;
  margin: 2rem auto;
  padding: 4rem 1.5rem;
`;

export const ProjectContent = styled.div`
  z-index: 2;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.special};
`;

export const Description = styled.p`
  font-size: 0.8rem;
  margin: 1rem 0;
`;

export const Technologies = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li {
    font-size: 0.6rem;
    padding: 0.3rem 1rem;
    background: ${({ theme }) => theme.special};
    border-radius: 1rem;
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.mainDark};
  }
`;

export const ProjectImage = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  a {
    cursor: pointer;

    img {
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const OpenIcon = styled.div`
  z-index: 2;
  font-size: 1.3rem;

  svg {
    fill: ${({ theme }) => theme.special};
  }
`;
