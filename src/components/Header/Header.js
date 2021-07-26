import React from "react";
import IconButton from "../IconButton/IconButton";
import { StyledHeader, Wrapper, Welcome, Introduction } from "./Header.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";

function Header() {
  return (
    <StyledHeader name="header">
      <Wrapper as="header">
        <Welcome>Hi 👋, my name is</Welcome>
        <Introduction>
          <h1>Piotr Bątor</h1>
          <h2>Junior Frontend Developer &amp; Graphic Designer</h2>
        </Introduction>
        <Link to="about" smooth={true}>
          <IconButton text="About me" icon={<FiArrowRight />} />
        </Link>
      </Wrapper>
      <SocialMediaLinks />
      <ParticlesBackground />
    </StyledHeader>
  );
}

export default Header;
