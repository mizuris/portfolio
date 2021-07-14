import styled from "styled-components";

export const StyledNav = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 0.5rem);
  padding: 2rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
