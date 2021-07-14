import styled from "styled-components";

export const LinksList = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;
  z-index: 8;
  ${({ aside }) => {
    if (aside) {
      return {
        right: "1rem",
        top: "50%",
        flexDirection: "column",
        transform: "translateY(-50%)",
      };
    }
    return {
      left: "50%",
      bottom: "1rem",
      flexDirection: "row",
      transform: "translateX(-50%)",
    };
  }}

  li {
    padding: 1rem;

    a {
      display: inline-flex;
      font-size: 1.5rem;
      width: 3rem;
      height: 3rem;
      text-decoration: none;
      transition: 500ms linear;
      position: relative;
      z-index: 1;
      margin: auto;

      svg {
        fill: ${({ theme }) => theme.medium};
        margin: auto;
        transition: 300ms linear;
      }

      &:hover svg {
        fill: ${({ theme }) => theme.mainDark};
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 3rem;
        height: 3rem;
        background: ${({ theme }) => theme.light};
        border-radius: 50%;
        z-index: -1;
        transform: scale(0);
        transition: 0.3s cubic-bezier(0.95, 0.32, 0.37, 1.21);
      }

      &:hover::before {
        transform: scale(1);
      }
    }
  }
`;
