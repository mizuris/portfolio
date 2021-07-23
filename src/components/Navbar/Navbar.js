import React, { useState, useEffect } from "react";
import { StyledNav } from "./Navbar.styled";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function Navbar({ open, setOpen }) {
  // const [open, setOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 500) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    });
  }, []);

  return (
    <StyledNav isTransparent={isTransparent}>
      <Logo withText />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </StyledNav>
  );
}

export default Navbar;
