import styled from "styled-components";

export const Section = styled.section`
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  display: ${({ flex }) => (flex ? "flex" : "block")};
  align-items: ${({ centered }) => (centered ? "center" : "stretch")};
  justify-content: ${({ centered }) => (centered ? "center" : "flex-start")};
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
  
  &::before {
    content: attr(data-section);
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 6rem;
    opacity: 0.1;
    text-transform: uppercase;
  }

  &::after {
    content: "";
    position: absolute;
    top: -0.2rem;
    width: 20%;
    height: 0.4rem;
    background: ${({ theme }) => theme.special};
  }

  &:nth-of-type(odd) {
    background: ${({ theme }) => theme.mainDark};
    &::after {
      right: 0;
    }
  }
  &:nth-of-type(even) {
    background: ${({ theme }) => theme.secondaryDark};
    &::after {
      left: 0;
    }
  }

  &:first-of-type {
    &::after {
      display: none;
    }
  }

  @media only screen and (max-width: 992px) {
    &::before {
      font-size: 3rem;
      top: 1rem;
      right: 1rem;
    }
  }

  @media only screen and (max-width: 576px) {
    &::before {
      font-size: 2rem;
    }
  }
`;

export const Button = styled.button`
  border: none;
  outline: 0;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  background: ${({ theme }) => theme.special};
  position: relative;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.mainDark};
  transition: 800ms all;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.light};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 0.1rem;
    width: 0;
    background: ${({ theme }) => theme.light};
    transition: 400ms ease all;
  }

  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  z-index: 2;
`;
