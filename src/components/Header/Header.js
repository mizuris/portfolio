import React from "react";
import IconButton from "../IconButton/IconButton";
import { StyledHeader, Wrapper, Welcome, Introduction } from "./Header.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import { FiArrowRight } from "react-icons/fi";

function Header() {
  return (
    <StyledHeader>
      <Wrapper as="header">
        <Welcome>Hi 👋, my name is</Welcome>
        <Introduction>
          <h1>Piotr Bątor</h1>
          <h2>Junior Frontend Developer &amp; Graphics Designer</h2>
        </Introduction>
        <IconButton text="Check out my work" icon={<FiArrowRight />} />
      </Wrapper>
      <SocialMediaLinks />
      <ParticlesBackground />
    </StyledHeader>
  );
}

export default Header;
