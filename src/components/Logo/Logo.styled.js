import styled from "styled-components";

export const StyledLogo = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  svg {
    max-width: 3rem;
    margin-right: 0.5rem;
    path {
      fill: ${({ dark, theme }) => (dark ? theme.mainDark : theme.light)};
    }
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