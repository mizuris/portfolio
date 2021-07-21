import React from "react";
import { StyledMenu } from "./Menu.styled";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

function Menu({ open }) {
  return (
    <StyledMenu aria-label="Navigation links" open={open}>
      <a data-link="Home" href="#!">
        Home
      </a>
      <a data-link="About me" href="#!">
        About me
      </a>
      <a data-link="Skills" href="#!">
        Skills
      </a>
      <a data-link="Projects" href="#!">
        Projects
      </a>
      <a data-link="Contact" href="#!">
        Contact
      </a>
      <SocialMediaLinks />
    </StyledMenu>
  );
}

export default Menu;
