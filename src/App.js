import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Section } from "./components/Styled/styled";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const StyledApp = styled.main`
  position: relative;
  width: 100%;
  z-index: 1;
`;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!drawerOpen) {
      document.body.style.overflow = "visible";
    }
  }, [drawerOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!menuOpen) {
      document.body.style.overflow = "visible";
    }
  }, [menuOpen]);

  return (
    <StyledApp>
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <Header />
      <Section flex centered data-section="Bio">
        <AboutMe />
      </Section>
      <Section data-section="Projects">
        <Projects drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </Section>
      <Contact />
    </StyledApp>
  );
}

export default App;
