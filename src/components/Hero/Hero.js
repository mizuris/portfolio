import React from "react";
import { Button } from "../Button/Button.styled";
import {
  StyledHero,
  Wrapper,
  Welcome,
  Introduction,
  Portrait,
  ScrollDown,
} from "./Hero.styled";
import person from "../../assets/images/person.png";
import { LinksList } from "../SocialMediaLinks/SocialMediaLinks.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

function Hero() {
  return (
    <StyledHero>
      <Wrapper>
        <Welcome>
          <span>Hi!</span> My name is...
        </Welcome>
        <Introduction>
          <h1>Piotr Bątor</h1>
          <h2>Junior Frontend Developer</h2>
        </Introduction>
        <Button bold>Who am I?</Button>
        <Button bold>My work</Button>
      </Wrapper>
      <Portrait>
        <div />
        <img src={person} alt="person" />
      </Portrait>{" "}
      <LinksList aside>
        <SocialMediaLinks />
      </LinksList>
      <ScrollDown />
    </StyledHero>
  );
}

export default Hero;
