import styled from "styled-components";

export const StyledDrawer = styled.aside`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% - 64px);
  overflow-y: scroll;
  z-index: 8;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.secondaryDark};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: 500ms ease-out all;
  box-shadow: -5px 0px 20px 5px rgba(0, 0, 0, 0.3);

  @media only screen and (min-width: 576px) {
    width: 80%;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.mainDark};
  opacity: 0.8;
  height: 100%;
  width: ${({ open }) => (open ? "100%" : 0)};
  z-index: 7;
  transition: 500ms ease-out all;
`;

export const DrawerContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.08rem;
    background: ${({ theme }) => theme.medium};
    opacity: 0.5;
  }
`;

export const BackButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  margin-right: 1.5rem;

  svg {
    font-size: 1.3rem;
  }

  &:hover svg {
    stroke: ${({ theme }) => theme.special};
  }
`;

export const BackAnchor = styled.a`
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.special};
  }
`;

export const TextDivider = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.medium};
  margin: 0.5rem 0;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.special};
  margin-bottom: 1rem;
`;

export const ShortDescription = styled.p`
  margin-bottom: 0.5rem;
`;

export const LongDescription = styled.div`
  line-height: 1.5rem;
  font-size: 0.8rem;

  p {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.special};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  em {
    color: ${({ theme }) => theme.special};
    font-weight: 500;
  }
`;

export const Technologies = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

export const Technology = styled.li`
  padding: 0.2rem 0.5rem;
  margin: 0.4rem;
  background: ${({ theme }) => theme.medium};
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;

    &:first-of-type {
      margin-right: 4rem;
    }

    &:hover {
      transform: scale(1.2);
    }

    &:hover svg {
      stroke: ${({ theme }) => theme.special};
    }
    @media only screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 992px) {
    flex-direction: column;
  }
`;

export const Carousell = styled.div`
  width: 100%;
  min-height: 150px;
  max-height: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(50%) brightness(50%);
    transition: 500ms ease all;

    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
    }

    &:hover {
      z-index: 1;
      filter: grayscale(0%) brightness(100%);
    }

    &:nth-child(1) {
      clip-path: polygon(0 0, 40% 0, 20% 100%, 0% 100%);

      &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }

    &:nth-child(2) {
      clip-path: polygon(90% 0, 40% 0, 20% 100%, 60% 100%);
      &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }

    &:nth-child(3) {
      clip-path: polygon(90% 0, 100% 0, 100% 100%, 60% 100%);
      &:hover {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }
  }

  @media only screen and (min-width: 576px) {
    min-height: 200px;
  }

  @media only screen and (min-width: 992px) {
    min-height: 250px;
  }
`;
