import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  ${({ centered }) => {
    if (centered) {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    }
  }}

  p {
    font-size: 0.9rem;
  }

  &:nth-of-type(odd) {
    background: ${({ theme }) => theme.mainDark};
  }
  &:nth-of-type(even) {
    background: ${({ theme }) => theme.secondaryDark};
  }
`;
