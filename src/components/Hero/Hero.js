import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button.styled";

const StyledHero = styled.div`
  color: white;
  position: relative;

  b {
    color: ${({ theme }) => theme.special};
  }

  ${Button} {
    position: relative;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <div>
        <h4>Welcome!</h4>
        <h1>
          My name is <b>Peter</b> and i am Junior <b>Frontend</b> Developer
        </h1>
      </div>
      <Button>About me</Button>
    </StyledHero>
  );
}

export default Hero;
