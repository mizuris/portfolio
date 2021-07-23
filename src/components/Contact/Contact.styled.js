import styled from "styled-components";

export const StyledContact = styled.div`
  width: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.medium};
`;

export const ContactHeader = styled.div`
  h3 {
    color: ${({ theme }) => theme.special};
    font-size: 1.4rem;
  }
  p {
    font-size: 0.8rem;

    em {
      font-weight: 800;
    }
  }
`;

export const ContactForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input``;
export const MessageTextField = styled.textarea``;
