import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: ${({ flex }) => (flex ? "flex" : "block")};
  align-items: ${({ centered }) => (centered ? "center" : "stretch")};
  ${({ evenly }) => {
    if (evenly) {
      return {
        justifyContent: "space-evenly",
      };
    }
  }}
  ${({ between }) => {
    if (between) {
      return {
        justifyContent: "space-between",
      };
    }
  }}

  &:nth-of-type(odd) {
    background: ${({ theme }) => theme.mainDark};
  }
  &:nth-of-type(even) {
    background: ${({ theme }) => theme.secondaryDark};
  }
`;
