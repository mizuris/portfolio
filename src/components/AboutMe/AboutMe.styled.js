import styled from "styled-components";

export const StyledAboutMe = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 576px) {
    padding: 4rem 0;
  }
`;

export const Heading = styled.h3`
  font-size: 1rem;
  width: fit-content;
  color: ${({ theme }) => theme.special};
  position: relative;

  &::after {
    content: "";
    width: 50%;
    height: 0.2rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.medium};
  }
`;

// export const Text = styled.article`
//   width: 60%;
//   margin: 2rem auto;

//   h2 {
//     font-size: 2rem;
//     color: ${({ theme }) => theme.special};
//     margin-bottom: 0.5rem;
//   }

//   p {
//     font-size: 0.9rem;
//     line-height: 2rem;

//     i {
//       color: ${({ theme }) => theme.special};
//       font-weight: 500;
//     }
//   }

//   @media only screen and (max-width: 576px) {
//     width: 80%;
//   }
// `;

// export const Buttons = styled.div`
//   position: relative;
//   width: 60%;
//   display: flex;
//   margin: 0 auto;

//   ${Button} {
//     margin-left: 1rem;

//     &:first-of-type {
//       margin: 0;
//     }

//     &:last-of-type {
//       margin: 0 0 0 auto;
//     }
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     top: -1rem;
//     left: 0;
//     width: 100%;
//     height: 0.1rem;
//     background-color: ${({ theme }) => theme.medium};
//   }

//   @media only screen and (max-width: 768px) {
//     width: 60%;
//   }

//   @media only screen and (max-width: 576px) {
//     width: 80%;
//     flex-direction: column;

//     ${Button} {
//       margin: 1rem 0;

//       &:last-of-type {
//         margin: 0;
//       }
//     }
//   }
// `;
