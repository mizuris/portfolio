import React from "react";
import { StyledMenu } from "./Menu.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { Link } from "react-scroll";

function Menu({ open, setOpen }) {
  const closeMenu = () => setOpen(false);

  return (
    <StyledMenu aria-label="Navigation links" open={open}>
      <Link
        onClick={closeMenu}
        to="header"
        smooth={true}
        delay={300}
        data-link="Home"
      >
        Home
      </Link>
      <Link
        onClick={closeMenu}
        to="about"
        smooth={true}
        delay={300}
        data-link="About me"
        offset={-75}
      >
        About me
      </Link>
      <Link
        onClick={closeMenu}
        to="projects"
        smooth={true}
        delay={300}
        data-link="Projects"
        offset={-75}
      >
        Projects
      </Link>
      <Link
        onClick={closeMenu}
        to="contact"
        smooth={true}
        delay={300}
        data-link="Contact"
        offset={-75}
      >
        Contact
      </Link>
      <SocialMediaLinks />
    </StyledMenu>
  );
}

export default Menu;
