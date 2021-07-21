import styled from "styled-components";

export const StyledProjects = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

export const ProjectsList = styled.ul`
  list-style: none;
`;

export const StyledProject = styled.li`
  text-decoration: none;
  margin: 8rem 0;
`;

export const ProjectContent = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const ProjectDescription = styled.div``;

export const ProjectImage = styled.div`
  width: 100%;
`;

// export const ProjectAnchor = styled.a`
//   cursor: pointer;
//   display: block;
//   width: 100%;
//   height: 350px;
//   position: relative;
//   margin: 0 auto;
//   background-image: ${({ image }) => `url(${image})`};
//   opacity: 1;
//   z-index: 1;
//   overflow: hidden;

//   &::before,
//   &::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     top: 0;
//     display: block;
//   }

//   &::before {
//     height: 100%;
//     width: 100%;
//     z-index: 2;
//     background: ${({ theme }) => theme.mainDark};
//     opacity: 0.6;
//     transition: opacity 300ms ease;
//   }

//   &::after {
//     z-index: 3;
//     width: 100%;
//     height: 0;
//     background: ${({ theme }) => theme.medium};
//     opacity: 0.6;
//     transition: 300ms ease-out height;
//   }

//   &:hover::after {
//     height: 100%;
//   }
// `;

// export const ProjectContent = styled.div`
//   position: absolute;
//   bottom: 1.2rem;
//   left: 1.2rem;
//   z-index: 5;
// `;

// export const Name = styled.h2`
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.special};
// `;

// export const Description = styled.h4`
//   font-weight: 400;
//   font-size: 0.9rem;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => theme.light};
// `;
