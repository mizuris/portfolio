import styled from "styled-components";

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

  a {
    font-size: 1rem;
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

    &:hover {
      color: ${({ theme }) => theme.special};

      &::before {
        width: 100%;
      }
    }
  }
`;
