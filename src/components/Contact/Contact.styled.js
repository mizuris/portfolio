import styled from "styled-components";

export const StyledContact = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  background: ${({ theme }) => theme.light};
  flex-direction: column;
  position: relative;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
  margin-top: 2rem;

  h3 {
    color: ${({ theme }) => theme.mainDark};
    font-size: 1.4rem;
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
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const AdressGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  margin-right: 1rem;

  a {
    text-decoration: none;
  }

  svg {
    font-size: 1rem;
    margin: auto;
    fill: ${({ theme }) => theme.mainDark};
  }
`;

export const Adress = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.mainDark};
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
  position: relative;

  svg {
    font-size: 1.5rem;
    fill: ${({ theme }) => theme.medium};
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
`;
