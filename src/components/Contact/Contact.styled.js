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
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 300ms linear;

  &:hover a svg {
    fill: ${({ theme }) => theme.secondaryDark};
  }

  a {
    text-decoration: none;
  }

  svg {
    transition: 300ms linear;
    font-size: 1rem;
    margin: auto;
    fill: ${({ theme }) => theme.mainDark};
  }
`;

export const Adress = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.mainDark};
`;

export const Socials = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;
  padding: 1rem 0;
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

export const ScrollTop = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: ${({ theme }) => theme.mainDark};
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    cursor: pointer;
    display: block;
  }

  svg {
    fill: ${({ theme }) => theme.special};
    font-size: 2rem;
  }
`;
