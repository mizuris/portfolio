import styled from "styled-components";
import { Button } from "../Styled/styled";

export const StyledAboutMe = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 576px) {
    padding: 4rem 0;
  }
`;

export const Text = styled.article`
  width: 60%;
  margin: 2rem auto;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.special};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 2rem;

    i {
      color: ${({ theme }) => theme.special};
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const Buttons = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  ${Button} {
    &:first-of-type {
      margin-right: 1rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.medium};
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 576px) {
    width: 80%;
  }
`;
