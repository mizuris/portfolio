import styled from "styled-components";

export const LinksList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  z-index: 8;
  flex-direction: row;
  transform: translateX(-50%);

  li {
    padding: 1rem;

    a {
      display: inline-flex;
      align-items: center;
      font-size: 2rem;
      width: 4rem;
      height: 4rem;
      text-decoration: none;
      transition: 500ms linear;
      position: relative;
      z-index: 2;
      margin: auto;
      padding: 0;

      svg {
        fill: ${({ theme }) => theme.special};
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
        width: 4rem;
        height: 4rem;
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
