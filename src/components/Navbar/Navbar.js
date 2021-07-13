import React, { useState } from "react";
import { StyledNav } from "./Navbar.styled";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Logo withText />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </StyledNav>
  );
}

export default Navbar;
