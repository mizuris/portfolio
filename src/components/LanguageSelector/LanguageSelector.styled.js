import styled from "styled-components";

export const StyledLanguageSelector = styled.div`
  margin-left: auto;
  margin-right: 1.5em;
  display: flex;
`;

export const StyledLanguageElement = styled.p`
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.special : theme.light};
  transition: 500ms all;
`;
