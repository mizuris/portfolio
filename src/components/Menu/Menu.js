import React from "react";
import { StyledMenu } from "./Menu.styled";
import SocialVertical from "../SocialMediaLinks/SocialMediaLinks";

function Menu({ open }) {
  return (
    <StyledMenu open={open}>
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
      <SocialVertical />
    </StyledMenu>
  );
}

export default Menu;
