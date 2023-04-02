import styled from "styled-components";

export const StyledLogo = styled.a`
  z-index: 10;
  /* width: 100%; */
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  svg {
    margin-right: 0.8rem;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  h6 {
    font-weight: 300;
  }

  @media only screen and (max-width: 351px) {
    div {
      display: none;
    }
  }
`;
