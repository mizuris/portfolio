import styled, { css } from "styled-components";

const sharedStyles = css`
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainDark};
  padding: 0.8rem;
  margin: 0.2rem 0 0.8rem;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.mainDark};
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.light};
  order: 1;

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const FormHeader = styled.h3`
  color: ${({ theme }) => theme.mainDark};
  font-size: 1.5rem;
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 10%;
    height: 0.2rem;
    background: ${({ theme }) => theme.medium};
  }
`;

export const FormText = styled.p`
  color: ${({ theme }) => theme.medium};
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.mainDark};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles};
`;

export const MessageTextField = styled.textarea`
  width: 100%;
  min-height: 10rem;
  resize: none;
  ${sharedStyles};
`;

export const SubmitButton = styled.input.attrs({
  type: "submit",
})`
  padding: 1rem;
  cursor: pointer;
  border: none;
  outline: 0;
  font-weight: bold;
  color: ${({ theme, success }) => (success ? theme.light : theme.mainDark)};
  background: ${({ theme, success }) =>
    success ? theme.success : theme.special};
  transition: 500ms;
  position: relative;
`;
