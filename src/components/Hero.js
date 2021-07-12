import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../styled/Button.styled";

const bouncy = keyframes`
    0% {top:0em}
     40%{top:0em}
     43%{top:-0.7em}
     46%{top:0em}
     48%{top:-0.2em}
     50%{top:0em}
     100%{top:0em;}
`;

const StyledHero = styled.div`
  color: white;
  position: relative;

  b {
    color: ${({ theme }) => theme.special};
  }

  ${Button} {
    position: relative;
    animation: ${bouncy} 5s infinite linear;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <div>
        <h1>Welcome!</h1>
        <p>
          My name is <b>Peter</b> and i am Jr. <b>Frontend</b> Developer
        </p>
      </div>
      <Button>About me</Button>
    </StyledHero>
  );
}

export default Hero;
