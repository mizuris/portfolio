import React, { useEffect } from "react";
import IconButton from "../IconButton/IconButton";
import { StyledHeader, Wrapper, Welcome, Introduction } from "./Header.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import { Link } from "react-scroll";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <StyledHeader name="header">
      <Wrapper as="header">
        <Welcome data-aos="fade-right">Hi 👋, my name is</Welcome>
        <Introduction data-aos="fade-right" data-aos-delay="600">
          <h1>Piotr Bątor</h1>
          <h2>Junior Frontend Developer &amp; Graphics Designer</h2>
        </Introduction>
        <Link to="projects" smooth={true}>
          <IconButton
            data-aos="fade-right"
            data-aos-delay="1200"
            text="Check out my work"
            icon={<FiArrowRight />}
          />
        </Link>
        <Link to="about" smooth={true}>
          <IconButton
            data-aos="fade-right"
            data-aos-delay="1800"
            text="About me"
            icon={<FiArrowRight />}
          />
        </Link>
      </Wrapper>
      <SocialMediaLinks />
      <ParticlesBackground />
    </StyledHeader>
  );
}

export default Header;
