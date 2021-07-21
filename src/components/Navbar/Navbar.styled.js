import styled from "styled-components";

export const StyledNav = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: ${({ isTransparent }) => (isTransparent ? "2rem" : "0.5rem 2rem")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ isTransparent, theme }) =>
    isTransparent ? "transparent" : theme.mainDark};
  transition: 500ms ease-out all;
  box-shadow: ${({ isTransparent }) =>
    !isTransparent && "0px 5px 10px 0px rgba(0, 0, 0, 0.3)"};
`;
