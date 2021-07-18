import React from "react";
import { Button } from "../Styled/styled";
import {
  StyledHeader,
  Wrapper,
  Welcome,
  Introduction,
  Portrait,
  ScrollDown,
} from "./Header.styled";
import { LinksList } from "../SocialMediaLinks/SocialMediaLinks.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import person from "../../assets/images/person.png";

function Header() {
  return (
    <StyledHeader>
      <Wrapper as="header">
        <Welcome>
          <span>Hi!</span> My name is...
        </Welcome>
        <Introduction>
          <h1>Piotr Bątor</h1>
          <h2>Junior Frontend Developer</h2>
        </Introduction>
        <Button>Who am I?</Button>
        <Button>My work</Button>
      </Wrapper>
      <Portrait>
        <div />
        <img src={person} alt="person" />
      </Portrait>
      <LinksList aside>
        <SocialMediaLinks />
      </LinksList>
      <ScrollDown />
    </StyledHeader>
  );
}

export default Header;
