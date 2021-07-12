import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Logo from "./Logo";
import Menu from "./Menu";

const NavWrapper = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 0.5rem);
  padding: 2rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavWrapper>
      <Logo withText />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </NavWrapper>
  );
}

export default Navbar;
