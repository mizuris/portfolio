import styled from "styled-components";
import { LinksList } from "../SocialMediaLinks/SocialMediaLinks.styled";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.overlay};
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(100%);
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  background-attachment: fixed;

  ${LinksList} {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    font-size: 3rem;
    text-transform: uppercase;
    position: relative;
    padding: 1.2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.light};
    text-decoration: none;
    transition: color 0.3s linear;

    &::before {
      content: "";
      position: absolute;
      bottom: 1rem;
      left: 0;
      height: 0.2rem;
      width: 0;
      background-color: ${({ theme }) => theme.medium};
      transition: 300ms ease width;
    }

    &::after {
      content: attr(data-link);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      font-size: 6rem;
      color: ${({ theme }) => theme.secondaryDark};
      z-index: -1;
      opacity: 0;
      transition: 500ms ease-out opacity;
    }

    &:hover {
      color: ${({ theme }) => theme.special};

      &::before {
        width: 100%;
      }

      &::after {
        opacity: 0.5;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    a {
      font-size: 2rem;

      &::after {
        font-size: 4rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 1rem;

      &::after {
        font-size: 2rem;
      }
    }
  }
`;
